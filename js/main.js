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
        image: "assets/images/usda_beef.png",
        badge: "Bán chạy",
        badgeType: "sale",
        flashSale: true,
        flashPrice: 269000,
        soldQty: 18,
        totalQty: 30,
        brand: "USDA Choice",
        standards: ["Nhập khẩu"],
        isNew: false,
        weight: "500g",
        expiry: "3 ngày kể từ ngày đóng gói (Bảo quản lạnh 0-4°C)",
        origin: "Mỹ",
        nutrition: "Giàu Protein, Sắt và Vitamin B12 giúp bồi bổ cơ thể và tái tạo tế bào hồng cầu.",
        recipes: ["Bò Né Cà Chua Beef", "Mì Ý Sốt Thịt Bò"],
        reviews: [
            { user: "Minh Anh", stars: 5, comment: "Thịt bò thăn rất mềm, vân mỡ cẩm thạch đẹp mắt, xào hay làm né đều ngon và ngọt thịt.", photo: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=150&q=80", date: "2026-06-08" },
            { user: "Hoàng Nam", stars: 4, comment: "Độ dày vừa phải, đóng gói hút chân không sạch sẽ. Giao hàng hỏa tốc thịt vẫn còn lạnh tốt.", photo: "", date: "2026-06-09" }
        ]
    },
    {
        id: 2,
        name: "Dâu Tây Đà Lạt Hữu Cơ Chuẩn VietGAP",
        price: 135000,
        oldPrice: 160000,
        unit: "Hộp 250g",
        category: "fruit",
        image: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&w=400&q=80",
        badge: "Giá chấn động",
        badgeType: "fresh",
        flashSale: true,
        flashPrice: 99000,
        soldQty: 12,
        totalQty: 40,
        brand: "Co.op Organic",
        standards: ["VietGAP", "Organic"],
        isNew: true,
        weight: "250g",
        expiry: "5 ngày (Bảo quản lạnh 4-8°C)",
        origin: "Đà Lạt, Việt Nam",
        nutrition: "Chứa hàm lượng Vitamin C cao vượt trội và các hợp chất chống oxy hóa mạnh mẽ.",
        recipes: ["Chả Giò Chiên Xoài Cát dâu tây sốt chua ngọt", "Kem sữa chua trái cây dâu tây"],
        reviews: [
            { user: "Thùy Hằng", stars: 5, comment: "Dâu tây quả to, mọng nước, vị chua ngọt thanh mát cực kỳ cuốn. Sẽ mua lại lần sau.", photo: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=150&q=80", date: "2026-06-08" }
        ]
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
        flashSale: false,
        brand: "Hợp tác xã Bến Tre",
        standards: ["VietGAP"],
        isNew: false,
        weight: "1kg",
        expiry: "7-10 ngày (Bảo quản mát)",
        origin: "Bến Tre, Việt Nam",
        nutrition: "Cung cấp lượng Vitamin C và Kali dồi dào, giúp tăng sức đề kháng và thanh lọc cơ thể.",
        recipes: ["Nước cam vắt mật ong", "Salad cam sành rau củ"],
        reviews: [
            { user: "Đức Trí", stars: 4, comment: "Cam mọng nước, vỏ mỏng, vắt nước uống giải khát mùa hè rất tốt.", photo: "", date: "2026-06-07" }
        ]
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
        flashSale: false,
        brand: "De Cecco",
        standards: ["Nhập khẩu", "Organic"],
        isNew: false,
        weight: "500g",
        expiry: "24 tháng kể từ ngày sản xuất",
        origin: "Ý",
        nutrition: "Giàu Carbs phức hợp cung cấp năng lượng bền bỉ cho cơ thể mà không tăng nhanh đường huyết.",
        recipes: ["Mì Ý Sốt Cà Chua", "Mì Ý Carbonara sốt kem"],
        reviews: [
            { user: "Mỹ Linh", stars: 5, comment: "Mì De Cecco luộc giữ được độ giòn dai (al dente) đặc trưng của Ý, nấu sốt bò bằm cà chua ngon tuyệt hảo.", photo: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=150&q=80", date: "2026-06-06" }
        ]
    },
    {
        id: 5,
        name: "Hạt Điều Rang Muối Vỏ Lụa Co.opshopping Organic",
        price: 145000,
        oldPrice: null,
        unit: "Hộp 350g",
        category: "snacks",
        image: "assets/images/coop_cashews.png",
        badge: "Độc quyền",
        badgeType: "fresh",
        flashSale: false,
        brand: "Co.opshopping",
        standards: ["Organic"],
        isNew: true,
        weight: "350g",
        expiry: "12 tháng kể từ ngày sản xuất",
        origin: "Bình Phước, Việt Nam",
        nutrition: "Chứa nhiều axit béo không bão hòa đơn tốt cho tim mạch, Magie và các khoáng chất vi lượng.",
        recipes: ["Ăn trực tiếp làm món ăn vặt lành mạnh", "Làm sữa hạt điều ngũ cốc"],
        reviews: [
            { user: "Hải Yến", stars: 5, comment: "Hạt điều giòn rụm, vị bùi béo, rang muối vừa vặn không bị quá mặn. Hộp đóng kín rất sang trọng.", photo: "", date: "2026-06-05" }
        ]
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
        flashSale: false,
        brand: "Horizon",
        standards: ["Nhập khẩu", "Organic"],
        isNew: false,
        weight: "946ml",
        expiry: "12 tháng (Bảo quản lạnh sau khi mở nắp)",
        origin: "Mỹ",
        nutrition: "Giàu Canxi, Vitamin D3 tăng cường chiều cao và Vitamin B12 dồi dào.",
        recipes: ["Uống trực tiếp", "Làm sinh tố dâu tây sữa tươi", "Nấu trà sữa trân châu"],
        reviews: [
            { user: "Quốc Khánh", stars: 5, comment: "Sữa Horizon Organic thì khỏi bàn rồi, vị ngậy béo rất thơm, bé nhà mình rất mê sữa này.", photo: "", date: "2026-06-09" }
        ]
    },
    {
        id: 7,
        name: "Nước Ép Lựu Đỏ Nguyên Chất Georgia Premium",
        price: 98000,
        oldPrice: 120000,
        unit: "Chai 1L",
        category: "drink",
        image: "assets/images/pomegranate_juice.png",
        badge: "-18%",
        badgeType: "sale",
        flashSale: true,
        flashPrice: 59000,
        soldQty: 35,
        totalQty: 50,
        brand: "Georgia Premium",
        standards: ["Nhập khẩu"],
        isNew: false,
        weight: "1L",
        expiry: "18 tháng kể từ ngày sản xuất",
        origin: "Georgia",
        nutrition: "Cung cấp lượng lớn Polyphenol chống oxy hóa mạnh gấp 3 lần trà xanh, hỗ trợ sức khỏe tim mạch.",
        recipes: ["Uống trực tiếp làm nước giải khát tốt cho da", "Pha mocktail lựu đỏ"],
        reviews: [
            { user: "Lan Hương", stars: 5, comment: "Nước ép nguyên chất đậm vị, chua ngọt tự nhiên, không pha đường hóa học. Giá khuyến mãi cực hời.", photo: "assets/images/pomegranate_juice.png", date: "2026-06-08" }
        ]
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
        flashSale: false,
        brand: "Heart of Darkness",
        standards: [],
        isNew: false,
        weight: "330ml",
        expiry: "12 tháng kể từ ngày sản xuất",
        origin: "Việt Nam",
        nutrition: "Nước uống lên men tự nhiên có cồn, mang hương thơm nồng nàn của hoa bia và hoa lài.",
        recipes: ["Thưởng thức mát lạnh cùng đồ nhắm nướng", "Làm sốt bia cho món bò hầm"],
        reviews: [
            { user: "Thế Vinh", stars: 5, comment: "Hương hoa lài thơm dịu đặc trưng, vị đắng đậm đà đúng gu bia IPA. Chất lượng rất tuyệt.", photo: "", date: "2026-06-04" }
        ]
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
        totalQty: 30,
        brand: "Mövenpick",
        standards: ["Nhập khẩu"],
        isNew: false,
        weight: "100g",
        expiry: "18 tháng (Bảo quản đông lạnh -18°C)",
        origin: "Thụy Sĩ",
        nutrition: "Men vi sinh có lợi cho hệ tiêu hóa hòa quyện cùng canxi từ sữa tươi nguyên chất Thụy Sĩ.",
        recipes: ["Ăn trực tiếp tráng miệng", "Ăn kèm salad hoa quả tươi"],
        reviews: [
            { user: "Hương Giang", stars: 5, comment: "Vị chua dịu nhẹ của sữa chua hòa quyện với vị trái cây ngọt thơm, kết cấu kem mịn màng ngậy béo.", photo: "", date: "2026-06-08" }
        ]
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
        flashSale: false,
        brand: "Harrys",
        standards: ["Nhập khẩu"],
        isNew: false,
        weight: "500g",
        expiry: "25 ngày kể từ ngày sản xuất",
        origin: "Pháp",
        nutrition: "Năng lượng tinh bột lành mạnh kết hợp với protein từ sữa và bơ thực vật chất lượng.",
        recipes: ["Bữa sáng nhanh gọn với bơ lạt", "Kẹp trứng chảo pate cho bữa xế"],
        reviews: [
            { user: "Đăng Khoa", stars: 4, comment: "Bánh mì thớ dai dài, thơm đậm mùi bơ sữa và hoa cúc rất đặc trưng. Ăn sáng tiện lợi cực kỳ.", photo: "", date: "2026-06-09" }
        ]
    },
    {
        id: 11,
        name: "Nước rửa chén Co.opshopping",
        price: 75000,
        oldPrice: 90000,
        unit: "Can 1.2L",
        category: "household",
        image: "assets/images/coop_dishwash.png",
        badge: "Sinh học",
        badgeType: "fresh",
        flashSale: false,
        brand: "Co.opshopping",
        standards: ["Organic"],
        isNew: true,
        weight: "1.2L",
        expiry: "3 năm kể từ ngày sản xuất",
        origin: "Việt Nam",
        nutrition: "Chiết xuất enzym sinh học và tinh dầu quế tự nhiên khử mùi hôi tanh hiệu quả, an toàn da tay.",
        recipes: ["Rửa chén đĩa, xoong nồi gia đình", "Ngâm rửa bình sữa trẻ em"],
        reviews: [
            { user: "Thu Cúc", stars: 5, comment: "Nước rửa chén hương quế rất thơm, sạch dầu mỡ nhanh và đặc biệt là không hề làm khô ráp da tay.", photo: "assets/images/coop_dishwash.png", date: "2026-06-07" }
        ]
    },
    {
        id: 12,
        name: "Sữa Tắm Thảo Mộc Đậm Đặc Sả Chanh & Bạc Hà",
        price: 125000,
        oldPrice: 150000,
        unit: "Chai 500ml",
        category: "personalcare",
        image: "assets/images/lemongrass_shower_gel.png",
        badge: "Organic",
        badgeType: "fresh",
        flashSale: true,
        flashPrice: 99000,
        soldQty: 5,
        totalQty: 15,
        brand: "Aura Herbals",
        standards: ["Organic"],
        isNew: true,
        weight: "500ml",
        expiry: "3 năm kể từ ngày sản xuất",
        origin: "Việt Nam",
        nutrition: "Chiết xuất tinh dầu sả chanh thanh lọc độc tố da, kết hợp tinh chất bạc hà làm mát và kháng khuẩn.",
        recipes: ["Tắm thư giãn hàng ngày giúp giải tỏa mệt mỏi căng thẳng"],
        reviews: [
            { user: "Ngọc Trâm", stars: 5, comment: "Mùi sả chanh cực kỳ thư giãn như đang đi spa, tắm xong da mát lạnh sảng khoái vô cùng.", photo: "assets/images/lemongrass_shower_gel.png", date: "2026-06-08" }
        ]
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
        flashSale: false,
        brand: "Hợp tác xã Hòa Lộc",
        standards: ["VietGAP"],
        isNew: false,
        weight: "1kg",
        expiry: "3-5 ngày (Bảo quản mát)",
        origin: "Tiền Giang, Việt Nam",
        nutrition: "Giàu Vitamin A, C giúp sáng mắt, đẹp da và nâng cao khả năng miễn dịch.",
        recipes: ["Sinh tố xoài chín", "Làm topping cho salad trái cây ăn vặt", "Ăn trực tiếp chín ngọt"],
        reviews: [
            { user: "Quang Đăng", stars: 5, comment: "Xoài chín vàng ươm, ngọt lịm không xơ, thịt dày và hạt cực nhỏ. Xứng danh xoài cát loại 1.", photo: "", date: "2026-06-08" }
        ]
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
        flashSale: false,
        brand: "Đà Lạt Farm",
        standards: ["VietGAP"],
        isNew: false,
        weight: "250g",
        expiry: "3-5 ngày (Bảo quản lạnh ngăn rau)",
        origin: "Lâm Đồng, Việt Nam",
        nutrition: "Giàu chất xơ hòa tan, nước khoáng tự nhiên, axit folic giúp hỗ trợ tiêu hóa tốt.",
        recipes: ["Salad Bò Né Cà Chua", "Rau cuốn thịt nướng bơ tỏi"],
        reviews: [
            { user: "Hồng Nhung", stars: 4, comment: "Cây xà lách tươi roi rói, không bị dập nát lá nào, ăn giòn và ngọt nước.", photo: "", date: "2026-06-06" }
        ]
    },
    {
        id: 15,
        name: "Cà Chua Beef Đà Lạt Organic",
        price: 28000,
        oldPrice: 35000,
        unit: "Khay 500g",
        category: "fresh",
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80",
        badge: "-20%",
        badgeType: "sale",
        flashSale: false,
        brand: "Co.op Organic",
        standards: ["VietGAP", "Organic"],
        isNew: false,
        weight: "500g",
        expiry: "5-7 ngày (Bảo quản mát)",
        origin: "Đà Lạt, Việt Nam",
        nutrition: "Chứa hàm lượng Lycopene cực cao tốt cho tim mạch và ngừa lão hóa da.",
        recipes: ["Bò Né Cà Chua Beef", "Mì Ý Sốt Cà Chua", "Canh cà chua trứng gà"],
        reviews: [
            { user: "Xuân Trường", stars: 5, comment: "Cà chua trái siêu to khổng lồ, chắc thịt, ít hạt và nhiều bột, làm sốt cà chua hay salad đều tuyệt đỉnh.", photo: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=150&q=80", date: "2026-06-09" }
        ]
    },
    {
        id: 16,
        name: "Súp Lơ Xanh Baby Xuất Khẩu",
        price: 45000,
        oldPrice: null,
        unit: "Gói 300g",
        category: "fresh",
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_640.jpg",
        badge: "Chuẩn VietGAP",
        badgeType: "fresh",
        flashSale: false,
        brand: "Đà Lạt Farm",
        standards: ["VietGAP"],
        isNew: true,
        weight: "300g",
        expiry: "5 ngày (Bảo quản lạnh)",
        origin: "Đà Lạt, Việt Nam",
        nutrition: "Giàu xơ, Sulforaphane kháng viêm mạnh mẽ và các vitamin khoáng chất thiết yếu.",
        recipes: ["Bò xào súp lơ xanh baby", "Canh súp lơ sườn non", "Súp lơ hấp chấm kho quẹt"],
        reviews: [
            { user: "Bảo Trâm", stars: 5, comment: "Súp lơ baby giòn ngọt hơn nhiều súp lơ thường, xào thịt bò chín tới ăn giòn sần sật rất ngon.", photo: "https://cdn.pixabay.com/photo/2016/03/05/19/02/broccoli-1238250_640.jpg", date: "2026-06-08" }
        ]
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
        flashSale: false,
        brand: "Leroy Salmon",
        standards: ["Nhập khẩu"],
        isNew: false,
        weight: "250g",
        expiry: "2 ngày kể từ khi đóng gói (Bảo quản lạnh 0-2°C)",
        origin: "Nauy",
        nutrition: "Nguồn axit béo Omega-3 dồi dào cực tốt cho brain bộ, thị lực và tim mạch.",
        recipes: ["Cá hồi áp chảo sốt bơ chanh", "Cá hồi nướng muối tiêu tỏi"],
        reviews: [
            { user: "Đình Phong", stars: 5, comment: "Cá hồi tươi rói, màu cam sáng đẹp, thớ mỡ đều tăm tắp. Áp chảo sốt chanh bơ ngon ngọt béo ngậy.", photo: "", date: "2026-06-09" }
        ]
    },
    {
        id: 18,
        name: "Trứng Gà Ác Hữu Cơ Ba Huân",
        price: 42000,
        oldPrice: null,
        unit: "Hộp 10 quả",
        category: "meat",
        image: "https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?auto=format&fit=crop&w=400&q=80",
        badge: "Giàu dinh dưỡng",
        badgeType: "fresh",
        flashSale: false,
        brand: "Ba Huân",
        standards: ["VietGAP", "Organic"],
        isNew: false,
        weight: "10 quả",
        expiry: "30 ngày (Bảo quản mát)",
        origin: "Việt Nam",
        nutrition: "Hàm lượng dinh dưỡng và vi chất tốt cao gấp đôi trứng gà thường, giàu DHA và lecithin.",
        recipes: ["Canh súp lơ trứng gà ác", "Trứng gà ác luộc lòng đào", "Chả giò tôm thịt trứng gà"],
        reviews: [
            { user: "Kim Chi", stars: 5, comment: "Quả trứng nhỏ xinh nhưng lòng đỏ siêu to và vàng ươm, làm canh hay rán đều rất thơm, không bị tanh.", photo: "https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?auto=format&fit=crop&w=150&q=80", date: "2026-06-08" }
        ]
    },
    {
        id: 19,
        name: "Sữa Chua Nếp Cẩm Ba Vì Truyền Thống",
        price: 12000,
        oldPrice: 15000,
        unit: "Hũ 120g",
        category: "yogurt",
        image: "assets/images/bavi_yogurt.png",
        badge: "Ăn vặt",
        badgeType: "fresh",
        flashSale: false,
        brand: "Sữa Ba Vì",
        standards: [],
        isNew: false,
        weight: "120g",
        expiry: "45 ngày (Bảo quản lạnh 4-6°C)",
        origin: "Ba Vì, Việt Nam",
        nutrition: "Cung cấp lợi khuẩn sữa chua lên men tự nhiên và chất xơ từ gạo nếp cẩm tốt cho tiêu hóa.",
        recipes: ["Ăn trực tiếp giải nhiệt làm bữa phụ lành mạnh"],
        reviews: [
            { user: "Yến Nhi", stars: 5, comment: "Nếp cẩm dẻo bùi, sữa chua thơm ngậy vừa vặn, ăn lạnh rất mát và ngon bụng.", photo: "assets/images/bavi_yogurt.png", date: "2026-06-07" }
        ]
    },
    {
        id: 20,
        name: "Kem Vani Haagen-Dazs Nhập Khẩu Pháp",
        price: 85000,
        oldPrice: null,
        unit: "Hũ 100ml",
        category: "yogurt",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80",
        badge: "Premium",
        badgeType: "fresh",
        flashSale: false,
        brand: "Haagen-Dazs",
        standards: ["Nhập khẩu"],
        isNew: false,
        weight: "100ml",
        expiry: "24 tháng (Bảo quản tủ đông -18°C)",
        origin: "Pháp",
        nutrition: "Kem cao cấp sản xuất từ sữa tươi nguyên chất Pháp kết hợp tinh chất quả vani Madagascar thượng hạng.",
        recipes: ["Ăn trực tiếp làm món tráng miệng thượng lưu", "Ăn kèm bánh crepe nóng sốt dâu tây"],
        reviews: [
            { user: "Phú Cường", stars: 5, comment: "Đúng chuẩn kem Haagen-Dazs Pháp, kem đặc sánh mịn màng, thơm đậm mùi vani tự nhiên chứ không hương liệu giả tạo.", photo: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=150&q=80", date: "2026-06-09" }
        ]
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
        flashSale: false,
        brand: "Anchor",
        standards: ["Nhập khẩu"],
        isNew: false,
        weight: "227g",
        expiry: "18 tháng (Bảo quản đông lạnh)",
        origin: "New Zealand",
        nutrition: "Giàu chất béo tự nhiên từ sữa bò New Zealand ăn cỏ tự nhiên, bổ sung năng lượng dồi dào.",
        recipes: ["Bò Né Cà Chua Beef làm dậy mùi thơm ngậy", "Làm bánh mì croissant bơ tỏi"],
        reviews: [
            { user: "Nhật Minh", stars: 4, comment: "Bơ rất thơm, làm bò né hay xào ngô đều cực kỳ dậy mùi béo ngậy. Thương hiệu New Zealand uy tín.", photo: "", date: "2026-06-08" }
        ]
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
        flashSale: false,
        brand: "President",
        standards: ["Nhập khẩu"],
        isNew: false,
        weight: "200g (10 lát)",
        expiry: "12 tháng (Bảo quản lạnh 4-8°C)",
        origin: "Pháp",
        nutrition: "Nguồn Canxi dồi dào tăng chiều cao và đạm cô đặc từ phô mai Cheddar Pháp trứ danh.",
        recipes: ["Kẹp sandwich bò nướng phô mai chảy", "Làm hăm-bơ-gơ kẹp phô mai lát"],
        reviews: [
            { user: "Bảo Ngọc", stars: 5, comment: "Lát phô mai dày dặn, kẹp vào mì nóng hay burger nóng chảy ra dẻo dẻo béo ngậy ăn cực mê luôn.", photo: "", date: "2026-06-06" }
        ]
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
        flashSale: false,
        brand: "Vifon",
        standards: [],
        isNew: false,
        weight: "120g",
        expiry: "9 tháng kể từ ngày sản xuất",
        origin: "Việt Nam",
        nutrition: "Bánh phở dai mềm, gói nước cốt hầm xương thơm nồng cùng gói thịt bò thật tiệt trùng bổ dưỡng.",
        recipes: ["Chế nước sôi ăn liền nhanh gọn cho bữa sáng", "Phở bò xào giòn"],
        reviews: [
            { user: "Đăng Huy", stars: 4, comment: "Có gói thịt thật ăn sướng miệng hẳn, nước dùng ngọt thanh vị phở bò Hà Nội truyền thống.", photo: "", date: "2026-06-05" }
        ]
    },
    {
        id: 24,
        name: "Bún Tươi Sấy Khô Co.op Organic",
        price: 25000,
        oldPrice: null,
        unit: "Gói 400g",
        category: "packaged",
        image: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=400&q=80",
        badge: "Organic",
        badgeType: "fresh",
        flashSale: false,
        brand: "Co.op Organic",
        standards: ["Organic"],
        isNew: true,
        weight: "400g",
        expiry: "12 tháng kể từ ngày sản xuất",
        origin: "Việt Nam",
        nutrition: "Sản xuất từ 100% bột gạo hữu cơ sạch, không chứa chất bảo quan hay hàn gia hóa học gây hại.",
        recipes: ["Luộc làm bún tươi ăn kèm chả giò", "Làm bún trộn thịt bò xào sả ớt"],
        reviews: [
            { user: "Mai Hoa", stars: 5, comment: "Sợi bún luộc lên trắng mềm, không bị nát gãy, dai ngon không khác gì bún tươi ngoài chợ mà lại sạch và an tâm.", photo: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=150&q=80", date: "2026-06-08" }
        ]
    },
    {
        id: 25,
        name: "Sủi Cảo Nhân Tôm Thịt CJ Cầu Tre",
        price: 65000,
        oldPrice: 80000,
        unit: "Gói 400g",
        category: "frozen",
        image: "assets/images/cj_dumplings.png",
        badge: "Giảm 18%",
        badgeType: "sale",
        flashSale: false,
        brand: "CJ Cầu Tre",
        standards: [],
        isNew: false,
        weight: "400g",
        expiry: "12 tháng (Bảo quản tủ đông -18°C)",
        origin: "Việt Nam",
        nutrition: "Nhân tôm nguyên con giòn sần sật kết hợp thịt heo xay và rau thơm bọc trong lớp vỏ bột mỏng dai.",
        recipes: ["Sủi cảo hấp chấm xì dầu tỏi ớt", "Sủi cảo nấu mì nước sườn heo"],
        reviews: [
            { user: "Thảo Vy", stars: 5, comment: "Nhân tôm thịt đầy đặn cắn ngập miệng, vị ngọt tự nhiên của tôm tươi ăn rất đã.", photo: "assets/images/cj_dumplings.png", date: "2026-06-08" }
        ]
    },
    {
        id: 26,
        name: "Chả Giò Đặc Biệt Thịt & Tôm Co.opshopping",
        price: 48000,
        oldPrice: null,
        unit: "Gói 500g",
        category: "frozen",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80",
        badge: "Giòn rụm",
        badgeType: "fresh",
        flashSale: false,
        brand: "Co.opshopping",
        standards: ["Organic"],
        isNew: true,
        weight: "500g",
        expiry: "12 tháng (Bảo quản tủ đông -18°C)",
        origin: "Việt Nam",
        nutrition: "Vỏ bánh rế giòn rụm, nhân thịt heo và tôm đất tự nhiên kết hợp miến, mộc nhĩ giàu dinh dưỡng.",
        recipes: ["Chả Giò Chiên Xoài Cát ăn kèm bún tươi và rau sống", "Làm món khai vị tiệc gia đình"],
        reviews: [
            { user: "Duy Mạnh", stars: 5, comment: "Bánh tráng rế chiên lên cực kỳ giòn rụm lâu xẹp, nhân bên trong thơm bùi vị tôm thịt và khoai môn.", photo: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=150&q=80", date: "2026-06-09" }
        ]
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
        flashSale: false,
        brand: "McCain",
        standards: ["Nhập khẩu"],
        isNew: false,
        weight: "1kg",
        expiry: "18 tháng (Bảo quản đông lạnh -18°C)",
        origin: "Bỉ",
        nutrition: "Khoai tây cắt sợi Bỉ tẩm lớp tinh bột nhẹ giúp chiên giòn tan bên ngoài, bùi mềm bên trong.",
        recipes: ["Chiên ngập dầu ăn kèm tương cà Heinz", "Làm khoai tây lắc phô mai Cheddar"],
        reviews: [
            { user: "Gia Bảo", stars: 4, comment: "Khoai tây cọng to dài, chiên nồi chiên không dầu giòn rụm mà bên trong vẫn mềm xốp thơm bùi.", photo: "", date: "2026-06-05" }
        ]
    },
    {
        id: 28,
        name: "Khoai tây Co.opshopping tự nhiên",
        price: 22000,
        oldPrice: null,
        unit: "Gói 95g",
        category: "snacks",
        image: "assets/images/coop_potatoes.png",
        badge: "Ăn vặt",
        badgeType: "fresh",
        flashSale: false,
        brand: "Co.opshopping",
        standards: ["Organic"],
        isNew: true,
        weight: "95g",
        expiry: "9 tháng kể từ ngày sản xuất",
        origin: "Việt Nam",
        nutrition: "Lát khoai tây mỏng cắt lát sấy khô, tẩm ướp gia vị tự nhiên giòn rụm vui tai ngon miệng.",
        recipes: ["Ăn vặt giải trí khi xem phim", "Món ăn nhẹ trong các buổi dã ngoại ngoại khóa"],
        reviews: [
            { user: "Thanh Hằng", stars: 5, comment: "Khoai tây giòn tan thơm béo nhẹ, ít dầu mỡ hơn các loại khoai đóng gói khác ngoài thị trường.", photo: "assets/images/coop_potatoes.png", date: "2026-06-08" }
        ]
    },
    {
        id: 29,
        name: "Kẹo Dẻo Haribo Goldbears Hương Trái Cây",
        price: 35000,
        oldPrice: 42000,
        unit: "Gói 80g",
        category: "snacks",
        image: "assets/images/haribo_gummy.png",
        badge: "-17%",
        badgeType: "sale",
        flashSale: false,
        brand: "Haribo",
        standards: ["Nhập khẩu"],
        isNew: false,
        weight: "80g",
        expiry: "18 tháng kể từ ngày sản xuất",
        origin: "Thổ Nhĩ Kỳ",
        nutrition: "Kẹo dẻo hương trái cây tự nhiên (dâu, cam, chanh, táo) bổ sung gelatin dẻo dai vui miệng.",
        recipes: ["Ăn vặt trực tiếp làm quà thưởng cho trẻ nhỏ", "Trang trí cho bánh ngọt, kem sữa chua"],
        reviews: [
            { user: "Phương Thảo", stars: 5, comment: "Chú gấu Haribo dẻo dai sần sật, vị chua chua ngọt ngọt hương quả tự nhiên ăn không bị ngán chút nào.", photo: "assets/images/haribo_gummy.png", date: "2026-06-09" }
        ]
    },
    {
        id: 30,
        name: "Ngũ Cốc Ăn Sáng Giàu Dinh Dưỡng Kellogg's Corn Flakes",
        price: 78000,
        oldPrice: 92000,
        unit: "Hộp 275g",
        category: "bakery",
        image: "assets/images/kelloggs_cereal.png",
        badge: "Bữa sáng",
        badgeType: "fresh",
        flashSale: false,
        brand: "Kellogg's",
        standards: ["Nhập khẩu"],
        isNew: false,
        weight: "275g",
        expiry: "12 tháng kể từ ngày sản xuất",
        origin: "Thái Lan",
        nutrition: "Làm từ hạt bắp vàng tự nhiên nguyên cám, bổ sung 9 loại vitamin và khoáng chất thiết yếu.",
        recipes: ["Ăn sáng nhanh với sữa tươi Horizon", "Làm lớp bột chiên xù giòn cho ức gà"],
        reviews: [
            { user: "Hữu Phước", stars: 4, comment: "Cereal giòn bắp thơm nhẹ, ăn kèm sữa tươi mát lạnh buổi sáng cực kỳ nhanh gọn đủ chất dinh dưỡng.", photo: "assets/images/kelloggs_cereal.png", date: "2026-06-07" }
        ]
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
        flashSale: false,
        brand: "Aura Bakery",
        standards: [],
        isNew: true,
        weight: "60g",
        expiry: "2 ngày kể từ ngày sản xuất",
        origin: "Việt Nam",
        nutrition: "Bánh sừng bò nướng ngàn lớp thơm phức mùi bơ lạt nguyên chất béo ngậy tan trong miệng.",
        recipes: ["Kẹp phô mai Cheddar nướng chảy làm bữa sáng", "Ăn kèm tách trà nóng buổi xế"],
        reviews: [
            { user: "Quỳnh Dao", stars: 5, comment: "Bánh mì ngàn lớp thơm phức mùi bơ tươi New Zealand, nướng lại lòa vi sóng 30s vỏ giòn rụm bên trong xốp mềm.", photo: "", date: "2026-06-08" }
        ]
    },
    {
        id: 32,
        name: "Nước Mắm Cá Cơm Phú Quốc Thuận Phát",
        price: 85000,
        oldPrice: null,
        unit: "Chai 620ml",
        category: "condiment",
        image: "assets/images/phu_quoc_fish_sauce.png",
        badge: "40 độ đạm",
        badgeType: "fresh",
        flashSale: false,
        brand: "Thuận Phát",
        standards: ["VietGAP"],
        isNew: false,
        weight: "620ml",
        expiry: "2 năm kể từ ngày sản xuất",
        origin: "Phú Quốc, Việt Nam",
        nutrition: "Nước mắm cốt nhĩ làm từ cá cơm tươi ủ chượp thùng gỗ Phú Quốc, giàu đạm và axit amin tự nhiên.",
        recipes: ["Làm nước chấm tỏi ớt chấm chả giò", "Nêm nếm món thịt bò xào sả ớt"],
        reviews: [
            { user: "Bác Ba", stars: 5, comment: "Nước mắm vị mặn mòi đậm đà kèm hậu vị ngọt tự nhiên của cá cơm tươi, chấm thịt luộc thì hết sảy.", photo: "assets/images/phu_quoc_fish_sauce.png", date: "2026-06-09" }
        ]
    },
    {
        id: 33,
        name: "Hạt Nêm Từ Thịt Thăn & Xương Ống Knorr",
        price: 58000,
        oldPrice: 68000,
        unit: "Gói 900g",
        category: "condiment",
        image: "assets/images/knorr_seasoning.png",
        badge: "Tiết kiệm",
        badgeType: "fresh",
        flashSale: false,
        brand: "Knorr",
        standards: [],
        isNew: false,
        weight: "900g",
        expiry: "18 tháng kể từ ngày sản xuất",
        origin: "Việt Nam",
        nutrition: "Chiết xuất nước hầm xương ống và thịt thăn tươi ngon, bổ sung vitamin A tăng cường thị lực.",
        recipes: ["Nêm nếm canh cà chua trứng gà", "Ướp thịt bò né thăn mềm"],
        reviews: [
            { user: "Mẹ Thủy", stars: 5, comment: "Gói lớn tiết kiệm, hạt nêm hầm xương ngọt thanh vừa vị, dùng kho hay nấu canh đều rất đậm đà.", photo: "assets/images/knorr_seasoning.png", date: "2026-06-08" }
        ]
    },
    {
        id: 34,
        name: "Tương Cà Chua Heinz Tomato Ketchup",
        price: 42000,
        oldPrice: null,
        unit: "Chai 300g",
        category: "condiment",
        image: "assets/images/heinz_ketchup.png",
        badge: "Heinz Mỹ",
        badgeType: "fresh",
        flashSale: false,
        brand: "Heinz",
        standards: ["Nhập khẩu"],
        isNew: false,
        weight: "300g",
        expiry: "24 tháng kể từ ngày sản xuất",
        origin: "Mỹ",
        nutrition: "Chiết xuất tương cà chua chín đỏ tự nhiên đậm đà, không phụ gia độc hại tốt cho sức khỏe.",
        recipes: ["Chấm khoai tây chiên McCain", "Làm sốt cà chua cho mì Ý sốt bò bằm"],
        reviews: [
            { user: "Tú Anh", stars: 5, comment: "Tương cà Heinz trứ danh vị chua ngọt cân bằng, mịn màng và đặc sánh hơn hẳn tương cà thường.", photo: "assets/images/heinz_ketchup.png", date: "2026-06-09" }
        ]
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
        flashSale: false,
        brand: "Coca-Cola",
        standards: [],
        isNew: false,
        weight: "320ml",
        expiry: "12 tháng kể từ ngày sản xuất",
        origin: "Việt Nam",
        nutrition: "Nước giải khát có gas vị cola nguyên bản sảng khoái cực đỉnh, công thức ít đường tốt cho cơ thể.",
        recipes: ["Uống trực tiếp cùng nước đá viên lạnh giải khát", "Làm gà kho Coca-Cola độc đáo"],
        reviews: [
            { user: "Đăng Khoa", stars: 5, comment: "Cola uống lạnh ga sủi mạnh sảng khoái dã man, ăn đồ nướng hay đồ chiên kèm lon nước này là đỉnh nhất.", photo: "", date: "2026-06-08" }
        ]
    },
    {
        id: 36,
        name: "Nước Lau Sàn Hương Hoa Thiên Nhiên Sunlight",
        price: 82000,
        oldPrice: 95000,
        unit: "Can 2kg",
        category: "household",
        image: "assets/images/sunlight_floor_cleaner.png",
        badge: "Thơm lâu",
        badgeType: "fresh",
        flashSale: false,
        brand: "Sunlight",
        standards: [],
        isNew: false,
        weight: "2kg",
        expiry: "3 năm kể từ ngày sản xuất",
        origin: "Việt Nam",
        nutrition: "Sử dụng tinh dầu thảo mộc thiên nhiên làm sạch bong bóng sàn, tỏa hương thơm ngát dễ chịu lâu phai.",
        recipes: ["Lau sạch sàn nhà các loại đá gạch, gỗ cao cấp"],
        reviews: [
            { user: "Chị Hà", stars: 5, comment: "Lau sàn cực kỳ nhanh khô, không bị nhớt rít bàn chân, hương hoa thảo mộc thơm nhẹ nhàng và đuổi muỗi tốt.", photo: "assets/images/sunlight_floor_cleaner.png", date: "2026-06-08" }
        ]
    },
    {
        id: 37,
        name: "Khăn Giấy Rút Lụa Cao Cấp Silkwell",
        price: 28000,
        oldPrice: null,
        unit: "Gói 200 tờ",
        category: "household",
        image: "assets/images/silkwell_tissue.png",
        badge: "Mềm mịn",
        badgeType: "fresh",
        flashSale: false,
        brand: "Silkwell",
        standards: [],
        isNew: true,
        weight: "200 tờ",
        expiry: "5 năm kể từ ngày sản xuất",
        origin: "Việt Nam",
        nutrition: "Sản xuất từ 100% bột giấy tự nhiên nguyên chất, khăn giấy rút dai mềm mịn màng tuyệt đối.",
        recipes: ["Sử dụng lau mặt, lau miệng trong bữa ăn gia đình", "Lau sạch vết bẩn nhẹ trên bàn ăn"],
        reviews: [
            { user: "Thùy Lâm", stars: 5, comment: "Giấy lụa siêu dai mềm, không hề bị mủn vụn bột giấy khi lau ướt, dùng rất êm da mặt.", photo: "assets/images/silkwell_tissue.png", date: "2026-06-07" }
        ]
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
        flashSale: false,
        brand: "Aura Herbals",
        standards: ["Organic"],
        isNew: false,
        weight: "300ml",
        expiry: "3 năm kể từ ngày sản xuất",
        origin: "Việt Nam",
        nutrition: "Chiết xuất từ bồ kết đun cô đặc, hương nhu, vỏ bưởi giúp nuôi dưỡng chân tóc đen mượt óng ả.",
        recipes: ["Gội đầu hàng ngày dưỡng chân tóc khỏe mạnh ngăn rụng"],
        reviews: [
            { user: "Chị Mai", stars: 5, comment: "Dầu gội bồ kết vỏ bưởi thơm cổ điển rất dễ chịu, gội được hơn 2 tuần thấy bớt rụng tóc và tóc mềm bóng hẳn.", photo: "", date: "2026-06-06" }
        ]
    },
    {
        id: 39,
        name: "Kem đánh răng Co.opshopping",
        price: 68000,
        oldPrice: 80000,
        unit: "Tuýp 100g",
        category: "personalcare",
        image: "assets/images/coop_toothpaste.png",
        badge: "Chống ê buốt",
        badgeType: "fresh",
        flashSale: false,
        brand: "Co.opshopping",
        standards: ["Organic"],
        isNew: true,
        weight: "100g",
        expiry: "3 năm kể từ ngày sản xuất",
        origin: "Việt Nam",
        nutrition: "Hoạt chất sinh học tự nhiên củng cố men răng, tạo màng bọc chống ê buốt khi ăn đồ nóng lạnh.",
        recipes: ["Đánh răng ít nhất ngày 2 lần giúp bảo vệ nụ cười sáng khỏe"],
        reviews: [
            { user: "Huy Hoàng", stars: 5, comment: "Kem đánh răng vị bạc hà trà xanh tự nhiên mát nhẹ, giảm hẳn cảm giác ê buốt răng khi uống đá.", photo: "assets/images/coop_toothpaste.png", date: "2026-06-08" }
        ]
    }
];

/* ==========================================================================
   THEME SWITCHER
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
            image: "https://images.unsplash.com/photo-1568584269604-55860b8d8569?auto=format&fit=crop&w=400&q=80",
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
            image: "assets/images/usda_beef.png",
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
            image: "assets/images/cj_dumplings.png",
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
            image: "assets/images/coop_cashews.png",
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
            image: "assets/images/phu_quoc_fish_sauce.png",
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
            title: "Nước rửa chén Co.opshopping",
            subtitle: "Can 1.2L Tinh Dầu Quế",
            price: "75.000đ",
            productId: 11,
            image: "assets/images/coop_dishwash.png",
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
            image: "assets/images/lemongrass_shower_gel.png",
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
    const confirmBtn = document.getElementById('cart-checkout-btn');
    if (!confirmBtn) return;

    confirmBtn.addEventListener('click', () => {
        // 1. CHECK CART EMPTY
        if (cart.length === 0) {
            alert("Giỏ hàng của bạn đang trống! Vui lòng chọn sản phẩm trước khi thanh toán.");
            return;
        }

        // 2. Simulated order request
        const originalBtnText = confirmBtn.innerHTML;
        confirmBtn.disabled = true;
        confirmBtn.innerHTML = '<span>Đang xác nhận đơn hàng...</span> <i class="fas fa-spinner fa-spin"></i>';
        confirmBtn.style.opacity = '0.8';

        setTimeout(() => {
            // Restore button
            confirmBtn.disabled = false;
            confirmBtn.innerHTML = originalBtnText;
            confirmBtn.style.opacity = '1';

            const name = "Khách hàng";
            const deliveryTimeStr = "Giao nhanh 36 phút";

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
            const paymentMethodStr = "COD";

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
            showToast(`Đơn hàng của bạn đã được tạo thành công!`);
            alert(`Cảm ơn bạn! Đơn hàng của bạn đã được tiếp nhận.\n\nThời gian nhận hàng: ${deliveryTimeStr}\n\nĐội ngũ giao hàng Co.opshopping sẽ giao tới bạn trong giây lát.`);

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

            renderCart();

            // Close Drawer
            const drawer = document.getElementById('cart-drawer');
            const overlay = document.getElementById('cart-drawer-overlay');
            if (drawer) drawer.classList.remove('open');
            if (overlay) overlay.classList.remove('open');
            document.body.style.overflow = '';

            // Scroll to top
            window.scrollTo({top: 0, behavior: 'smooth'});

        }, 1500);
    });
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

