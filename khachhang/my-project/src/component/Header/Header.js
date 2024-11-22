// src/component/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'; // Import CartContext
import './Header.css';

const Header = () => {
    const { cartItems } = useContext(CartContext); // Sử dụng CartContext để lấy thông tin giỏ hàng
    const totalItems = cartItems.length; // Tổng số sản phẩm trong giỏ hàng

    return (
        <header className="header">
            <div className="header-left">
                <div className="logo">
                    <Link to="/">HelpMe</Link>
                </div>
                <div className="menu-button">
                    <button>Danh mục</button>
                </div>
                <div className="update">
                    <Link to="/repair-status">
                    <button>Xem cập nhật sửa chữa</button>
                    </Link>
                    </div>

            </div>

            <div className="search-bar">
                <input type="text" placeholder="Bạn cần tìm gì?" />
                <button className="search-icon">🔍</button>
            </div>

            <div className="header-right">
                <Link to="/cart" className="cart">Giỏ hàng 🛒 ({totalItems})</Link> {/* Hiển thị số lượng sản phẩm trong giỏ hàng */}
                <Link to="/appointment" className="appointment">Vận Chuyển</Link>
                <Link to="/contact" className="contact">Liên hệ</Link>
                <Link to="/profile" className="profile-button">Mi</Link> {/* Thêm link đến trang profile */}
            </div>
        </header>
    );
};

export default Header;
