import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './OnlinePaymentPage.css';

const OnlinePaymentPage = () => {
    const { id } = useParams();
    const { user } = useContext(UserContext);

    const paymentDetails = {
        id,
        deviceName: 'iPhone 11',
        repairCost: 990000,
    };

    const [agreeTerms, setAgreeTerms] = useState(false);
    const [deliveryOption, setDeliveryOption] = useState('store');
    const [deliveryAddress, setDeliveryAddress] = useState(user.address || '');

    const handlePayment = () => {
        if (!agreeTerms) {
            alert("Vui lòng đồng ý với các điều khoản trước khi thanh toán.");
            return;
        }

        if (deliveryOption === 'store') {
            alert("Bạn đã thanh toán thành công, vui lòng đến cửa hàng nơi bạn đăng ký để nhận thiết bị.");
        } else if (deliveryOption === 'delivery') {
            if (!deliveryAddress) {
                alert("Vui lòng nhập địa chỉ giao hàng.");
                return;
            }
            alert("Đơn hàng của bạn đã thanh toán thành công, vui lòng kiểm tra thông tin giao hàng trong mục Vận Chuyển trên trang chủ.");
        }
    };

    return (
        <div className="online-payment-container">
            <h1 className="payment-title">Thanh Toán Online</h1>
            <div className="payment-card">
                <div className="payment-details">
                    <h2>Thông Tin Đơn Hàng</h2>
                    <div className="details-row">
                        <span><strong>Tên Thiết Bị:</strong> {paymentDetails.deviceName}</span>
                    </div>
                    <div className="details-row">
                        <span><strong>Chi Phí Sửa Chữa:</strong> {paymentDetails.repairCost.toLocaleString('vi-VN')} đ</span>
                    </div>
                    <div className="details-row">
                        <span><strong>Khách Hàng: </strong> {user.name}</span>
                    </div>
                    <div className="details-row">
                        <span><strong>Email:</strong> {user.email}</span>
                    </div>
                    <div className="details-row">
                        <span><strong>Số Điện Thoại:</strong> {user.phone}</span>
                    </div>
                    <div className="details-row">
                        <span><strong>Địa Chỉ Cửa Hàng:</strong> {user.address}</span>
                    </div>
                </div>

                <div className="payment-method">
                    <h2>Thanh Toán Bằng QR Code</h2>
                    <div className="qr-code-section">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="QR Code" className="qr-code-image" />
                        <div className="bank-info">
                            <p><strong>Ngân hàng:</strong> MB Bank</p>
                            <p><strong>Tên tài khoản:</strong> Hệ Thống HelpMe</p>
                            <p><strong>Số tài khoản:</strong> 0123456789</p>
                        </div>
                    </div>
                </div>

                <div className="delivery-options">
                    <h2>Chọn Hình Thức Nhận Thiết Bị</h2>
                    <div className="option">
                        <input
                            type="radio"
                            id="store"
                            name="delivery"
                            value="store"
                            checked={deliveryOption === 'store'}
                            onChange={() => setDeliveryOption('store')}
                        />
                        <label htmlFor="store">Nhận Thiết Bị Tại Cửa Hàng</label>
                    </div>
                    <div className="option">
                        <input
                            type="radio"
                            id="delivery"
                            name="delivery"
                            value="delivery"
                            checked={deliveryOption === 'delivery'}
                            onChange={() => setDeliveryOption('delivery')}
                        />
                        <label htmlFor="delivery">Giao Thiết Bị Tận Nơi</label>
                    </div>
                </div>

                {deliveryOption === 'delivery' && (
                    <div className="delivery-address-form">
                        <label htmlFor="address">Địa Chỉ Nhận Hàng:</label>
                        <input
                            type="text"
                            id="address"
                            value={deliveryAddress}
                            onChange={(e) => setDeliveryAddress(e.target.value)}
                            placeholder="Nhập địa chỉ nhận hàng..."
                        />
                    </div>
                )}

                <div className="terms-and-conditions">
                    <input
                        type="checkbox"
                        id="terms"
                        checked={agreeTerms}
                        onChange={() => setAgreeTerms(!agreeTerms)}
                    />
                    <label htmlFor="terms">Tôi đồng ý với các điều khoản và điều kiện thanh toán</label>
                </div>

                <button className="confirm-payment-button" onClick={handlePayment}>
                    Xác Nhận Thanh Toán Online
                </button>
            </div>
        </div>
    );
};

export default OnlinePaymentPage;
