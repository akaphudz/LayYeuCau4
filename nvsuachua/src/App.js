import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'; // Trang Dashboard
import ReceiveRequest from './components/ReceiveRequest/ReceiveRequest';
import NotifyCostAndTime from './components/NotifyCostAndTime/NotifyCostAndTime';
import WarehouseManagement from './components/WarehouseManagement/WarehouseManagement';
import UpdateRepairProgress from './components/UpdateRepairProgress/UpdateRepairProgress';
import OrderDetail from './components/OrderDetail/OrderDetail'; // Trang OrderDetail
import RepairStatus from './components/RepairStatus/RepairStatus'; // Thêm trang RepairStatus

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Bar */}
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
              <Link to="/notify-cost-time" className="hover:underline">
                Thông báo chi phí & thời gian
              </Link>
              <Link to="/warehouse-management" className="hover:underline">
                Quản lý kho
              </Link>
              <Link to="/update-repair-progress" className="hover:underline">
                Cập nhật tiến độ
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto p-4">
          <Routes>
            {/* Dashboard */}
            <Route path="/" element={<Dashboard />} />

            {/* Receive Request */}
            <Route path="/receive-request" element={<ReceiveRequest />} />

            {/* Notify Cost and Time */}
            <Route path="/notify-cost-time" element={<NotifyCostAndTime />} />

            {/* Warehouse Management */}
            <Route path="/warehouse-management" element={<WarehouseManagement />} />

            {/* Update Repair Progress */}
            <Route path="/update-repair-progress" element={<UpdateRepairProgress />} />

            {/* Order Details */}
            <Route path="/order/:id" element={<OrderDetail />} />

            {/* Repair Status */}
            <Route path="/repair-status/:id" element={<RepairStatus />} />

            {/* Fallback Route */}
            <Route
              path="*"
              element={
                <div className="text-center text-red-500 font-bold">
                  Page Not Found
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
