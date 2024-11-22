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
      status: "Đang chờ xử lý",
      image: "https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/thay-pin-pisen-dung-luong-sieu-cao-iphone-008.jpg",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Trạng thái đơn hàng</h1>
      <p className="text-lg text-red-600 font-semibold mb-6 text-center">
        Có {orders.length.toString().padStart(2, "0")} đơn hàng cần xử lý
      </p>

      <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
        {orders.map((order) => (
          <Link
            to={`/order/${order.id}`}
            key={order.id}
            className="block mb-4 hover:bg-gray-100 p-4 rounded-lg transition"
          >
            <div className="flex items-start gap-4">
              <img
                src={order.image}
                alt={order.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-bold mb-2">{order.title}</h3>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Giá:</span> {order.price}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Cửa hàng:</span> {order.address}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Ngày đặt lịch:</span>{" "}
                  {order.orderDate}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">Trạng thái:</span>{" "}
                  <span className="text-red-600 font-semibold">
                    {order.status}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ReceiveRequest;
