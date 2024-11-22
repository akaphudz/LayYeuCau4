import React from "react";

function Dashboard() {
  const userName = "Nguyễn Văn C"; // Tên nhân viên có thể lấy từ API hoặc dữ liệu giả lập

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Dòng thông báo */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h1 className="text-xl font-bold text-blue-600">
          Xin chào nhân viên tiếp nhận!! {userName}.
        </h1>
        <p className="text-gray-600">
          Chúc bạn một ngày làm việc tốt lành!
        </p>
      </div>

      {/* Nội dung chính */}
      <h2 className="text-2xl text-red-500 font-bold mb-4">Thông Báo</h2>
      <p className="text-red-500">
        Hôm nay có 01 đơn hàng cần xử lý!!!
      </p>
    </div>
  );
}

export default Dashboard;
