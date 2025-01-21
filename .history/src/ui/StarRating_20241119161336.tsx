import React from "react";

const StarRating = ({ rating }) => {
  // تعداد ستاره‌های کامل
  const fullStars = Math.floor(rating);

  // آیا ستاره نصفه وجود دارد؟
  const hasHalfStar = rating % 1 !== 0;

  // تعداد کل ستاره‌ها برابر مقدار امتیاز است
  const totalStars = fullStars + (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">

{/* پر کردن ستاره‌های خالی (تا مجموع به ۵ برسد) */}
{Array(5 - totalStars)
        .fill(0)
        .map((_, index) => (
          <span
            key={`empty-${index}`}
            className="text-gray-300 text-2xl"
          >
            ★
          </span>
        ))}
      
      {/* رندر ستاره‌های کامل */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <span
            key={`full-${index}`}
            className="text-yellow-500 text-2xl"
          >
            ★
          </span>
        ))}


      {/* رندر ستاره نصفه */}
      {hasHalfStar && (
        <span className="relative text-yellow-500 text-2xl">
          ★
          <span
            className="absolute inset-0 w-1/2 overflow-hidden text-gray-300"
            style={{ left: "50%" }}
          >
            ★
          </span>
        </span>
      )}

    </div>
  );
};

export default StarRating;