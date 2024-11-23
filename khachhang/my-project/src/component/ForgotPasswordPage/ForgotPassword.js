// src/components/ForgotPasswordPage/ForgotPassword.js
import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [input, setInput] = useState('');

    const handleForgotPassword = (e) => {
        e.preventDefault();

        // Kiểm tra input người dùng nhập (có thể là email hoặc sdt)
        if (input.trim() === '') {
            alert('Vui lòng nhập Số điện thoại hoặc Email');
        } else {
            // Gửi yêu cầu khôi phục mật khẩu (giả lập)
            alert(`Yêu cầu khôi phục mật khẩu đã được gửi cho ${input}`);
        }
    };

    return (
        <div className="forgot-password-container">
            <h2>Khôi Phục Mật Khẩu</h2>
            <form onSubmit={handleForgotPassword}>
                <div className="forgot-password-field">
                    <label>Số điện thoại hoặc Email:</label>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Nhập số điện thoại hoặc email"
                    />
                </div>
                <button type="submit" className="forgot-password-button">Khôi Phục Mật Khẩu</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
