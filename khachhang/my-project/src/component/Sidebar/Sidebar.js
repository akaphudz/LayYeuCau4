// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
    const menuItems = [
        'Sửa Điện Thoại', 'Sửa Chữa Laptop', 'Sửa MacBook', 'Điện Thoại Cũ Giá Rẻ',
        'Phụ Kiện', 'Sửa Máy Tính Bảng', 'Linh Kiện Laptop', 'Sửa AirPods',
        'Sửa Apple Watch', 'Thu Cũ Lên Đời', 'Tin Công Nghệ'
    ];

    return (
        <div className="bg-white p-4 shadow-md w-60">
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className="flex items-center py-2 text-gray-700 hover:text-red-500 cursor-pointer">
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
