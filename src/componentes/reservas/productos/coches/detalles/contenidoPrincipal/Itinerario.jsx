import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { FaMapPin, FaCalendarAlt, FaClock } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import FormatearFecha from "../../../../../../helpers/FormatearFecha";

function Itinerario({ coche }) {
  return (
    <div className="tw-mt-10 tw-grid tw-grid-cols-5 tw-items-center">
      <div className="tw-flex tw-flex-col tw-col-span-5 md:tw-col-span-2 tw-shadow-lg tw-p-5 tw-rounded-lg tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 dark:hover:tw-bg-slate-700 tw-transition tw-bg-slate-100 dark:tw-bg-slate-900 dark:tw-text-slate-300 tw-w-full">
        <h3 className="tw-font-semibold">Recogida</h3>
        <div className="tw-ml-2">
          <p className="tw-flex tw-items-center tw-gap-1">
            <FaMapPin />
            {" - "}
            <span className="tw-text-sm">{coche.recogida.lugar}</span>
          </p>
          <p className="tw-flex tw-items-center tw-gap-1">
            <FaCalendarAlt />
            {" - "}
            <span className="tw-text-sm">
              {FormatearFecha(coche.recogida.fecha)}
            </span>
          </p>
          <p className="tw-flex tw-items-center tw-gap-1">
            <FaClock />
            {" - "}
            <span className="tw-text-sm">{coche.recogida.hora}</span>
          </p>
        </div>
      </div>
      <div className="tw-flex md:tw-flex-row tw-flex-col tw-gap-5 tw-col-span-5 md:tw-col-span-1 tw-justify-center tw-items-center tw-my-2 dark:tw-text-white">
        <HiOutlineChevronDoubleLeft className="md:tw-block tw-hidden tw-text-xl" />
        <HiOutlineChevronDoubleRight className="md:tw-block tw-hidden tw-text-xl" />
        <HiOutlineChevronDoubleUp className="md:tw-hidden tw-block tw-text-xl" />
        <HiOutlineChevronDoubleDown className="md:tw-hidden tw-block tw-text-xl" />
      </div>
      <div className="tw-flex tw-flex-col tw-col-span-5 md:tw-col-span-2 tw-shadow-lg tw-p-5 tw-rounded-lg tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 dark:hover:tw-bg-slate-700 tw-transition tw-bg-slate-100 dark:tw-bg-slate-900 dark:tw-text-slate-300 tw-w-full">
        <h3 className="tw-font-semibold">Devolucion</h3>
        <div className="tw-ml-2">
          <p className="tw-flex tw-items-center tw-gap-1">
            <FaMapPin />
            {" - "}
            <span className="tw-text-sm">{coche.devolucion.lugar}</span>
          </p>
          <p className="tw-flex tw-items-center tw-gap-1">
            <FaCalendarAlt />
            {" - "}
            <span className="tw-text-sm">
              {FormatearFecha(coche.devolucion.fecha)}
            </span>
          </p>
          <p className="tw-flex tw-items-center tw-gap-1">
            <FaClock />
            {" - "}
            <span className="tw-text-sm">{coche.devolucion.hora}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Itinerario;
