import { FaExclamationCircle, FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ImSpoonKnife } from "react-icons/im";

import { Link } from "react-router-dom";
import Desglose from "./Desglose";
function Aside({
  dates,
  producto,

  reserva,
}) {
  const pvp = dates.startDatePrice;
  return (
    <div className="tw-sticky tw-top-5">
      {dates.startDate ? (
        <>
          <h2 className="tw-font-semibold tw-text-xl dark:tw-text-white">
            {producto.nombre}
          </h2>
          <img
            src={producto.img}
            className="tw-object-cover tw-w-full tw-h-[20vh] tw-shadow tw-rounded-md"
            alt="imagen destino"
          />
          <div className="tw-text-sm tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-text-slate-500 dark:tw-text-slate-400 tw-py-2">
            <p className="tw-grid tw-grid-cols-2 tw-mt-2">
              {producto.pax !== 0 && (
                <span className="tw-flex tw-items-center">
                  <FaPerson className="tw-text-secondary dark:tw-text-secondaryDark" />
                  {producto.pax}x
                </span>
              )}
              <span className="dark:tw-text-slate-300 tw-font-bold tw-text-end">
                {pvp}€
              </span>
            </p>
            <p className="tw-flex tw-gap-2 tw-items-center">
              <FaClock className="tw-text-secondary dark:tw-text-secondaryDark" />
              <span>{producto.dias} días</span>
              <ImSpoonKnife className="tw-text-secondary dark:tw-text-secondaryDark" />
              <span> {producto.desayunos}x Desayunos</span>
            </p>

            <div className="tw-flex tw-gap-2 tw-items-center">
              <FaCalendarAlt className="tw-text-secondary dark:tw-text-secondaryDark" />
              <p className="tw-flex tw-flex-row">
                <span className="tw-mr-1">
                  {format(new Date(dates.startDate), "d 'de' MMMM yyyy", {
                    locale: es,
                  })}
                </span>
                <span> -</span>
                <span className="tw-ml-1">
                  {format(new Date(dates.endDate), "d 'de' MMMM yyyy", {
                    locale: es,
                  })}
                </span>
              </p>
            </div>
          </div>
          <Desglose precio={producto.precio} />
          <div className="tw-grid tw-grid-cols-3 tw-justify-around tw-w-full tw-text-center"></div>
          <Link to="/datosDestino" state={reserva}>
            <button className="tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-3">
              TOTAL: {producto.precio}€
            </button>
          </Link>
          <div className="tw-flex tw-justify-center tw-text-slate-400 dark:tw-text-slate-400 tw-mt-2">
            <button>Descargar la oferta</button>
          </div>
        </>
      ) : (
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <FaExclamationCircle className="tw-text-orange-400 tw-text-3xl tw-animate-pulse" />
          <p className="tw-font-semibold tw-text-orange-300">
            Por favor selecciona una fecha para continuar
          </p>
        </div>
      )}
    </div>
  );
}
export default Aside;
