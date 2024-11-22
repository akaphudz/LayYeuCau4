import React, { useState } from "react";

function UpdateProgress() {
  // Danh sách các bước và trạng thái
  const [steps, setSteps] = useState([
    {
      stepNumber: 1,
      title: "Kiểm tra thiết bị",
      description: "Nhân viên Nguyễn Văn A đang tiến hành kiểm tra thiết bị.",
      status: "Đang thực hiện", // Trạng thái: "Đang thực hiện", "Hoàn thành"
    },
    {
      stepNumber: 2,
      title: "Báo giá sửa chữa",
      description: "Nhân viên Nguyễn Văn A đã báo giá sửa chữa cho khách hàng.",
      status: "Hoàn thành",
    },
    {
      stepNumber: 3,
      title: "Tiến hành sửa chữa",
      description: "Nhân viên Nguyễn Văn A đang sửa chữa thiết bị.",
      status: "Đang thực hiện",
    },
    {
      stepNumber: 4,
      title: "Hoàn tất sửa chữa",
      description: "Thiết bị đã được sửa chữa xong.",
      status: "Đã hoàn thành",
    },
  ]);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleUpdateInfo = () => {
    alert("Thông tin cho khách hàng đã được cập nhật thành công.");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Cập Nhật Tiến Độ</h1>

      {/* Thẻ thông tin đơn hàng */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-200">
        <div className="flex items-start gap-4">
          {/* Hình ảnh sản phẩm */}
          <img
            src="https://cdni.dienthoaivui.com.vn/300x300,webp,q100/https://dashboard.dienthoaivui.com.vn/uploads/wp-content/uploads/images/thay-pin-pisen-dung-luong-sieu-cao-iphone-008.jpg"
            alt="Sản phẩm"
            className="w-24 h-24 object-cover rounded-lg"
          />
          {/* Thông tin đơn hàng */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">
              Thay pin iPhone 11 dung lượng siêu cao chính hãng Pisen
            </h3>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Giá:</span> 990.000 đ
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Cửa hàng:</span> 132 Đ. Nguyễn Thị Tú, Bình Tân, TP. HCM
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Ngày đặt lịch:</span> 12:12:00 12/12/2022
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Trạng thái:</span>{" "}
              <span className="text-blue-600 font-semibold">Sửa chữa thành công</span>
            </p>
          </div>
        </div>

        {/* Nút để sổ xuống xem các bước */}
        <button
          onClick={toggleExpand}
          className="bg-gray-300 text-black font-bold py-2 px-4 rounded-lg mt-4 hover:bg-gray-400 transition duration-200"
        >
          {isExpanded ? "Thu Gọn Chi Tiết Sửa Chữa" : "Xem Chi Tiết Sửa Chữa"}
        </button>

        {/* Hiển thị chi tiết các bước nếu mở rộng */}
        {isExpanded && (
          <div className="mt-4 border-t pt-4">
            {steps.map((step) => (
              <div
                key={step.stepNumber}
                className={`border-2 rounded-lg p-4 mb-4 ${
                  step.status === "Hoàn thành"
                    ? "border-green-400 bg-green-50"
                    : "border-blue-400 bg-blue-50"
                }`}
              >
                <h2 className="text-lg font-bold mb-2">
                  Bước {step.stepNumber}: {step.title}
                </h2>
                <p className="text-gray-700 mb-2">{step.description}</p>
                <p
                  className={`font-semibold ${
                    step.status === "Hoàn thành" ? "text-green-600" : "text-blue-600"
                  }`}
                >
                  Trạng thái: {step.status}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Nút cập nhật thông tin cho khách hàng */}
        <button
          onClick={handleUpdateInfo}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg mt-4 hover:bg-red-600 transition duration-200"
        >
          Cập Nhật Thông Tin Cho Khách Hàng
        </button>
      </div>
    </div>
  );
}

export default UpdateProgress;
