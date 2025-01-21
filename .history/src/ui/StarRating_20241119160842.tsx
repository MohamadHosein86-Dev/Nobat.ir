import React from "react";
import "./StarRating.css"; // استایل‌ها

const StarRating = ({ rating }) => {
  // تعداد ستاره‌های کامل
  const fullStars = Math.floor(rating);

  // آیا ستاره نصفه وجود دارد؟
  const hasHalfStar = rating % 1 !== 0;

  // تعداد کل ستاره‌ها برابر مقدار امتیاز است (بدون اضافه کردن تا 5).
  const totalStars = fullStars + (hasHalfStar ? 1 : 0);

  return (
    <div className="star-rating">
      {/* رندر ستاره‌های کامل */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <span key={`full-${index}`} className="star full">
            ★
          </span>
        ))}

      {/* رندر ستاره نصفه */}
      {hasHalfStar && (
        <span className="star half">
          ★
          <span className="half-mask">★</span>
        </span>
      )}

      {/* پر کردن ستاره‌های خالی (اگر لازم بود تا 5 برسد) */}
      {Array(5 - totalStars)
        .fill(0)
        .map((_, index) => (
          <span key={`empty-${index}`} className="star empty">
            ★
          </span>
        ))}
    </div>
  );
};

export default StarRating;