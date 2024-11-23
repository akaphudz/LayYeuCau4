import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext'; 
import './Header.css';

const Header = () => {
    const { cartItems } = useContext(CartContext);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const totalItems = cartItems.length;

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
                <div className="create-repair-button">
                    <Link to="/create-repair">
                        <button>Tạo Yêu Cầu Sửa Chữa</button>
                    </Link>
                </div>
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Bạn cần tìm gì?" />
                <button className="search-icon">🔍</button>
            </div>

            <div className="header-right">
                <Link to="/cart" className="cart">Giỏ hàng 🛒 ({totalItems})</Link>
                <Link to="/appointment" className="appointment">Vận Chuyển</Link>
                <Link to="/contact" className="contact">Liên hệ</Link>
                {user?.name ? (
                    <div className="profile-button" onClick={() => navigate('/profile')}>{user.name.charAt(0)}</div>
                ) : (
                    <Link to="/login" className="login-button">Đăng nhập</Link>
                )}
            </div>
        </header>
    );
};

export default Header;
