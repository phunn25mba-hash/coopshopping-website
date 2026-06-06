// Aura Market E-Commerce Controller

// 1. PRODUCT DATABASE
// 1. PRODUCT DATABASE
const products = [
    {
        id: 1,
        name: "Thịt Thăn Bò Mỹ Premium (USDA Choice)",
        price: 320000,
        oldPrice: 380000,
        unit: "Khay 500g",
        category: "meat",
        image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=400&q=80",
        badge: "Bán chạy",
        badgeType: "sale",
        flashSale: true,
        flashPrice: 269000,
        soldQty: 18,
        totalQty: 30
    },
    {
        id: 2,
        name: "Dâu Tây Đà Lạt Hữu Cơ Chuẩn VietGAP",
        price: 135000,
        oldPrice: 160000,
        unit: "Hộp 250g",
        category: "fruit",
        image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?auto=format&fit=crop&w=400&q=80",
        badge: "Mới",
        badgeType: "fresh",
        flashSale: true,
        flashPrice: 99000,
        soldQty: 24,
        totalQty: 40
    },
    {
        id: 3,
        name: "Cam Sành Bến Tre Mọng Nước Tự Nhiên",
        price: 35000,
        oldPrice: null,
        unit: "Túi 1kg",
        category: "fruit",
        image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=400&q=80",
        badge: "Tươi ngon",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 4,
        name: "Mì Ý Hữu Cơ Spaghettini De Cecco",
        price: 68000,
        oldPrice: 78000,
        unit: "Gói 500g",
        category: "packaged",
        image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=400&q=80",
        badge: "-12%",
        badgeType: "sale",
        flashSale: false
    },
    {
        id: 5,
        name: "Hạt Điều Rang Muối Vỏ Lụa Co.opshopping Organic",
        price: 145000,
        oldPrice: null,
        unit: "Hộp 350g",
        category: "snacks",
        image: "https://images.unsplash.com/photo-1508061461508-cb18c242f556?auto=format&fit=crop&w=400&q=80",
        badge: "Độc quyền",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 6,
        name: "Sữa Tươi Nguyên Chất Tiệt Trùng Horizon Organic",
        price: 62000,
        oldPrice: null,
        unit: "Hộp 946ml",
        category: "beverage",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80",
        badge: "Bán chạy",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 7,
        name: "Nước Ép Lựu Đỏ Nguyên Chất Georgia Premium",
        price: 98000,
        oldPrice: 120000,
        unit: "Chai 1L",
        category: "drink",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=400&q=80",
        badge: "-18%",
        badgeType: "sale",
        flashSale: true,
        flashPrice: 59000,
        soldQty: 35,
        totalQty: 50
    },
    {
        id: 8,
        name: "Bia Thủ Công Jasmine IPA Heart of Darkness",
        price: 52000,
        oldPrice: null,
        unit: "Lon 330ml",
        category: "drink",
        image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=400&q=80",
        badge: "Cực hot",
        badgeType: "sale",
        flashSale: false
    },
    {
        id: 9,
        name: "Kem Sữa Chua Trái Cây Mövenpick Premium",
        price: 48000,
        oldPrice: 60000,
        unit: "Hũ 100g",
        category: "yogurt",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80",
        badge: "-20%",
        badgeType: "sale",
        flashSale: true,
        flashPrice: 38000,
        soldQty: 14,
        totalQty: 30
    },
    {
        id: 10,
        name: "Bánh Mì Hoa Cúc Harrys Brioche Pháp",
        price: 135000,
        oldPrice: null,
        unit: "Ổ 500g",
        category: "bakery",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
        badge: "Thơm ngon",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 11,
        name: "Nước Rửa Chén Sinh Học Tinh Dầu Quế Co.opshopping",
        price: 75000,
        oldPrice: 90000,
        unit: "Can 1.2L",
        category: "household",
        image: "https://images.unsplash.com/photo-1622060873536-a67bcfc6d482?auto=format&fit=crop&w=400&q=80",
        badge: "Sinh học",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 12,
        name: "Sữa Tắm Thảo Mộc Đậm Đặc Sả Chanh & Bạc Hà",
        price: 125000,
        oldPrice: 150000,
        unit: "Chai 500ml",
        category: "personalcare",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
        badge: "Organic",
        badgeType: "fresh",
        flashSale: true,
        flashPrice: 99000,
        soldQty: 5,
        totalQty: 15
    },
    {
        id: 13,
        name: "Xoài Cát Hòa Lộc Chín Cây Loại 1",
        price: 85000,
        oldPrice: 110000,
        unit: "Túi 1kg",
        category: "fruit",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80",
        badge: "Đặc sản",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 14,
        name: "Xà Lách Thuỷ Canh Mỹ Tươi Ngon",
        price: 32000,
        oldPrice: null,
        unit: "Cây 250g",
        category: "fresh",
        image: "https://images.unsplash.com/photo-1556801712-76c8eb07bbc9?auto=format&fit=crop&w=400&q=80",
        badge: "Fresh",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 15,
        name: "Cà Chua Beef Đà Lạt Organic",
        price: 28000,
        oldPrice: 35000,
        unit: "Khay 500g",
        category: "fresh",
        image: "https://images.unsplash.com/photo-1595855759920-86582396756a?auto=format&fit=crop&w=400&q=80",
        badge: "-20%",
        badgeType: "sale",
        flashSale: false
    },
    {
        id: 16,
        name: "Súp Lơ Xanh Baby Xuất Khẩu",
        price: 45000,
        oldPrice: null,
        unit: "Gói 300g",
        category: "fresh",
        image: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&w=400&q=80",
        badge: "Chuẩn VietGAP",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 17,
        name: "Phi Lê Cá Hồi Nauy Tươi Cao Cấp",
        price: 195000,
        oldPrice: 220000,
        unit: "Khay 250g",
        category: "meat",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80",
        badge: "Bán chạy",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 18,
        name: "Trứng Gà Ác Hữu Cơ Ba Huân",
        price: 42000,
        oldPrice: null,
        unit: "Hộp 10 quả",
        category: "meat",
        image: "https://images.unsplash.com/photo-1516448424440-9dbca97779c1?auto=format&fit=crop&w=400&q=80",
        badge: "Giàu dinh dưỡng",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 19,
        name: "Sữa Chua Nếp Cẩm Ba Vì Truyền Thống",
        price: 12000,
        oldPrice: 15000,
        unit: "Hũ 120g",
        category: "yogurt",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80",
        badge: "-20%",
        badgeType: "sale",
        flashSale: false
    },
    {
        id: 20,
        name: "Kem Vani Haagen-Dazs Nhập Khẩu Pháp",
        price: 85000,
        oldPrice: null,
        unit: "Hũ 100ml",
        category: "yogurt",
        image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=400&q=80",
        badge: "Premium",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 21,
        name: "Bơ Lạt Anchor Nguyên Chất",
        price: 72000,
        oldPrice: 85000,
        unit: "Khối 227g",
        category: "beverage",
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=400&q=80",
        badge: "Nhập khẩu",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 22,
        name: "Phô Mai Lát Cheddar President Thơm Ngậy",
        price: 65000,
        oldPrice: null,
        unit: "Gói 200g",
        category: "beverage",
        image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&w=400&q=80",
        badge: "Ăn liền",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 23,
        name: "Phở Ăn Liền Vifon Hoàng Gia Cao Cấp",
        price: 22000,
        oldPrice: 28000,
        unit: "Gói 120g",
        category: "packaged",
        image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=400&q=80",
        badge: "Có thịt thật",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 24,
        name: "Bún Tươi Sấy Khô Co.op Organic",
        price: 25000,
        oldPrice: null,
        unit: "Gói 400g",
        category: "packaged",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80",
        badge: "Organic",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 25,
        name: "Sủi Cảo Nhân Tôm Thịt CJ Cầu Tre",
        price: 65000,
        oldPrice: 80000,
        unit: "Gói 400g",
        category: "frozen",
        image: "https://images.unsplash.com/photo-1496116211227-7cf39588bf1e?auto=format&fit=crop&w=400&q=80",
        badge: "Giảm 18%",
        badgeType: "sale",
        flashSale: false
    },
    {
        id: 26,
        name: "Chả Giò Đặc Biệt Thịt & Tôm Cholimex",
        price: 48000,
        oldPrice: null,
        unit: "Gói 500g",
        category: "frozen",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80",
        badge: "Giòn rụm",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 27,
        name: "Khoai Tây Chiên Cắt Sợi McCain Bỉ",
        price: 85000,
        oldPrice: 100000,
        unit: "Túi 1kg",
        category: "frozen",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=400&q=80",
        badge: "Tiện lợi",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 28,
        name: "Khoai Tây Chiên Lay's Vị Tự Nhiên Classic",
        price: 22000,
        oldPrice: null,
        unit: "Gói 95g",
        category: "snacks",
        image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=400&q=80",
        badge: "Ăn vặt",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 29,
        name: "Kẹo Dẻo Haribo Goldbears Hương Trái Cây",
        price: 35000,
        oldPrice: 42000,
        unit: "Gói 80g",
        category: "snacks",
        image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=400&q=80",
        badge: "Trẻ em yêu thích",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 30,
        name: "Ngũ Cốc Ăn Sáng Giàu Dinh Dưỡng Kellogg's Corn Flakes",
        price: 78000,
        oldPrice: 92000,
        unit: "Hộp 275g",
        category: "bakery",
        image: "https://images.unsplash.com/photo-1521485950395-bcfb507d7f18?auto=format&fit=crop&w=400&q=80",
        badge: "Bữa sáng",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 31,
        name: "Bánh Sừng Bò Butter Croissant Thơm Béo",
        price: 18000,
        oldPrice: null,
        unit: "Cái 60g",
        category: "bakery",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80",
        badge: "Bánh tươi",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 32,
        name: "Nước Mắm Cá Cơm Phú Quốc Thuận Phát",
        price: 85000,
        oldPrice: null,
        unit: "Chai 620ml",
        category: "condiment",
        image: "https://images.unsplash.com/photo-1589135306090-e555aa88bcca?auto=format&fit=crop&w=400&q=80",
        badge: "40 độ đạm",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 33,
        name: "Hạt Nêm Từ Thịt Thăn & Xương Ống Knorr",
        price: 58000,
        oldPrice: 68000,
        unit: "Gói 900g",
        category: "condiment",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
        badge: "Tiết kiệm",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 34,
        name: "Tương Cà Chua Heinz Tomato Ketchup",
        price: 42000,
        oldPrice: null,
        unit: "Chai 300g",
        category: "condiment",
        image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd46f?auto=format&fit=crop&w=400&q=80",
        badge: "Heinz Mỹ",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 35,
        name: "Nước Ngọt Coca-Cola Vị Nguyên Bản Ít Đường",
        price: 10000,
        oldPrice: 12000,
        unit: "Lon 320ml",
        category: "drink",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80",
        badge: "Giải khát",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 36,
        name: "Nước Lau Sàn Hương Hoa Thiên Nhiên Sunlight",
        price: 82000,
        oldPrice: 95000,
        unit: "Can 2kg",
        category: "household",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=400&q=80",
        badge: "Thơm lâu",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 37,
        name: "Khăn Giấy Rút Lụa Cao Cấp Silkwell",
        price: 28000,
        oldPrice: null,
        unit: "Gói 200 tờ",
        category: "household",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80",
        badge: "Mềm mịn",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 38,
        name: "Dầu Gội Thảo Dược Đen Tóc Ngăn Gãy Rụng Aura",
        price: 185000,
        oldPrice: 220000,
        unit: "Chai 300ml",
        category: "personalcare",
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80",
        badge: "Sinh học",
        badgeType: "fresh",
        flashSale: false
    },
    {
        id: 39,
        name: "Kem Đánh Răng Sensodyne Phục Hồi Toàn Diện",
        price: 68000,
        oldPrice: 80000,
        unit: "Tuýp 100g",
        category: "personalcare",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80",
        badge: "Chống ê buốt",
        badgeType: "fresh",
        flashSale: false
    }
];

