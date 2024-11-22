import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckCustomer() {
  const [email, setEmail] = useState("");
  const [customerInfo, setCustomerInfo] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCheckCustomer = () => {
    // Mock dữ liệu khách hàng
    const mockDatabase = [
      { email: "konamiid2808@gmail.com", name: "Nguyễn Đắc Quỳnh Mi", phone: "0123456789" },
    ];

    const customer = mockDatabase.find((c) => c.email === email);

    if (customer) {
      setCustomerInfo(customer);
      setError("");

      // Chuyển hướng sang trang phân công nhân viên, truyền thông tin khách hàng
      navigate("/assign-repair", { state: { customer } });
    } else {
      setCustomerInfo(null);
      setError("Khách hàng không tồn tại trong hệ thống.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Kiểm Tra Thông Tin Khách Hàng</h1>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Email khách hàng:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nhập email khách hàng"
          className="border border-gray-300 rounded-lg p-2 w-full mb-4"
        />
        <button
          onClick={handleCheckCustomer}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-red-600 transition duration-200"
        >
          Kiểm Tra
        </button>

        {/* Hiển thị lỗi nếu không tìm thấy */}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </div>
  );
}

export default CheckCustomer;
