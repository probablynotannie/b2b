import { useLocation } from "react-router-dom";
import formatearFecha from "../../../estructura/FormatearFecha";
import { FaCalendar } from "react-icons/fa6";
import DatosContacto from "../../../estructura/DatosContacto";
import Detalles from "./Detalles";
import Resumen from "../../../estructura/reserva/Resumen";
function Reserva() {
  const location = useLocation();
  const { seguro, datosContacto } = location.state || {};
  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <h1 className="font-bold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-800 pb-2">
          {seguro.titulo}
        </h1>
        <DatosContacto
          nombre={datosContacto.nombre}
          apellidos={datosContacto.apellidos}
          email={datosContacto.email}
          numero={datosContacto.numero}
        />
        <Detalles seguro={seguro} />
      </section>
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Resumen
        </h2>
        <Resumen img={"/banner_seguros.jpg"} txt={seguro.titulo} />
        <ul className="text-slate-500 dark:text-slate-400 mt-3">
          <li className="flex items-center gap-1">
            <FaCalendar className="text-secondary dark:text-secondaryDark" />
            {formatearFecha(seguro.inicio)}
          </li>
          <li className="flex items-center gap-1">
            <FaCalendar className="text-secondary dark:text-secondaryDark" />

            {formatearFecha(seguro.fin)}
          </li>
        </ul>
        <p className="text-red-500 dark:text-red-400 my-3 text-sm border-y-2 border-slate-100 dark:border-slate-700 py-4">{seguro.importante}</p>
        <button className="w-full bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
          {seguro.precio.toFixed(2)}€
        </button>
      </article>
    </main>
  );
}

export default Reserva;
