
interface typeRait{
  rating:number
}
const StarRating = ({ rating }:typeRait) => {
  const fullStars = Math.floor(rating); // تعداد ستاره‌های کامل
  const hasHalfStar = rating % 1 !== 0; // آیا ستاره نصفه وجود دارد؟
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // تعداد ستاره‌های خالی

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {/* ستاره‌های کامل */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <span key={`full-${index}`} style={{ color: "gold", fontSize: "24px" }}>
            ★
          </span>
        ))}
      {/* ستاره نصفه */}
      {hasHalfStar && (
        <span style={{ color: "gold", fontSize: "24px" }}>
          <span style={{ position: "relative", display: "inline-block" }}>
            ★
            <span
              style={{
                position: "absolute",
                overflow: "hidden",
                width: "50%",
                top: 0,
                left: 0,
                color: "lightgray",
              }}
            >
              ★
            </span>
          </span>
        </span>
      )}
     

    </div>
  );
};

export default StarRating;