// 2. STATE MANAGEMENT
let cart = [];
let memberPoints = localStorage.getItem('coop_member_points') !== null ? parseInt(localStorage.getItem('coop_member_points')) : 120;
let useLoyaltyPoints = false;
let appliedCoupon = null; // Can be 'AURA10' (10% off) or 'FREESHIP' (0đ shipping)
let currentCategory = 'all';
let searchKeyword = '';

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    initTheme();
    initHeader();
    initMobileMenu();
    initCartDrawer();
    initProductFilter();
    initSearch();
    initSearchAutocomplete();
    initDeliverySelection();
    initCheckoutForm();
    initAddressSelector();
    initFlashCountdown();
    initCouponSuggestions();
    initOrderHistory();
    renderFlashSales();
    renderProducts();
    renderCart();
});

/* ==========================================================================
   THEME SWITCHER
   ========================================================================== */
function initTheme() {
    // Force only light theme and clean up storage
    document.body.classList.remove('dark-theme');
    localStorage.removeItem('theme');
}

/* ==========================================================================
   HEADER ACTIONS
   ========================================================================== */
function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile hamburger
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navMenu.classList.toggle('open');
    });
}

// Simulated shipping address prompt & new modal selector
function initAddressSelector() {
    const addressBtn = document.getElementById('header-address-btn');
    if (!addressBtn) return;

    const modal = document.getElementById('address-modal-overlay');
    const closeBtn = document.getElementById('address-modal-close-btn');
    const form = document.getElementById('address-selector-form');
    
    const citySelect = document.getElementById('addr-city');
    const districtSelect = document.getElementById('addr-district');
    const wardSelect = document.getElementById('addr-ward');
    const detailInput = document.getElementById('addr-detail');
    const gpsToggle = document.getElementById('gps-toggle');

    if (!modal || !closeBtn || !form) return;

    // Load saved address from localStorage
    const savedAddress = localStorage.getItem('coop_delivery_address');
    if (savedAddress) {
        addressBtn.innerHTML = `<i class="fa-solid fa-location-dot"></i> <span>Giao: ${savedAddress}</span>`;
        const checkoutAddress = document.getElementById('address');
        if (checkoutAddress) {
            checkoutAddress.value = savedAddress;
        }
    }

    // Dynamic database of cities, districts, and wards (Đã cập nhật theo đơn vị hành chính mới sau sáp nhập)
    const addressData = {
        HCMC: {
            name: "Thành phố Hồ Chí Minh",
            districts: {
                Q1: {
                    name: "1",
                    wards: ["Phường Sài Gòn", "Phường Tân Định", "Phường Bến Thành", "Phường Cầu Ông Lãnh"]
                },
                Q3: {
                    name: "3",
                    wards: ["Phường Bàn Cờ", "Phường Xuân Hòa", "Phường Nhiêu Lộc"]
                },
                QBT: {
                    name: "Bình Thạnh",
                    wards: ["Phường Gia Định", "Phường Bình Thạnh", "Phường Bình Lợi Trung", "Phường Thạnh Mỹ Tây", "Phường Bình Quới", "Phường 3", "Phường 6", "Phường 15", "Phường 21", "Phường 24"]
                },
                QPN: {
                    name: "Phú Nhuận",
                    wards: ["Phường Đức Nhuận", "Phường Cầu Kiệu", "Phường Phú Nhuận"]
                },
                QGV: {
                    name: "Gò Vấp",
                    wards: ["Phường Hạnh Thông", "Phường An Nhơn", "Phường Gò Vấp", "Phường Thông Tây Hội", "Phường An Hội Đông", "Phường An Hội Tây", "Phường 4", "Phường 7", "Phường 9", "Phường 13"]
                }
            }
        },
        Hanoi: {
            name: "Thành phố Hà Nội",
            districts: {
                HK: {
                    name: "Hoàn Kiếm",
                    wards: ["Phường Hàng Đào", "Phường Hàng Bạc", "Phường Tràng Tiền", "Phường Hàng Trống"]
                },
                BD: {
                    name: "Ba Đình",
                    wards: ["Phường Quán Thánh", "Phường Kim Mã", "Phường Điện Biên", "Phường Thành Công"]
                },
                DD: {
                    name: "Đống Đa",
                    wards: ["Phường Cát Linh", "Phường Láng Hạ", "Phường Quang Trung", "Phường Khương Thượng"]
                },
                CG: {
                    name: "Cầu Giấy",
                    wards: ["Phường Dịch Vọng", "Phường Quan Hoa", "Phường Nghĩa Tân", "Phường Mai Dịch"]
                }
            }
        },
        Danang: {
            name: "Thành phố Đà Nẵng",
            districts: {
                HC: {
                    name: "Hải Châu",
                    wards: ["Phường Thuận Phước", "Phường Thạch Thang", "Phường Hải Châu I", "Phường Phước Ninh"]
                },
                TK: {
                    name: "Thanh Khê",
                    wards: ["Phường Vĩnh Trung", "Phường Tân Chính", "Phường Chính Gián", "Phường An Khê"]
                },
                ST: {
                    name: "Sơn Trà",
                    wards: ["Phường An Hải Bắc", "Phường An Hải Tây", "Phường Thọ Quang", "Phường Mân Thái"]
                }
            }
        }
    };

    // Show modal
    addressBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // lock scroll
    });

    // Close modal
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // unlock scroll
    };

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Populate Districts when City changes
    citySelect.addEventListener('change', () => {
        const cityKey = citySelect.value;
        districtSelect.innerHTML = '<option value="" disabled selected>Chọn quận/ huyện</option>';
        wardSelect.innerHTML = '<option value="" disabled selected>Chọn phường/ xã</option>';
        wardSelect.disabled = true;

        if (addressData[cityKey]) {
            districtSelect.disabled = false;
            const districts = addressData[cityKey].districts;
            for (const key in districts) {
                const opt = document.createElement('option');
                opt.value = key;
                opt.textContent = districts[key].name;
                districtSelect.appendChild(opt);
            }
        } else {
            districtSelect.disabled = true;
        }
    });

    // Populate Wards when District changes
    districtSelect.addEventListener('change', () => {
        const cityKey = citySelect.value;
        const districtKey = districtSelect.value;
        wardSelect.innerHTML = '<option value="" disabled selected>Chọn phường/ xã</option>';

        if (addressData[cityKey] && addressData[cityKey].districts[districtKey]) {
            wardSelect.disabled = false;
            const wards = addressData[cityKey].districts[districtKey].wards;
            wards.forEach(ward => {
                const opt = document.createElement('option');
                opt.value = ward;
                opt.textContent = ward;
                wardSelect.appendChild(opt);
            });
        } else {
            wardSelect.disabled = true;
        }
    });

    // GPS Geolocation Simulation
    gpsToggle.addEventListener('change', () => {
        if (gpsToggle.checked) {
            showToast("Đang lấy vị trí hiện tại của bạn...");
            
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        // Success - fill with simulated reverse-geocoded local address
                        setTimeout(() => {
                            citySelect.value = "HCMC";
                            citySelect.dispatchEvent(new Event('change'));
                            
                            districtSelect.value = "QBT";
                            districtSelect.dispatchEvent(new Event('change'));
                            
                            wardSelect.value = "Phường Gia Định";
                            detailInput.value = "131 Điện Biên Phủ";
                            
                            showToast("Đã bật định vị thành công!");
                        }, 1200);
                    },
                    (error) => {
                        // Error/Denied - fallback to default mock location
                        setTimeout(() => {
                            citySelect.value = "HCMC";
                            citySelect.dispatchEvent(new Event('change'));
                            
                            districtSelect.value = "QBT";
                            districtSelect.dispatchEvent(new Event('change'));
                            
                            wardSelect.value = "Phường Gia Định";
                            detailInput.value = "131 Điện Biên Phủ";
                            
                            showToast("Sử dụng vị trí định sẵn: 131 Điện Biên Phủ, Bình Thạnh");
                        }, 1200);
                    }
                );
            } else {
                // Not supported
                showToast("Định vị không khả dụng, sử dụng địa chỉ mặc định.");
                citySelect.value = "HCMC";
                citySelect.dispatchEvent(new Event('change'));
                districtSelect.value = "QBT";
                districtSelect.dispatchEvent(new Event('change'));
                wardSelect.value = "Phường Gia Định";
                detailInput.value = "131 Điện Biên Phủ";
            }
        } else {
            // Reset inputs
            citySelect.value = "";
            districtSelect.innerHTML = '<option value="" disabled selected>Chọn quận/ huyện</option>';
            districtSelect.disabled = true;
            wardSelect.innerHTML = '<option value="" disabled selected>Chọn phường/ xã</option>';
            wardSelect.disabled = true;
            detailInput.value = "";
        }
    });

    // Handle form confirmation
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const cityKey = citySelect.value;
        const districtKey = districtSelect.value;
        
        const cityName = addressData[cityKey] ? addressData[cityKey].name : '';
        const rawDistrictName = (addressData[cityKey] && addressData[cityKey].districts[districtKey]) 
            ? addressData[cityKey].districts[districtKey].name 
            : '';
        const districtName = (rawDistrictName && !rawDistrictName.startsWith("Quận") && !rawDistrictName.startsWith("Huyện"))
            ? `Quận ${rawDistrictName}`
            : rawDistrictName;
        const wardName = wardSelect.value;
        const detailName = detailInput.value.trim();

        if (!cityName || !districtName || !wardName || !detailName) {
            showToast("Vui lòng nhập đầy đủ thông tin địa chỉ.");
            return;
        }

        const fullAddress = `${detailName}, ${wardName}, ${districtName}, ${cityName}`;
        
        // Update header address label
        addressBtn.innerHTML = `<i class="fa-solid fa-location-dot"></i> <span>Giao: ${fullAddress}</span>`;
        
        // Save to localStorage
        localStorage.setItem('coop_delivery_address', fullAddress);

        // Sync with checkout form address field
        const checkoutAddress = document.getElementById('address');
        if (checkoutAddress) {
            checkoutAddress.value = fullAddress;
            // Trigger label floating (if applicable)
            checkoutAddress.dispatchEvent(new Event('input'));
        }

        // Feedback toast
        showToast("Đã cập nhật địa chỉ giao hàng thành công.");

        // Close modal
        closeModal();
    });
}

