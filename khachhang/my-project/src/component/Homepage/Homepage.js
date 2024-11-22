/* src/component/Homepage/Homepage.js */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
    const navigate = useNavigate();

    const goToService = () => {
        navigate('/service');
    };

    return (
        <div className="homepage-container">
            <div className="flex">
                {/* Sidebar */}
                <div className="sidebar">
                    <ul className="sidebar-list">
                        <li onClick={goToService}>Sửa Điện Thoại</li>
                        <li>Sửa Chữa Laptop</li>
                        <li>Sửa MacBook</li>
                        <li>Điện Thoại Cũ Giá Rẻ</li>
                        <li>Phụ Kiện</li>
                        <li>Sửa Máy Tính Bảng</li>
                        <li>Linh Kiện Laptop</li>
                        <li>Sửa AirPods</li>
                        <li>Sửa Apple Watch</li>
                        <li>Thu Cũ Lên Đời</li>
                        <li>Tin Công Nghệ</li>
                    </ul>
                </div>

                {/* Main Section */}
                <div className="main-section">
                    {/* Banner */}
                    <div className="banner">
                        <img src="https://cdni.dienthoaivui.com.vn/690x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/dbbdbddc82ff623183c9c6f273327e21.jpg" alt="Banner chính" className="banner-image" />
                    </div>

                    {/* Product Cards */}
                    <div className="product-cards">
                        <div className="product-card" onClick={goToService}>
                            <img src="https://cdni.dienthoaivui.com.vn/690x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/dbbdbddc82ff623183c9c6f273327e21.jpg" alt="Banner chính" className="banner-image"  />
                            <h3>PIN PISEN SIÊU CAO</h3>
                            <p>Chỉ từ 450K</p>
                        </div>
                        <div className="product-card" onClick={goToService}>
                            <img src="https://cdni.dienthoaivui.com.vn/690x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/dbbdbddc82ff623183c9c6f273327e21.jpg" alt="Banner chính" className="banner-image" />
                            <p>Chỉ từ 300K</p>
                        </div>
                        <div className="product-card" onClick={goToService}>
                            <img src="https://cdni.dienthoaivui.com.vn/690x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/dbbdbddc82ff623183c9c6f273327e21.jpg" alt="Banner chính" className="banner-image" />
                            <h3>CÁP SẠC IPHONE 14</h3>
                            <p>Chỉ từ 1.65 Triệu</p>
                        </div>
                        <div className="product-card" onClick={goToService}>
                            <img src="https://cdni.dienthoaivui.com.vn/690x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/dbbdbddc82ff623183c9c6f273327e21.jpg" alt="Banner chính" className="banner-image"  />
                            <h3>MÀN HÌNH OPPO</h3>
                            <p>Chỉ từ 550K</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
