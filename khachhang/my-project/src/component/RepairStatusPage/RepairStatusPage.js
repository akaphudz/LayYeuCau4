// src/component/RepairStatusPage/RepairStatusPage.js
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './RepairStatusPage.css';

const RepairStatusPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Giả sử có dữ liệu cập nhật từ API hoặc context
  const repairSteps = [
    { step: 1, title: "Kiểm tra thiết bị", description: "Nhân viên Nguyễn Văn A đang tiến hành kiểm tra thiết bị.", status: "in-progress" },
    { step: 2, title: "Báo giá sửa chữa", description: "Nhân viên Nguyễn Văn A đã báo giá sửa chữa cho khách hàng.", status: "completed" },
    { step: 3, title: "Tiến hành sửa chữa", description: "Nhân viên Nguyễn Văn A đang sửa chữa thiết bị.", status: "in-progress" },
    { step: 4, title: "Hoàn tất sửa chữa", description: "Thiết bị đã được sửa chữa xong.", status: "completed" }
  ];

  const handlePaymentClick = () => {
    navigate(`/payment/${id}`);
  };

  return (
    <div className="repair-status-container">
      <h1 className="status-title">Cập Nhật Tiến Độ</h1>
      {repairSteps.map((step) => (
        <div key={step.step} className={`status-step ${step.status === 'completed' ? 'completed' : ''}`}>
          <h2 className="status-step-title">Bước {step.step}: {step.title}</h2>
          <p className="status-step-description">{step.description}</p>
          <p className={`status-step-status ${step.status}`}>Trạng thái: {step.status === 'in-progress' ? 'Đang thực hiện' : 'Hoàn thành'}</p>
        </div>
      ))}
      
      {/* Thêm nút Tiến Hành Thanh Toán */}
      <div className="payment-button-container">
        <button className="payment-button" onClick={handlePaymentClick}>Tiến Hành Thanh Toán</button>
      </div>
    </div>
  );
};

export default RepairStatusPage;
