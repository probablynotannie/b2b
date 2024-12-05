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
  const [scrollAmount, setScrollAmount] = useState(0);

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

      setScrollAmount((prev) => {
        let newScrollAmount = prev;
        if (direction === "right") {
          newScrollAmount = Math.min(prev + columnWidth, maxScroll);
        } else {
          newScrollAmount = Math.max(prev - columnWidth, 0);
        }
        tableContainerRef.current.scrollTo({
          left: newScrollAmount,
          behavior: "smooth",
        });
        return newScrollAmount;
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
        // If it's a subrow, set the subrow title
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
        // Main row selection
        setSelectedSubrowTitle(null); // Reset the subrow title
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

  // Function to find the lowest price from an array of prices
  const findLowestPrice = (prices) => {
    const validPrices = prices.filter(
      (price) => price !== "-" && price !== "-€"
    );
    return Math.min(...validPrices);
  };

  // Function to find the highest price from an array of prices
  const findHighestPrice = (prices) => {
    const validPrices = prices.filter(
      (price) => price !== "-" && price !== "-€"
    );
    return Math.max(...validPrices);
  };

  // Function to get the price range of a cabin and its subrows
  const getCabinAndSubrowPriceRange = (prices) => {
    let allPrices = [];
    prices.forEach((price) => {
      if (price.price !== "-") allPrices.push(price.price);
    });

    return {
      lowestPrice: findLowestPrice(allPrices),
      highestPrice: findHighestPrice(allPrices),
    };
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between dark:text-slate-200">
        <div className="flex gap-3">
          <p className="flex items-center gap-2 text-sm">
            <span className="block bg-green-600 w-[7px] h-[7px] rounded-full"></span>
            precio más bajo
          </p>
          <p className="flex items-center gap-2 text-sm">
            <span className="block bg-red-600 w-[7px] h-[7px] rounded-full"></span>
            precio más alto
          </p>
        </div>
        {selectedPrice && selectedDate && selectedCabinId && (
          <div className="flex flex-wrap md:grid-cols-3 justify-center flex-row text-sm gap-3">
            <p className="flex items-center gap-1">
              <MdMeetingRoom className="text-md text-secondary dark:text-secondaryDark" />
              {cabinTitle} {/* Display main cabin title */}
              {selectedSubrowTitle && (
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  - {selectedSubrowTitle}
                </span> // Display subrow title if available
              )}
            </p>
            <p className="flex items-center gap-1 dark:text-slate-200">
              <FaCalendarAlt className="text-md text-secondary dark:text-secondaryDark" />
              {formatDate(selectedDate)}
            </p>
            <p className="flex items-center gap-1 dark:text-slate-200">
              <FaEuroSign className="text-md text-secondary dark:text-secondaryDark" />
              {selectedPrice}€ + tasas ({tasas}€) p/p
            </p>
          </div>
        )}
      </div>
      <div
        ref={tableContainerRef}
        className="scrollable-container custom-scrollbar border-x border-slate-200 dark:border-slate-900 overflow-x-auto"
        style={{
          maxWidth: "100%",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
        }}
      >
        <table className="min-w-full bg-white dark:bg-slate-700">
          <thead className="bg_particles dark:bg-slate-800">
            <tr>
              <th className="sticky bg-slate-200 left-0 min-w-[15vw] px-4 py-2 text-left border dark:border-slate-600 dark:bg-slate-900 dark:text-white flex flex-row items-center">
                <GiCruiser className="mr-2 text-2xl" />
                Cabina
              </th>
              {availableDates.map((date, index) => (
                <th
                  key={index}
                  className="min-w-[10vw] px-4 py-2 border bg-slate-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white text-center"
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
                  <tr className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900">
                    <td
                      onClick={() => toggleRow(row.id)}
                      className="sticky left-0 bg-white dark:border-slate-600 dark:bg-slate-800 border-r-2 hover:bg-slate-100 dark:hover:bg-slate-900 min-w-[120px] px-4 py-2 border dark:text-slate-300"
                    >
                      <span className="mr-2 text-secondary font-bold">
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
                      const priceClass = isLowest
                        ? "text-green-600 font-semibold"
                        : isHighest
                        ? "text-red-600 font-semibold"
                        : "dark:text-slate-200";

                      return (
                        <td
                          key={date}
                          className={`min-w-[100px] px-4 py-2 border dark:border-slate-600 dark:bg-slate-800 transition ${priceClass} ${
                            selectedPrice === price &&
                            selectedCabinId === row.id &&
                            selectedDate === date
                              ? "bg-blue-100"
                              : ""
                          }`}
                          onClick={() =>
                            handlePriceClick(price, row.id, date, false)
                          } // Mark as main row
                        >
                          {price !== "-" ? `${price}€` : "-"}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Subrows */}
                  {expandedRows[row.id] &&
                    row.subPrecios.map((subRow, subIndex) => {
                      const { lowestPrice, highestPrice } =
                        getCabinAndSubrowPriceRange(subRow.preciosConFechas);

                      return (
                        <tr key={subIndex}>
                          <td className="sticky left-0 bg-white min-w-[120px] px-4 py-2 border dark:border-slate-600 dark:bg-slate-800 pl-8">
                            <span className="text-slate-600 dark:text-slate-400 cursor-pointer">
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

                            const subPriceClass =
                              subPrice === lowestPrice
                                ? " text-green-600 font-semibold"
                                : subPrice === highestPrice
                                ? "text-red-600 font-semibold"
                                : "dark:text-slate-200";
                            return (
                              <td
                                key={date}
                                className={`cursor-pointer min-w-[100px] px-4 py-2 border dark:border-slate-600 dark:bg-slate-800 transition ${subPriceClass} `}
                                onClick={
                                  () =>
                                    handlePriceClick(
                                      subPrice,
                                      row.id,
                                      date,
                                      true,
                                      subRow.tituloSubPrecio
                                    ) // Pass subrow title
                                }
                              >
                                {subPrice !== "-" ? `${subPrice}€` : " - "}
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
    </div>
  );
};

export default Tarifa_lista;
