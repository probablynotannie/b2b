import { FaCheck } from "react-icons/fa";
import { FaBan } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
function ferris({ ferry }) {
  function formatSpanishDate(dateString) {
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const [day, month, year] = dateString.split("-");
    const monthName = months[parseInt(month, 10) - 1];
    return `${day} de ${monthName} de ${year}`;
  }
  return (
    <>
      {ferry?.ida && (
        <section className="tw-border-2 tw-pb-20 tw-bg-white hover:tw-scale-[102%] tw-duration-300 dark:tw-bg-slate-800 tw-relative tw-border-slate-100 dark:tw-border-slate-700 tw-h-auto tw-max-w-full tw-rounded-lg tw-rounded-t-lg tw-shadow-lg hover:tw-shadow-xl tw-transition">
          <img
            className="tw-h-[25vh] tw-w-full tw-object-cover tw-rounded-t-lg"
            src={ferry.ida.barco}
            alt="imagen hotel"
          />
          <div className="tw-absolute tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-bottom-0 tw-grid tw-grid-cols-2 tw-justify-between tw-items-center tw-w-full tw-p-2">
            <span
              className={`tw-mt-2 tw-text-lg tw-text-slate-500 dark:tw-text-green-400 tw-rounded-lg tw-px-2 tw-p-1 tw-font-bold`}
            >
              {ferry.vuelta?.precio
                ? `${ferry.ida.precio + ferry.vuelta.precio}€`
                : `${ferry.ida.precio}€`}
            </span>
          </div>
          <img
            src={ferry.ida.compania}
            alt="Logo compania"
            className="tw-w-[80px] tw-rounded tw-absolute tw-top-4 tw-left-4 tw-bg-white"
          />
          <span
            className={`tw-absolute tw-rotate-45 tw-bg-blue-400 tw-rounded-lg tw-px-2 tw-p-1 tw-font-bold tw-text-sm tw-top-10 tw-right-3 tw-z-10 tw-shadow-lg`}
          >
            Tarifa:{" "}
            <span className="tw-uppercase tw-font-bold">
              {ferry.ida.tarifa}
            </span>
          </span>
          <div className="tw-p-3">
            <h4 className="tw-text-secondary tw-font-semibold">
              {ferry.ida.ruta}
              <span className="tw-text-sm tw-ml-1 tw-text-slate-400 tw-font-normal">
                - {ferry.vuelta ? "Ida y vuelta" : "solo ida"}
              </span>
            </h4>
            <div className="tw-flex tw-items-center tw-gap-2">
              <span className="tw-text-sm tw-flex tw-items-center dark:tw-text-slate-300 tw-gap-1">
                {ferry.ida.cambios === true ? (
                  <FaCheck className="tw-text-green-500" />
                ) : (
                  <FaBan className="tw-text-red-500" />
                )}
                Cambios
              </span>
              <span className="tw-text-sm tw-flex tw-items-center dark:tw-text-slate-300 tw-gap-1">
                {ferry.ida.cancelaciones === true ? (
                  <FaCheck className="tw-text-green-500" />
                ) : (
                  <FaBan className="tw-text-red-500" />
                )}{" "}
                Cancelaciones
              </span>
            </div>
            <div className="tw-flex tw-justify-between dark:tw-text-slate-300">
              <span className="tw-flex tw-items-center tw-gap-1">
                <FaCalendarAlt className="tw-text-secondary" />
                {formatSpanishDate(ferry.ida.fecha)}
              </span>
              {ferry.vuelta?.fecha && (
                <span className="tw-flex tw-items-center tw-gap-1">
                  {formatSpanishDate(ferry.vuelta?.fecha)}
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
