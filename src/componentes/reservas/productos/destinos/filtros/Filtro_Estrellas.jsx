// StarRating.js
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const Estrellas = ({ onChange }) => {
  const handleChange = (event) => {
    const { value, checked } = event.target;
    const starValue = parseInt(value);

    // If the star is checked, add it to the selected list
    onChange((prevSelectedStars) => {
      if (checked) {
        return [...prevSelectedStars, starValue];
      } else {
        return prevSelectedStars.filter((star) => star !== starValue);
      }
    });
  };

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
              onChange={handleChange}
              className="w-4 h-4 text-secondary bg-gray-100 dark:bg-slate-700 dark:border-slate-600 border-gray-300 rounded focus:ring-secondary focus:ring-2"
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
