// components/Iconos.jsx

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

const obtenerTipoPorId = (id) =>
  definicionesTipo.find((tipo) => tipo.id === id) || {
    iconos: [],
    texto: "Tipo desconocido",
  };

const Iconos = ({ tipo }) => {
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
      <span className="tw-ml-3 tw-text-xs tw-font-semibold tw-text-slate-500 dark:tw-text-slate-300 group-hover:tw-text-secondary tw-smooth">
        {texto}
      </span>
    </div>
  );
};

export default Iconos;
