import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Homepage from './component/Homepage/Homepage';
import ServiceDetailPage from './component/ServiceDetailPage/ServiceDetailPage';
import BatteryProductPage from './component/BatteryProductPage/BatteryProductPage';
import ProductDetailPage from './component/ProductDetailPage/ProductDetailPage';
import BookingPage from './component/BookingPage/BookingPage';
import ProfilePage from './component/ProfilePage/ProfilePage';
import CartPage from './component/CartPage/CartPage';
import RepairStatusPage from './component/RepairStatusPage/RepairStatusPage';
import RepairSummaryPage from './component/RepairSummaryPage/RepairSummaryPage';
import PaymentPage from './component/PaymentPage/PaymentPage';
import OnlinePaymentPage from './component/OnlinePaymentPage/OnlinePaymentPage';
import ShippingStatusPage from './component/ShippingStatusPage/ShippingStatusPage';
import Login from './component/LoginPage/Login'; // Import Login Page
import Register from './component/RegisterPage/Register'; // Import Register Page
import ForgotPassword from './component/ForgotPasswordPage/ForgotPassword'; // Import ForgotPassword Page
import CreateRepairPage from './component/CreateRepairPage/CreateRepairPage'; // Import CreateRepairPage
import FeedbackPage from './component/FeedbackPage/FeedbackPage'; // Import FeedbackPage

import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
    return (
        <UserProvider>
            <CartProvider>
                <Router>
                    <div className="bg-gray-100 min-h-screen flex flex-col">
                        {/* Header */}
                        <Header />
                        <main className="flex-grow">
                            {/* Routes */}
                            <Routes>
                                <Route path="/" element={<Homepage />} />
                                <Route path="/login" element={<Login />} /> {/* Route Login */}
                                <Route path="/register" element={<Register />} /> {/* Route Register */}
                                <Route path="/forgot-password" element={<ForgotPassword />} /> {/* Route Forgot Password */}
                                <Route path="/create-repair" element={<CreateRepairPage />} /> {/* Route CreateRepairPage */}
                                <Route path="/service" element={<ServiceDetailPage />} />
                                <Route path="/service/chai-pin" element={<BatteryProductPage />} />
                                <Route path="/product/:id" element={<ProductDetailPage />} />
                                <Route path="/booking" element={<BookingPage />} />
                                <Route path="/profile" element={<ProfilePage />} />
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/repair-summary/:id" element={<RepairSummaryPage />} />
                                <Route path="/repair-status" element={<RepairStatusPage />} />
                                <Route path="/payment/:id" element={<PaymentPage />} />
                                <Route path="/online-payment/:id" element={<OnlinePaymentPage />} />
                                <Route path="/appointment" element={<ShippingStatusPage />} />
                                <Route path="/feedback/:id" element={<FeedbackPage />} /> {/* Route Feedback Page */}
                            </Routes>
                        </main>
                    </div>
                </Router>
            </CartProvider>
        </UserProvider>
    );
}

export default App;
