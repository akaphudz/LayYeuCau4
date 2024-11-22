// src/context/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Hàm thêm sản phẩm vào giỏ hàng
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    // Hàm xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    // Hàm cập nhật trạng thái đơn hàng (sử dụng để hủy đơn hàng hoặc cập nhật tiến độ)
    const updateCartItemStatus = (itemId, newStatus) => {
        setCartItems(cartItems.map(item => 
            item.id === itemId ? { ...item, status: newStatus } : item
        ));
    };

    // Hàm hủy đơn hàng sửa chữa
    const cancelRepairOrder = (itemId) => {
        // Xóa đơn hàng khỏi giỏ hàng nếu hủy
        removeFromCart(itemId);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItemStatus, cancelRepairOrder }}>
            {children}
        </CartContext.Provider>
    );
};
