import React, { useState, useEffect } from "react";
import { GiCruiser } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { FaDoorOpen, FaEuroSign } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
import PriceCarousel from "./Carousel";

import ModalPrecio from "./Modal";
import {
  FaPlus,
  FaMinus,
  FaChevronLeft,
  FaChevronRight as FaArrowRight,
} from "react-icons/fa";
const formatPrice = (price) =>
  price === "-"
    ? "-"
    : `${parseFloat(price).toFixed(2).toLocaleString("es-ES")}€`;
const transformTarifas = (tarifas) => {
  const categoriesMap = new Map();
  tarifas.forEach((tarifa) => {
    const cabinId = tarifa.camarotes.id_camarote;
    const cabina = tarifa.camarotes.tipo_camarote;
    const price = tarifa.precio !== "0.00" ? parseFloat(tarifa.precio) : null;
    const date = tarifa.fecha;
    const tituloCategoria = getNombreCategoria(cabina);

    if (!categoriesMap.has(tituloCategoria)) {
      categoriesMap.set(tituloCategoria, {
        id: tituloCategoria,
        title: tituloCategoria,
        cabins: [],
        minMaxPrices: {}, 
      });
    }

    let category = categoriesMap.get(tituloCategoria);
    let cabin = category.cabins.find((c) => c.id === cabinId);
    if (!cabin) {
      cabin = {
        id: cabinId,
        title: tarifa.camarotes.name,
        prices: {},
        datos: tarifa,
      };
      category.cabins.push(cabin);
    }

    if (cabin.prices[date] === undefined || price < cabin.prices[date]) {
      cabin.prices[date] = price;
    }
    if (price !== null) {
      if (!category.minMaxPrices[date]) {
        category.minMaxPrices[date] = {
          min: price,
          max: price,
        };
      } else {
        category.minMaxPrices[date].min = Math.min(
          category.minMaxPrices[date].min,
          price
        );
        category.minMaxPrices[date].max = Math.max(
          category.minMaxPrices[date].max,
          price
        );
      }
    }
  });

  return Array.from(categoriesMap.values()).map((category) => {
    category.cabins.sort((a, b) => {
      const minPriceA = Math.min(
        ...Object.values(a.prices).filter((p) => p !== null)
      );
      const minPriceB = Math.min(
        ...Object.values(b.prices).filter((p) => p !== null)
      );
      return minPriceA - minPriceB;
    });

    return category;
  });
};

const getNombreCategoria = (cabina) => {
  if (cabina === 1) return "Interior";
  if (cabina === 2) return "Exterior";
  if (cabina === 3) return "Exterior con balcon";
  if (cabina === 4) return "Suite";
  return "Otros";
};
const getfechasDisponibles = (tarifas) => {
  const dates = new Set();
  tarifas.forEach((tarifa) => dates.add(tarifa.fecha));
  return Array.from(dates).sort();
};

