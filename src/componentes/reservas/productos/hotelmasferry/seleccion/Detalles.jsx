import FormatearFecha from "../../../../../helpers/FormatearFecha";


import { FaFerry } from "react-icons/fa6";
import HotelDetalles from "../../hotel/reserva/HotelDetalles";
function Detalles({ hotel, ferry }) {
  function renderFerry(ferry, type, tipo) {
    return (
      <div className=" dark:bg-slate-800 dark:tw-text-slate-100 p-3">
        <div className="flex justify-between items-center border-b-2 pb-2 border-slate-100 dark:tw-border-slate-700">
          <div>
            <h3 className="font-bold text-lg dark:tw-text-slate-300">
              {tipo}: {type.puerto_origen} - {type.puerto_origen}
            </h3>
            <span className="text-slate-400 text-sm">
              {FormatearFecha(type.fecha)}
            </span>
          </div>
          <img
            src={type.compania}
            alt="logo compania"
            className="w-[100px] object-cover bg-white rounded-lg p-1"
          />
        </div>
        <div className="flex justify-between gap-2 items-center mt-4">
          <div className="flex gap-3 items-center">
            <FaFerry className="tw-text-secondary dark:tw-text-secondary" />
            <div className="flex flex-col">
              <h4 className="flex items-center gap-2 font-bold  text-center">
                {type.tipo}
              </h4>
              <span className="text-slate-500 dark:tw-text-slate-400 text-sm">
                {type.precio.toFixed(2)}€
              </span>
            </div>
          </div>
          <span className="text-sm">
            {type.hora_salida} - {type.hora_llegada}
          </span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-xl font-bold pb-1 border-b-2 border-slate-100 dark:tw-border-slate-700 dark:tw-text-white mb-2">
        Reservando Hotel + Ferry
      </h1>
      <HotelDetalles hotel={hotel} />
      <section>
        <h2 className="font-bold dark:tw-text-white">
          Ferry de ida {ferry.vuelta && " y vuelta"}
        </h2>
        <div className="border-2 dark:tw-border-slate-700 border-slate-100 rounded-xl shadow p-2 mt-2">
          {renderFerry(ferry, ferry.ida, "Ida")}

          {ferry.vuelta && (
            <div className="border-t border-slate-300 dark:tw-border-green-700">
              {renderFerry(ferry, ferry.vuelta, "Vuelta")}{" "}
            </div>
          )}
          <div className="text-sm text-slate-500 dark:tw-text-slate-400 flex justify-center items-center p-3 border-t-2 border-slate-100 dark:tw-border-slate-700 mt-3">
            Cambios:{" "}
            <span className="font-medium">
              {ferry.ida.cambios === true ? "Permitidos" : "No Permitidos"}
            </span>{" "}
            | Cancelaciones:{" "}
            <span className="font-medium">
              {ferry.ida.cancelaciones === true
                ? "Permitidas"
                : "No Permitidas"}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detalles;
