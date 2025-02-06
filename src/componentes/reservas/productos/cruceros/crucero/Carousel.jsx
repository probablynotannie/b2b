import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// You can format the price here if needed, e.g.:
const formatPrice = (price) => `$${price}`;

const PriceCarousel = ({ precios }) => {
  const scrollRefs = useRef({}); // Store refs for each price list

  // Scroll left
  const scrollLeft = (id) => {
    if (scrollRefs.current[id]) {
      scrollRefs.current[id].scrollLeft -= 150;
    }
  };

  // Scroll right
  const scrollRight = (id) => {
    if (scrollRefs.current[id]) {
      scrollRefs.current[id].scrollLeft += 150;
    }
  };

  return (
    <div className="tw-grid tw-grid-cols-2 tw-gap-10">
      {precios.map((category) => (
        <div
          key={category.id}
          className="tw-border tw-rounded-lg tw-shadow-md tw-p-4 tw-bg-white dark:tw-bg-slate-900"
        >
          {/* Display category title */}
          <h3 className="tw-font-semibold tw-text-lg">{category.title}</h3>

          {/* Iterate over cabins in the category */}
          {category.cabins.map((cabin) => (
            <div
              key={cabin.id}
              className="tw-mt-2 tw-p-3 tw-border tw-rounded-lg tw-bg-slate-100 dark:tw-bg-slate-800"
            >
              {/* Display cabin title */}
              <h4 className="tw-font-medium">{cabin.title}</h4>

              <div className="tw-relative tw-mt-2">
                {/* Scroll left button */}
                <button
                  onClick={() => scrollLeft(cabin.id)}
                  className="tw-absolute tw-left-0 tw-top-1/2 -tw-translate-y-1/2 tw-bg-gray-300 dark:tw-bg-gray-700 tw-rounded-full tw-p-2 tw-z-10 tw-shadow-md"
                >
                  <FaChevronLeft />
                </button>

                {/* Price list as a carousel */}
                <ul
                  ref={(el) => (scrollRefs.current[cabin.id] = el)}
                  className="tw-flex tw-overflow-x-auto tw-scroll-smooth tw-space-x-4 tw-bg-slate-100 tw-border tw-rounded-lg tw-px-10"
                  style={{ scrollbarWidth: "none", whiteSpace: "nowrap" }}
                >
                  {/* Iterate over prices for each cabin */}
                  {Object.entries(cabin.prices).map(([date, price]) => (
                    <li
                      key={date}
                      className="tw-min-w-[120px] tw-text-center tw-border tw-rounded-md tw-p-2 tw-bg-white dark:tw-bg-gray-800 tw-shadow-sm tw-snap-start"
                    >
                      <span className="tw-block tw-text-sm">{date}</span>
                      <span className="tw-font-semibold tw-text-lg">
                        {price ? formatPrice(price) : "-"}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Scroll right button */}
                <button
                  onClick={() => scrollRight(cabin.id)}
                  className="tw-absolute tw-right-0 tw-top-1/2 -tw-translate-y-1/2 tw-bg-gray-300 dark:tw-bg-gray-700 tw-rounded-full tw-p-2 tw-z-10 tw-shadow-md"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PriceCarousel;
