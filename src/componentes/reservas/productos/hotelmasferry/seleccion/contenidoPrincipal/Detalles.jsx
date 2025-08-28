import FormatearFecha from "../../../../../../assets/scripts/formatearFecha";

import { FaFerry } from "react-icons/fa6";
import HotelDetalles from "../../../hotel/reserva/contenidoSecundario/HotelDetalles";
function Detalles({ hotel, ferry }) {
  function renderFerry(ferry, type, tipo) {
    return (
      <div className=" dark:tw-text-slate-100 tw-p-3">
        <div className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-pb-4 tw-border-slate-100 dark:tw-border-slate-700">
          <div>
            <h3 className="tw-font-bold tw-text-lg dark:tw-text-slate-300">
              {tipo}: {type.puerto_origen} - {type.puerto_origen}
            </h3>
            <span className="tw-text-slate-400 tw-text-sm">
              {FormatearFecha(type.fecha)}
            </span>
          </div>
          <img
            src={type.compania}
            alt="logo compania"
            className="tw-w-[100px] tw-object-cover tw-bg-white tw-rounded-lg tw-p-1"
          />
        </div>
        <div className="tw-flex tw-justify-between tw-gap-2 tw-items-center tw-mt-4">
          <div className="tw-flex tw-gap-3 tw-items-center">
            <FaFerry className="tw-text-secondary dark:tw-text-secondaryDark" />
            <div className="tw-flex tw-flex-col">
              <h4 className="tw-flex tw-items-center tw-gap-2 tw-font-bold tw-text-center tw-text-sm">
                {type.tipo}
              </h4>
              <span className="tw-text-slate-500 dark:tw-text-slate-400 tw-text-sm">
                {type.precio.toFixed(2)}€
              </span>
            </div>
          </div>
          <span className="tw-text-sm">
            {type.hora_salida} - {type.hora_llegada}
          </span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <HotelDetalles hotel={hotel} />
      <section>
        <h2 className="tw-font-bold dark:tw-text-white">
          Ferry de ida {ferry.vuelta && " y vuelta"}
        </h2>
        <div className="tw-border-2 dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-border-slate-100 tw-rounded-xl tw-shadow tw-p-2 tw-mt-2">
          {renderFerry(ferry, ferry.ida, "Ida")}

          {ferry.vuelta && (
            <div className="tw-border-t tw-border-slate-300 dark:tw-border-green-700">
              {renderFerry(ferry, ferry.vuelta, "Vuelta")}{" "}
            </div>
          )}
          <div className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-400 tw-flex tw-justify-center tw-items-center tw-p-3 tw-border-t-2 tw-border-slate-100 dark:tw-border-slate-700 tw-mt-3">
            Cambios:{" "}
            <span className="tw-font-medium tw-ml-1">
              {ferry.ida.cambios === true ? "permitidos" : "no Permitidos"}
            </span>{" "}
            | Cancelaciones:{" "}
            <span className="tw-font-medium tw-ml-1">
              {ferry.ida.cancelaciones === true
                ? "permitidas"
                : "no Permitidas"}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Detalles;