/* ==========================================================================
   PRODUCT RENDERING & CATEGORIES FILTER
   ========================================================================== */
function renderProducts() {
    const container = document.getElementById('categories-container');
    if (!container) return;

    container.innerHTML = '';

    const categoryBanners = {
        all: {
            title: "Khuyến Mãi HOT Cực Khủng",
            desc: "Sản phẩm giảm giá đặc biệt sâu, đảm bảo tươi ngon và chất lượng hàng đầu.",
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
        },
        fruit: {
            title: "Thế Giới Trái Cây",
            desc: "Trái cây nhập khẩu chuẩn VietGAP, tươi sạch ngọt lành mỗi ngày.",
            image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=1200&q=80"
        },
        fresh: {
            title: "Rau Củ Quả Tươi Sạch",
            desc: "Rau hữu cơ chuẩn GlobalGAP, thu hoạch mới mỗi sáng sớm.",
            image: "https://images.unsplash.com/photo-1566385101042-1a010c129fa6?auto=format&fit=crop&w=1200&q=80"
        },
        meat: {
            title: "Thịt & Cá & Trứng & Hải Sản",
            desc: "Nguồn đạm cao cấp, an toàn vệ sinh, kiểm dịch nghiêm ngặt.",
            image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=1200&q=80"
        },
        yogurt: {
            title: "Kem & Sữa Chua Trái Cây",
            desc: "Thơm béo, mát lạnh ngọt ngào từ các thương hiệu sữa hàng đầu.",
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80"
        },
        beverage: {
            title: "Sữa & Bơ & Phô Mai Dinh Dưỡng",
            desc: "Bổ sung canxi và chất béo tự nhiên cho cả gia đình.",
            image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&q=80"
        },
        packaged: {
            title: "Mì, Bún & Thực Phẩm Khô Tiện Lợi",
            desc: "Đa dạng các sản phẩm tiện lợi hảo hạng cho bữa ăn nhanh gọn.",
            image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=1200&q=80"
        },
        frozen: {
            title: "Thực Phẩm Đông Mát",
            desc: "Sủi cảo, chả giò giòn tan nhập khẩu thơm ngon.",
            image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
        },
        snacks: {
            title: "Bánh Kẹo & Đồ Ăn Vặt Hấp Dẫn",
            desc: "Món ngon lý tưởng cho mọi buổi xế chiều ngọt ngào đầy phấn khởi.",
            image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?auto=format&fit=crop&w=1200&q=80"
        },
        bakery: {
            title: "Bánh Tươi & Ngũ Cốc Bữa Sáng",
            desc: "Bánh mì brioche thơm nồng, ngũ cốc dinh dưỡng tràn đầy sức sống.",
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80"
        },
        condiment: {
            title: "Gia Vị Đậm Đà Hảo Hạng",
            desc: "Nước mắm cốt nhĩ, hạt nêm từ xương ống thơm ngon tròn vị.",
            image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd46f?auto=format&fit=crop&w=1200&q=80"
        },
        drink: {
            title: "Nước Giải Khát & Đồ Uống Có Cồn",
            desc: "Nước ép nguyên chất, bia thủ công sảng khoái mát lạnh.",
            image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=1200&q=80"
        },
        household: {
            title: "Đồ Dùng Gia Đình Sinh Học",
            desc: "Chăm sóc tổ ấm bằng sản phẩm từ tinh dầu thiên nhiên.",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
        },
        personalcare: {
            title: "Chăm Sóc Cá Nhân Thảo Dược",
            desc: "Sữa tắm, dầu gội organic thảo mộc dịu nhẹ.",
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80"
        }
    };

    const gridPromoBanners = {
        all: {
            badge: "Giá Chấn Động",
            title: "Ưu Đãi Đặc Biệt",
            subtitle: "3 Ngày Cuối Tuần",
            price: "89.000đ",
            productId: 2,
            image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?auto=format&fit=crop&w=400&q=80",
            bg: "linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)",
            titleColor: "#0369A1",
            subColor: "#0284C7"
        },
        fruit: {
            badge: "Giá Chấn Động",
            title: "Dâu Tây Đà Lạt",
            subtitle: "VietGAP Hộp 250g",
            price: "99.000đ",
            productId: 2,
            image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?auto=format&fit=crop&w=400&q=80",
            bg: "linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)",
            titleColor: "#0369A1",
            subColor: "#0284C7"
        },
        fresh: {
            badge: "Hot Deal",
            title: "Súp Lơ Xanh",
            subtitle: "Baby Organic Gói 300g",
            price: "45.000đ",
            productId: 16,
            image: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&w=400&q=80",
            bg: "linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)",
            titleColor: "#0369A1",
            subColor: "#0284C7"
        },
        meat: {
            badge: "Giá Chấn Động",
            title: "Bò Mỹ Premium",
            subtitle: "Thăn Bò USDA Khay 500g",
            price: "269.000đ",
            productId: 1,
            image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=400&q=80",
            bg: "linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)",
            titleColor: "#0369A1",
            subColor: "#0284C7"
        },
        yogurt: {
            badge: "Món Ngon Lẻ",
            title: "Kem Mövenpick",
            subtitle: "Kem Thụy Sĩ Hũ 100g",
            price: "38.000đ",
            productId: 9,
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80",
            bg: "linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)",
            titleColor: "#0369A1",
            subColor: "#0284C7"
        },
        beverage: {
            badge: "Dinh Dưỡng Cao",
            title: "Sữa Horizon",
            subtitle: "Organic Nguyên Chất 946ml",
            price: "62.000đ",
            productId: 6,
            image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80",
            bg: "linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)",
            titleColor: "#0369A1",
            subColor: "#0284C7"
        },
        packaged: {
            badge: "Chuẩn Vị Ý",
            title: "Mì Ý Spaghettini",
            subtitle: "De Cecco Hộp 500g",
            price: "68.000đ",
            productId: 4,
            image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=400&q=80",
            bg: "linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)",
            titleColor: "#0369A1",
            subColor: "#0284C7"
        },
        frozen: {
            badge: "Giảm 18%",
            title: "Sủi Cảo Tôm Thịt",
            subtitle: "CJ Cầu Tre Gói 400g",
            price: "65.000đ",
            productId: 25,
            image: "https://images.unsplash.com/photo-1496116211227-7cf39588bf1e?auto=format&fit=crop&w=400&q=80",
            bg: "linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)",
            titleColor: "#0369A1",
            subColor: "#0284C7"
        },
        snacks: {
            badge: "Giòn Tan",
            title: "Hạt Điều Rang",
            subtitle: "Organic Vỏ Lụa Hộp 350g",
            price: "145.000đ",
            productId: 5,
            image: "https://images.unsplash.com/photo-1508061461508-cb18c242f556?auto=format&fit=crop&w=400&q=80",
            bg: "linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)",
            titleColor: "#0369A1",
            subColor: "#0284C7"
        },
        bakery: {
            badge: "Bánh Tươi",
            title: "Bánh Mì Hoa Cúc",
            subtitle: "Harrys Brioche Ổ 500g",
            price: "135.000đ",
            productId: 10,
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
            bg: "linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)",
            titleColor: "#0369A1",
            subColor: "#0284C7"
        },
        condiment: {
            badge: "Đậm Đà",
            title: "Nước Mắm Phú Quốc",
            subtitle: "Thuận Phát Cốt Nhĩ 620ml",
            price: "85.000đ",
            productId: 32,
            image: "https://images.unsplash.com/photo-1589135306090-e555aa88bcca?auto=format&fit=crop&w=400&q=80",
            bg: "linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)",
            titleColor: "#0369A1",
            subColor: "#0284C7"
        },
        drink: {
            badge: "Cực Đã",
            title: "Bia Thủ Công",
            subtitle: "Jasmine IPA Lon 330ml",
            price: "52.000đ",
            productId: 8,
            image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=400&q=80",
            bg: "linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)",
            titleColor: "#0369A1",
            subColor: "#0284C7"
        },
        household: {
            badge: "Sinh Học",
            title: "Rửa Chén Aura",
            subtitle: "Tinh Dầu Quế Can 1.2L",
            price: "75.000đ",
            productId: 11,
            image: "https://images.unsplash.com/photo-1622060873536-a67bcfc6d482?auto=format&fit=crop&w=400&q=80",
            bg: "linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)",
            titleColor: "#0369A1",
            subColor: "#0284C7"
        },
        personalcare: {
            badge: "Thảo Mộc",
            title: "Sữa Tắm Sả Chanh",
            subtitle: "Chai 500ml Thư Giãn",
            price: "99.000đ",
            productId: 12,
            image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80",
            bg: "linear-gradient(180deg, #F0F9FF 0%, #E0F2FE 100%)",
            titleColor: "#0369A1",
            subColor: "#0284C7"
        }
    };

    // 1. IF THERE IS ACTIVE SEARCH KEYWORD, RENDER A SINGLE DYNAMIC SEARCH RESULTS GRID
    if (searchKeyword.trim() !== '') {
        const filtered = products.filter(p => p.name.toLowerCase().includes(searchKeyword.toLowerCase()));
        
        const searchBlock = document.createElement('div');
        searchBlock.className = 'category-block';
        
        const searchHeader = document.createElement('div');
        searchHeader.className = 'category-header-banner';
        searchHeader.style.backgroundImage = `url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80')`;
        searchHeader.innerHTML = `
            <div class="category-header-banner-content">
                <h2 class="category-header-banner-title">Kết Quả Tìm Kiếm</h2>
                <p class="category-header-banner-desc">Có ${filtered.length} sản phẩm tương ứng với từ khóa "${searchKeyword}"</p>
            </div>
        `;
        searchBlock.appendChild(searchHeader);

        if (filtered.length === 0) {
            const noResults = document.createElement('div');
            noResults.style.textAlign = 'center';
            noResults.style.padding = '4rem 1rem';
            noResults.style.color = 'var(--text-muted)';
            noResults.innerHTML = `
                <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>Không tìm thấy sản phẩm nào phù hợp với yêu cầu của bạn.</p>
            `;
            searchBlock.appendChild(noResults);
        } else {
            const grid = document.createElement('div');
            grid.className = 'products-grid';
            
            filtered.forEach(p => {
                const card = createProductCard(p);
                grid.appendChild(card);
            });
            searchBlock.appendChild(grid);
        }
        
        container.appendChild(searchBlock);
        return;
    }

    // 2. IF NO SEARCH KEYWORD, RENDER STACKED CATEGORIES (Kingfoodmart Style)
    const categoryIds = [
        'all', 'fruit', 'fresh', 'meat', 'yogurt', 'beverage', 'packaged', 
        'frozen', 'snacks', 'bakery', 'condiment', 'drink', 'household', 'personalcare'
    ];

    categoryIds.forEach(catId => {
        let catProducts = [];
        if (catId === 'all') {
            catProducts = products.filter(p => p.oldPrice || p.flashSale);
        } else {
            catProducts = products.filter(p => p.category === catId);
        }

        if (catProducts.length === 0) return;

        const block = document.createElement('section');
        block.className = 'category-block';
        block.id = `category-block-${catId}`;

        const bannerConfig = categoryBanners[catId] || categoryBanners.all;
        const banner = document.createElement('div');
        banner.className = 'category-header-banner';
        banner.style.backgroundImage = `url('${bannerConfig.image}')`;
        banner.innerHTML = `
            <div class="category-header-banner-content">
                <h2 class="category-header-banner-title">${bannerConfig.title}</h2>
                <p class="category-header-banner-desc">${bannerConfig.desc}</p>
            </div>
        `;
        block.appendChild(banner);

        const grid = document.createElement('div');
        grid.className = 'products-grid';

        const promoConfig = gridPromoBanners[catId] || gridPromoBanners.all;
        const promoCard = document.createElement('div');
        promoCard.className = 'grid-promo-banner';
        promoCard.style.background = promoConfig.bg;
        promoCard.style.gridRow = 'span 1';
        promoCard.style.minHeight = 'auto';
        promoCard.style.height = '100%';
        promoCard.innerHTML = `
            <div class="grid-promo-banner-header">
                <span class="grid-promo-banner-badge" style="background: var(--accent-primary);">${promoConfig.badge}</span>
                <h3 class="grid-promo-banner-title" style="color: ${promoConfig.titleColor}; font-size: 1.05rem; margin-top: 0.25rem;">${promoConfig.title}</h3>
                <p class="grid-promo-banner-subtitle" style="color: ${promoConfig.subColor}; font-size: 0.7rem;">${promoConfig.subtitle}</p>
            </div>
            <img src="${promoConfig.image}" alt="${promoConfig.title}" class="grid-promo-banner-image" style="max-height: 120px; margin: 0.5rem 0;">
            <div class="grid-promo-banner-price-box" style="margin-bottom: 0.5rem;">
                <span class="grid-promo-banner-price-label" style="color: ${promoConfig.subColor}; font-size: 0.65rem;">Giá chỉ từ</span>
                <div class="grid-promo-banner-price" style="font-size: 1.5rem; color: #EF4444;">${promoConfig.price}</div>
            </div>
            <button class="grid-promo-banner-btn" onclick="handleAddToCart(event, ${promoConfig.productId})" style="padding: 0.55rem; font-size: 0.75rem; background: var(--accent-primary); box-shadow: 0 4px 10px rgba(56, 189, 248, 0.2);">Đặt Ngay</button>
        `;
        grid.appendChild(promoCard);

        const displayLimit = 11;
        const displayProducts = catProducts.slice(0, displayLimit);

        displayProducts.forEach(p => {
            const card = createProductCard(p);
            grid.appendChild(card);
        });

        block.appendChild(grid);

        const footer = document.createElement('div');
        footer.className = 'category-block-footer';
        footer.innerHTML = `
            <a href="#products-section" class="category-view-all-btn" onclick="alert('Đang chuyển hướng xem tất cả sản phẩm thuộc danh mục ${bannerConfig.title}!')">
                <span>Xem tất cả</span>
                <i class="fa-solid fa-chevron-right"></i>
            </a>
        `;
        block.appendChild(footer);

        container.appendChild(block);
    });
}

