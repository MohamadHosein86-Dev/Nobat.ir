

interface typeRait{

  rating:number
}

const StarRating = ({ rating }:typeRait) => {

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const totalStars = fullStars + (hasHalfStar ? 1 : 0);

  
 return (
    <div className="flex items-center">    
         
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