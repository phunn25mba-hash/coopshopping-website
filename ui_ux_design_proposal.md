# Thiết kế Trải nghiệm Người dùng (UI/UX) & Cấu trúc Front-end cho Co.opShopping

Tài liệu này trình bày giải pháp thiết kế giao diện chi tiết, tối ưu hóa trải nghiệm người dùng (UI/UX) và kiến trúc Front-end dành riêng cho website **Co.opShopping (Siêu thị thực phẩm hữu cơ, FMCG & Gia dụng cao cấp)** theo mô hình triển khai thực tế của ứng dụng.

---

## 1. Định hướng Thiết kế & Hệ màu sắc Chủ đạo (Brand Identity)
Dựa trên yêu cầu của khách hàng về một giao diện sáng, tươi trẻ và thanh lịch sử dụng tông màu **Xanh Dương Baby Blue**, hệ thống màu sắc được cấu trúc bằng các biến CSS như sau:

* **Màu nền thanh Header:** `#89CFF0` (Màu xanh pastel nhẹ nhàng, dịu mát).
* **Màu văn bản/icon trên Header:** `#1E293B` (Màu đá phiến đậm - Dark Slate, đảm bảo độ tương phản 7.3:1 WCAG AAA).
* **Màu nhấn chính (CTA/Borders):** `#38BDF8` (Vibrant Baby Blue).
* **Màu giá/Khuyến mãi (Accent):** `#F97316` (Màu cam ấm áp, tạo sự chú ý tức thì).
* **Màu nền trang web:** `#F8F9FA` (Nền xám nhạt tinh khiết giúp nổi bật sản phẩm).

---

## 2. Bản vẽ Cấu trúc Bố cục Giao diện (Wireframe & Image Asset Plan)

