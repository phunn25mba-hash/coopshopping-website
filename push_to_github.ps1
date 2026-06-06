# Auto-push script for Co.opshopping project to GitHub
Write-Host "=============================================" -ForegroundColor Green
Write-Host "   CO.OPSHOPPING GITHUB AUTO-DEPLOYMENT" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green

# 1. Check if git is installed
$gitCheck = Get-Command git -ErrorAction SilentlyContinue
if (!$gitCheck) {
    Write-Host "[ERROR] Git is not installed on your system. Please install Git from: https://git-scm.com/" -ForegroundColor Red
    Write-Host "After installing Git, please restart your terminal and run this script again." -ForegroundColor Yellow
    Exit
}

# 2. Check if Git is initialized
if (!(Test-Path .git)) {
    Write-Host "[1/4] Initializing Git repository..." -ForegroundColor Cyan
    git init
    git branch -M main
} else {
    Write-Host "[1/4] Git repository already initialized." -ForegroundColor Cyan
}

# 3. Create a basic .gitignore file
if (!(Test-Path .gitignore)) {
    Write-Host "Creating .gitignore..." -ForegroundColor Gray
    Set-Content -Path .gitignore -Value "*.log`n.DS_Store`nThumbs.db`n.idea/`n.vscode/"
}

# 4. Stage all files
Write-Host "[2/4] Staging project files..." -ForegroundColor Cyan
git add .

# 5. Commit changes
Write-Host "[3/4] Committing changes..." -ForegroundColor Cyan
git commit -m "Initialize Co.opshopping - Premium Fresh Food & FMCG E-commerce store"

# 6. Ask for GitHub Remote Repo URL
Write-Host "---------------------------------------------"
Write-Host "To push the code, you need to create a new EMPTY repository on GitHub first."
Write-Host "Go to: https://github.com/new" -ForegroundColor Gray
Write-Host "Name it and keep it public or private, then copy the Repository URL." -ForegroundColor Gray
Write-Host ""
Write-Host "Please paste your GitHub repository URL below" -ForegroundColor Yellow
Write-Host "(e.g., https://github.com/username/repository-name.git):" -ForegroundColor Yellow
$repoUrl = Read-Host "Repository URL"

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    Write-Host "[WARNING] Repository URL cannot be empty. Aborting push process." -ForegroundColor Red
    Exit
}

# 7. Set Remote Origin
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    git remote set-url origin $repoUrl
} else {
    git remote add origin $repoUrl
}

# 8. Push to GitHub main branch
Write-Host "[4/4] Pushing code to GitHub (main branch)..." -ForegroundColor Cyan
Write-Host "NOTE: A browser popup or login prompt may appear. Please log in to authorize Git to push." -ForegroundColor Yellow

git push -u origin main -f

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n[SUCCESS] Successfully pushed Co.opshopping project to GitHub!" -ForegroundColor Green
    Write-Host "View your code on GitHub here: $repoUrl" -ForegroundColor Green
} else {
    Write-Host "`n[ERROR] Failed to push to GitHub. Please check your network connection, Git login credentials, and repository URL." -ForegroundColor Red
}
