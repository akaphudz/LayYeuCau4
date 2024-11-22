// src/component/PaymentPage/PaymentPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Giả sử có dữ liệu chi tiết đơn hàng từ API hoặc context
  const orderDetails = {
    id,
    deviceName: 'iPhone 11',
    repairCost: 990000,
    customerName: 'Nguyễn Văn A',
    phoneNumber: '0987654321',
    email: 'nguyenvana@gmail.com',
    storeAddress: '132 Đ. Nguyễn Thị Tú, Bình Tân, TP. HCM',
  };

  const handleStorePayment = () => {
    alert(
      `Vui lòng đến cửa hàng tại địa chỉ: ${orderDetails.storeAddress} để tiến hành thanh toán.`
    );
  };

  const handleOnlinePayment = () => {
    navigate(`/online-payment/${orderDetails.id}`);
  };

  return (
    <div className="payment-page-container">
      <h1>Thông Tin Thanh Toán</h1>
      <div className="order-details">
        <h2>Thông Tin Đơn Hàng</h2>
        <p><strong>Tên Thiết Bị:</strong> {orderDetails.deviceName}</p>
        <p><strong>Chi Phí Sửa Chữa:</strong> {orderDetails.repairCost.toLocaleString('vi-VN')} đ</p>
        <p><strong>Khách Hàng:</strong> {orderDetails.customerName}</p>
        <p><strong>Số Điện Thoại:</strong> {orderDetails.phoneNumber}</p>
        <p><strong>Email:</strong> {orderDetails.email}</p>
        <p><strong>Địa Chỉ Cửa Hàng:</strong> {orderDetails.storeAddress}</p>
      </div>

      <div className="payment-options">
        <h2>Lựa Chọn Thanh Toán</h2>
        <button className="payment-button" onClick={handleStorePayment}>Thanh Toán Tại Cửa Hàng</button>
        <button className="payment-button online" onClick={handleOnlinePayment}>Thanh Toán Online</button>
      </div>
    </div>
  );
};

export default PaymentPage;