function createProductCard(p) {
    const card = document.createElement('div');
    card.classList.add('product-card', 'reveal', 'active');
    
    let discountTagHTML = '';
    let promoBannerHTML = '';
    let savingHTML = '';
    let tagLinkHTML = '';
    
    const isSale = p.oldPrice || p.flashSale;
    const currentPrice = p.flashSale ? p.flashPrice : p.price;
    const originalPrice = p.oldPrice || p.price;
    
    if (isSale && originalPrice > currentPrice) {
        const discountPercent = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
        discountTagHTML = `<span class="product-card-discount-tag">-${discountPercent}%</span>`;
        promoBannerHTML = `<span class="product-card-promo-banner">${p.flashSale ? 'Flash Sale' : 'Giá Chấn Động'}</span>`;
        savingHTML = `<span class="product-card-saving-text">Tiết kiệm ${formatCurrency(originalPrice - currentPrice)}</span>`;
        tagLinkHTML = `<span class="product-card-tag-link">${p.flashSale ? 'Giá sốc có hạn!' : 'Ưu đãi cuối tuần!'}</span>`;
    } else {
        if (p.badge) {
            promoBannerHTML = `<span class="product-card-promo-banner" style="color: #10B981; border-color: rgba(16,185,129,0.2); background: rgba(16,185,129,0.06);">${p.badge}</span>`;
        }
    }
        
    const oldPriceHTML = (isSale && originalPrice > currentPrice)
        ? `<span class="product-price-original" style="font-size:0.75rem; text-decoration:line-through; color:var(--text-muted); margin-left:0.5rem;">${formatCurrency(originalPrice)}</span>` 
        : '';

    card.innerHTML = `
        ${discountTagHTML}
        ${promoBannerHTML}
        <div class="product-image-box" style="margin-top: 1.25rem;">
            <img src="${p.image}" alt="${p.name}" loading="lazy" width="200" height="180">
        </div>
        <div class="product-body" style="padding: 0.75rem 0.5rem 0.5rem 0.5rem;">
            <span class="product-unit-text">${p.unit}</span>
            <h3 class="product-title-text" title="${p.name}" style="font-size:0.85rem; height:2.8em; margin-bottom:0.4rem;">${p.name}</h3>
            ${tagLinkHTML}
            <div class="product-price-box" style="margin-top:0.4rem; margin-bottom:0.4rem; align-items: baseline; flex-wrap: wrap;">
                <span class="product-price-current" style="font-size: 0.95rem; font-weight: 800; color: #EF4444;">${formatCurrency(currentPrice)}</span>
                ${oldPriceHTML}
            </div>
            ${savingHTML}
            <button class="add-to-cart-btn" onclick="handleAddToCart(event, ${p.id})" style="width:100%; display:flex; align-items:center; justify-content:center; gap:0.4rem; font-size:0.85rem; padding:0.55rem; background: var(--accent-light); color: var(--accent-primary); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: var(--border-radius-sm); margin-top: auto; font-weight: 700; transition: all var(--transition-fast);">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>Mua</span>
            </button>
        </div>
    `;
    
    const btn = card.querySelector('.add-to-cart-btn');
    if (btn) {
        btn.addEventListener('mouseover', () => {
            btn.style.background = 'var(--accent-primary)';
            btn.style.color = '#FFFFFF';
        });
        btn.addEventListener('mouseout', () => {
            btn.style.background = 'var(--accent-light)';
            btn.style.color = 'var(--accent-primary)';
        });
    }

    return card;
}

