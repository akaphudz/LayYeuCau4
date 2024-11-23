// src/components/RegisterPage/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Logic để xử lý đăng ký (sau này có thể kết nối với backend)
        alert('Đăng ký thành công!');
        navigate('/login'); // Điều hướng đến trang đăng nhập sau khi đăng ký thành công
    };

    return (
        <div className="register-container">
            <h2>Đăng Ký</h2>
            <form onSubmit={handleRegister}>
                <div className="register-field">
                    <label>Họ Tên:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Nhập họ tên"
                        required
                    />
                </div>
                <div className="register-field">
                    <label>Số Điện Thoại:</label>
                    <input 
                        type="text" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="Nhập số điện thoại"
                        required
                    />
                </div>
                <div className="register-field">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Nhập email"
                        required
                    />
                </div>
                <div className="register-field">
                    <label>Địa Chỉ:</label>
                    <input 
                        type="text" 
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)} 
                        placeholder="Nhập địa chỉ"
                        required
                    />
                </div>
                <div className="register-field">
                    <label>Mật Khẩu:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Nhập mật khẩu"
                        required
                    />
                </div>
                <button type="submit" className="register-button">Đăng Ký</button>
            </form>
            <div className="login-link-container">
                <p>Đã có tài khoản? <span className="login-link" onClick={() => navigate('/login')}>Đăng Nhập</span></p>
            </div>
        </div>
    );
};

export default Register;
