// src/components/NotifyCostAndTime/NotifyCostAndTime.js
import React, { useState } from "react";

function NotifyCostAndTime() {
  const [costData, setCostData] = useState({
    repairCost: "",
    estimatedTime: "",
    additionalNote: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCostData({ ...costData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Chi phí sửa chữa: ${costData.repairCost}, Thời gian dự kiến: ${costData.estimatedTime}.`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Thông Báo Chi Phí & Thời Gian Sửa Chữa</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Chi phí sửa chữa:</label>
          <input
            type="text"
            name="repairCost"
            value={costData.repairCost}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Nhập chi phí sửa chữa"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Thời gian dự kiến:</label>
          <input
            type="text"
            name="estimatedTime"
            value={costData.estimatedTime}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 w-full"
            placeholder="Nhập thời gian hoàn thành"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700">Ghi chú thêm:</label>
          <textarea
            name="additionalNote"
            value={costData.additionalNote}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 w-full"
            rows="4"
            placeholder="Nhập ghi chú thêm"
          ></textarea>
        </div>
        <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-green-600">
          Tiến Hành Sửa Chữa
        </button>
      </form>
    </div>
  );
}

export default NotifyCostAndTime;
