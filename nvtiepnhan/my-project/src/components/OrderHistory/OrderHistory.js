import React, { useState } from "react";

function OrderHistory() {
  const [orders] = useState([
    {
      id: "0001",
      deviceName: "Thay pin iPhone 11",
      orderDate: "12/12/2024",
      status: "Đã hoàn tất",
      customerName: "Nguyễn Đắc Quỳnh Mi",
      phoneNumber: "0123456789",
      email: "nguyenvana@gmail.com",
      storeAddress: "132 Đ. Nguyễn Thị Tú, Bình Tân, TP. HCM",
      paymentMethod: "Thanh Toán Bằng QR Code",
      repairCost: "990.000 đ",
      repairDetail: "Thay pin iPhone 11 dung lượng siêu cao chính hãng Pisen",
    },
    // Bạn có thể thêm nhiều đơn hàng hơn vào đây nếu muốn
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Lịch Sử Đơn Hàng</h1>

      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">{order.deviceName}</h2>
            <p>
              <strong>Tên Khách Hàng:</strong> {order.customerName}
            </p>
            <p>
              <strong>Ngày Đặt:</strong> {order.orderDate}
            </p>
            <p>
              <strong>Trạng Thái:</strong> {order.status}
            </p>
            <p>
              <strong>Số Điện Thoại:</strong> {order.phoneNumber}
            </p>
            <p>
              <strong>Email:</strong> {order.email}
            </p>
            <p>
              <strong>Địa Chỉ Cửa Hàng:</strong> {order.storeAddress}
            </p>
            <p>
              <strong>Phương Thức Thanh Toán:</strong> {order.paymentMethod}
            </p>
            <p>
              <strong>Chi Phí Sửa Chữa:</strong> {order.repairCost}
            </p>
            <p>
              <strong>Chi Tiết Sửa Chữa:</strong> {order.repairDetail}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-600">Chưa có đơn hàng nào.</p>
      )}
    </div>
  );
}

export default OrderHistory;
