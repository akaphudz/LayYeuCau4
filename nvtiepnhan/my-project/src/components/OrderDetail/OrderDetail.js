import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function OrderDetail() {
  const navigate = useNavigate(); // Hook điều hướng

  const handleCheckCustomer = () => {
    navigate("/check-customer"); // Chuyển hướng sang trang kiểm tra khách hàng
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-100">
      {/* Cột trái: Thông tin sản phẩm */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <img
          src="https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/thay-pin-pisen-dung-luong-sieu-cao-iphone-008.jpg"
          alt="Thay pin iPhone 11"
          className="w-full h-auto object-cover rounded-lg"
        />
        <h2 className="text-lg font-bold mt-4">Thay pin iPhone 11 dung lượng siêu cao chính hãng Pisen</h2>
        <p className="text-red-600 text-lg font-bold mt-2">990.000 đ</p>
        <p className="text-gray-400 line-through">1.520.000 đ</p>
        <p className="text-green-600 font-semibold">Giảm 35%</p>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-gray-600">✔</span> 12 tháng chính hãng
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gray-600">✔</span> Lấy ngay 30 phút
          </li>
          <li className="flex items-center gap-2">
            <span className="text-gray-600">✔</span> Bảo hiểm 2 triệu USD
          </li>
        </ul>
      </div>

      {/* Cột phải: Form thông tin đặt lịch */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-red-500 mb-6">Thông tin đặt lịch sửa chữa</h2>
        <form className="space-y-4">
          {/* Tên */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Tên của bạn:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Nhập tên của bạn"
              defaultValue="Nguyễn Đắc Quỳnh Mi"
            />
          </div>
          {/* Số điện thoại */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Số điện thoại:</label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Nhập số điện thoại"
              defaultValue="0123456789"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Email:</label>
            <input
              type="email"
              className="border border-gray-300 rounded-lg p-2 w-full"
              placeholder="Nhập email"
              defaultValue="konamiid2808@gmail.com"
            />
          </div>
          {/* Cửa hàng */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Chọn cửa hàng:</label>
            <select className="border border-gray-300 rounded-lg p-2 w-full">
              <option>191 Khánh Hội, Quận 4, TP. HCM</option>
              <option>123 Trần Hưng Đạo, Quận 1, TP. HCM</option>
            </select>
          </div>
          {/* Ngày và giờ */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Chọn ngày và giờ sửa chữa:</label>
            <input
              type="datetime-local"
              className="border border-gray-300 rounded-lg p-2 w-full"
              defaultValue="2024-12-12T12:00"
            />
          </div>
          {/* Ghi chú */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">Ghi chú (yêu cầu đặc biệt):</label>
            <textarea
              className="border border-gray-300 rounded-lg p-2 w-full"
              rows="4"
              placeholder="Nhập ghi chú"
              defaultValue="Thay pin giúp tôi"
            ></textarea>
          </div>
          {/* Button */}
          <button
            type="button" // Đặt type="button" để không submit form
            onClick={handleCheckCustomer} // Gọi hàm khi nhấn nút
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-red-600 transition duration-200"
          >
            Kiểm Tra Thông Tin Khách Hàng
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrderDetail;
