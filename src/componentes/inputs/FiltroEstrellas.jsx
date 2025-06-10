import { useState } from "react";
import { FaStar } from "react-icons/fa";

const FiltroEstrellas = ({ estrellas, setEstrellas }) => {
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleClick = (star) => {
    setEstrellas(star === estrellas ? 0 : star);
  };

  return (
    <>
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          className="tw-p-1"
          key={star}
          onMouseEnter={() => setHoveredStar(star)}
          onMouseLeave={() => setHoveredStar(0)}
        >
          <FaStar
            size={20}
            onClick={() => handleClick(star)}
            className={`tw-cursor-pointer tw-transition-colors  ${
              hoveredStar >= star
                ? "tw-text-orange-400"
                : estrellas >= star
                ? "tw-text-orange-400"
                : "tw-text-gray-300 dark:tw-text-gray-600"
            }`}
          />
        </div>
      ))}
    </>
  );
};

export default FiltroEstrellas;
