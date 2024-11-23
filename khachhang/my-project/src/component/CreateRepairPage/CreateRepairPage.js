// src/component/CreateRepairPage/CreateRepairPage.js
import React, { useState } from 'react';
import './CreateRepairPage.css';

const CreateRepairPage = () => {
    const [device, setDevice] = useState('');
    const [issue, setIssue] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Yêu cầu sửa chữa cho thiết bị ${device} với vấn đề: ${issue} đã được đặt lịch vào ngày ${appointmentDate}`);
    };

    return (
        <div className="create-repair-container">
            <h2>Tạo Yêu Cầu Sửa Chữa</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Thiết bị cần sửa chữa:</label>
                    <input 
                        type="text"
                        value={device}
                        onChange={(e) => setDevice(e.target.value)}
                        placeholder="Nhập loại thiết bị"
                    />
                </div>
                <div className="form-group">
                    <label>Mô tả vấn đề:</label>
                    <textarea
                        value={issue}
                        onChange={(e) => setIssue(e.target.value)}
                        placeholder="Nhập vấn đề cần sửa chữa"
                    />
                </div>
                <div className="form-group">
                    <label>Ngày đặt lịch:</label>
                    <input
                        type="date"
                        value={appointmentDate}
                        onChange={(e) => setAppointmentDate(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">Tạo Yêu Cầu</button>
            </form>
        </div>
    );
};

export default CreateRepairPage;
