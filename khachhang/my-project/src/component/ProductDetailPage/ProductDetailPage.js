// src/component/ProductDetailPage/ProductDetailPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Danh sách sản phẩm để tìm thông tin chi tiết sản phẩm
    const products = [
        {
            id: 1,
            title: 'Thay pin iPhone 11 dung lượng siêu cao chính hãng Pisen',
            price: '990.000 đ',
            oldPrice: '1.520.000 đ',
            discount: 'Giảm 35%',
            warranty: '12 tháng chính hãng',
            serviceTime: '30 phút',
            imageUrl: 'https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/thay-pin-pisen-dung-luong-sieu-cao-iphone-008.jpg',
            note: 'Thay Pin mua kèm Cáp - Sạc - Pin dự phòng giảm thêm 5%, giá chỉ từ 59k',
            insurance: 'Bảo hiểm 2 triệu USD',
            warrantyBanner: 'Đặc quyền Học Sinh - Sinh Viên - Giảm thêm 10% cho sản phẩm',
        }
        // Thêm các sản phẩm khác...
    ];

    // Danh sách cửa hàng
    const stores = [
        "132 Đ. Nguyễn Thị Tú, Bình Hưng Hoà B, Quận Bình Tân, TP. HCM",
        "191 Khánh Hội, Phường 6, Quận 4, TP. HCM",
        "81A Trần Quang Khải, Phường Tân Định, Quận 1, TP. HCM",
        "250 Hoàng Văn Thụ, P. 4, Q. Tân Bình, TP. HCM",
        "570 Âu Cơ, Phường 10, Quận Tân Bình, TP. HCM",
        "129 Lê Văn Việt, Phường Hiệp Phú, Quận 9, TP. HCM"
    ];

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div>Không tìm thấy sản phẩm</div>;
    }

    // Hàm chuyển hướng đến trang đặt lịch
    const handleBookingClick = () => {
        navigate('/booking');
    };

    return (
        <div className="product-detail-container">
            <h1 className="product-detail-title">{product.title}</h1>
            <div className="product-detail-content">
                <div className="product-detail-left">
                    <img src={product.imageUrl} alt={product.title} className="product-detail-image" />
                    <div className="warranty-info">
                        <div className="warranty-info-item">
                            <span>Bảo hành: {product.warranty}</span>
                        </div>
                        <div className="warranty-info-item">
                            <span>Lấy ngay: {product.serviceTime}</span>
                        </div>
                        <div className="warranty-info-item">
                            <span>{product.insurance}</span>
                        </div>
                    </div>
                </div>
                <div className="product-detail-right">
                    <div className="price-info">
                        <span className="current-price">{product.price}</span>
                        <span className="old-price">{product.oldPrice}</span>
                    </div>
                    <p className="product-note">{product.note}</p>
                    <div className="warranty-banner">{product.warrantyBanner}</div>
                    <div className="call-to-action">
                        <button className="booking-button" onClick={handleBookingClick}>Đặt lịch sửa chữa
                            <div className="sub-text">(Sửa chữa tại cửa hàng)</div>
                        </button>
                        <button className="call-button">Gọi: 1800 2064</button>
                    </div>
                    {/* Thông tin thêm về sản phẩm */}
                    <div className="product-info-box">
                        <div className="info-box-title">THÔNG TIN SẢN PHẨM</div>
                        <p className="info-box-content">
                            Giá sản phẩm đã bao gồm công thợ - Không phát sinh thêm phí và đã bao gồm VAT.
                        </p>
                    </div>
                    {/* Phần danh sách cửa hàng */}
                    <div className="store-list-container">
                        <h2>15 Cửa Hàng Có Sản Phẩm</h2>
                        <select className="store-select">
                            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                            {/* Thêm các thành phố khác nếu cần */}
                        </select>
                        <ul className="store-list">
                            {stores.map((store, index) => (
                                <li key={index} className="store-item">
                                    {store}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Phần mô tả chi tiết sản phẩm */}
            <div className="product-description">
                <h2>Giới thiệu sản phẩm</h2>
                <p>
                    Thay pin iPhone 11 dung lượng siêu cao chính hãng Pisen hiện đang là sản phẩm được nhiều người ưa chuộng hiện nay tại Điện Thoại Vui. Pin Pisen là dòng pin chuyên dụng cho iPhone, được cấu tạo với lõi Polymer A+, giúp việc sạc pin diễn ra nhanh chóng cũng kéo dài tuổi thọ tốt hơn nhiều loại pin iPhone trên thị trường. Theo dõi ngay nội dung dưới đây để biết thêm những đặc điểm và ưu điểm của loại pin Pisen nhé!
                </p>
            </div>
        </div>
    );
};

export default ProductDetailPage;