function initProductFilter() {
    const tabs = document.querySelectorAll('.sidebar-menu-item');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            tabs.forEach(btn => btn.classList.remove('active'));
            const clickedBtn = e.currentTarget;
            clickedBtn.classList.add('active');
            
            const catId = clickedBtn.getAttribute('data-category');
            currentCategory = catId;

            // Clear search first to show stacked category sections
            const searchInput = document.getElementById('search-input');
            if (searchInput && searchInput.value.trim() !== '') {
                searchInput.value = '';
                searchKeyword = '';
                renderProducts();
            }

            let targetSection;
            if (catId === 'all') {
                targetSection = document.getElementById('category-block-all');
            } else {
                targetSection = document.getElementById(`category-block-${catId}`);
            }

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    setupScrollSpy();
}

function setupScrollSpy() {
    const sidebarItems = document.querySelectorAll('.sidebar-menu-item');
    const sections = document.querySelectorAll('.category-block');
    if (sidebarItems.length === 0 || sections.length === 0) return;

    window.addEventListener('scroll', () => {
        let currentActiveId = '';
        const scrollPosition = window.scrollY + 180; // 180px offset for header
        
        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
                const idAttr = sec.getAttribute('id');
                if (idAttr) {
                    currentActiveId = idAttr.replace('category-block-', '');
                }
            }
        });

        if (currentActiveId !== '') {
            sidebarItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-category') === currentActiveId) {
                    item.classList.add('active');
                }
            });
        }
    });
}

function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        searchKeyword = e.target.value;
        renderProducts();
    });
}

/* ==========================================================================
   CART SYSTEM OPERATIONS
   ========================================================================== */
function initCartDrawer() {
    const cartToggle = document.getElementById('cart-toggle-btn');
    const cartClose = document.getElementById('cart-close-btn');
    const overlay = document.getElementById('cart-drawer-overlay');
    const drawer = document.getElementById('cart-drawer');

    if (!cartToggle || !cartClose || !overlay || !drawer) return;

    const openDrawer = () => {
        drawer.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    };

    cartToggle.addEventListener('click', openDrawer);
    cartClose.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
}

