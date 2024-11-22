import React from "react";
import { useLocation } from "react-router-dom";

function AssignRepair() {
  const location = useLocation();
  const customer = location.state?.customer;

  const technicians = [
    { id: 1, name: "Nguyễn Văn A", skill: "Sửa chữa điện thoại" },
    { id: 2, name: "Trần Thị B", skill: "Sửa chữa laptop" },
    { id: 3, name: "Lê Văn C", skill: "Sửa chữa máy tính bảng" },
  ];

  const handleAssign = (technician) => {
    // Thay đổi thông báo khi phân công
    alert(`Đơn hàng #0001 đã được tạo thành công`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Phân Công Sửa Chữa</h1>

      {/* Hiển thị thông tin khách hàng */}
      {customer ? (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Thông Tin Khách Hàng</h2>
          <p><strong>Tên:</strong> {customer.name}</p>
          <p><strong>Email:</strong> {customer.email}</p>
          <p><strong>Số điện thoại:</strong> {customer.phone}</p>
        </div>
      ) : (
        <p className="text-red-600">Không có thông tin khách hàng. Vui lòng kiểm tra lại.</p>
      )}

      {/* Hiển thị danh sách nhân viên */}
      <h2 className="text-xl font-bold text-gray-700 mb-4">Danh Sách Nhân Viên</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {technicians.map((technician) => (
          <div key={technician.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold">{technician.name}</h3>
            <p>Kỹ năng: {technician.skill}</p>
            <button
              onClick={() => handleAssign(technician)}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition duration-200"
            >
              Phân Công
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignRepair;
