import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
function Resumen({ producto, selectedHotel, handleHotelChange }) {
  return (
    <>
      <h2 className="text-xl font-bold dark:text-slate-300">
        {producto.nombre}
      </h2>
      <div className="mt-4">
        <label className="text-slate-700 dark:text-slate-300 font-semibold">
          Seleccione categoría de hotel:
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedHotel}
          onChange={handleHotelChange}
        >
          {producto.hotelPrecio.map((option) => (
            <option key={option.hotel} value={option.hotel}>
              {option.hotel} - {option.precio}€
            </option>
          ))}
        </select>
      </div>
      <div className="mt-5 border-t-2 border-slate-100 dark:border-slate-600 pt-3">
        <div className="flex justify-between dark:text-slate-300 text-slate-500">
          <span>PAX</span>
          <ul className="flex gap-2 dark:text-slate-300 ">
            {producto.pax.adultos !== 0 && (
              <li className="flex items-center">
                {producto.pax.adultos}x
                <FaPerson className="text-secondary dark:text-secondary ml-1" />
              </li>
            )}
          </ul>
        </div>
        <p className="dark:text-slate-300 flex justify-between text-slate-500">
          <span>PVP Desde (por persona)</span>
          <span>
            {producto.precio}
            <span className="text-secondaryDark font-bold ml-1">€</span>
          </span>
        </p>
        <p className=" text-secondary  flex justify-between font-bold mt-2 border-t-2 border-slate-100 dark:border-slate-600 pt-3">
          <span>Total</span>
          <span>
            {producto.pax * producto.precio}

            <span className="text-secondary font-bold ml-1">€</span>
          </span>
        </p>
      </div>
      <div className="mt-2 flex justify-center dark:text-slate-400 text-slate-500">
        <button className="flex flex-row items-center justify-center font-semibold transition text-sm">
          Descargar carteleria AAVV
          <FaFilePdf className=" ml-1" />
        </button>
      </div>
      <div className="mt-4">
        <Link to="/fecha" state={producto}>
          <button className="bg-secondary w-full p-3 rounded-lg font-bold text-white text-lg shadow-lg hover:shadow-xl transition flex flex-row justify-center items-center ">
            <FaCalendarAlt className="dark:text-white text-xl mr-2" />
            Ver fechas y precios
          </button>
        </Link>
      </div>
    </>
  );
}

export default Resumen;
