import { FaPerson } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaMapPin, FaClock } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { MdRestaurant } from "react-icons/md";
function Resumen({ producto, selectedHotel, handleHotelChange }) {
  console.log(producto);
  return (
    <>
      <h2 className="text-xl font-bold dark:text-slate-300">
        {producto.nombre}
      </h2>
      <p className="flex items-center flex-wrap  font-semibold mb-5">
        <span className="mr-2 flex items-center text-slate-600 dark:text-slate-400 text-sm">
          <FaMapPin className="text-secondary text-lg" />
          {producto.ubicacion}
        </span>
        <span className="mr-2 flex items-center text-slate-600 dark:text-slate-400 text-sm">
          <FaClock className="mr-2 text-secondary text-lg" />
          {producto.dias} días
        </span>

        <span className="mr-2 flex items-center text-slate-600 dark:text-slate-400 text-sm">
          <MdRestaurant className="mr-2 text-secondary text-lg" />
          {producto.desayunos} desayunos
        </span>
      </p>
      <div className="mt-4">
        <div className="relative">
          <select
            className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
            value={selectedHotel}
            onChange={handleHotelChange}
          >
            {producto.hotelPrecio.map((option) => (
              <option key={option.hotel} value={option.hotel}>
                {option.hotel} - {option.precio}€
              </option>
            ))}
          </select>
          <div className="absolute top-0 pointer-events-none tw-bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
            <FaBed />
          </div>
        </div>
      </div>
      <div className="mt-5 border-t-2 border-slate-100 dark:border-slate-700 pt-3 text-sm">
        <div className="flex justify-between dark:text-slate-300 text-slate-500">
          <span>PAX</span>
          <ul className="flex gap-2 dark:text-slate-300 ">
            <li className="flex items-center">{producto.pax}x</li>
          </ul>
        </div>
        <p className="dark:text-slate-300 flex justify-between text-slate-500 text-sm">
          <span>PVP Desde (por persona)</span>
          <span>{producto.precio} €</span>
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
          <button className="tw-bg-secondary w-full p-3 rounded-lg font-bold text-white text-lg shadow-lg hover:shadow-xl transition flex flex-row justify-center items-center ">
            <FaCalendarAlt className="dark:text-white text-xl mr-2" />
            Ver fechas y precios
          </button>
        </Link>
      </div>
    </>
  );
}

export default Resumen;
