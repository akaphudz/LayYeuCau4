// src/component/FeedbackPage/FeedbackPage.js
import React, { useState } from 'react';
import './FeedbackPage.css';

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (rating === 0) {
      alert('Vui lòng chọn số sao để đánh giá.');
    } else {
      alert(`Cảm ơn bạn đã đánh giá ${rating} sao!`);
      // Thực hiện lưu đánh giá (API hoặc lưu vào DB)
    }
  };

  return (
    <div className="feedback-container">
      <h1>Đánh Giá Dịch Vụ</h1>
      <div className="rating-section">
        <label>Chọn số sao: </label>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${rating >= value ? 'selected' : ''}`}
            onClick={() => setRating(value)}
          >
            ★
          </span>
        ))}
      </div>
      <div className="comment-section">
        <label>Nhận xét của bạn:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Viết nhận xét..."
        />
      </div>
      <button className="submit-button" onClick={handleSubmit}>Gửi Đánh Giá</button>
    </div>
  );
};

export default FeedbackPage;
