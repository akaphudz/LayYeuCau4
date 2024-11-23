// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">HelpMe</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Dashboard</Link>
          <Link to="/receive-request" className="hover:underline">Tiếp nhận yêu cầu</Link>
          <Link to="/assign-repair" className="hover:underline">Phân công sửa chữa</Link>
          <Link to="/update-progress" className="hover:underline">Cập nhật tiến độ</Link>
          <Link to="/check-customer" className="hover:underline">Kiểm tra khách hàng</Link>
          <Link to="/create-invoice" className="hover:underline">Tạo Hóa Đơn</Link>
          <Link to="/order-history" className="hover:underline">Lịch Sử Đơn Hàng</Link>
          <Link to="/warranty-info" className="hover:underline">Thông Tin Bảo Hành</Link>
          <Link to="/customer-feedback" className="hover:underline">Phản Hồi Khách Hàng</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
