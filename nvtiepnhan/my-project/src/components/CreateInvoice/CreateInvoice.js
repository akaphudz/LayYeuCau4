import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateInvoice() {
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();

  // Hàm xử lý khi nhấn nút "Kiểm Tra"
  const handleCheckOrder = (event) => {
    event.preventDefault();
    if (orderId) {
      // Điều hướng đến trang hiển thị chi tiết hóa đơn với mã đơn hàng
      navigate(`/invoice/${orderId}`);
    } else {
      alert('Vui lòng nhập mã đơn hàng');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tạo Hóa Đơn Thanh Toán</h1>
      <form onSubmit={handleCheckOrder} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nhập Mã Đơn Hàng</label>
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="mt-1 block w-full border rounded-md p-2"
            placeholder="Mã đơn hàng (VD: 0001)"
          />
        </div>
        <button type="submit" className="bg-green-600 text-white p-2 rounded-md">
          Kiểm Tra
        </button>
      </form>
    </div>
  );
}

export default CreateInvoice;
