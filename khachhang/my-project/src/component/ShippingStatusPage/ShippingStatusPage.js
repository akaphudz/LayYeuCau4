// src/component/ShippingStatusPage/ShippingStatusPage.js
import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext'; // Đảm bảo đường dẫn tới UserContext là chính xác
import './ShippingStatusPage.css';

const ShippingStatusPage = () => {
    const { user } = useContext(UserContext); // Lấy thông tin người dùng từ context

    // Giả sử đây là thông tin đơn hàng (dữ liệu có thể được lấy từ context hoặc API backend)
    const orderDetails = {
        deviceName: 'iPhone 11',
        repairCost: 990000,
        status: 'Đơn hàng đang trên đường giao đến bạn',
    };

    return (
        <div className="shipping-status-container">
            <h1>Thông Tin Vận Chuyển</h1>
            <div className="order-details">
                <h3>Thông Tin Đơn Hàng</h3>
                <p><strong>Tên Thiết Bị:</strong> {orderDetails.deviceName}</p>
                <p><strong>Chi Phí Sửa Chữa:</strong> {orderDetails.repairCost.toLocaleString('vi-VN')} đ</p>
                <p><strong>Khách Hàng:</strong> {user.name}</p>
                <p><strong>Số Điện Thoại:</strong> {user.phone}</p>
                <p><strong>Địa Chỉ Nhận Hàng:</strong> {user.address}</p>
                <p><strong>Trạng Thái:</strong> {orderDetails.status}</p>
            </div>
        </div>
    );
};

export default ShippingStatusPage;
