// src/component/RepairSummaryPage/RepairSummaryPage.js
import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './RepairSummaryPage.css';
import { CartContext } from '../../context/CartContext'; // Import CartContext

const RepairSummaryPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { removeFromCart } = useContext(CartContext); // Lấy hàm xóa sản phẩm khỏi giỏ hàng từ context
  
  // State quản lý trạng thái hủy
  const [isCancelling, setIsCancelling] = useState(false);
  const [cancelReason, setCancelReason] = useState('');

  // Giả sử có dữ liệu sửa chữa từ API hoặc context
  const repairDetails = {
    id,
    deviceName: 'iPhone 11',
    repairCost: 990000,
    status: 'repairing',
    issues: [
      'Pin chai cần thay thế',
      'Màn hình có thể bị xước nhẹ',
    ],
  };

  // Điều hướng đến trang trạng thái sửa chữa
  const handleConfirmRepair = () => {
    navigate(`/repair-status/${id}`);
  };

  // Hiển thị form hủy
  const handleCancelRepair = () => {
    setIsCancelling(true);
  };

  // Xử lý khi xác nhận hủy sửa chữa
  const handleConfirmCancel = () => {
    // Xóa đơn hàng khỏi giỏ hàng thông qua context
    removeFromCart(id);
    console.log('Đơn hàng đã bị hủy với lý do:', cancelReason);
    // Điều hướng về trang giỏ hàng sau khi hủy
    navigate('/cart');
  };

  // Quay lại mà không hủy
  const handleCancelReturn = () => {
    setIsCancelling(false);
  };

  return (
    <div className="repair-summary-page">
      <h1>Chi Tiết Thiết Bị</h1>
      <div className="device-details">
        <h2>{repairDetails.deviceName}</h2>
        <p>Trạng thái sửa chữa: {repairDetails.status === 'repairing' ? 'Đang sửa chữa' : 'Sửa chữa hoàn tất'}</p>
        <h3>Chi phí sửa chữa: {repairDetails.repairCost.toLocaleString('vi-VN')} đ</h3>
        <h3>Vấn đề:</h3>
        <ul>
          {repairDetails.issues.map((issue, index) => (
            <li key={index}>{issue}</li>
          ))}
        </ul>
        {!isCancelling ? (
          <>
            <button className="confirm-repair-button" onClick={handleConfirmRepair}>
              Xác Nhận Sửa Chữa
            </button>
            <button className="cancel-repair-button" onClick={handleCancelRepair}>
              Hủy Sửa Chữa
            </button>
          </>
        ) : (
          <div className="cancel-form">
            <h3>Lý do hủy:</h3>
            <textarea
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              placeholder="Vui lòng nhập lý do hủy..."
              className="cancel-reason-textarea"
            ></textarea>
            <div className="cancel-buttons">
              <button className="confirm-cancel-button" onClick={handleConfirmCancel}>
                Xác Nhận Hủy
              </button>
              <button className="return-button" onClick={handleCancelReturn}>
                Quay Lại
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepairSummaryPage;
