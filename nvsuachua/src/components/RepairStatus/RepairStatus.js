import React from 'react';
import { useParams } from 'react-router-dom';

function RepairStatus() {
  const { orderId } = useParams(); // Lấy thông tin ID từ URL

  // Các bước tiến độ sửa chữa
  const steps = [
    { id: 1, title: "Kiểm tra thiết bị", status: "Đang thực hiện", employee: "Nguyễn Văn A" },
    { id: 2, title: "Báo giá sửa chữa", status: "Hoàn thành", employee: "Nguyễn Văn B" },
    { id: 3, title: "Tiến hành sửa chữa", status: "Đang thực hiện", employee: "Nguyễn Văn A" },
    { id: 4, title: "Hoàn tất sửa chữa", status: "Đã hoàn thành", employee: "Nguyễn Văn C" },
  ];

  // Định nghĩa màu trạng thái
  const statusColor = (status) => {
    if (status === "Đang thực hiện") return "text-orange-500 font-bold";
    if (status === "Hoàn thành" || status === "Đã hoàn thành") return "text-green-600 font-bold";
    return "text-gray-500";
  };

  // Định nghĩa màu nền thẻ dựa trên trạng thái
  const cardBackground = (status) => {
    if (status === "Đang thực hiện") return "bg-blue-50";
    if (status === "Hoàn thành" || status === "Đã hoàn thành") return "bg-green-50";
    return "bg-gray-50";
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Tiêu đề */}
      <h1 className="text-2xl font-bold mb-6 text-blue-600">
        Cập Nhật Tiến Độ - Đơn Hàng #{orderId}
      </h1>

      {/* Các bước */}
      {steps.map((step) => (
        <div
          key={step.id}
          className={`${cardBackground(step.status)} shadow-md rounded-lg p-4 mb-4 border-l-4 ${
            step.status === "Đang thực hiện" ? "border-blue-400" : "border-green-400"
          }`}
        >
          {/* Tên bước */}
          <h3 className="font-bold text-lg text-blue-600">
            {`Bước ${step.id}: ${step.title}`}
          </h3>

          {/* Nhân viên thực hiện */}
          <p className="text-gray-700">
            <strong>Nhân viên:</strong> {step.employee || "Chưa xác định"}
          </p>

          {/* Trạng thái */}
          <p className={`mt-2 ${statusColor(step.status)}`}>
            <strong>Trạng thái:</strong> {step.status}
          </p>
        </div>
      ))}

      {/* Nút trở về */}
      <button
        onClick={() => window.history.back()}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Quay lại
      </button>
    </div>
  );
}

export default RepairStatus;
