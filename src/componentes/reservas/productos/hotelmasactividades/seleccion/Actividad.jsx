import { FaPerson, FaChild } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import formatearFecha from "../../../estructura/FormatearFecha";
function Actividad({ actividad }) {
  return (
    <>
      <div className="absolute bottom-0 grid grid-cols-2 justify-between items-center w-full p-2">
        <div className="col-span-2 flex justify-between pb-2 mb-2 border-b-2 border-slate-100 dark:border-slate-700">
          <span className="flex items-center">
            <FaPerson className="text-lg" /> {actividad.paxReserva.adultos}{" "}
            adulto
            {actividad.paxReserva.adultos > 1 && "s"}
          </span>
          <span className="flex items-center">
            <FaChild className="text-lg" /> {actividad.paxReserva.ninios} niño
            {actividad.paxReserva.ninios > 1 && "s"}
          </span>
        </div>
        <div className="flex justify-between col-span-2">
          <span
            className={`mt-2 text-lg text-slate-500 dark:text-green-400 rounded-lg px-2 p-1 font-bold `}
          >
            {actividad.precioTotal}€
          </span>
        </div>
      </div>
      <span
        className={`absolute rotate-45 bg-blue-500 rounded-lg px-2 p-1  font-bold text-sm top-5 right-5 z-10 shadow-lg ${
          actividad.tipoPrecio === "Neto"
            ? "bg-green-300 text-green-800"
            : "bg-red-500 text-red-200"
        }`}
      >
        {actividad.tipoPrecio}
      </span>
      <div className="relative">
        <img
          className="h-[25vh] w-full object-cover  rounded-t-lg"
          src={actividad.img}
          alt={actividad.titulo}
        />
        <div className="bg-emerald-500 bg-opacity-15 absolute top-0 w-full h-full" />
      </div>
      <div className="p-5">
        <h1 className="font-semibold text-slate-600 dark:text-slate-300">
          {actividad.titulo}
        </h1>

        <div>
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-secondary" />
            {formatearFecha(actividad.fechaSeleccionada)} a las{" "}
            {actividad.horaSeleccionada}
          </p>
        </div>
      </div>
    </>
  );
}

export default Actividad;
