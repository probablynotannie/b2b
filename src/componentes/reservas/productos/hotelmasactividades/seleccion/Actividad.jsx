import { FaPerson, FaChild } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import FormatearFecha from "../../../../../assets/scripts/formatearFecha";

function Actividad({ actividad }) {
  return (
    <>
      <div className="tw-absolute tw-bottom-0 tw-grid tw-grid-cols-2 tw-justify-between tw-items-center tw-w-full tw-p-2">
        <div className="tw-col-span-2 tw-flex tw-justify-between tw-pb-2 tw-mb-2 tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 dark:tw-text-slate-400">
          <span className="tw-flex tw-items-center">
            <FaPerson className="tw-text-lg" /> {actividad.paxReserva.adultos}{" "}
            adulto
            {actividad.paxReserva.adultos > 1 && "s"}
          </span>
          <span className="tw-flex tw-items-center">
            <FaChild className="tw-text-lg" /> {actividad.paxReserva.ninios}{" "}
            niño
            {actividad.paxReserva.ninios > 1 && "s"}
          </span>
        </div>
        <div className="tw-flex tw-justify-between tw-col-span-2">
          <span
            className={`tw-mt-2 tw-text-lg tw-text-slate-500 dark:tw-text-green-400 tw-rounded-lg tw-px-2 tw-p-1 tw-font-bold`}
          >
            {actividad.precioTotal}€
          </span>
        </div>
      </div>

      <div className="tw-relative tw-overflow-hidden">
        <span
          className={`tw-absolute tw-w-[150px] tw-text-center tw-rotate-45 tw-bg-blue-500 tw-rounded-lg tw-px-2 tw-p-1 tw-font-bold tw-text-sm tw-top-5 -tw-right-9 tw-z-10 tw-shadow-lg ${
            actividad.tipoPrecio === "Neto"
              ? "tw-bg-green-300 tw-text-green-800"
              : "tw-bg-red-500 tw-text-red-200"
          }`}
        >
          {actividad.tipoPrecio}
        </span>
        <img
          className="tw-h-[25vh] tw-w-full tw-object-cover tw-rounded-t-lg"
          src={actividad.img}
          alt={actividad.titulo}
        />
        <div className="tw-bg-emerald-500 tw-bg-opacity-15 tw-absolute tw-top-0 tw-w-full tw-h-full" />
      </div>
      <div className="tw-p-5">
        <h1 className="tw-font-semibold tw-text-slate-600 dark:tw-text-slate-300">
          {actividad.titulo}
        </h1>
        <div>
          <p className="tw-flex tw-items-center tw-gap-2 dark:tw-text-slate-400">
            <FaCalendarAlt className="tw-text-secondary" />
            {FormatearFecha(actividad.fechaSeleccionada)} a las{" "}
            {actividad.horaSeleccionada}
          </p>
        </div>
      </div>
    </>
  );
}

export default Actividad;
