import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import các trang cần thiết
import Dashboard from './components/Dashboard/Dashboard'; // Trang Dashboard
import ReceiveRequest from './components/ReceiveRequest/ReceiveRequest'; // Trang tiếp nhận yêu cầu
import AssignRepair from './components/AssignRepair/AssignRepair'; // Trang phân công sửa chữa
import UpdateProgress from './components/UpdateProgress/UpdateProgress'; // Trang cập nhật tiến độ
import OrderDetail from './components/OrderDetail/OrderDetail'; // Trang chi tiết đơn hàng
import CheckCustomer from './components/CheckCustomer/CheckCustomer'; // Trang kiểm tra thông tin khách hàng
import CreateInvoice from './components/CreateInvoice/CreateInvoice'; // Trang tạo hóa đơn
import OrderInvoice from './components/OrderInvoice/OrderInvoice'; // Trang chi tiết hóa đơn (mới thêm)
import OrderHistory from './components/OrderHistory/OrderHistory'; // Trang lịch sử đơn hàng
import WarrantyInfo from './components/WarrantyInfo/WarrantyInfo'; // Trang bảo hành
import CustomerFeedback from './components/CustomerFeedback/CustomerFeedback'; // Trang phản hồi khách hàng

import Navbar from './components/Navbar/Navbar'; // Import Navbar

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Sử dụng Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="container mx-auto p-4">
          <Routes>
            {/* Trang chính */}
            <Route path="/" element={<Dashboard />} />

            {/* Các trang chức năng */}
            <Route path="/receive-request" element={<ReceiveRequest />} />
            <Route path="/assign-repair" element={<AssignRepair />} />
            <Route path="/update-progress" element={<UpdateProgress />} />

            {/* Trang chi tiết đơn hàng */}
            <Route path="/order/:id" element={<OrderDetail />} />

            {/* Trang kiểm tra khách hàng */}
            <Route path="/check-customer" element={<CheckCustomer />} />

            {/* Các trang mới */}
            <Route path="/create-invoice" element={<CreateInvoice />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/warranty-info" element={<WarrantyInfo />} />
            <Route path="/customer-feedback" element={<CustomerFeedback />} />

            {/* Trang chi tiết hóa đơn mới */}
            <Route path="/invoice/:id" element={<OrderInvoice />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
