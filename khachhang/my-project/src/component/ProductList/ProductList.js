// src/components/ProductList.js
import React from 'react';

const ProductList = () => {
    const products = [
        { name: 'PIN PISEN SIÊU CAO', price: '450K', image: 'https://via.placeholder.com/200x150' },
        { name: 'ÉP KÍNH SAMSUNG', price: '300K', image: 'https://via.placeholder.com/200x150' },
        { name: 'CẤP SẠC IPHONE 14', price: '1.65 Triệu', image: 'https://via.placeholder.com/200x150' },
        { name: 'MÀN HÌNH OPPO', price: '550K', image: 'https://via.placeholder.com/200x150' },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {products.map((product, index) => (
                <div key={index} className="bg-white shadow-md p-4 rounded-md">
                    <img src={product.image} alt={product.name} className="w-full rounded-md mb-4" />
                    <div className="font-bold text-lg">{product.name}</div>
                    <div className="text-red-500">Chỉ từ {product.price}</div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
