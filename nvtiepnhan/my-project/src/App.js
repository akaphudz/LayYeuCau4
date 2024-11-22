import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Import các trang cần thiết
import Dashboard from './components/Dashboard/Dashboard'; // Trang Dashboard
import ReceiveRequest from './components/ReceiveRequest/ReceiveRequest'; // Trang tiếp nhận yêu cầu
import AssignRepair from './components/AssignRepair/AssignRepair'; // Trang phân công sửa chữa
import UpdateProgress from './components/UpdateProgress/UpdateProgress'; // Trang cập nhật tiến độ
import OrderDetail from './components/OrderDetail/OrderDetail'; // Trang chi tiết đơn hàng
import CheckCustomer from './components/CheckCustomer/CheckCustomer'; // Trang kiểm tra thông tin khách hàng

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-blue-600 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Repair Management System</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:underline">
                Dashboard
              </Link>
              <Link to="/receive-request" className="hover:underline">
                Tiếp nhận yêu cầu
              </Link>
              <Link to="/assign-repair" className="hover:underline">
                Phân công sửa chữa
              </Link>
              <Link to="/update-progress" className="hover:underline">
                Cập nhật tiến độ
              </Link>
              <Link to="/check-customer" className="hover:underline">
                Kiểm tra khách hàng
              </Link>
            </div>
          </div>
        </nav>

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
