import { FaCheck } from "react-icons/fa";
import { FaBan } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import formatearFecha from "../../../assets/scripts/formatearFecha";
import TarifaNames from "../ferris/jsons/TarifaNames";
import capitalizeFirstLetterOnly from "../../../assets/scripts/capitalizeFirstLetterOnly";
function ferris({ ferry }) {
  return (
    <>
      {ferry?.ida && (
        <section className="tw-border-2 tw-pb-20 tw-bg-white hover:tw-scale-[102%] tw-duration-300 dark:tw-bg-slate-800 tw-relative tw-overflow-hidden tw-border-slate-100 dark:tw-border-slate-700 tw-h-auto tw-max-w-full tw-rounded-lg tw-rounded-t-lg tw-shadow-lg hover:tw-shadow-xl tw-transition">
          <img
            className="tw-h-[25vh] tw-w-full tw-object-cover tw-rounded-t-lg"
            src={"/public/banners/banner_ferry.webp"}
            alt="imagen hotel"
          />
          <div className="tw-absolute tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-bottom-0 tw-grid tw-grid-cols-2 tw-justify-between tw-items-center tw-w-full tw-p-2">
            <span
              className={`tw-mt-2 tw-text-lg tw-text-slate-500 dark:tw-text-green-400 tw-rounded-lg tw-px-2 tw-p-1 tw-font-bold`}
            >
              {ferry.vuelta?.Pvp
                ? `${ferry.ida.Pvp + ferry.vuelta.Pvp}€`
                : `${ferry.ida.Pvp}€`}
            </span>
          </div>
          <img
            src={ferry.proveedor.imagen}
            alt="Logo compania"
            className="tw-w-[80px] tw-rounded tw-absolute tw-top-4 tw-left-4 tw-bg-white"
          />
          <span
            className={`tw-absolute tw-w-[250px] tw-text-center tw-rotate-45 tw-bg-blue-600/60 tw-text-white tw-rounded-lg tw-px-2 tw-p-1 tw-font-bold tw-text-xs tw-top-10 -tw-right-16 tw-z-10 tw-shadow-lg`}
          >
            <span className="tw-uppercase tw-font-bold">Ferry</span>
          </span>
          <div className="tw-p-3">
            <h4 className="tw-text-secondary tw-font-semibold">
              {capitalizeFirstLetterOnly(ferry.ida.nombre)}
              {ferry.vuelta.nombre && (
                <span> - {capitalizeFirstLetterOnly(ferry.vuelta.nombre)}</span>
              )}
            </h4>
            <span className="tw-text-sm tw-ml-1 tw-text-slate-400 tw-font-normal">
              {ferry.vuelta ? "Ida y vuelta" : "solo ida"}
            </span>
            <div className="tw-flex tw-items-center tw-gap-2 tw-text-sm">
              <p className="dark:tw-text-slate-300">
                {TarifaNames[ferry.ida.tipo].Title}
              </p>
              <span className="tw-text-sm tw-flex tw-items-center dark:tw-text-slate-300 tw-gap-1">
                {ferry.ida.cambios === true ? (
                  <FaCheck className="tw-text-green-500" />
                ) : (
                  <FaBan className="tw-text-danger" />
                )}
                {TarifaNames[ferry.ida.tipo].Descrip}
              </span>
            </div>
            <div className="tw-flex tw-justify-between dark:tw-text-slate-300">
              <span className="tw-flex tw-items-center tw-gap-1">
                <FaCalendarAlt className="tw-text-secondary" />
                {formatearFecha(ferry.ida.fecha_salida)}
              </span>
              {ferry.vuelta?.fecha_llegada && (
                <span className="tw-flex tw-items-center tw-gap-1">
                  {formatearFecha(ferry.vuelta?.fecha_llegada)}
                </span>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export default ferris;
