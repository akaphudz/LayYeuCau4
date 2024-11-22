// src/components/ProfilePage.js
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext'; // Đảm bảo bạn đang sử dụng đúng đường dẫn đến UserContext
import './ProfileForm.css';

const ProfilePage = () => {
    const { user, setUser } = useContext(UserContext); // Lấy giá trị từ context

    // Thêm email vào state ban đầu với giá trị từ context hoặc mặc định.
    const [name, setName] = useState(user.name);
    const [phone, setPhone] = useState(user.phone);
    const [address, setAddress] = useState(user.address);
    const [email, setEmail] = useState(user.email || 'Quynhmi123@gmail.com');

    // Hàm để lưu thông tin cập nhật vào context
    const handleSave = () => {
        setUser({ name, phone, address, email });
        alert('Thông tin cá nhân đã được cập nhật!');
    };

    return (
        <div className="profile-form-container">
            <div className="profile-form-header">Thông tin cá nhân</div>
            <div className="profile-form-field">
                <label className="profile-form-label">Tên:</label>
                <input
                    type="text"
                    value={name}
                    className="profile-form-input"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="profile-form-field">
                <label className="profile-form-label">SĐT:</label>
                <input
                    type="text"
                    value={phone}
                    className="profile-form-input"
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className="profile-form-field">
                <label className="profile-form-label">Địa chỉ:</label>
                <input
                    type="text"
                    value={address}
                    className="profile-form-input"
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div className="profile-form-field">
                <label className="profile-form-label">Email:</label>
                <input
                    type="email"
                    value={email}
                    className="profile-form-input"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="profile-form-actions">
                <button className="profile-form-button" onClick={handleSave}>
                    Lưu thông tin
                </button>
                <button className="profile-form-button" onClick={() => window.history.back()}>
                    Quay lại
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;
