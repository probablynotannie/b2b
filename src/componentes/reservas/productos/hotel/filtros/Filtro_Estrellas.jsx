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
    <div className="tw-flex tw-flex-col tw-space-y-2">
      {[...Array(5)].map((_, index) => {
        const starValue = 5 - index;
        return (
          <div key={starValue} className="tw-flex tw-items-center tw-me-1">
            <input
              id={`hotel_estrellas${starValue}`}
              type="checkbox"
              value={starValue}
              onChange={handleChange}
              className="tw-w-4 tw-h-4 text-secondary tw-bg-gray-100 tw-text-secondary dark:tw-bg-slate-700 dark:tw-border-slate-600 tw-border-gray-300 tw-rounded focus:tw-ring-secondary focus:tw-ring-2 focus:tw-ring-offset-0"
            />
            <label
              htmlFor={`hotel_estrellas${starValue}`}
              className="tw-ms-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-gray-300"
            >
              <div className="tw-flex">
                {Array.from({ length: starValue }, (_, i) => (
                  <IoMdStar key={i} className="tw-text-lg text-secondary" />
                ))}
                {Array.from({ length: 5 - starValue }, (_, i) => (
                  <IoMdStarOutline
                    key={i}
                    className="tw-text-lg text-secondary"
                  />
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
