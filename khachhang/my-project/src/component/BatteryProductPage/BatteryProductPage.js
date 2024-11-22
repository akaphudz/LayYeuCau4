// src/component/BatteryProductPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BatteryProductPage.css';

const BatteryProductPage = () => {
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            title: 'Thay pin iPhone 11 dung lượng siêu cao chính hãng Pisen',
            price: '990.000 đ',
            oldPrice: '1.520.000 đ',
            discount: 'Giảm 35%',
            warranty: '12 tháng chính hãng',
            serviceTime: '30 phút',
            imageUrl: 'https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/thay-pin-pisen-dung-luong-sieu-cao-iphone-008.jpg',
            note: 'Thay Pin mua kèm Cáp - Sạc - Pin dự phòng giảm thêm 5%, giá chỉ từ 59k',
        },
        {
            id: 2,
            title: 'Thay pin iPhone XS Max dung lượng cao chính hãng Pisen',
            price: '900.000 đ',
            oldPrice: '1.250.000 đ',
            discount: 'Giảm 28%',
            warranty: '12 tháng chính hãng',
            serviceTime: '30 phút',
            imageUrl: 'https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/thay-pin-pisen-iphone-xs-max-dung-luong-cao-11.png',
            note: 'Thay Pin mua kèm Cáp - Sạc - Pin dự phòng giảm thêm 5%, giá chỉ từ 59k',
        },
        {
            id: 3,
            title: 'Thay pin iPhone 12 Pro Max chính hãng Pisen',
            price: '1.350.000 đ',
            oldPrice: '1.620.000 đ',
            discount: 'Giảm 17%',
            warranty: '12 tháng chính hãng',
            serviceTime: '30 phút',
            imageUrl: 'https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/thay-pin-pisen-dung-luong-sieu-cao-iphone-008.jpg',
            note: 'Thay Pin mua kèm Cáp - Sạc - Pin dự phòng giảm thêm 5%, giá chỉ từ 59k',
        },
        {
            id: 4,
            title: 'Thay pin iPhone 11 dung lượng siêu cao chính hãng GENA',
            price: '750.000 đ',
            oldPrice: '1.000.000 đ',
            discount: 'Giảm 25%',
            warranty: '12 tháng chính hãng',
            serviceTime: '30 phút',
            imageUrl: 'https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/thay-pin-pisen-iphone-xs-max-dung-luong-cao-11.png',
            note: 'Thay Pin mua kèm Cáp - Sạc - Pin dự phòng giảm thêm 5%, giá chỉ từ 59k',
        }
    ];

    const goToProductDetail = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="battery-product-page-container">
            <h1 className="product-page-title">Sản Phẩm Thay Pin Chính Hãng</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div className="product-card" key={product.id} onClick={() => goToProductDetail(product.id)}>
                        <span className="product-discount">{product.discount}</span>
                        <img src={product.imageUrl} alt={product.title} className="product-image" />
                        <div className="product-info">
                            <h2 className="product-title">{product.title}</h2>
                            <div className="product-price">
                                <span className="current-price">{product.price}</span>
                                <span className="old-price">{product.oldPrice}</span>
                            </div>
                            <div className="product-details">
                                <span>{product.serviceTime}</span> | <span>{product.warranty}</span>
                            </div>
                            <p className="product-note">{product.note}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BatteryProductPage;
