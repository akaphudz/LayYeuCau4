// src/component/ServiceDetailPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceDetailPage.css';

const ServiceDetailPage = () => {
    const navigate = useNavigate();

    const goToBatteryProduct = () => {
        navigate('/service/chai-pin');
    };

    const goToGlassRepairProduct = () => {
        navigate('/service/ep-kinh');
    };

    return (
        <div className="service-page-container">
            <div className="breadcrumb">
                Trang chủ &gt; Dịch vụ &gt; Sửa điện thoại uy tín
            </div>

            <div className="service-banner">
                <img src="https://cdni.dienthoaivui.com.vn/595x100,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/3e9bdc858e04045f57d03328e180ba5c.png" alt="Service Banner" className="banner-image" />
            </div>

            <h1 className="service-title">Sửa Điện Thoại Uy Tín</h1>

            <div className="service-options">
                <div className="service-option" onClick={goToBatteryProduct}>
                    <img src="https://via.placeholder.com/100" alt="Chai pin" className="option-image" />
                    <span>Chai pin</span>
                </div>
                <div className="service-option" onClick={goToGlassRepairProduct}>
                    <img src="https://via.placeholder.com/100" alt="Ép kính" className="option-image" />
                    <span>Ép kính</span>
                </div>
                {/* Các mục khác */}
            </div>
        </div>
    );
};

export default ServiceDetailPage;
