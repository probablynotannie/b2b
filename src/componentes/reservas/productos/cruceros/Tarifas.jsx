import React, { useState } from "react";
import { GiCruiser } from "react-icons/gi";
import { GoDotFill } from "react-icons/go";
import { FaDoorOpen, FaEuroSign } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import formatearFecha from "../../estructura/FormatearFecha";
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
    const categoryKey = tarifa.Camarotes.tipo_camarote;
    const cabinId = tarifa.Camarotes.id_camarote;
    const cabinName = tarifa.Camarotes.name;
    const price = tarifa.precio;
    const date = tarifa.fecha;
    const categoryTitle = getCategoryName(categoryKey, cabinName);
    if (!categoriesMap.has(categoryTitle)) {
      categoriesMap.set(categoryTitle, {
        id: categoryTitle,
        title: categoryTitle,
        cabins: [],
      });
    }
    let category = categoriesMap.get(categoryTitle);
    let cabin = category.cabins.find((c) => c.id === cabinId);
    if (!cabin) {
      cabin = { id: cabinId, title: cabinName, prices: {} };
      category.cabins.push(cabin);
    }
    cabin.prices[date] = price !== "0.00" ? parseFloat(price) : null;
  });
  return Array.from(categoriesMap.values());
};
const getCategoryName = (tipo, cabinName) => {
  const name = cabinName.toLowerCase();
  if (name.includes("suite con balcón")) return "Suite con Balcón";
  if (name.includes("suite")) return "Suite";
  if (name.includes("exterior con balcón")) return "Exterior con Balcón";
  if (name.includes("exterior")) return "Exterior";
  if (name.includes("interior")) return "Interior";
  if (name.includes("vista al mar")) return "Vista al mar";
  return "Otros";
};
const getfechasDisponibles = (tarifas) => {
  const dates = new Set();
  tarifas.forEach((tarifa) => dates.add(tarifa.fecha));
  return Array.from(dates).sort();
};
function Tarifas({ tarifas, precioSeleccionado, setPrecioSeleccionado }) {
  const precios = transformTarifas(tarifas);
  const fechasDisponibles = getfechasDisponibles(tarifas);
  const fechas_visibles = 5;
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
  const handlePriceClick = (price, date, cabinTitle) => {
    if (price) {
      setPrecioSeleccionado({ price, date, cabin: cabinTitle });
    }
  };
  return (
    <div>
      <div className="tw-flex tw-items-center tw-justify-between tw-text-sm dark:tw-text-slate-200">
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
                {precioSeleccionado.cabin}{" "}
              </li>
              <li className="tw-flex tw-items-center tw-gap-1">
                <FaCalendarAlt className="tw-text-secondary" />
                {formatearFecha(precioSeleccionado.date)}
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
        <table className="tw-w-full tw-border tw-shadow-md hover:tw-shadow-lg tw-transition tw-duration-300 tw-border-slate-300 dark:tw-border-slate-600 tw-table-fixed tw-rounded-lg">
          <thead className="tw-border-b tw-bg-slate-100 dark:tw-bg-slate-900 dark:tw-text-slate-100 tw-font-bold tw-text-md">
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
            {precios.map((category) => (
              <React.Fragment key={category.id}>
                {/* Categorias */}
                <tr
                  className="tw-text-slate-800 tw-cursor-pointer  hover:tw-bg-slate-100 dark:hover:tw-bg-slate-900 dark:tw-text-slate-200 tw-transition tw-border-b tw-border-slate-300 dark:tw-border-slate-600"
                  onClick={() => toggleCategoria(category.id)}
                >
                  <td className="tw-py-2 tw-px-2 tw-flex tw-items-center tw-gap-2 tw-border-r tw-border-slate-300 dark:tw-border-slate-600">
                    {categoriasExp[category.id] ? (
                      <FaMinus className="tw-text-secondary tw-text-[0.6rem]" />
                    ) : (
                      <FaPlus className="tw-text-secondary tw-text-[0.6rem]" />
                    )}
                    {category.title}
                  </td>
                  {fechasDisponibles
                    .slice(startIndex, startIndex + fechas_visibles)
                    .map((date) => {
                      const firstPrice = category.cabins
                        .map((cabin) => cabin.prices[date])
                        .find((price) => price !== undefined);

                      return (
                        <td
                          key={date}
                          className="tw-py-2 tw-px-2 tw-border-r tw-border-slate-300 dark:tw-border-slate-600 tw-text-center"
                        >
                          {firstPrice ? formatPrice(firstPrice) : "-"}
                        </td>
                      );
                    })}
                </tr>
                {/* Cabinas */}
                {categoriasExp[category.id] &&
                  category.cabins.map((cabin, index) => (
                    <tr
                      key={cabin.id}
                      className={`tw-border-b tw-border-slate-300 dark:tw-border-slate-600  tw-transition ${
                        index % 2 === 0
                          ? "tw-bg-white dark:tw-bg-slate-700 dark:tw-text-slate-300"
                          : "tw-bg-slate-50 dark:tw-bg-slate-700 dark:tw-text-slate-300"
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
                                handlePriceClick(price, date, cabin.title)
                              }
                              className={`tw-py-2 dark:tw-bg-slate-700 tw-px-4 tw-text-center tw-font-medium tw-cursor-pointer tw-transition tw-border-r tw-border-slate-300 dark:tw-border-slate-600 ${
                                isSelected
                                  ? "tw-bg-blue-100 dark:tw-bg-green-800 dark:tw-text-green-300 tw-text-black tw-font-bold"
                                  : ""
                              } ${
                                price ===
                                Math.min(...Object.values(cabin.prices))
                                  ? "tw-text-green-600 dark:tw-text-green-500 tw-font-semibold"
                                  : ""
                              } ${
                                price ===
                                Math.max(...Object.values(cabin.prices))
                                  ? "tw-text-red-500 tw-font-semibold"
                                  : ""
                              }`}
                            >
                              {price ? formatPrice(price) : "-"}
                            </td>
                          );
                        })}
                    </tr>
                  ))}
              </React.Fragment>
            ))}
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
            disabled={startIndex + fechas_visibles >= fechasDisponibles.length}
            className="tw-ml-2 tw-p-2 tw-rounded-full tw-text-slate-600 dark:hover:tw-bg-slate-900 dark:hover:tw-text-slate-300 hover:tw-bg-slate-100 tw-transition tw-disabled:tw-opacity-50 tw-disabled:tw-cursor-not-allowed"
          >
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Tarifas;
