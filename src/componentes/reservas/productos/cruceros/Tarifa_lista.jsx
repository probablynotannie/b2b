import React, { useState, useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { GiCruiser } from "react-icons/gi";

const getAvailableDatesFromToday = (precios) => {
  const today = new Date();
  const availableDates = new Set();

  precios.forEach((row) => {
    row.preciosConFechas.forEach((price) => {
      const [day, month] = price.fecha
        .split("/")
        .map((num) => parseInt(num, 10));
      const currentDate = new Date(today.getFullYear(), month - 1, day);
      if (currentDate >= today && price.price !== "-") {
        availableDates.add(price.fecha);
      }
    });
  });

  return Array.from(availableDates).sort((a, b) => {
    const [dayA, monthA] = a.split("/").map((num) => parseInt(num, 10));
    const [dayB, monthB] = b.split("/").map((num) => parseInt(num, 10));
    const dateA = new Date(today.getFullYear(), monthA - 1, dayA);
    const dateB = new Date(today.getFullYear(), monthB - 1, dayB);
    return dateA - dateB;
  });
};

const Tarifa_lista = ({ precios, setPrecio }) => {
  const [expandedRows, setExpandedRows] = useState({});
  const [selectedPrice, setSelectedPrice] = useState(null);
  const tableContainerRef = useRef(null);
  const headerRef = useRef(null);

  const availableDates = getAvailableDatesFromToday(precios);

  const toggleRow = (rowId) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const scrollToColumn = (direction) => {
    if (tableContainerRef.current && headerRef.current) {
      const columnWidth = headerRef.current.getBoundingClientRect().width;
      tableContainerRef.current.scrollBy({
        left: direction === "left" ? -columnWidth / 4 : columnWidth / 4,
        behavior: "smooth",
      });
    }
  };

  const findLowestPrice = (prices) => {
    const validPrices = prices.filter(
      (price) => price !== "-" && price !== "-€"
    );
    return Math.min(...validPrices);
  };

  const findHighestPrice = (prices) => {
    const validPrices = prices.filter(
      (price) => price !== "-" && price !== "-€"
    );
    return Math.max(...validPrices);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col space-y-2 mb-5">
        <div className="flex justify-center space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <div className="h-[10px] bg-red-400 w-[10px] rounded-full"></div>
            <span className="dark:text-slate-300">Precio más alto</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <div className="h-[10px] bg-green-400 w-[10px] rounded-full"></div>
            <span className="dark:text-slate-300">Precio más bajo</span>
          </div>
        </div>
        <div className="text-center text-sm text-orange-400 font-semibold">
          <span>Los precios no incluyen ni translado al barco ni bebidas</span>
        </div>
      </div>

      <div
        ref={tableContainerRef}
        className="scrollable-container border-x border-slate-200 dark:border-slate-900"
      >
        <table className="min-w-full bg-white dark:bg-slate-700">
          <thead className="bg_particles dark:bg-slate-800">
            <tr ref={headerRef}>
              <th className="sticky bg_particles  left-0 min-w-[15vw] px-4 py-2 text-left border dark:border-slate-600 dark:bg-slate-900 dark:text-white flex flex-row items-center">
                <GiCruiser className="mr-2 text-2xl" />
                Cabina
              </th>
              {availableDates.map((date, index) => (
                <th
                  key={index}
                  className="min-w-[10vw] px-4 py-2 border dark:border-slate-600 dark:bg-slate-900 dark:text-white text-center"
                >
                  {date}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {precios.map((row) => {
              const lowestPrice = findLowestPrice(
                row.preciosConFechas.map((item) => item.price)
              );
              const highestPrice = findHighestPrice(
                row.preciosConFechas.map((item) => item.price)
              );

              return (
                <React.Fragment key={row.id}>
                  <tr className="cursor-pointer hover:bg-slate-100">
                    <td
                      onClick={() => toggleRow(row.id)}
                      className="sticky left-0 bg-white dark:border-slate-600 dark:bg-slate-800 hover:bg-slate-100 min-w-[120px] px-4 py-2 border dark:text-slate-300"
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

                      return (
                        <td
                          key={date}
                          className={`min-w-[100px] px-4 py-2 border dark:border-slate-600 dark:bg-slate-800 cursor-pointer ${
                            price === lowestPrice
                              ? "text-green-500 font-semibold"
                              : price === highestPrice
                              ? "text-red-500 font-semibold"
                              : "dark:text-slate-300"
                          } ${price === selectedPrice ? "bg-blue-100" : ""}`}
                          onClick={() => {
                            if (price !== "-") {
                              setPrecio(price);
                              setSelectedPrice(price);
                            }
                          }}
                        >
                          {price !== "-" ? `${price}€` : " - "}
                        </td>
                      );
                    })}
                  </tr>

                  {expandedRows[row.id] &&
                    row.subPrecios.map((subRow, index) => {
                      const subLowestPrice = findLowestPrice(
                        subRow.preciosConFechas.map((item) => item.price)
                      );
                      const subHighestPrice = findHighestPrice(
                        subRow.preciosConFechas.map((item) => item.price)
                      );

                      return (
                        <tr key={index}>
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

                            return (
                              <td
                                key={date}
                                className={`cursor-pointer min-w-[100px] px-4 py-2 border dark:border-slate-600 dark:bg-slate-800 transition ${
                                  subPrice === subLowestPrice
                                    ? "text-green-500 font-semibold"
                                    : subPrice === subHighestPrice
                                    ? "text-red-500 font-semibold"
                                    : "dark:text-slate-200"
                                } ${
                                  subPrice === selectedPrice
                                    ? "bg-blue-100"
                                    : ""
                                }`}
                                onClick={() => {
                                  if (subPrice !== "-") {
                                    setPrecio(subPrice);
                                    setSelectedPrice(subPrice);
                                  }
                                }}
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

      <div className="flex justify-end mt-5">
        <div className="flex items-center mb-2">
          <button
            onClick={() => scrollToColumn("left")}
            className="p-2 bg-secondary text-white rounded-l hover:bg-secondary"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scrollToColumn("right")}
            className="p-2 bg-secondary text-white rounded-r hover:bg-secondary"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tarifa_lista;
