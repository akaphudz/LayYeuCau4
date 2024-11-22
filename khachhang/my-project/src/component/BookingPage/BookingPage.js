// src/component/BookingPage/BookingPage.js
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { CartContext } from '../../context/CartContext'; // Import CartContext
import { useNavigate } from 'react-router-dom'; // Import useNavigate từ react-router-dom để điều hướng
import './BookingPage.css';

const BookingPage = () => {
    const { user } = useContext(UserContext);
    const { addToCart } = useContext(CartContext); // Sử dụng CartContext để thêm sản phẩm vào giỏ hàng
    const navigate = useNavigate(); // Hook để điều hướng
    const [name, setName] = useState(user.name);
    const [phone, setPhone] = useState(user.phone);
    const [email, setEmail] = useState(user.email || '');
    const [note, setNote] = useState('');
    const [appointmentTime, setAppointmentTime] = useState(''); // Thêm state để lưu ngày giờ đặt lịch
    const [store, setStore] = useState(''); // Thêm state để lưu thông tin cửa hàng
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        // Thêm sản phẩm vào giỏ hàng với thông tin chi tiết
        addToCart({
            id: 'battery-iphone-11',
            name: 'Thay pin iPhone 11 dung lượng siêu cao chính hãng Pisen',
            price: 990000,
            quantity: 1,
            appointmentTime: appointmentTime,
            store: store,
            note: note,
        });
    };

    const handleModalClose = () => {
        setIsSubmitted(false);
        // Điều hướng đến trang giỏ hàng sau khi đóng modal
        navigate('/cart');
    };

    return (
        <div className="booking-page-container">
            <h1 className="booking-page-title">Đặt lịch sửa chữa</h1>
            <div className="booking-content">
                {/* Phần thông tin sản phẩm */}
                <div className="product-info">
                    <img
                        src="https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/thay-pin-pisen-dung-luong-sieu-cao-iphone-008.jpg"
                        alt="Thay pin iPhone 11 dung lượng siêu cao chính hãng Pisen"
                        className="product-image"
                    />
                    <div className="product-details">
                        <h2>Thay pin iPhone 11 dung lượng siêu cao chính hãng Pisen</h2>
                        <p className="current-price">990.000 đ</p>
                        <p className="old-price">1.520.000 đ</p>
                        <span className="discount">Giảm 35%</span>
                    </div>
                </div>

                {/* Phần form thông tin đặt lịch */}
                <div className="booking-form-container">
                    <h2 className="booking-form-title">Thông tin đặt lịch sửa chữa</h2>
                    <form className="booking-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Tên của bạn:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại:</label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                placeholder="Vui lòng nhập email của bạn"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Chọn cửa hàng:</label>
                            <select onChange={(e) => setStore(e.target.value)} required>
                                <option value="">Chọn cửa hàng</option>
                                <option value="132 Đ. Nguyễn Thị Tú, Bình Tân, TP. HCM">132 Đ. Nguyễn Thị Tú, Bình Tân, TP. HCM</option>
                                <option value="191 Khánh Hội, Quận 4, TP. HCM">191 Khánh Hội, Quận 4, TP. HCM</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Chọn ngày và giờ sửa chữa:</label>
                            <input
                                type="datetime-local"
                                onChange={(e) => setAppointmentTime(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Ghi chú (yêu cầu đặc biệt):</label>
                            <textarea
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                placeholder="Nhập yêu cầu đặc biệt nếu có"
                            />
                        </div>
                        <button type="submit" className="submit-button">Đặt Lịch Ngay</button>
                    </form>
                </div>
            </div>

            {/* Modal Xác nhận đặt lịch thành công */}
            {isSubmitted && (
                <div className="booking-confirmation">
                    <div className="confirmation-content">
                        <h2>Đặt lịch thành công!</h2>
                        <p>Cảm ơn bạn {name} đã đặt lịch sửa chữa.</p>
                        <p>Chúng tôi sẽ liên hệ lại bạn sớm nhất để xác nhận.</p>
                        <button onClick={handleModalClose} className="close-button">Đóng</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookingPage;
