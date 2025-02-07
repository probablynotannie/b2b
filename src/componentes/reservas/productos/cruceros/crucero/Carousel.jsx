import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const formatPrice = (price) => `${price}€`;

const PriceCarousel = ({ precios, handlePriceClick }) => {
  const [selected, setSelected] = useState({
    date: null,
    price: null,
    cabin: null,
    tarifaId: null, 
  });
  const scrollRefs = useRef({});

  const scrollLeft = (id) => {
    if (scrollRefs.current[id]) {
      scrollRefs.current[id].scrollLeft -= 150;
    }
  };

  const scrollRight = (id) => {
    if (scrollRefs.current[id]) {
      scrollRefs.current[id].scrollLeft += 150;
    }
  };
  
  return (
    <div className="tw-gap-10 tw-space-y-10">
      {precios.map((category, index) => (
        <div
          key={index}
          className="tw-border dark:tw-border-slate-800 tw-rounded-lg tw-shadow tw-bg-white dark:tw-bg-slate-900"
        >
          <h3 className="tw-text-lg tw-bg-slate-800 dark:tw-bg-slate-900 tw-rounded-t-lg tw-p-6 tw-text-white tw-font-semibold tw-text-center">
            {category.title}
          </h3>
          {category.cabins.map((cabin) => {
            const priceEntries = Object.entries(cabin.prices || {});
            const lowestEntry = priceEntries.reduce(
              (min, entry) => (entry[1] < min[1] ? entry : min),
              priceEntries[0] || []
            );
            const lowestDate = lowestEntry?.[0] || null;
            const lowestPrice = lowestEntry?.[1] || null;
            return (
              <div
                key={cabin.tarifaId}
                className="tw-p-3 tw-border-2 dark:tw-border-slate-900 dark:tw-bg-slate-700"
              >
                <h4 className="tw-text-center tw-text-secondary tw-font-semibold dark:tw-text-secondaryDarks">
                  {cabin.title}
                </h4>
                {category.cabins.length > 1 && lowestPrice !== null && (
                  <p className="tw-text-sm tw-text-center dark:tw-text-slate-300">
                    Más económica {lowestDate}
                  </p>
                )}
                <ul
                  ref={(el) => (scrollRefs.current[cabin.id] = el)}
                  className="tw-flex tw-overflow-x-auto tw-justify-center tw-scroll-smooth tw-space-x-2 tw-rounded-lg tw-mt-2"
                  style={{ scrollbarWidth: "none", whiteSpace: "nowrap" }}
                >
                  {priceEntries.map(([date, price]) => {
                    const isSelected =
                      selected.date === date &&
                      selected.cabin === cabin.title &&
                      selected.tarifaId === cabin.tarifaId;

                    return (
                      <li
                        key={date}
                        className={`tw-text-center tw-rounded-md tw-p-2 tw-snap-start 
                            tw-cursor-pointer tw-shadow-md tw-border-2 tw-border-slate-200 dark:tw-border-slate-600 
                            ${
                              isSelected
                                ? "tw-bg-orange-400 tw-text-white"
                                : "tw-bg-slate-100 dark:tw-bg-slate-800"
                            }`}
                        onClick={() => {
                          if (selected.tarifaId !== cabin.tarifaId) {
                            handlePriceClick(price, date, cabin.title);
                            setSelected({
                              date,
                              price,
                              cabin: cabin.title,
                              tarifaId: cabin.tarifaId,
                            });
                          }
                        }}
                      >
                        <span className="tw-block tw-text-sm dark:tw-text-slate-300">
                          {date}
                        </span>
                        <span className="tw-font-semibold tw-text-sm dark:tw-text-orange-400">
                          {price ? formatPrice(price) : "-"}
                        </span>
                      </li>
                    );
                  })}
                </ul>
             {/*    <div className="tw-grid tw-grid-cols-2 tw-gap-2 tw-justify-between tw-items-center tw-mt-2">
                  <button
                    onClick={() => scrollLeft(cabin.id)}
                    className="tw-bg-slate-300 dark:tw-bg-slate-900 dark:tw-text-slate-200 tw-w-full tw-p-3 tw-shadow-md"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={() => scrollRight(cabin.id)}
                    className="tw-bg-slate-300 dark:tw-bg-slate-900 dark:tw-text-slate-200 tw-w-full tw-flex tw-justify-end tw-p-3 tw-shadow-md"
                  >
                    <FaChevronRight />
                  </button>
                </div> */}
                <div className="tw-flex tw-justify-between tw-items-center tw-mt-2">
                  <button
                    onClick={() => scrollLeft(cabin.id)}
                    className="tw-bg-slate-300 dark:tw-bg-slate-900 dark:tw-text-slate-200 tw-rounded-full tw-p-2 tw-z-10 tw-shadow-md"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={() => scrollRight(cabin.id)}
                    className="tw-bg-slate-300 dark:tw-bg-slate-900 dark:tw-text-slate-200 tw-rounded-full tw-p-2 tw-z-10 tw-shadow-md"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default PriceCarousel;
