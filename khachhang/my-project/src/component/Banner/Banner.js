// src/components/Banner.js
import React from 'react';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';


const Banner = () => {
    return (
        <div className="bg-white p-4 shadow-md">
            <img
                src="https://cdni.dienthoaivui.com.vn/690x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/dbbdbddc82ff623183c9c6f273327e21.jpg" // Bạn có thể thay đổi URL này bằng ảnh thực tế
                alt="Banner chính"
                className="w-full rounded-md"
            />
        </div>
    );
};

export default Banner;
