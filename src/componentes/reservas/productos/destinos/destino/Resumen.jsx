import { FaCalendarAlt } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaMapPin, FaClock } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { MdRestaurant } from "react-icons/md";
function Resumen({ producto, selectedHotel, handleHotelChange }) {
  return (
    <>
      <h2 className="tw-text-xl tw-font-bold dark:tw-text-slate-300">
        {producto.nombre}
      </h2>
      <p className="tw-flex tw-items-center tw-flex-wrap tw-font-semibold tw-mb-5">
        <span className="tw-mr-2 tw-flex tw-items-center tw-text-slate-600 dark:tw-text-slate-400 tw-text-sm">
          <FaMapPin className="tw-text-secondary tw-text-lg" />
          {producto.ubicacion}
        </span>
        <span className="tw-mr-2 tw-flex tw-items-center tw-text-slate-600 dark:tw-text-slate-400 tw-text-sm">
          <FaClock className="tw-mr-2 tw-text-secondary tw-text-lg" />
          {producto.dias} días
        </span>

        <span className="tw-mr-2 tw-flex tw-items-center tw-text-slate-600 dark:tw-text-slate-400 tw-text-sm">
          <MdRestaurant className="tw-mr-2 tw-text-secondary tw-text-lg" />
          {producto.desayunos} desayunos
        </span>
      </p>
      <div className="tw-mt-4">
        <div className="tw-relative">
          <select
            className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
            value={selectedHotel}
            onChange={handleHotelChange}
          >
            {producto.hotelPrecio.map((option) => (
              <option key={option.hotel} value={option.hotel}>
                {option.hotel} - {option.precio}€
              </option>
            ))}
          </select>
          <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
            <FaBed />
          </div>
        </div>
      </div>
      <div className="tw-mt-5 tw-border-t-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pt-3 tw-text-sm">
        <div className="tw-flex tw-justify-between dark:tw-text-slate-300 tw-text-slate-500">
          <span>PAX</span>
          <ul className="tw-flex tw-gap-2 dark:tw-text-slate-300">
            <li className="tw-flex tw-items-center">{producto.pax}x</li>
          </ul>
        </div>
        <p className="dark:tw-text-slate-300 tw-flex tw-justify-between tw-text-slate-500 tw-text-sm">
          <span>PVP Desde (por persona)</span>
          <span>{producto.precio} €</span>
        </p>
        <p className="tw-text-secondary tw-flex tw-justify-between tw-font-bold tw-mt-2 tw-border-t-2 tw-border-slate-100 dark:tw-border-slate-600 tw-pt-3">
          <span>Total</span>
          <span>
            {producto.pax * producto.precio}
            <span className="tw-text-secondary tw-font-bold tw-ml-1">€</span>
          </span>
        </p>
      </div>
      <div className="tw-mt-2 tw-flex tw-justify-center dark:tw-text-slate-400 tw-text-slate-500">
        <button className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-font-semibold tw-transition tw-text-sm">
          Descargar carteleria AAVV
          <FaFilePdf className="tw-ml-1" />
        </button>
      </div>
      <div className="tw-mt-4">
        <Link to="/fecha" state={producto}>
          <button className="tw-bg-secondary tw-w-full tw-p-3 tw-rounded-lg tw-font-bold tw-text-white tw-text-lg tw-shadow-lg hover:tw-shadow-xl tw-transition tw-flex tw-flex-row tw-justify-center tw-items-center">
            <FaCalendarAlt className="dark:tw-text-white tw-text-xl tw-mr-2" />
            Ver fechas y precios
          </button>
        </Link>
      </div>
    </>
  );
}

export default Resumen;
