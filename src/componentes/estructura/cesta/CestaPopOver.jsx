import { Popover } from "flowbite-react";
import { FaCartArrowDown, FaTrash } from "react-icons/fa";
import cesta from "./Zustand";
import {
  FaGlobe,
  FaHotel,
  FaPlane,
  FaShip,
  FaTaxi,
  FaTrain,
  FaCar,
} from "react-icons/fa";
import { FaFerry, FaKitMedical, FaTicket } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";
import { MdModeOfTravel } from "react-icons/md";
const definicionesTipo = [
  { id: 1, iconos: [FaHotel], texto: "Hotel" },
  { id: 2, iconos: [FaGlobe], texto: "Destinos" },
  { id: 3, iconos: [FaShip], texto: "Cruceros" },
  { id: 4, iconos: [FaTaxi], texto: "Transfers" },
  { id: 5, iconos: [FaCar], texto: "Coches" },
  { id: 6, iconos: [FaTicket], texto: "Tickets" },
  { id: 7, iconos: [IoTicket], texto: "Entradas" },
  { id: 8, iconos: [FaFerry], texto: "Ferry" },
  { id: 9, iconos: [FaTrain], texto: "Tren" },
  { id: 10, iconos: [FaKitMedical], texto: "Seguro" },
  { id: 11, iconos: [FaPlane], texto: "Vuelo" },
  { id: 12, iconos: [MdModeOfTravel], texto: "Circuito" },
  { id: 13, iconos: [FaHotel, FaPlane], texto: "Hotel + Vuelo" },
  { id: 14, iconos: [FaHotel, FaTicket], texto: "Hotel + actividades" },
  { id: 15, iconos: [FaHotel, FaFerry], texto: "Hotel + Ferry" },
];
const obtenerTipoPorId = (id) => {
  return (
    definicionesTipo.find((tipo) => tipo.id === id) || {
      iconos: [],
      texto: "Tipo desconocido",
    }
  );
};
const TipoIconos = ({ tipo }) => {
  const { iconos, texto } = obtenerTipoPorId(tipo);
  const hasTwoIcons = iconos.length === 2;

  return (
    <div className="tw-relative tw-flex tw-items-center">
      {iconos.map((Icon, index) => (
        <Icon
          key={index}
          className={`tw-duration-300 tw-transition ${
            hasTwoIcons && index === 1
              ? "tw-absolute tw-left-2 tw--bottom-[7px] tw-bg-blue-400 tw-p-1 tw-rounded-full tw-text-white tw-text-md"
              : " dark:tw-text-white group-hover:tw-text-secondary"
          }`}
        />
      ))}
      <span className="tw-ml-6 tw-text-xs tw-font-bold tw-text-slate-500 dark:tw-text-slate-300">
        {texto}
      </span>
    </div>
  );
};

const ProductoItem = ({ producto, index, onRemove }) => {
  return (
    <div
      className={`dark:tw-bg-slate-900 tw-px-2 ${
        index !== 0 &&
        "tw-border-t tw-border-slate-200 dark:tw-border-slate-700 "
      }`}
    >
      <div className="tw-flex tw-justify-between tw-items-center tw-bg-slate-50 dark:tw-bg-slat tw-p-2 dark:tw-bg-slate-900">
        <TipoIconos tipo={producto.type} />
        <span className="tw-text-xs tw-font-semibold tw-text-black dark:tw-text-green-500 tw-p-1 tw-rounded-lg">
          pax: {producto.pax}x
        </span>
      </div>
      <div
        key={index}
        className="tw-flex tw-gap-4 tw-items-center tw-border-b tw-border-slate-100 dark:tw-border-slate-700 tw-pb-4 last:tw-border-b-0"
      >
        <img
          src={producto.img}
          alt={producto.nombre || "Producto"}
          className="tw-w-24 tw-h-24 tw-object-cover tw-rounded-lg tw-shadow-sm"
        />

        <div className="tw-flex-1 tw-flex tw-flex-col tw-justify-between">
          <h3 className="tw-font-semibold tw-text-slate-900 dark:tw-text-slate-100">
            {producto.titulo}
          </h3>
          <p className="tw-text-slate-500 dark:tw-text-slate-400 tw-text-xs tw-mt-1">
            {producto.fecha}
          </p>
          <div className="tw-flex tw-justify-between">
            <span className="tw-text-primary tw-font-bold tw-text-lg tw-mt-1 dark:tw-text-secondaryDark">
              {producto.precio ? producto.precio.toFixed(2) : "145"}€
            </span>
            <button
              onClick={() => onRemove(index)}
              className="tw-text-slate-400 hover:tw-text-red-600 tw-transition tw-duration-200"
              aria-label={`Eliminar ${
                producto.nombre || `producto ${index + 1}`
              }`}
              title="Eliminar producto"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
function Cesta() {
  const productos = cesta((state) => state.productos);
  const removeProducto = cesta((state) => state.removeProducto);
  const vaciarCesta = cesta((state) => state.vaciarCesta);

  return (
    <Popover
      aria-labelledby="notificaciones-popover"
      content={
        <div className="tw-flex tw-flex-col tw-gap-4 tw-w-80 tw-max-h-[90vh] tw-overflow-y-scroll scrollbar-hidden tw-p-3 tw-bg-white dark:tw-bg-slate-800 tw-rounded-xl tw-shadow-lg tw-transition-shadow tw-duration-300">
          <div className="tw-flex tw-justify-between tw-items-center tw-text-black dark:tw-text-white tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2">
            <h3 className="tw-text-xl tw-font-extrabold">Cesta</h3>
            {productos.length > 0 && (
              <button
                className="tw-text-slate-400 dark:tw-text-slate-300 hover:tw-text-black hover:dark:tw-text-slate-100 tw-smooth"
                onClick={vaciarCesta}
              >
                {" "}
                vaciar
              </button>
            )}
          </div>
          {productos.length === 0 ? (
            <p className="tw-text-center tw-text-slate-500 dark:tw-text-slate-400 tw-italic">
              No se han añadido productos
            </p>
          ) : (
            productos.map((producto, index) => (
              <ProductoItem
                key={index}
                producto={producto}
                index={index}
                onRemove={removeProducto}
              />
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