// Global click wrapper for products adding
window.handleAddToCart = function(eventOrId, optionalId) {
    let event = null;
    let productId = null;

    if (eventOrId && typeof eventOrId === 'object' && (eventOrId.preventDefault || eventOrId.clientX)) {
        event = eventOrId;
        productId = optionalId;
    } else {
        productId = eventOrId;
        event = window.event;
    }

    const item = products.find(p => p.id === productId);
    if (!item) return;

    const existing = cart.find(c => c.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    saveCartToStorage();
    renderCart();
    showToast(`Đã thêm ${item.name} vào giỏ hàng`);

    if (event) {
        animateFlyToCart(event, item.image);
    }
};

window.updateCartQty = function(productId, change) {
    const item = cart.find(c => c.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter(c => c.id !== productId);
    }

    saveCartToStorage();
    renderCart();
};

window.removeCartItem = function(productId) {
    cart = cart.filter(c => c.id !== productId);
    saveCartToStorage();
    renderCart();
};

function renderCart() {
    const listContainer = document.getElementById('cart-items-list');
    const emptyView = document.getElementById('empty-cart-view');
    const summarySection = document.getElementById('cart-summary-calc');
    const footerSection = document.getElementById('cart-footer-actions');
    const counterBadge = document.getElementById('cart-badge');
    const cartTotalHeader = document.getElementById('cart-total-header');
    const checkoutBillItems = document.getElementById('checkout-bill-items');

    if (!listContainer) return;

    // Update Counter badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (counterBadge) {
        counterBadge.textContent = totalItems;
        counterBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    if (cart.length === 0) {
        listContainer.style.display = 'none';
        emptyView.style.display = 'block';
        summarySection.style.display = 'none';
        footerSection.style.display = 'none';
        
        if (cartTotalHeader) {
            cartTotalHeader.textContent = '0đ';
        }
        
        if (checkoutBillItems) {
            checkoutBillItems.innerHTML = '<p style="color: var(--text-muted);">Giỏ hàng đang trống.</p>';
        }
        return;
    }

    // Show cart details
    listContainer.style.display = 'grid';
    emptyView.style.display = 'none';
    summarySection.style.display = 'grid';
    footerSection.style.display = 'block';

    listContainer.innerHTML = '';
    let subtotal = 0;
    let billItemsHTML = '';

    cart.forEach(item => {
        const prod = products.find(p => p.id === item.id);
        if (!prod) return;

        const price = prod.flashSale ? prod.flashPrice : prod.price;
        const itemTotal = price * item.quantity;
        subtotal += itemTotal;

        // Render drawer item row
        const row = document.createElement('div');
        row.classList.add('cart-item');
        row.innerHTML = `
            <div class="cart-item-img">
                <img src="${prod.image}" alt="${prod.name}">
            </div>
            <div class="cart-item-info">
                <h4>${prod.name}</h4>
                <p>${prod.unit} • ${formatCurrency(price)}</p>
                <div class="qty-controls">
                    <button class="qty-btn" onclick="updateCartQty(${prod.id}, -1)">-</button>
                    <span class="qty-number">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateCartQty(${prod.id}, 1)">+</button>
                </div>
            </div>
            <div class="cart-item-right">
                <span class="cart-item-price">${formatCurrency(itemTotal)}</span>
                <button class="cart-item-remove-btn" onclick="removeCartItem(${prod.id})">
                    <i class="fa-solid fa-trash-can"></i> Xóa
                </button>
            </div>
        `;
        listContainer.appendChild(row);

        // Prep bill preview text
        billItemsHTML += `<div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
            <span>${prod.name} (x${item.quantity})</span>
            <span>${formatCurrency(itemTotal)}</span>
        </div>`;
    });

    // 1. CALCULATE LOYALTY & COUPON
    // Shipping: Free if subtotal > 300k, otherwise 25k
    let shippingFee = subtotal >= 300000 ? 0 : 25000;
    let couponDiscount = 0;
    let pointsDiscount = 0;

    // Apply Coupon
    if (appliedCoupon === 'COOP10') {
        couponDiscount = Math.round(subtotal * 0.1); // 10% off
    } else if (appliedCoupon === 'FREESHIP') {
        couponDiscount = shippingFee; // Discount equals shipping fee
    }

    // Apply Loyalty Points (1 point = 1,000đ)
    if (useLoyaltyPoints) {
        const potentialDiscount = memberPoints * 1000;
        // Points discount cannot exceed subtotal after coupon
        pointsDiscount = Math.min(potentialDiscount, subtotal - couponDiscount);
    }

    const finalTotal = Math.max(0, subtotal + shippingFee - couponDiscount - pointsDiscount);
    const potentialPointsEarned = Math.round(finalTotal * 0.01 / 1000); // 1% value in points

    // Update Drawer Calculation UI
    document.getElementById('calc-subtotal').textContent = formatCurrency(subtotal);
    document.getElementById('calc-shipping').textContent = shippingFee === 0 ? "Miễn phí" : formatCurrency(shippingFee);
    
    const couponRow = document.getElementById('calc-coupon-row');
    if (couponDiscount > 0) {
        couponRow.style.display = 'flex';
        document.getElementById('calc-coupon').textContent = `-${formatCurrency(couponDiscount)}`;
    } else {
        couponRow.style.display = 'none';
    }

    const pointsRow = document.getElementById('calc-points-row');
    if (pointsDiscount > 0) {
        pointsRow.style.display = 'flex';
        document.getElementById('calc-points').textContent = `-${formatCurrency(pointsDiscount)}`;
    } else {
        pointsRow.style.display = 'none';
    }

    document.getElementById('calc-total').textContent = formatCurrency(finalTotal);
    if (cartTotalHeader) {
        cartTotalHeader.textContent = formatCurrency(subtotal);
    }
    document.getElementById('earned-points').textContent = potentialPointsEarned;

    // Loyalty points section checkbox
    const pointsCheckbox = document.getElementById('apply-points-cb');
    const availablePointsSpan = document.getElementById('available-points');
    if (availablePointsSpan) {
        availablePointsSpan.textContent = memberPoints;
        document.getElementById('points-value-vn').textContent = formatCurrency(memberPoints * 1000);
    }

    // Update Checkout preview
    if (checkoutBillItems) {
        let billPromoHTML = '';
        if (couponDiscount > 0) {
            billPromoHTML += `<div style="display:flex; justify-content:space-between; margin-bottom:0.4rem; color:#EF4444;">
                <span>Mã giảm giá áp dụng (${appliedCoupon})</span>
                <span>-${formatCurrency(couponDiscount)}</span>
            </div>`;
        }
        if (pointsDiscount > 0) {
            billPromoHTML += `<div style="display:flex; justify-content:space-between; margin-bottom:0.4rem; color:#10B981;">
                <span>Điểm thành viên (${memberPoints} điểm)</span>
                <span>-${formatCurrency(pointsDiscount)}</span>
            </div>`;
        }

        checkoutBillItems.innerHTML = `
            ${billItemsHTML}
            <div style="border-top:1px solid var(--border-color); margin:0.75rem 0; padding-top:0.5rem;">
                <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
                    <span>Tạm tính</span>
                    <span>${formatCurrency(subtotal)}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
                    <span>Phí vận chuyển</span>
                    <span>${shippingFee === 0 ? "Miễn phí" : formatCurrency(shippingFee)}</span>
                </div>
                ${billPromoHTML}
            </div>
            <div class="checkout-bill-header" style="border:none; margin:0; padding:0;">
                <span>Tổng số tiền</span>
                <span class="checkout-bill-total">${formatCurrency(finalTotal)}</span>
            </div>
        `;
    }
}

// LocalStorage helpers
function saveCartToStorage() {
    localStorage.setItem('coop_cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const saved = localStorage.getItem('coop_cart');
    if (saved) {
        try {
            cart = JSON.parse(saved);
        } catch(e) {
            cart = [];
        }
    }
}

/* ==========================================================================
   COUPON & LOYALTY POINTS INTERACTION
   ========================================================================== */
window.handleApplyCoupon = function() {
    const input = document.getElementById('coupon-input');
    const msg = document.getElementById('coupon-msg');
    if (!input || !msg) return;

    const val = input.value.trim().toUpperCase();

    if (val === 'COOP10') {
        appliedCoupon = 'COOP10';
        msg.textContent = 'Áp dụng mã giảm 10% thành công!';
        msg.className = 'coupon-status-msg success';
        msg.style.display = 'block';
        showToast('Đã áp dụng mã giảm giá COOP10 (Giảm 10%)');
    } else if (val === 'FREESHIP') {
        appliedCoupon = 'FREESHIP';
        msg.textContent = 'Áp dụng mã miễn phí vận chuyển!';
        msg.className = 'coupon-status-msg success';
        msg.style.display = 'block';
        showToast('Đã áp dụng mã miễn phí vận chuyển FREESHIP');
    } else if (!val) {
        appliedCoupon = null;
        msg.style.display = 'none';
    } else {
        appliedCoupon = null;
        msg.textContent = 'Mã giảm giá không hợp lệ. Thử: COOP10, FREESHIP';
        msg.className = 'coupon-status-msg error';
        msg.style.display = 'block';
    }

    renderCart();
};

window.handleTogglePoints = function(checkbox) {
    useLoyaltyPoints = checkbox.checked;
    renderCart();
    if (useLoyaltyPoints) {
        showToast(`Đã áp dụng tích điểm thành viên (Giảm ${formatCurrency(memberPoints * 1000)})`);
    }
};

/* ==========================================================================
   DELIVERY TIME & CHECKOUT LOGIC
   ========================================================================== */
function initDeliverySelection() {
    const cards = document.querySelectorAll('.delivery-card-option');
    const selectBox = document.getElementById('time-select-container');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            
            const radio = card.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
                
                // Show custom slots dropdown only when custom delivery is selected
                if (radio.value === 'custom') {
                    selectBox.style.display = 'block';
                } else {
                    selectBox.style.display = 'none';
                }
            }
        });
    });

    // Payment selection indicator sync
    const paymentItems = document.querySelectorAll('.payment-item-option');
    paymentItems.forEach(item => {
        item.addEventListener('click', () => {
            paymentItems.forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
            const radio = item.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
        });
    });
}

