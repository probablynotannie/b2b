// StarRating.js
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const Estrellas = ({ onChange }) => {
  return (
    <div className="flex flex-col space-y-2">
      {[...Array(5)].map((_, index) => {
        const starValue = 5 - index;
        return (
          <div key={starValue} className="flex items-center me-1">
            <input
              id={`hotel_estrellas${starValue}`}
              type="checkbox"
              value={starValue}
              onChange={onChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label
              htmlFor={`hotel_estrellas${starValue}`}
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              <div className="flex">
                {Array.from({ length: starValue }, (_, i) => (
                  <IoMdStar key={i} className="text-lg text-secondary" />
                ))}
                {Array.from({ length: 5 - starValue }, (_, i) => (
                  <IoMdStarOutline key={i} className="text-lg text-secondary" />
                ))}
              </div>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Estrellas;
