import {  useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const formatPrice = (price) => `${price}€`;

const PriceCarousel = ({ precios, handlePriceClick, precioSeleccionado }) => {
  const scrollRefs = useRef({});
  const scrollLeft = (id) => {
    if (scrollRefs.current[id]) {
      scrollRefs.current[id].scrollBy({ left: -150, behavior: "smooth" });
    }
  };

  const scrollRight = (id) => {
    if (scrollRefs.current[id]) {
      scrollRefs.current[id].scrollBy({ left: 150, behavior: "smooth" });
    }
  };
  return (
    <div className="tw-gap-10 tw-space-y-10">
      {precios.map((category) => (
        <div
          key={category.id}
          className="tw-border dark:tw-border-slate-800 tw-rounded-lg tw-shadow tw-bg-white dark:tw-bg-slate-900"
        >
          <h3 className="tw-text-lg tw-bg-slate-800 dark:tw-bg-slate-900 tw-rounded-t-lg tw-p-6 tw-text-white tw-font-semibold tw-text-center">
            {category.title}
          </h3>
          {category.cabins.map((cabin) => {
            const priceEntries = Object.entries(cabin.prices || {});

            return (
              <div
                key={cabin.id}
                className="tw-p-3 tw-border-2 dark:tw-border-slate-900 dark:tw-bg-slate-700"
              >
                <h4 className="tw-text-center tw-text-secondary tw-font-semibold dark:tw-text-secondaryDarkDarks">
                  {cabin.title}
                </h4>
                <div className="tw-flex tw-items-center tw-mt-2">
                  <ul
                    ref={(el) => (scrollRefs.current[cabin.id] = el)}
                    className="tw-flex tw-overflow-x-auto tw-scroll-smooth tw-space-x-2 tw-rounded-lg tw-max-w-full tw-px-10"
                    style={{
                      scrollbarWidth: "none",
                      whiteSpace: "nowrap",
                      scrollSnapType: "x mandatory",
                    }}
                  >
                    {priceEntries.map(([date, price]) => {
                      const isSelected =
                        precioSeleccionado?.date === date &&
                        precioSeleccionado?.cabin === cabin.title;

                      return (
                        <li
                          key={date}
                          className={`tw-text-center tw-rounded-md tw-p-2 tw-snap-start 
                            tw-cursor-pointer tw-shadow-md tw-border-2 tw-border-slate-200 dark:tw-border-slate-600 
                            ${
                              isSelected
                                ? "tw-bg-secondary dark:tw-bg-secondaryDark dark:tw-text-white tw-text-white"
                                : "tw-bg-slate-100 dark:tw-bg-slate-800 dark:tw-text-orange-400"
                            }`}
                          onClick={() => {
                            handlePriceClick(price, date, cabin);
                          }}
                        >
                          <span
                            className={`tw-block tw-text-sm ${
                              isSelected
                                ? "tw-text-white tw-font-semibold"
                                : "dark:tw-text-slate-400"
                            }`}
                          >
                            {date}
                          </span>
                          <span className="tw-font-semibold tw-text-sm ">
                            {price ? formatPrice(price) : "-"}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="tw-flex tw-justify-between tw-items-center tw-mt-2">
                  <button
                    onClick={() => scrollLeft(cabin.id)}
                    className=" tw-bg-slate-300 dark:tw-bg-slate-900 dark:tw-text-slate-200 tw-rounded-full tw-p-2 tw-shadow-md tw-z-10"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={() => scrollRight(cabin.id)}
                    className=" tw-bg-slate-300 dark:tw-bg-slate-900 dark:tw-text-slate-200 tw-rounded-full tw-p-2 tw-shadow-md tw-z-10"
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