function initCheckoutForm() {
    const form = document.getElementById('checkout-form');
    if (!form) return;

    const inputs = form.querySelectorAll('.form-input');
    
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('is-invalid');
            const err = input.parentElement.querySelector('.error-message');
            if (err) err.style.display = 'none';
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. CHECK CART EMPTY
        if (cart.length === 0) {
            alert("Giỏ hàng của bạn đang trống! Vui lòng chọn sản phẩm trước khi thanh toán.");
            return;
        }

        // 2. VALIDATION
        let isFormValid = true;
        inputs.forEach(input => {
            const val = input.value.trim();
            const type = input.getAttribute('name');
            const err = input.parentElement.querySelector('.error-message');
            let msg = '';

            if (!val) {
                msg = 'Trường này không được để trống';
                isFormValid = false;
            } else if (type === 'email' && !validateEmail(val)) {
                msg = 'Email không hợp lệ';
                isFormValid = false;
            } else if (type === 'phone' && !validatePhone(val)) {
                msg = 'Số điện thoại phải gồm 10-11 số';
                isFormValid = false;
            }

            if (msg) {
                input.classList.add('is-invalid');
                if (err) {
                    err.textContent = msg;
                    err.style.display = 'block';
                }
            }
        });

        if (isFormValid) {
            // Simulated payment API request
            const submitBtn = form.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Đang xác nhận đơn hàng...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.style.opacity = '0.8';

            setTimeout(() => {
                // Restore button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                submitBtn.style.opacity = '1';

                // Get values
                const name = document.getElementById('fullname').value.trim();
                const phone = document.getElementById('phone').value.trim();
                const deliveryType = document.querySelector('input[name="delivery-type"]:checked').value;
                let deliveryTimeStr = "Giao nhanh 36 phút";
                
                if (deliveryType === 'custom') {
                    const timeSelect = document.getElementById('delivery-time-slot');
                    deliveryTimeStr = timeSelect.options[timeSelect.selectedIndex].text;
                }

                // --- SAVE ORDER TO HISTORY & UPDATE LOYALTY POINTS ---
                const orderItems = cart.map(item => {
                    const prod = products.find(p => p.id === item.id);
                    const price = prod.flashSale ? prod.flashPrice : prod.price;
                    return {
                        name: prod.name,
                        qty: item.quantity,
                        price: price * item.quantity
                    };
                });

                let subtotal = cart.reduce((sum, item) => {
                    const prod = products.find(p => p.id === item.id);
                    const price = prod.flashSale ? prod.flashPrice : prod.price;
                    return sum + price * item.quantity;
                }, 0);
                let shippingFee = subtotal >= 300000 ? 0 : 25000;
                let couponDiscount = 0;
                if (appliedCoupon === 'COOP10') {
                    couponDiscount = Math.round(subtotal * 0.1);
                } else if (appliedCoupon === 'FREESHIP') {
                    couponDiscount = shippingFee;
                }
                let pointsDiscount = 0;
                if (useLoyaltyPoints) {
                    pointsDiscount = Math.min(memberPoints * 1000, subtotal - couponDiscount);
                }
                const finalTotal = Math.max(0, subtotal + shippingFee - couponDiscount - pointsDiscount);

                // Update loyalty points balance
                if (useLoyaltyPoints) {
                    memberPoints = 0;
                } else {
                    const potentialPointsEarned = Math.round(finalTotal * 0.01 / 1000);
                    memberPoints += potentialPointsEarned;
                }
                localStorage.setItem('coop_member_points', memberPoints);

                // Create and save new order
                const orderId = 'COOP-' + Math.floor(100000 + Math.random() * 900000);
                const orderDate = new Date().toLocaleString('vi-VN', { hour12: false });
                const paymentMethodStr = document.querySelector('input[name="payment-method"]:checked').value.toUpperCase();

                const newOrder = {
                    id: orderId,
                    date: orderDate,
                    items: orderItems,
                    deliveryTime: deliveryTimeStr,
                    paymentMethod: paymentMethodStr,
                    total: finalTotal
                };

                let orders = [];
                const savedOrders = localStorage.getItem('coop_orders');
                if (savedOrders) {
                    try {
                        orders = JSON.parse(savedOrders);
                    } catch(e) {
                        orders = [];
                    }
                }
                orders.unshift(newOrder);
                localStorage.setItem('coop_orders', JSON.stringify(orders));
                // ----------------------------------

                // Show Success Message
                showToast(`Đơn hàng của ${name} đã được tạo thành công!`);
                alert(`Cảm ơn bạn! Đơn hàng của bạn đã được tiếp nhận.\n\nThông tin người nhận: ${name} (${phone})\nThời gian nhận hàng: ${deliveryTimeStr}\n\nĐội ngũ giao hàng Co.opshopping sẽ liên hệ với bạn trong giây lát.`);

                // Reset state
                cart = [];
                saveCartToStorage();
                appliedCoupon = null;
                useLoyaltyPoints = false;
                
                // Reset Loyalty Points section elements
                const cb = document.getElementById('apply-points-cb');
                if (cb) cb.checked = false;
                
                const couponInput = document.getElementById('coupon-input');
                if (couponInput) couponInput.value = '';
                
                const couponMsg = document.getElementById('coupon-msg');
                if (couponMsg) couponMsg.style.display = 'none';

                form.reset();
                renderCart();

                // Close Drawer if open
                const drawer = document.getElementById('cart-drawer');
                const overlay = document.getElementById('cart-drawer-overlay');
                if (drawer) drawer.classList.remove('open');
                if (overlay) overlay.classList.remove('open');
                document.body.style.overflow = '';
                
                // Scroll to top
                window.scrollTo({top: 0, behavior: 'smooth'});

            }, 1800);
        }
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validatePhone(phone) {
        return /^[0-9]{10,11}$/.test(phone.replace(/[\s\-\(\)]/g, ''));
    }
}

/* ==========================================================================
   UI UTILITY HELPERS
   ========================================================================== */
function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    const toastMsgP = toast.querySelector('.toast-message p');
    if (toastMsgP) toastMsgP.textContent = message;

    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

/* ==========================================================================
   FLASH SALES CONTROLLER
   ========================================================================== */
