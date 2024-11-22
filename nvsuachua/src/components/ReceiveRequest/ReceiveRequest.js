import React from "react";
import { Link } from "react-router-dom";

function ReceiveRequest() {
  const orders = [
    {
      id: 1,
      title: "Thay pin iPhone 11 dung lượng siêu cao chính hãng Pisen",
      price: "990.000 đ",
      address: "132 Đ. Nguyễn Thị Tú, Bình Tân, TP. HCM",
      orderDate: "12:12:00 12/12/2022",
      status: "Đã Nhận Được Thiết Bị Từ Khách Hàng",
      image: "https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/thay-pin-pisen-dung-luong-sieu-cao-iphone-008.jpg",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Tiếp nhận yêu cầu sửa chữa</h1>
      <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
        {orders.map((order) => (
          <div key={order.id} className="flex items-start gap-4">
            {/* Hình ảnh sản phẩm */}
            <img
              src={order.image}
              alt={order.title}
              className="w-24 h-24 object-cover rounded-lg"
            />
            {/* Thông tin chi tiết sản phẩm */}
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">{order.title}</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Giá:</span> {order.price}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Cửa hàng:</span> {order.address}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Ngày đặt lịch:</span> {order.orderDate}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Trạng thái:</span>{" "}
                <span className="text-blue-600 font-semibold">{order.status}</span>
              </p>
              {/* Nút dẫn đến chi tiết đơn hàng */}
              <Link
                to={`/order/${order.id}`}
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg mt-4 inline-block hover:bg-red-600 transition duration-200"
              >
                Tiến hành sửa chữa
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReceiveRequest;
