import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WarehouseManagement() {
  const navigate = useNavigate(); // Điều hướng đến trang thông báo chi phí và thời gian

  // Thông tin kho linh kiện
  const [inventory, setInventory] = useState([
    { id: 1, name: "Pin iPhone 11", quantity: 10, status: "Còn hàng" },
    { id: 2, name: "Màn hình Samsung Galaxy S20", quantity: 5, status: "Còn hàng" }
  ]);

  // Xử lý cập nhật số lượng linh kiện
  const handleUpdate = (id, change) => {
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      )
    );
  };

  // Xử lý điều hướng đến trang Thông báo chi phí & thời gian
  const handleProceedRepair = () => {
    navigate('/notify-cost-time');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quản Lý Kho</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {inventory.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="font-bold">{item.name}</h2>
            <p>Số lượng: {item.quantity}</p>
            <p>Trạng thái: {item.quantity > 0 ? "Còn hàng" : "Hết hàng"}</p>
            <div className="flex gap-2 mt-4">
              {/* Nút giảm số lượng */}
              <button
                onClick={() => handleUpdate(item.id, -1)}
                className="bg-yellow-500 text-white font-bold py-1 px-2 rounded-lg hover:bg-yellow-600 transition duration-200"
              >
                Lấy ra 1
              </button>
              {/* Nút cập nhật số lượng */}
              <button
                onClick={() => handleUpdate(item.id, 1)}
                className="bg-blue-500 text-white font-bold py-1 px-2 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Thêm 1
              </button>
              {/* Nút tiến hành sửa chữa */}
              <button
                onClick={handleProceedRepair}
                className="bg-green-500 text-white font-bold py-1 px-4 rounded-lg hover:bg-green-600 transition duration-200"
              >
                Tiến Hành Sửa Chữa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WarehouseManagement;