function Tarifas({
  tarifas,
  precioSeleccionado,
  setPrecioSeleccionado,
  cruiseImage,
  producto,
}) {
  const precios = transformTarifas(tarifas);
  const fechasDisponibles = getfechasDisponibles(tarifas);
  const fechas_visibles = 4;
  const [startIndex, setStartIndex] = useState(0);
  const [categoriasExp, setCategoriasExp] = useState({});
  const toggleCategoria = (categoryId) => {
    setCategoriasExp((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const prevFechas = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const sigFechas = () => {
    if (startIndex + fechas_visibles < fechasDisponibles.length) {
      setStartIndex(startIndex + 1);
    }
  };
  const [temporal, setTemporal] = useState(null);
  const allPrices = precios.flatMap((category) =>
    category.cabins.flatMap((cabin) =>
      Object.values(cabin.prices).filter((p) => p !== null && p !== undefined)
    )
  );
  const minGlobal = allPrices.length > 0 ? Math.min(...allPrices) : null;
  const maxGlobal = allPrices.length > 0 ? Math.max(...allPrices) : null;
  const handlePriceClick = (price, date, cabin) => {
    if (price) {
      setIsModalOpen(true);
      setTemporal({
        price: price,
        date: date,
        cabin: cabin.title,
        datos: cabin.datos,
      });
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
      document.body.style.overflow = "hidden";
    } else {
      document.body.classList.remove("no-scroll");
      document.body.style.overflow = "";
    }

    return () => {
      document.body.classList.remove("no-scroll");
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <div>
      <section className="tw-block md:tw-hidden">
        <PriceCarousel
          precios={precios}
          handlePriceClick={handlePriceClick}
          precioSeleccionado={precioSeleccionado}
        />
      </section>
      <div className="tw-hidden md:tw-block">
        <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-text-sm dark:tw-text-slate-200">
          <ul className="tw-flex tw-items-center tw-gap-1 ">
            <li className="tw-flex tw-items-center tw-text-sm tw-gap-1">
              <GoDotFill className="tw-text-green-700" /> Precio más bajo
            </li>
            <li className="tw-flex tw-items-center tw-text-sm tw-gap-1">
              <GoDotFill className="tw-text-red-400" /> Precio más alto
            </li>
          </ul>
          <div className="tw-flex tw-items-center tw-gap-1">
            {precioSeleccionado && (
              <ul className="tw-flex tw-items-center tw-gap-2">
                <li className="tw-flex tw-items-center tw-gap-1">
                  <FaDoorOpen className="tw-text-secondary" />
                  {precioSeleccionado.cabin.charAt(0).toUpperCase() +
                    precioSeleccionado.cabin.slice(1).toLowerCase()}
                </li>
                <li className="tw-flex tw-items-center tw-gap-1">
                  <FaCalendarAlt className="tw-text-secondary" />
                  {FormatearFecha(precioSeleccionado.date)}
                </li>
                <li className="tw-flex tw-items-center tw-gap-1">
                  <FaEuroSign className="tw-text-secondary" />
                  {formatPrice(precioSeleccionado.price)}
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="tw-overflow-x-auto ">
          <table className="tw-w-full tw-border tw-shadow-md hover:tw-shadow-lg tw-smooth tw-border-slate-300 dark:tw-border-slate-600 tw-table-fixed tw-rounded-lg">
            <thead className="tw-border-b tw-bg-slate-100 dark:tw-bg-slate-900 dark:tw-text-slate-100 tw-font-semibold tw-text-md">
              <tr className="tw-border-b tw-border-slate-300 dark:tw-border-slate-600">
                <th className="tw-py-2 tw-px-4 tw-text-left tw-font-semibold tw-flex tw-items-center tw-gap-2 tw-border-r tw-border-slate-300 dark:tw-border-slate-600">
                  <GiCruiser className="tw-text-2xl" />
                  Cabina
                </th>
                {fechasDisponibles
                  .slice(startIndex, startIndex + fechas_visibles)
                  .map((date) => (
                    <th
                      key={date}
                      className="tw-py-2 tw-px-4 tw-text-center tw-font-semibold tw-border-r tw-border-slate-300 dark:tw-border-slate-600"
                    >
                      {date}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {precios.map((category) => {
                return (
                  <React.Fragment key={category.id}>
                    {category.cabins.length > 1 ? (
                      <tr
                        className="tw-text-slate-800 tw-cursor-pointer hover:tw-bg-slate-100 dark:hover:tw-bg-slate-900 dark:tw-text-slate-200 tw-transition tw-border-b tw-border-slate-300 dark:tw-border-slate-600"
                        onClick={() =>
                          toggleCategoria(category.id, category.cabins.length)
                        }
                      >
                        <td className="tw-py-2 tw-px-2 tw-flex tw-items-center tw-gap-2 tw-border-r tw-border-slate-300 dark:tw-border-slate-600">
                          {categoriasExp[category.id] ? (
                            <FaMinus className="tw-text-secondary tw-text-[0.6rem]" />
                          ) : (
                            <FaPlus className="tw-text-secondary tw-text-[0.6rem]" />
                          )}
                          <div className="tw-flex-1 tw-overflow-hiddenp">
                            {category.title}
                          </div>
                        </td>

                        {fechasDisponibles
                          .slice(startIndex, startIndex + fechas_visibles)
                          .map((date) => {
                            const pricesForDate = category.cabins
                              .map((cabin) => cabin.prices[date])
                              .filter(
                                (price) =>
                                  price !== null &&
                                  price !== undefined &&
                                  price !== 0
                              );

                            const lowestPrice = pricesForDate.length
                              ? Math.min(...pricesForDate)
                              : null;

                            const hasMaxPrice = pricesForDate.some(
                              (price) => price === maxGlobal
                            );

                            return (
                              <td
                                key={date}
                                className={`... ${
                                  lowestPrice !== null
                                    ? lowestPrice === minGlobal
                                      ? "tw-text-green-600 tw-bg-green-50 dark:tw-bg-green-900 dark:tw-text-green-400 tw-font-semibold"
                                      : hasMaxPrice
                                      ? "tw-text-red-600 dark:tw-bg-red-900 dark:tw-text-red-400 tw-bg-red-50 tw-font-semibold"
                                      : ""
                                    : ""
                                }`}
                              >
                                {lowestPrice !== null ? (
                                  <div className="tw-flex tw-justify-center tw-items-center tw-relative tw-gap-1">
                                    {lowestPrice === minGlobal && (
                                      <div className="tw-absolute tw-left-2 tw-w-2 tw-h-2 tw-rounded-full tw-bg-green-700  dark:tw-bg-green-400 tw-animate-pulse"></div>
                                    )}
                                    {hasMaxPrice && (
                                      <div className="tw-absolute tw-left-2 tw-w-2 tw-h-2 tw-rounded-full tw-bg-red-700 dark:tw-bg-red-400 tw-animate-pulse"></div>
                                    )}
                                    <span> desde</span>
                                    {formatPrice(lowestPrice)}
                                  </div>
                                ) : (
                                  "-"
                                )}
                              </td>
                            );
                          })}
                      </tr>
                    ) : (
                      category.cabins.map((cabin) => (
                        <tr
                          key={cabin.id}
                          className="tw-border-b tw-border-slate-300 dark:tw-border-slate-600 tw-transition hover:tw-bg-slate-100 dark:hover:tw-bg-slate-900"
                        >
                          <td className="tw-py-2 tw-px-4 tw-pl-8 tw-text-slate-700 tw-border-r tw-border-slate-300 dark:tw-border-slate-600 dark:tw-text-slate-300">
                            {category.cabins.length > 1 ? (
                              <>
                                {categoriasExp[category.id] ? (
                                  <FaMinus className="tw-text-secondary tw-text-[0.6rem]" />
                                ) : (
                                  <FaPlus className="tw-text-secondary tw-text-[0.6rem]" />
                                )}
                                {category.title}
                              </>
                            ) : (
                              <span>
                                {cabin.title.charAt(0).toUpperCase() +
                                  cabin.title.slice(1).toLowerCase()}
                              </span>
                            )}
                          </td>
                          {fechasDisponibles
                            .slice(startIndex, startIndex + fechas_visibles)
                            .map((date) => {
                              const price = cabin.prices[date];

                              const isSelected =
                                precioSeleccionado?.date === date &&
                                precioSeleccionado?.cabin === cabin.title;

                              return (
                                <td
                                  key={date}
                                  onClick={() =>
                                    handlePriceClick(
                                      price,
                                      date,
                                      cabin,
                                      category
                                    )
                                  }
                                  className={`tw-py-2 tw-px-4 tw-text-center tw-font-medium tw-cursor-pointer tw-transition tw-border-r tw-border-slate-300 dark:tw-border-slate-600
                                  ${
                                    isSelected
                                      ? "tw-bg-blue-100 dark:tw-bg-cyan-800 dark:tw-text-cyan-300 tw-text-blue-900 tw-font-semibold"
                                      : "dark:tw-bg-slate-800 dark:tw-text-slate-300"
                                  }`}
                                >
                                  {price ? formatPrice(price) : "-"}
                                </td>
                              );
                            })}
                        </tr>
                      ))
                    )}
                    {categoriasExp[category.id] &&
                      category.cabins.map((cabin, index) => (
                        <tr
                          key={cabin.id}
                          className={`tw-border-b tw-border-slate-300 dark:tw-border-slate-600 tw-transition ${
                            index % 2 === 0
                              ? "tw-bg-white dark:tw-bg-slate-800 dark:tw-text-slate-300"
                              : "tw-bg-slate-50 dark:tw-bg-slate-800 dark:tw-text-slate-300"
                          }`}
                        >
                          <td className="tw-py-2 tw-px-4 tw-pl-8 tw-text-slate-700 tw-border-r tw-border-slate-300 dark:tw-border-slate-600 dark:tw-text-slate-300">
                            {cabin.title}
                          </td>
                          {fechasDisponibles
                            .slice(startIndex, startIndex + fechas_visibles)
                            .map((date) => {
                              const price = cabin.prices[date];
                              const isSelected =
                                precioSeleccionado?.date === date &&
                                precioSeleccionado?.cabin === cabin.title;
                              return (
                                <td
                                  key={date}
                                  onClick={() =>
                                    handlePriceClick(
                                      price,
                                      date,
                                      cabin,
                                      category
                                    )
                                  }
                                  className={`tw-py-2 tw-px-4 tw-text-center tw-font-medium tw-cursor-pointer tw-transition tw-border-r tw-border-slate-300 dark:tw-border-slate-600
                                  ${
                                    isSelected
                                      ? "tw-bg-blue-100 dark:tw-bg-cyan-800 dark:tw-text-cyan-300 tw-text-blue-900 tw-font-semibold"
                                      : isSelected
                                      ? "tw-text-green-500 dark:tw-text-green-400 tw-font-semibold"
                                      : " dark:tw-bg-slate-800 dark:tw-text-slate-300"
                                  }`}
                                >
                                  {price ? formatPrice(price) : "-"}
                                </td>
                              );
                            })}
                        </tr>
                      ))}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
          <div className="tw-flex tw-justify-between tw-mt-3">
            <button
              onClick={prevFechas}
              disabled={startIndex === 0}
              className="tw-mr-2 tw-p-2 tw-rounded-full tw-text-slate-600 dark:hover:tw-bg-slate-900 dark:hover:tw-text-slate-300 hover:tw-bg-slate-100 tw-transition tw-disabled:tw-opacity-50 tw-disabled:tw-cursor-not-allowed"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={sigFechas}
              disabled={
                startIndex + fechas_visibles >= fechasDisponibles.length
              }
              className="tw-ml-2 tw-p-2 tw-rounded-full tw-text-slate-600 dark:hover:tw-bg-slate-900 dark:hover:tw-text-slate-300 hover:tw-bg-slate-100 tw-transition tw-disabled:tw-opacity-50 tw-disabled:tw-cursor-not-allowed"
            >
              <FaArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
      <ModalPrecio
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        temporal={temporal}
        cruiseImage={cruiseImage}
        producto={producto}
        setPrecioSeleccionado={setPrecioSeleccionado}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}

export default Tarifas;
