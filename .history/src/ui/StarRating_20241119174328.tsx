


const StarRating = ({ rating }) => {
  // تعداد ستاره‌های کامل
  const fullStars = Math.floor(rating);
  
  // آیا ستاره نصفه وجود دارد؟
  const hasHalfStar = rating % 1 !== 0;
  console.log(hasHalfStar);
  // تعداد کل ستاره‌ها برابر مقدار امتیاز است
  const totalStars = fullStars + (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">

      
          {/* رندر ستاره نصفه */}
          {hasHalfStar && (
        <span className="relative text-[#f7ce46] text-xl">
          ★
          <span
            className="absolute inset-0 w-1/2 right-0 overflow-hidden text-gray-300"
          >
            ★
          </span>
        </span>
      )}

      
      {/* رندر ستاره‌های کامل */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <span
            key={`full-${index}`}
            className="text-[#f7ce46] text-xl"
          >
            ★
          </span>
        ))}

    

      {/* پر کردن ستاره‌های خالی (تا مجموع به ۵ برسد) */}
      {Array(5 - totalStars)
        .fill(0)
        .map((_, index) => (
          <span
            key={`empty-${index}`}
            className="text-[#f7ce46] text-xl"
          >
            ★
          </span>
        ))}
    </div>
  );
};

export default StarRating;