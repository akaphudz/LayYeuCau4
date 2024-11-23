import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Login.css';

const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // Ngăn chặn submit mặc định

        // Kiểm tra tài khoản mặc định để đăng nhập thành công
        const trimmedPhone = phone.trim(); // Bỏ khoảng trắng ở đầu và cuối số điện thoại
        const trimmedPassword = password.trim(); // Bỏ khoảng trắng ở đầu và cuối mật khẩu

        if (trimmedPhone === '0123456789' && trimmedPassword === 'Mi123456') {
            // Lưu thông tin người dùng vào Context
            setUser({ 
                name: 'Nguyễn Đắc Quỳnh Mi', 
                phone: trimmedPhone, 
                address: '567 Đặng Thùy Trâm', 
                email: 'konamiid2808@gmail.com' 
            });
            navigate('/profile'); // Điều hướng đến trang cá nhân
        } else {
            alert('Số điện thoại hoặc mật khẩu không chính xác');
        }
    };

    return (
        <div className="login-container">
            <h2>Đăng Nhập</h2>
            <form onSubmit={handleLogin}>
                <div className="login-field">
                    <label>Số điện thoại:</label>
                    <input 
                        type="text" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        placeholder="Nhập số điện thoại" 
                    />
                </div>
                <div className="login-field">
                    <label>Mật khẩu:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Nhập mật khẩu" 
                    />
                </div>
                <button type="submit" className="login-button">Đăng Nhập</button>
            </form>
            {/* Thêm các tùy chọn cho Đăng ký và Quên mật khẩu */}
            <div className="login-options">
                <Link to="/register" className="login-link">Đăng ký</Link>
                <Link to="/forgot-password" className="login-link">Quên mật khẩu?</Link>
            </div>
        </div>
    );
};

export default Login;
