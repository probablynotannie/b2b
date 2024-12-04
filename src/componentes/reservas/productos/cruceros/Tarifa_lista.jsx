import React, { useState, useRef, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { GiCruiser } from "react-icons/gi";

// Función para formatear las fechas solo cuando se visualiza la selección
const formatDate = (dateString) => {
  const [day, month, year] = dateString
    .split("/")
    .map((num) => parseInt(num, 10));

  // Array de nombres de meses en español
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

  // Devolver la fecha en formato "4 de marzo de 1999"
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
  const headerRef = useRef(null);
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

  const handlePriceClick = (price, cabinId, date) => {
    if (price !== "-") {
      setSelectedPrice(price);
      setSelectedCabinId(cabinId);
      setSelectedDate(date);
      setPrecio(price);
    }
  };

  // Encontrar el título de la cabina seleccionada
  const selectedCabin = precios.find((row) => row.id === selectedCabinId);
  const cabinTitle = selectedCabin ? selectedCabin.title : "N/A";

  return (
    <div className="container mx-auto p-4">
      {selectedPrice && selectedDate && selectedCabinId && (
        <div className="mb-4 text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Información seleccionada:
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>Cabina:</strong> {cabinTitle}
            <br />
            <strong>Fecha:</strong> {formatDate(selectedDate)} <br />
            <strong>Precio:</strong> {selectedPrice}€
          </p>
        </div>
      )}
      <div className="flex justify-between">
        <p className="text-secondary font-semibold">
          Los precios no incluyen ni translado al barco ni bebidas
        </p>
        <div className="flex justify-end space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <div className="h-[10px] bg-red-400 w-[10px] rounded-full"></div>
            <span className="dark:text-slate-300">Precio más alto</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <div className="h-[10px] bg-green-400 w-[10px] rounded-full"></div>
            <span className="dark:text-slate-300">Precio más bajo</span>
          </div>
        </div>
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
            <tr ref={headerRef}>
              <th className="sticky bg-slate-200 left-0 min-w-[15vw] px-4 py-2 text-left border dark:border-slate-600 dark:bg-slate-900 dark:text-white flex flex-row items-center">
                <GiCruiser className="mr-2 text-2xl" />
                Cabina
              </th>
              {availableDates.map((date, index) => (
                <th
                  key={index}
                  className="min-w-[10vw] px-4 py-2 border bg-slate-200 dark:border-slate-600 dark:bg-slate-900 dark:text-white text-center"
                >
                  {date} {/* No formatear la fecha en el encabezado */}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {precios.map((row) => {
              return (
                <React.Fragment key={row.id}>
                  <tr className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900">
                    <td
                      onClick={() => toggleRow(row.id)}
                      className="sticky left-0  bg-white dark:border-slate-600 dark:bg-slate-800 border-r-2  hover:bg-slate-100 dark:hover:bg-slate-900 min-w-[120px] px-4 py-2 border dark:text-slate-300"
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
                          className={`cursor-pointer min-w-[100px] px-4 py-2 border dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 transition ${
                            selectedPrice === price &&
                            selectedCabinId === row.id &&
                            selectedDate === date
                              ? "bg-blue-100 dark:bg-green-400 dark:text-white"
                              : ""
                          }`}
                          onClick={() => handlePriceClick(price, row.id, date)}
                        >
                          {price !== "-" ? `${price}€` : "-"}
                        </td>
                      );
                    })}
                  </tr>
                  {expandedRows[row.id] &&
                    row.subPrecios.map((subRow, index) => {
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
                                  selectedPrice === subPrice &&
                                  selectedCabinId === row.id &&
                                  selectedDate === date
                                    ? "bg-blue-100"
                                    : ""
                                }`}
                                onClick={() =>
                                  handlePriceClick(subPrice, row.id, date)
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
      <div className="flex justify-between mt-2">
        <button
          className="px-4 py-2 bg-gray-300 dark:bg-slate-900 dark:text-white text-sm text-gray-700 rounded-md"
          onClick={() => scrollToColumn("left")}
        >
          <FaChevronLeft />
        </button>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Los precios no incluyen ni translado al barco ni bebidas
        </p>
        <button
          className="px-4 py-2 bg-gray-300 dark:bg-slate-900 dark:text-white text-sm text-gray-700 rounded-md"
          onClick={() => scrollToColumn("right")}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Tarifa_lista;