### 2.1. Thanh Công cụ Đầu trang (Header Navigation)
* Bố cục ngang cố định (sticky) gồm 3 khối:
  1. **Bên trái (Logo):** Sử dụng tệp hình ảnh logo gốc tách nền trong suốt [logo_transparent.png](file:///C:/Users/PHU/.gemini/antigravity/scratch/aura_digital_agency/assets/images/logo_transparent.png).
  2. **Ở giữa (Thanh tìm kiếm):** Ô nhập liệu màu trắng nổi bật, bo tròn hoàn toàn, đi kèm kính lúp màu xanh dương.
  3. **Bên phải (Hành động):** Các nút "Đăng nhập", "Đặt lại Đơn hàng", và "Giỏ hàng" (có badge màu đỏ hiển thị số lượng sản phẩm).

---

### 2.2. Phần Giới thiệu & Ưu đãi lớn (Hero Section - Tỷ lệ 3:1)
Phần giới thiệu đầu trang sử dụng bố cục chia đôi (2 cột) trên máy tính và xếp chồng 1 cột trên điện thoại di động:
* **Cột trái:** Tiêu đề lớn (H1), dòng mô tả dịch vụ giao nhanh 36 phút, và nút kêu gọi hành động (CTA) "Mua sắm ngay" màu xanh dương.
* **Cột phải (Ảnh Banner ngang):** Sử dụng hình ảnh quầy thực phẩm hữu cơ sinh động, tươi ngon chất lượng cao.
  * **Đường link ảnh thực tế:**
    ![Quầy thực phẩm hữu cơ cao cấp Co.opShopping](https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&h=400&q=80)
  * **Mã HTML mẫu:**
    ```html
    <div class="hero-banner-image">
        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&h=400&q=80" 
             alt="Organic Grocery Display" 
             class="responsive-hero-img">
    </div>
    ```

---

### 2.3. Lưới Sản phẩm Stacked Section (Tỷ lệ 1:1 - Hình vuông)
Bố cục được chia thành các khối danh mục dọc xếp chồng (giống Kingfoodmart). Mỗi lưới sản phẩm gồm **4 cột** (trên máy tính) với hình ảnh sản phẩm định dạng vuông tỷ lệ `1:1` để hiển thị cân đối nhất:

#### Danh mục 1: Vườn Trái Cây Hữu Cơ (Fruit Section)
* **Ảnh Banner Dọc (Promo Banner - 2:3):**
  ![Dâu tây Đà Lạt tươi sạch](https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=400&h=600&q=80)
* **Các sản phẩm trong danh mục (Tỷ lệ 1:1):**
  1. *Dâu tây Đà Lạt VietGAP:*
     ![Dâu tây Đà Lạt](https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=400&h=400&q=80)
  2. *Cam sành Miền Tây:*
     ![Cam sành Bến Tre](https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=400&h=400&q=80)
  3. *Xoài cát Hòa Lộc:*
     ![Xoài cát](https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&h=400&q=80)

#### Danh mục 2: Rau Củ Quả Sạch (Fresh Vegetables)
* **Ảnh Banner Dọc (Promo Banner - 2:3):**
  ![Xà lách thủy canh tươi xanh](https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&h=600&q=80)
* **Các sản phẩm trong danh mục (Tỷ lệ 1:1):**
  1. *Rau xà lách thủy canh:*
     ![Xà lách tươi](https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?auto=format&fit=crop&w=400&h=400&q=80)
  2. *Cà chua Beef Đà Lạt:*
     ![Cà chua Beef](https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&h=400&q=80)
  3. *Súp lơ xanh Baby:*
     ![Súp lơ xanh](https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&w=400&h=400&q=80)

---

### 2.4. Đánh giá Khách hàng (Testimonial Section - Ảnh Avatar Tròn)
Phần đánh giá của khách hàng sử dụng ảnh đại diện tròn tỉ lệ `1:1` có bo tròn hoàn chỉnh (`border-radius: 50%`) để tạo cảm giác thân thiện:

1. **Khách hàng Minh Anh (Nội trợ):**
   * *Đánh giá:* "Rau củ của Co.opShopping cực kỳ tươi ngon, đóng gói sạch sẽ. Giao hàng hỏa tốc đúng 30 phút là có hàng."
   * *Đường link ảnh đại diện:*
     ![Avatar Minh Anh](https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80)
2. **Khách hàng Hoàng Nam (Nhân viên văn phòng):**
   * *Đánh giá:* "Tôi thường đặt hoa quả nhập khẩu ở đây để mang đi làm. Giá cả rất hợp lý, nhân viên phục vụ nhiệt tình."
   * *Đường link ảnh đại diện:*
     ![Avatar Hoàng Nam](https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80)
3. **Khách hàng Thúy Hằng (Doanh nhân):**
   * *Đánh giá:* "Sản phẩm hữu cơ ở đây rất đa dạng. Quy trình đặt hàng nhanh chóng, hệ thống tích điểm thành viên rất ưu đãi."
   * *Đường link ảnh đại diện:*
     ![Avatar Thúy Hằng](https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80)

---

## 3. Kiến trúc Front-end & Tối ưu hóa UI/UX
Để đáp ứng trải nghiệm mua sắm mượt mà, mã nguồn Front-end được lập trình theo các tiêu chuẩn kỹ thuật sau:

1. **Lazy Loading cho hình ảnh:** Bổ sung thuộc tính `loading="lazy"` cho tất cả các thẻ hình ảnh sản phẩm để tối ưu thời gian tải trang ban đầu.
2. **CSS Object-fit:** Thiết lập thuộc tính `object-fit: cover;` cho ảnh sản phẩm và `object-fit: contain;` cho logo để tránh hiện tượng ảnh bị bóp méo, biến dạng trên các kích thước màn hình khác nhau.
3. **Tương thích Responsive:**
   * Banner Hero tự động điều chỉnh tỷ lệ khung hình từ landscape rộng sang tỷ lệ cân đối trên điện thoại di động thông qua `@media (max-width: 768px)`.
   * Lưới sản phẩm tự động chuyển từ 4 cột (Desktop) -> 2 cột (Tablet) -> 1 cột (Mobile) để đảm bảo ngón tay của người dùng dễ dàng tương tác nhấn nút "Mua".
