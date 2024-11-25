import { FaExclamationCircle, FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaPerson, FaChild } from "react-icons/fa6";
import { format } from "date-fns"; // Importing format from date-fns
import { es } from "date-fns/locale"; // Importing Spanish locale
import { ImSpoonKnife } from "react-icons/im";
import { FaPercent } from "react-icons/fa";

function Aside({ dates, producto }) {
  const pvp = dates.startDatePrice;
  const precio =
    producto.pax.adultos * dates.startDatePrice +
    producto.pax.ninio * dates.startDatePrice +
    producto.pax.senior * dates.startDatePrice;

  return (
    <div className="sticky top-5">
      {dates.startDate ? (
        <>
          <h2 className="font-semibold text-xl dark:text-white">
            {producto.nombre}
          </h2>
          <img
            src={producto.img}
            className="object-cover w-full h-[20vh] shadow rounded-md"
          />
          <div className="text-sm border-b-2 border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400 py-2">
            <div className="grid grid-cols-2 justify-between mt-2 ">
              <ul className="flex gap-2 dark:text-slate-300">
                {producto.pax.adultos !== 0 && (
                  <li className="flex items-center">
                    <FaPerson className="text-secondary dark:text-secondary" />
                    {producto.pax.adultos}x
                  </li>
                )}
                {producto.pax.ninio !== 0 && (
                  <li className="flex items-center">
                    <FaChild className="text-secondary dark:text-secondary" />
                    {producto.pax.ninio}x
                  </li>
                )}
                {producto.pax.senior !== 0 && (
                  <li className="flex items-center">
                    <FaPerson className="text-secondary dark:text-secondary" />
                    {producto.pax.senior}x
                  </li>
                )}
              </ul>
              <span className="dark:text-slate-300 font-bold text-end">
                {pvp}€
              </span>
            </div>
            <div className="flex justify-between items-center">
              <ImSpoonKnife className="text-secondary dark:text-secondaryDark" />
              <span className="text-end"> {producto.desayunos}x Desayunos</span>
            </div>
            <p className="flex justify-between items-center  ">
              <FaClock className="text-secondary dark:text-secondaryDark" />
              <span>{producto.dias} días </span>
            </p>
            <div className="flex justify-between items-center">
              <FaCalendarAlt className="text-secondary dark:text-secondaryDark" />
              <p className="flex flex-col">
                <span>
                  {format(new Date(dates.startDate), "d 'de' MMMM yyyy", {
                    locale: es,
                  })}
                </span>
                <span>
                  {format(new Date(dates.endDate), "d 'de' MMMM yyyy", {
                    locale: es,
                  })}
                </span>
              </p>
            </div>
          </div>
          <h3 className="font-semibold text-center border-b-2 my-3 pb-3 dark:text-slate-300 border-slate-100 dark:border-slate-700 uppercase">
            Desglose:
          </h3>
          <div className="grid grid-cols-3 justify-around w-full text-center py-1">
            <p className="flex flex-col justify-center items-center text-sm text-slate-400 dark:text-slate-500">
              <FaPercent className="text-secondary dark:text-secondaryDark" />
              <span className="text-secondary font-semibold text-lg">
                {precio - precio * 0.15}
              </span>
              Neto
            </p>
            <p className="flex flex-col justify-center items-center text-sm text-slate-400 dark:text-slate-500">
              <FaPercent className="text-secondary dark:text-secondaryDark" />
              <span className="text-secondary font-semibold text-lg">15%</span>
              Margen
            </p>
            <p className="flex flex-col justify-center items-center text-sm text-slate-400 dark:text-slate-500">
              <FaPercent className="text-secondary dark:text-secondaryDark" />
              <span className="text-secondary font-semibold text-lg">
                {precio}
              </span>
              P.V.P
            </p>
          </div>
          <div className="grid grid-cols-3 justify-around w-full text-center"></div>
          <div className="flex justify-end mt-5">
            <button className="bg-secondary w-full text-white text-lg font-semibold rounded-lg shadow-md p-2">
              TOTAL: {precio}€
            </button>
          </div>
          <div className="flex justify-center text-slate-400 dark:text-slate-400 mt-2">
            <button>Descargar la oferta</button>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <FaExclamationCircle className="text-orange-400 text-3xl animate-pulse" />
          <p className=" font-semibold text-orange-300">
            Por favor selecciona una fecha para continuar
          </p>
        </div>
      )}
    </div>
  );
}

export default Aside;
