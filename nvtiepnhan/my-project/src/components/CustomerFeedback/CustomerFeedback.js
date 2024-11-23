import React, { useState } from "react";

function CustomerFeedback() {
  // Dữ liệu giả lập về phản hồi của khách hàng đã lưu trước đó
  const [feedback] = useState({
    customerName: "Nguyễn Đắc Quỳnh Mi",
    phoneNumber: "0123456789",
    rating: "5 sao",
    feedbackDetail: "Trải nghiệm dịch vụ tốt",
  });

  // Hàm xử lý khi người dùng nhấn nút Gửi Phản Hồi
  const handleSubmitFeedback = (event) => {
    event.preventDefault(); // Ngăn không cho form reload trang
    alert("Phản hồi khách hàng thành công"); // Hiển thị thông báo thành công
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Đánh Giá và Phản Hồi Dịch Vụ</h1>

      {/* Thông tin đánh giá của khách hàng */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Khách Hàng Đánh Giá Trên Hệ Thống</h2>
        <p>
          <strong>Khách Hàng:</strong> {feedback.customerName}
        </p>
        <p>
          <strong>Số Điện Thoại:</strong> {feedback.phoneNumber}
        </p>
        <p>
          <strong>Đánh Giá:</strong> {feedback.rating} Trải Nghiệm
        </p>
        <p>
          <strong>Chi Tiết Đánh Giá:</strong> {feedback.feedbackDetail}
        </p>
      </div>

      {/* Form gửi phản hồi lại cho khách hàng */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Phản Hồi Ý Kiến Khách Hàng</h2>
        <form className="space-y-4" onSubmit={handleSubmitFeedback}>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Ý kiến của bạn</label>
            <textarea
              className="border border-gray-300 rounded-lg p-2 w-full"
              rows="4"
              placeholder="Nhập phản hồi của bạn với khách hàng"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-green-600 transition duration-200"
          >
            Gửi Phản Hồi
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerFeedback;
