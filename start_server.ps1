Add-Type -AssemblyName System.Web
$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "Aura Market server running at http://localhost:$port/"
    Write-Host "Press Ctrl+C in terminal to stop the server."
} catch {
    Write-Error "Failed to start listener on port $port. Is it already in use?"
    exit
}

# Keep server running and listening
while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        # Clean URL query strings
        $rawUrl = $request.RawUrl.Split('?')[0]
        if ($rawUrl -eq "/") {
            $rawUrl = "/index.html"
        }
        
        # Decode URL-encoded characters (like spaces)
        $rawUrl = [System.Web.HttpUtility]::UrlDecode($rawUrl)
        
        # Resolve file path
        # Normalize slashes for Windows path
        $cleanUrl = $rawUrl.Replace("/", "\").TrimStart("\")
        $localPath = Join-Path (Get-Location) $cleanUrl

        if (Test-Path $localPath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            
            # Match Content-Type mime types
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            $mime = "text/plain"
            if ($ext -eq ".html") { $mime = "text/html; charset=utf-8" }
            elseif ($ext -eq ".css") { $mime = "text/css" }
            elseif ($ext -eq ".js") { $mime = "text/javascript; charset=utf-8" }
            elseif ($ext -eq ".png") { $mime = "image/png" }
            elseif ($ext -eq ".jpg" -or $ext -eq ".jpeg") { $mime = "image/jpeg" }
            elseif ($ext -eq ".svg") { $mime = "image/svg+xml" }
            elseif ($ext -eq ".ico") { $mime = "image/x-icon" }
            
            $response.ContentType = $mime
            $response.ContentLength64 = $bytes.Length
            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
        } else {
            $response.StatusCode = 404
            $msg = "404 Not Found: File not found - $rawUrl"
            $bytes = [System.Text.Encoding]::UTF8.GetBytes($msg)
            $response.ContentType = "text/plain; charset=utf-8"
            $response.ContentLength64 = $bytes.Length
            if ($request.HttpMethod -ne "HEAD") {
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
        }
        $response.Close()
    } catch {
        # Handle exceptions gracefully
        Write-Host "Error handling request: $_"
        if ($response) {
            try { $response.Close() } catch {}
        }
    }
}
