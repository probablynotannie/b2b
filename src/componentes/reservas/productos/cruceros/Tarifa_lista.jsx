import React, { useState, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { GiCruiser } from "react-icons/gi";
import { MdMeetingRoom } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";

const formatDate = (dateString) => {
  const [day, month, year] = dateString
    .split("/")
    .map((num) => parseInt(num, 10));
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  return `${day} de ${months[month - 1]} de ${year}`;
};

const getAvailableDatesFromToday = (precios) => {
  const today = new Date();
  const availableDates = new Set();
  precios.forEach((row) => {
    row.preciosConFechas.forEach((price) => {
      const [day, month, year] = price.fecha
        .split("/")
        .map((num) => parseInt(num, 10));
      const priceYear = year || today.getFullYear();
      const currentDate = new Date(priceYear, month - 1, day);

      if (currentDate >= today && price.price !== "-") {
        availableDates.add(price.fecha);
      }
    });
  });
  return Array.from(availableDates).sort((a, b) => {
    const [dayA, monthA, yearA] = a.split("/").map((num) => parseInt(num, 10));
    const [dayB, monthB, yearB] = b.split("/").map((num) => parseInt(num, 10));
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateA - dateB;
  });
};

const Tarifa_lista = ({
  tasas,
  precios,
  setPrecio,
  selectedPrice,
  setSelectedPrice,
  selectedCabinId,
  setSelectedCabinId,
  selectedDate,
  setSelectedDate,
}) => {
  const [expandedRows, setExpandedRows] = useState({});
  const tableContainerRef = useRef(null);
  const availableDates = getAvailableDatesFromToday(precios);

  const toggleRow = (rowId) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const scrollToColumn = (direction) => {
    if (tableContainerRef.current) {
      const columnWidth =
        tableContainerRef.current.scrollWidth / availableDates.length;
      const maxScroll =
        tableContainerRef.current.scrollWidth -
        tableContainerRef.current.clientWidth;
      const currentScroll = tableContainerRef.current.scrollLeft;
      let newScrollAmount = currentScroll;
      if (direction === "right") {
        newScrollAmount = Math.min(currentScroll + columnWidth, maxScroll);
      } else {
        newScrollAmount = Math.max(currentScroll - columnWidth, 0);
      }
      tableContainerRef.current.scrollTo({
        left: newScrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handlePriceClick = (
    price,
    cabinId,
    date,
    isSubrow = false,
    subrowTitle = ""
  ) => {
    if (price !== "-") {
      if (isSubrow) {
        setSelectedSubrowTitle(subrowTitle);
        if (
          !(
            selectedPrice === price &&
            selectedCabinId === cabinId &&
            selectedDate === date
          )
        ) {
          setSelectedPrice(price);
          setSelectedCabinId(cabinId);
          setSelectedDate(date);
          setPrecio(price);
        }
      } else {
        setSelectedSubrowTitle(null);
        if (
          !(
            selectedPrice === price &&
            selectedCabinId === cabinId &&
            selectedDate === date
          )
        ) {
          setSelectedPrice(price);
          setSelectedCabinId(cabinId);
          setSelectedDate(date);
          setPrecio(price);
        }
      }
    }
  };

  const [selectedSubrowTitle, setSelectedSubrowTitle] = useState(null);
  const selectedCabin = precios.find((row) => row.id === selectedCabinId);
  const cabinTitle = selectedCabin ? selectedCabin.title : "N/A";

  const findLowestPrice = (prices) => {
    const validPrices = prices
      .filter((price) => price !== "-" && price !== "-€" && !isNaN(price))
      .map((price) => parseFloat(price));
    return validPrices.length > 0 ? Math.min(...validPrices) : null;
  };

  const findHighestPrice = (prices) => {
    const validPrices = prices
      .filter((price) => price !== "-" && price !== "-€" && !isNaN(price))
      .map((price) => parseFloat(price));
    return validPrices.length > 0 ? Math.max(...validPrices) : null;
  };

  const getCabinAndSubrowPriceRange = (prices) => {
    let allPrices = [];
    prices.forEach((price) => {
      if (
        price.price !== "-" &&
        price.price !== "-€" &&
        !isNaN(parseFloat(price.price))
      ) {
        allPrices.push(parseFloat(price.price));
      }
    });
    return {
      lowestPrice: findLowestPrice(allPrices),
      highestPrice: findHighestPrice(allPrices),
    };
  };

  return (
    <div className="tw-container tw-mx-auto tw-p-4">
      <div className="tw-flex tw-flex-wrap tw-justify-between dark:tw-text-slate-200">
        <div className="tw-flex tw-gap-3">
          <p className="tw-flex tw-items-center tw-gap-2 tw-text-sm">
            <span className="tw-block tw-bg-red-600 tw-w-[7px] tw-h-[7px] tw-rounded-full"></span>
            precio más alto
          </p>
        </div>
        {selectedPrice && selectedDate && selectedCabinId && (
          <div className="tw-flex tw-flex-wrap md:tw-grid-cols-3 tw-justify-center tw-flex-row tw-text-sm tw-gap-3">
            <p className="tw-flex tw-items-center tw-gap-1">
              <MdMeetingRoom className="tw-text-md tw-text-secondary dark:tw-text-secondaryDark" />
              {cabinTitle}
              {selectedSubrowTitle && (
                <span className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400">
                  - {selectedSubrowTitle}
                </span>
              )}
            </p>
            <p className="tw-flex tw-items-center tw-gap-1 dark:tw-text-slate-200">
              <FaCalendarAlt className="tw-text-md tw-text-secondary dark:tw-text-secondaryDark" />
              {formatDate(selectedDate)}
            </p>
            <p className="tw-flex tw-items-center tw-gap-1 dark:tw-text-slate-200">
              <FaEuroSign className="tw-text-md tw-text-secondary dark:tw-text-secondaryDark" />
              {selectedPrice}€ + tasas ({tasas}€) p/p
            </p>
          </div>
        )}
      </div>
      <div
        ref={tableContainerRef}
        className="tw-scrollable-container tw-custom-scrollbar tw-border-x tw-border-slate-200 dark:tw-border-slate-900 tw-overflow-x-auto"
      >
        <table className="tw-min-w-full tw-bg-white dark:tw-bg-slate-700">
          <thead className="dark:tw-bg-slate-800">
            <tr>
              <th className="tw-sticky tw-bg-slate-200 tw-left-0 tw-min-w-[15vw] tw-px-4 tw-py-2 tw-text-left tw-border dark:tw-border-slate-600 dark:tw-bg-slate-900 dark:tw-text-white">
                <GiCruiser className="tw-mr-2 tw-text-2xl" />
                Cabina
              </th>
              {availableDates.map((date, index) => (
                <th
                  key={index}
                  className="tw-min-w-[10vw] tw-px-4 tw-py-2 tw-border tw-bg-slate-200 dark:tw-border-slate-600 dark:tw-bg-slate-900 dark:tw-text-white tw-text-center"
                >
                  {date}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {precios.map((row) => {
              const { lowestPrice, highestPrice } = getCabinAndSubrowPriceRange(
                row.preciosConFechas
              );
              return (
                <React.Fragment key={row.id}>
                  <tr className="tw-cursor-pointer hover:tw-bg-slate-100 dark:hover:tw-bg-slate-900">
                    <td
                      onClick={() => toggleRow(row.id)}
                      className="tw-sticky tw-left-0 tw-bg-white dark:tw-border-slate-600 dark:tw-bg-slate-800 tw-border-r-2 hover:tw-bg-slate-100 dark:hover:tw-bg-slate-900 tw-min-w-[120px] tw-px-4 tw-py-2 tw-border dark:tw-text-slate-300"
                    >
                      <span className="tw-mr-2 tw-text-secondary tw-font-bold">
                        {expandedRows[row.id] ? "-" : "+"}
                      </span>
                      {row.title}
                    </td>
                    {availableDates.map((date) => {
                      const priceItem = row.preciosConFechas.find(
                        (item) => item.fecha === date
                      );
                      const price = priceItem ? priceItem.price : "-";
                      const isLowest = price === lowestPrice;
                      const isHighest = price === highestPrice;
                      const isSelected =
                        selectedPrice === price &&
                        selectedCabinId === row.id &&
                        selectedDate === date;
                      const priceClass = isSelected
                        ? "tw-border-2 tw-border-green-400 tw-text-green-700 tw-font-bold dark:tw-border-green-500 dark:tw-text-green-400"
                        : isLowest
                        ? "tw-text-green-600 dark:tw-text-green-300 tw-font-semibold"
                        : isHighest
                        ? "tw-text-red-600 tw-font-semibold"
                        : "dark:tw-text-slate-200";

                      return (
                        <td
                          key={date}
                          className={`tw-min-w-[100px] tw-px-4 tw-py-2 tw-border dark:tw-border-slate-600 dark:tw-bg-slate-800 tw-transition ${priceClass}`}
                          onClick={() =>
                            handlePriceClick(price, row.id, date, false)
                          }
                        >
                          {price !== "-" ? `${price}€` : "-"}
                        </td>
                      );
                    })}
                  </tr>
                  {expandedRows[row.id] &&
                    row.subPrecios.map((subRow, subIndex) => {
                      const { lowestPrice, highestPrice } =
                        getCabinAndSubrowPriceRange(subRow.preciosConFechas);
                      return (
                        <tr key={subIndex}>
                          <td className="tw-sticky tw-left-0 tw-bg-white tw-min-w-[120px] tw-px-4 tw-py-2 tw-border dark:tw-border-slate-600 dark:tw-bg-slate-800 tw-pl-8">
                            <span className="tw-text-slate-600 dark:tw-text-slate-400 tw-cursor-pointer">
                              {subRow.tituloSubPrecio}
                            </span>
                          </td>
                          {availableDates.map((date) => {
                            const subPriceItem = subRow.preciosConFechas.find(
                              (item) => item.fecha === date
                            );
                            const subPrice = subPriceItem
                              ? subPriceItem.price
                              : "-";
                            const isSelected =
                              selectedPrice === subPrice &&
                              selectedCabinId === row.id &&
                              selectedDate === date &&
                              selectedSubrowTitle === subRow.tituloSubPrecio;
                            const subPriceClass =
                              isSelected
                                ? "tw-border-2 tw-border-green-400 tw-text-green-700 tw-font-bold dark:tw-border-green-500 dark:tw-text-green-400"
                                : subPrice === lowestPrice
                                ? "tw-text-green-600 tw-font-semibold"
                                : subPrice === highestPrice
                                ? "tw-text-red-600 tw-font-semibold"
                                : "dark:tw-text-slate-200";

                            return (
                              <td
                                key={date}
                                className={`tw-cursor-pointer tw-min-w-[100px] tw-px-4 tw-py-2 tw-border dark:tw-border-slate-600 dark:tw-bg-slate-800 tw-transition ${subPriceClass}`}
                                onClick={() =>
                                  handlePriceClick(
                                    subPrice,
                                    row.id,
                                    date,
                                    true,
                                    subRow.tituloSubPrecio
                                  )
                                }
                              >
                                {subPrice !== "-" ? `${subPrice}€` : "-"}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="tw-flex tw-justify-between tw-items-center tw-mt-4">
        <button onClick={() => scrollToColumn("left")} className="tw-text-lg">
          <FaChevronLeft className="dark:tw-text-white" />
        </button>
        <button onClick={() => scrollToColumn("right")} className="tw-text-lg">
          <FaChevronRight className="dark:tw-text-white" />
        </button>
      </div>
    </div>
  );
};

export default Tarifa_lista;
