import { Popover } from "flowbite-react";
import { FaCartArrowDown, FaTrash } from "react-icons/fa";
import cesta from "./zustand/Zustand";
import {
  FaGlobe,
  FaHotel,
  FaPlane,
  FaShip,
  FaTaxi,
  FaTrain,
  FaTicketAlt,
  FaCar,
  FaBriefcaseMedical,
} from "react-icons/fa";
import { FaFerry, FaKitMedical, FaTicket } from "react-icons/fa6";

import { IoTicket } from "react-icons/io5";
import { MdModeOfTravel } from "react-icons/md";
function Cesta() {
  const productos = cesta((state) => state.productos);
  const removeProducto = cesta((state) => state.removeProducto);
  const tipoIcono = {
    1: [FaHotel],
    2: [FaGlobe],
    3: [FaShip],
    4: [FaTaxi],
    5: [FaCar],
    6: [FaTicketAlt],
    7: [IoTicket],
    8: [FaFerry],
    9: [FaTrain],
    10: [FaBriefcaseMedical],
    11: [FaPlane],
    12: [MdModeOfTravel],
    13: [FaHotel, FaPlane],
    14: [FaHotel, FaTicketAlt],
    15: [FaHotel, FaFerry],
  };
  console.log(productos);
  return (
    <Popover
      aria-labelledby="notificaciones-popover"
      content={
        <div className="tw-flex tw-flex-col tw-gap-4 tw-w-80 tw-p-5 tw-bg-white dark:tw-bg-slate-800 tw-border tw-border-slate-300 dark:tw-border-slate-700 tw-rounded-xl tw-shadow-lg tw-transition-shadow tw-duration-300">
          <h3 className="tw-text-xl tw-font-extrabold tw-text-black dark:tw-text-white tw-border-b-2 tw-border-slate-200 dark:tw-border-slate-700 tw-pb-2">
            Cesta
          </h3>

          {productos.length === 0 ? (
            <p className="tw-text-center tw-text-slate-500 dark:tw-text-slate-400 tw-italic ">
              No se han añadido productos
            </p>
          ) : (
            productos.map((producto, i) => (
              <div
                key={i}
                className="tw-flex tw-gap-4 tw-items-center tw-border-b tw-border-slate-100 dark:tw-border-slate-700 tw-pb-4 last:tw-border-b-0"
              >
                <img
                  src={producto.img}
                  alt={producto.nombre}
                  className="tw-w-24 tw-h-24 tw-object-cover tw-rounded-lg tw-shadow-sm"
                />

                <div className="tw-flex-1 tw-flex tw-flex-col tw-justify-between">
                  <div className="tw-flex tw-items-center tw-gap-1">
                    {tipoIcono[producto.type]?.map((Icon, idx) => (
                      <Icon
                        key={idx}
                        className={`tw-text-slate-500 dark:tw-text-slate-300 tw-text-xl ${
                          idx === 1 ? "tw--ml-2" : ""
                        }`}
                      />
                    ))}
                    Circuito
                  </div>

                  <h3 className="tw-font-semibold tw-text-slate-900 dark:tw-text-slate-100">
                    {producto.titulo}
                  </h3>
                  <p className="tw-text-slate-500 dark:tw-text-slate-400 tw-text-xs tw-mt-1">
                    {producto.fecha}
                  </p>
                  <div className="tw-flex tw-justify-between">
                    <span className="tw-text-primary tw-font-bold tw-text-lg tw-mt-1 dark:tw-text-secondaryDark">
                      {producto.precio ? producto.precio.toFixed(2) : "145"}€
                    </span>{" "}
                    <button
                      onClick={() => removeProducto(i)}
                      className="tw-text-slate-400 hover:tw-text-red-600 tw-transition tw-duration-200"
                      aria-label={`Eliminar ${
                        producto.nombre || `producto ${i + 1}`
                      }`}
                      title="Eliminar producto"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
          <button className="tw-btn_accesorios tw-btn_primario">
            Finalizar la reserva
          </button>
        </div>
      }
    >
      <div className="tw-text-white tw-relative hover:tw-text-secondary tw-transition tw-cursor-pointer dark:tw-bg-slate-700 tw-bg-slate-700 tw-flex tw-items-center tw-justify-center tw-w-[35px] tw-h-[35px] tw-rounded-full tw-text-2xl">
        <FaCartArrowDown className="tw-text-xl" />
        {productos.length > 0 && (
          <div className="tw-absolute -tw-top-1 tw-right-0 tw-bg-green-600 tw-text-white tw-text-xs tw-font-bold tw-rounded-full tw-w-5 tw-h-5 tw-flex tw-items-center tw-justify-center">
            {productos.length}
          </div>
        )}
      </div>
    </Popover>
  );
}

export default Cesta;
