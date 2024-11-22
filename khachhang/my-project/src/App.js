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
import PaymentPage from './component/PaymentPage/PaymentPage'; // Import PaymentPage
import OnlinePaymentPage from './component/OnlinePaymentPage/OnlinePaymentPage'; // Import OnlinePaymentPage
import ShippingStatusPage from './component/ShippingStatusPage/ShippingStatusPage'; // Import ShippingStatusPage
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
                                <Route path="/service" element={<ServiceDetailPage />} />
                                <Route path="/service/chai-pin" element={<BatteryProductPage />} />
                                <Route path="/product/:id" element={<ProductDetailPage />} />
                                <Route path="/booking" element={<BookingPage />} />
                                <Route path="/profile" element={<ProfilePage />} />
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/repair-summary/:id" element={<RepairSummaryPage />} />
                                <Route path="/repair-status" element={<RepairStatusPage />} /> {/* Route RepairStatusPage */}
                                <Route path="/payment/:id" element={<PaymentPage />} /> {/* Route PaymentPage */}
                                <Route path="/online-payment/:id" element={<OnlinePaymentPage />} /> {/* Route OnlinePaymentPage */}
                                <Route path="/appointment" element={<ShippingStatusPage />} /> {/* Route ShippingStatusPage */}
                            </Routes>
                        </main>
                    </div>
                </Router>
            </CartProvider>
        </UserProvider>
    );
}

export default App;
