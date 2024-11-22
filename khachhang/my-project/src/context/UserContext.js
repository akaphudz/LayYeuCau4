import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'Nguyễn Đắc Quỳnh Mi',
        phone: '0123456789',
        email: 'nguyenvana@gmail.com',
        address: '132 Đ. Nguyễn Thị Tú, Bình Tân, TP. HCM',
    });

    // Hàm cập nhật thông tin người dùng
    const updateUser = (newData) => {
        setUser((prev) => ({
            ...prev,
            ...newData,
        }));
    };

    return (
        <UserContext.Provider value={{ user, setUser, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
