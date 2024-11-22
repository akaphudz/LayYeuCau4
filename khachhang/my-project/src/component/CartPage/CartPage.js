// src/component/CartPage/CartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();

    const handleItemClick = (item) => {
        navigate(`/repair-summary/${item.id}`);
    };

    return (
        <div className="cart-page-container">
            <h1 className="cart-page-title">Giỏ Hàng</h1>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">Giỏ hàng của bạn hiện đang trống.</p>
            ) : (
                <div className="cart-items-list">
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item" onClick={() => handleItemClick(item)}>
                            <img
                                src="https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/thay-pin-pisen-dung-luong-sieu-cao-iphone-008.jpg"
                                alt={item.name}
                                className="cart-item-image"
                            />
                            <div className="cart-item-details">
                                <h2>{item.name}</h2>
                                <p>Giá: {item.price.toLocaleString('vi-VN')} đ</p>
                                <p>Cửa hàng: {item.store}</p>
                                <p>Ngày đặt lịch: {new Date(item.appointmentTime).toLocaleString()}</p>
                                <p className={`status ${item.status}`}>
                                    Trạng thái: {item.status === 'repairing' ? 'Đang sửa chữa' : 'Sửa chữa thành công'}
                                </p>
                                <button className="remove-button" onClick={(e) => {
                                    e.stopPropagation(); // Để tránh kích hoạt sự kiện click điều hướng
                                    removeFromCart(item.id);
                                }}>Xóa</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CartPage;