function renderFlashSales() {
    const grid = document.getElementById('flash-sale-grid');
    if (!grid) return;

    grid.innerHTML = '';

    // Filter flash sale items
    const flashItems = products.filter(p => p.flashSale === true);

    flashItems.forEach(p => {
        const card = document.createElement('div');
        card.classList.add('product-card', 'reveal', 'active');
        
        const soldPercentage = Math.round((p.soldQty / p.totalQty) * 100);

        card.innerHTML = `
            <span class="product-badge-tag badge-sale">Flash Sale</span>
            <div class="product-image-box">
                <img src="${p.image}" alt="${p.name}" loading="lazy" width="200" height="180">
            </div>
            <div class="product-body">
                <span class="product-unit-text">${p.unit}</span>
                <h3 class="product-title-text" title="${p.name}">${p.name}</h3>
                
                <!-- Progress Bar -->
                <div class="flash-progress-box">
                    <div class="flash-progress-bar">
                        <div class="flash-progress-fill" style="width: ${soldPercentage}%;"></div>
                    </div>
                    <div class="flash-progress-text">
                        <span>Đã bán ${p.soldQty}</span>
                        <span>Còn lại ${p.totalQty - p.soldQty}</span>
                    </div>
                </div>

                <div class="product-price-box">
                    <span class="product-price-current">${formatCurrency(p.flashPrice)}</span>
                    <span class="product-price-original">${formatCurrency(p.price)}</span>
                </div>
                
                <button class="add-to-cart-btn" onclick="handleAddToCart(event, ${p.id})">
                    <i class="fa-solid fa-bolt"></i>
                    <span>Mua ngay</span>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function initFlashCountdown() {
    // Simulated countdown timer: 2 hours 45 mins 12 secs
    let totalSeconds = 2 * 3600 + 45 * 60 + 12;

    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    if (!timerHours || !timerMinutes || !timerSeconds) return;

    const updateTimer = () => {
        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
            return;
        }

        totalSeconds--;

        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        timerHours.textContent = h.toString().padStart(2, '0');
        timerMinutes.textContent = m.toString().padStart(2, '0');
        timerSeconds.textContent = s.toString().padStart(2, '0');
    };

    updateTimer(); // Initial call
    const timerInterval = setInterval(updateTimer, 1000);
}

/* ==========================================================================
   AUTOCOMPLETE SEARCH SUGGESTIONS
   ========================================================================== */
function initSearchAutocomplete() {
    const searchInput = document.getElementById('search-input');
    const resultsPanel = document.getElementById('search-results-panel');
    if (!searchInput || !resultsPanel) return;

    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        if (!val) {
            resultsPanel.classList.remove('open');
            resultsPanel.innerHTML = '';
            return;
        }

        // Filter products matching name
        const matched = products.filter(p => p.name.toLowerCase().includes(val.toLowerCase()));

        if (matched.length === 0) {
            resultsPanel.innerHTML = `
                <div style="padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">
                    Không tìm thấy sản phẩm phù hợp
                </div>
            `;
            resultsPanel.classList.add('open');
            return;
        }

        resultsPanel.innerHTML = '';
        matched.slice(0, 5).forEach(p => {
            const itemEl = document.createElement('div');
            itemEl.className = 'search-result-item';
            
            const price = p.flashSale ? p.flashPrice : p.price;
            
            itemEl.innerHTML = `
                <img src="${p.image}" alt="${p.name}" class="search-result-img">
                <div class="search-result-info">
                    <div class="search-result-title">${p.name}</div>
                    <div class="search-result-price">${formatCurrency(price)}</div>
                </div>
                <button class="search-result-btn" data-id="${p.id}">Thêm</button>
            `;
            
            // Handle clicking the item row (adds to cart and opens cart drawer)
            itemEl.addEventListener('click', (event) => {
                if (event.target.classList.contains('search-result-btn')) return;
                handleAddToCart(event, p.id);
                document.getElementById('cart-toggle-btn').click();
                resultsPanel.classList.remove('open');
            });
            
            // Bind quick add button
            itemEl.querySelector('.search-result-btn').addEventListener('click', (event) => {
                event.stopPropagation();
                handleAddToCart(event, p.id);
            });

            resultsPanel.appendChild(itemEl);
        });

        resultsPanel.classList.add('open');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !resultsPanel.contains(e.target)) {
            resultsPanel.classList.remove('open');
        }
    });

    // Re-open on focus if it has search text
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim()) {
            resultsPanel.classList.add('open');
        }
    });
}

/* ==========================================================================
   COUPON SUGGESTIONS IN CART
   ========================================================================== */
function initCouponSuggestions() {
    const couponBox = document.querySelector('.coupon-apply-box');
    if (!couponBox) return;

    let suggestionsContainer = document.getElementById('coupon-suggestions');
    if (!suggestionsContainer) {
        suggestionsContainer = document.createElement('div');
        suggestionsContainer.id = 'coupon-suggestions';
        suggestionsContainer.className = 'coupon-suggestions';
        couponBox.parentNode.insertBefore(suggestionsContainer, document.getElementById('coupon-msg'));
    }

    suggestionsContainer.innerHTML = `
        <span class="coupon-suggestion-badge" data-coupon="COOP10">Mã COOP10 (Giảm 10%)</span>
        <span class="coupon-suggestion-badge" data-coupon="FREESHIP">Mã FREESHIP (Freeship)</span>
    `;

    suggestionsContainer.querySelectorAll('.coupon-suggestion-badge').forEach(badge => {
        badge.addEventListener('click', () => {
            const couponInput = document.getElementById('coupon-input');
            if (couponInput) {
                couponInput.value = badge.dataset.coupon;
                handleApplyCoupon();
            }
        });
    });
}

/* ==========================================================================
   ORDER HISTORY DASHBOARD
   ========================================================================== */
function initOrderHistory() {
    const historyToggle = document.getElementById('history-toggle-btn');
    const historyClose = document.getElementById('history-close-btn');
    const overlay = document.getElementById('history-overlay');
    const drawer = document.getElementById('history-drawer');

    if (!historyToggle || !historyClose || !overlay || !drawer) return;

    const openDrawer = () => {
        renderOrderHistory();
        drawer.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    };

    historyToggle.addEventListener('click', openDrawer);
    historyClose.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
}

function renderOrderHistory() {
    const historyBody = document.getElementById('history-drawer-body');
    if (!historyBody) return;

    let orders = [];
    const savedOrders = localStorage.getItem('coop_orders');
    if (savedOrders) {
        try {
            orders = JSON.parse(savedOrders);
        } catch(e) {
            orders = [];
        }
    }

    if (orders.length === 0) {
        historyBody.innerHTML = `
            <div class="empty-cart-view" style="padding-top: 5rem;">
                <i class="fa-solid fa-clock-rotate-left"></i>
                <p>Bạn chưa có đơn đặt hàng nào.<br>Đơn hàng sau khi đặt sẽ được hiển thị tại đây!</p>
            </div>
        `;
        return;
    }

    historyBody.innerHTML = '';
    orders.forEach(order => {
        const card = document.createElement('div');
        card.className = 'history-order-card';
        
        let itemsHTML = '';
        order.items.forEach(item => {
            itemsHTML += `
                <div class="order-item-line">
                    <span>${item.name} (x${item.qty})</span>
                    <span>${formatCurrency(item.price)}</span>
                </div>
            `;
        });

        card.innerHTML = `
            <div class="order-card-header">
                <span class="order-id">Mã đơn: ${order.id}</span>
                <span class="order-status-badge status-preparing">Đang chuẩn bị hàng</span>
            </div>
            <div class="order-card-body">
                <p style="font-size: 0.75rem; margin-bottom: 0.5rem; color: var(--text-muted);">
                    Ngày đặt: ${order.date} • Giao: ${order.deliveryTime} • (${order.paymentMethod})
                </p>
                ${itemsHTML}
            </div>
            <div class="order-card-footer">
                <span>Tổng tiền:</span>
                <span class="order-total-price">${formatCurrency(order.total)}</span>
            </div>
        `;
        historyBody.appendChild(card);
    });
}

/* ==========================================================================
   FLYING CART ANIMATION
   ========================================================================== */
function animateFlyToCart(event, imageSrc) {
    const cartBtn = document.getElementById('cart-toggle-btn');
    if (!cartBtn) return;

    // Find starting coordinates (click position)
    let startX = event.clientX;
    let startY = event.clientY;

    // Alternatively, try to find product card image center to start animation from
    if (event.target) {
        const card = event.target.closest('.product-card');
        if (card) {
            const img = card.querySelector('.product-image-box img');
            if (img) {
                const imgRect = img.getBoundingClientRect();
                startX = imgRect.left + imgRect.width / 2;
                startY = imgRect.top + imgRect.height / 2;
            }
        }
    }

    const targetRect = cartBtn.getBoundingClientRect();
    const targetX = targetRect.left + targetRect.width / 2;
    const targetY = targetRect.top + targetRect.height / 2;

    const flyer = document.createElement('div');
    flyer.className = 'flying-item';
    flyer.style.backgroundImage = `url('${imageSrc}')`;
    flyer.style.left = `${startX - 20}px`;
    flyer.style.top = `${startY - 20}px`;

    document.body.appendChild(flyer);

    // Force reflow
    flyer.offsetWidth;

    // Transition to target
    flyer.style.left = `${targetX - 20}px`;
    flyer.style.top = `${targetY - 20}px`;
    flyer.style.transform = 'scale(0.1) rotate(360deg)';
    flyer.style.opacity = '0';

    // Cleanup
    flyer.addEventListener('transitionend', () => {
        flyer.remove();
        
        // Trigger bounce animation on cart button
        cartBtn.classList.add('bounce');
        setTimeout(() => {
            cartBtn.classList.remove('bounce');
        }, 400);
    });
}

