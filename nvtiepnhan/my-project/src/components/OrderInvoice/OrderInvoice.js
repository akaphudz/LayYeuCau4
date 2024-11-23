import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function OrderInvoice() {
  const navigate = useNavigate();
  const { id } = useParams(); // Lấy mã đơn hàng từ URL

  // Giả lập thông tin đơn hàng
  const orderData = {
    '0001': {
      device: 'iPhone 11',
      repairCost: '990.000 đ',
      repairDetails: 'Thay màn hình', // Thêm chi tiết sửa chữa
      customer: 'Nguyễn Đắc Quỳnh Mi',
      email: 'nguyenvana@gmail.com',
      phone: '0123456789',
      address: '132 Đ. Nguyễn Thị Tú, Bình Tân, TP. HCM',
    },
  };

  const order = orderData[id];
  const [paymentMethod, setPaymentMethod] = useState(''); // Trạng thái để lưu phương thức thanh toán

  // Hàm xử lý khi nhấn nút "Tạo Hóa Đơn"
  const handleCreateInvoice = () => {
    if (!paymentMethod) {
      alert("Vui lòng chọn phương thức thanh toán");
    } else {
      alert(`Tạo hóa đơn thành công và lưu trên hệ thống: ${paymentMethod}`);
      navigate("/");
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      {order ? (
        <>
          <h2 className="text-2xl font-bold mb-6">Thông Tin Đơn Hàng</h2>
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <p><strong>Tên Thiết Bị:</strong> {order.device}</p>
            <p><strong>Chi Phí Sửa Chữa:</strong> {order.repairCost}</p>
            <p><strong>Chi Tiết Sửa Chữa:</strong> {order.repairDetails}</p> {/* Thêm chi tiết sửa chữa */}
            <p><strong>Khách Hàng:</strong> {order.customer}</p>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Số Điện Thoại:</strong> {order.phone}</p>
            <p><strong>Địa Chỉ Cửa Hàng:</strong> {order.address}</p>

            {/* Chọn phương thức thanh toán */}
            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phương Thức Thanh Toán:
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 w-full"
              >
                <option value="">Chọn phương thức thanh toán</option>
                <option value="Thanh Toán Bằng QR Code">Thanh Toán Bằng QR Code</option>
                <option value="Thanh Toán Bằng Thẻ Tín Dụng">Thanh Toán Bằng Thẻ Tín Dụng</option>
                <option value="Thanh Toán Tiền Mặt">Thanh Toán Tiền Mặt</option>
                <option value="Tùy Chọn">Tùy Chọn</option>
              </select>
            </div>
          </div>

          {/* Nút tạo hóa đơn */}
          <button
            onClick={handleCreateInvoice}
            className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Tạo Hóa Đơn
          </button>
        </>
      ) : (
        <p className="text-red-500">Không tìm thấy thông tin đơn hàng với mã "{id}".</p>
      )}
    </div>
  );
}

export default OrderInvoice;
