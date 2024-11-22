import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateRepairProgress() {
  const [orders, setOrders] = useState([
    { id: '0001', customer: 'Nguyễn Đắc Quỳnh Mi', status: 'Đang thực hiện' },
    { id: '0002', customer: 'Trần Văn B', status: 'Hoàn thành' },
    // Thêm các đơn hàng khác nếu cần
  ]);

  const navigate = useNavigate(); // Dùng để điều hướng đến trang sửa chữa chi tiết

  // Xử lý khi nhấn "Cập nhật tiến độ"
  const handleUpdateClick = (orderId) => {
    navigate(`/repair-status/${orderId}`); // Điều hướng đến trang chi tiết của đơn hàng
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Cập Nhật Tiến Độ</h1>
      {orders.map((order) => (
        <div key={order.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <h2 className="font-bold text-xl">Đơn Hàng #{order.id}</h2>
          <p><strong>Khách hàng:</strong> {order.customer}</p>
          <p><strong>Trạng thái:</strong> {order.status}</p>
          <button
            onClick={() => handleUpdateClick(order.id)} // Điều hướng tới trang cập nhật tiến độ
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Cập nhật tiến độ
          </button>
          <button className="mt-4 ml-2 bg-green-500 text-white px-4 py-2 rounded-lg">
            Gửi thông tin cho nhân viên sửa chữa
          </button>
        </div>
      ))}
    </div>
  );
}

export default UpdateRepairProgress;
