import React, { useState } from "react";

function WarrantyInfo() {
  const [deviceId, setDeviceId] = useState(""); // State để lưu trữ mã thiết bị nhập vào
  const [warrantyInfo, setWarrantyInfo] = useState(null); // State để lưu thông tin bảo hành

  // Giả lập thông tin bảo hành
  const warrantyData = {
    '0001': {
      customerName: 'Nguyễn Đắc Quỳnh Mi',
      orderId: '0001',
      phoneNumber: '0123456789',
      device: 'iPhone 11',
      warrantyPeriod: '12 tháng',
      warrantyCondition: 'Chỉ áp dụng cho các lỗi phần cứng và linh kiện chính hãng.',
      startDate: '12/12/2024',
      endDate: '12/12/2025'
    },
  };

  // Hàm xử lý khi nhấn nút "Kiểm Tra"
  const handleCheckWarranty = (event) => {
    event.preventDefault();
    const inputDeviceId = deviceId.trim().toLowerCase(); // Xử lý đầu vào để đảm bảo không bị lỗi chữ hoa/thường và khoảng trắng
    if (warrantyData[inputDeviceId]) {
      setWarrantyInfo(warrantyData[inputDeviceId]);
    } else {
      alert('Không tìm thấy thông tin bảo hành với mã thiết bị này');
      setWarrantyInfo(null);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Tra Cứu Thông Tin Bảo Hành</h1>

      {/* Form nhập mã thiết bị */}
      <form onSubmit={handleCheckWarranty} className="mb-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Nhập Mã Thiết Bị</label>
          <input
            type="text"
            value={deviceId}
            onChange={(e) => setDeviceId(e.target.value)}
            className="mt-1 block w-full border rounded-md p-2"
            placeholder="Mã thiết bị (VD: 0001)"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded-md">
          Kiểm Tra
        </button>
      </form>

      {/* Hiển thị thông tin bảo hành nếu tìm thấy */}
      {warrantyInfo && (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Thông Tin Bảo Hành</h2>
          <p><strong>Tên Thiết Bị:</strong> {warrantyInfo.device}</p>
          <ul>
            <li><strong>Tên Khách Hàng: Nguyễn Đắc Quỳnh Mi</strong> {warrantyInfo.customerName}</li>
            <li><strong>Mã Đơn Hàng: #0001</strong> {warrantyInfo.orderId}</li>
            <li><strong>Số Điện Thoại: 0123456789</strong> {warrantyInfo.phoneNumber}</li>
          </ul>
          <ul>
            <li><strong>Thời Gian Bảo Hành:</strong> {warrantyInfo.warrantyPeriod}</li>
            <li><strong>Điều Kiện Bảo Hành:</strong> {warrantyInfo.warrantyCondition}</li>
            <li><strong>Ngày Bắt Đầu Bảo Hành: 12/12/2024</strong> {warrantyInfo.startDate}</li>
            <li><strong>Ngày Kết Thúc Bảo Hành: 12/12/2025</strong> {warrantyInfo.endDate}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default WarrantyInfo;
