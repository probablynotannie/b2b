import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

function Resumen({ producto }) {
  return (
    <>
      <h2 className="text-xl font-bold dark:text-slate-300">
        {producto.nombre}
      </h2>
      <div className="mt-5 border-t-2 border-slate-100 dark:border-slate-600 pt-3">
        <div className="flex justify-between dark:text-slate-300">
          <span>PAX</span>
          <ul className="flex gap-2 dark:text-slate-300 text-slate-600">
            {producto.pax.adultos !== 0 && (
              <li className="flex items-center">
                {producto.pax.adultos}x
                <FaPerson className="text-secondary dark:text-secondary ml-1" />
              </li>
            )}
            {producto.pax.ninio !== 0 && (
              <li className="flex items-center">
                {producto.pax.ninio}x
                <FaChild className="text-secondary dark:text-secondary ml-1" />
              </li>
            )}

            {producto.pax.senior !== 0 && (
              <li className="flex items-center">
                {producto.pax.senior}x
                <FaPerson className="text-secondary dark:text-secondary ml-1" />
              </li>
            )}
          </ul>
        </div>
        <p className="dark:text-slate-300 flex justify-between">
          <span>PVP Desde (por persona)</span>
          <span>
            {producto.precio}
            <span className="text-secondaryDark font-bold ml-1">€</span>
          </span>
        </p>
        <p className=" text-secondary  flex justify-between font-bold mt-2 border-t-2 border-slate-100 dark:border-slate-600 pt-3">
          <span>Total</span>
          <span>
            {producto.pax.adultos * producto.precio +
              producto.pax.ninio * producto.precio +
              producto.pax.senior * producto.precio}
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
        <button className="bg-secondary w-full p-3 rounded-lg font-bold text-white text-lg shadow-lg hover:shadow-xl transition flex flex-row justify-center items-center ">
          <FaCalendarAlt className="dark:text-white text-xl mr-2" />
          Ver fechas y precios
        </button>
      </div>
    </>
  );
}

export default Resumen;
