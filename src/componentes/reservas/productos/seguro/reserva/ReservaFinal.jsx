import { useLocation } from "react-router-dom";
import formatearFecha from "../../../estructura/FormatearFecha";
import { FaPerson } from "react-icons/fa6";
function Reserva() {
  const location = useLocation();
  const { seguro, datosContacto } = location.state || {};
  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <h1 className="font-bold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-800 pb-2">
          {seguro.titulo}
        </h1>
        <div className="flex gap-10 mt-3">
          <div className="flex flex-col justify-center text-secondary font-bold items-center border-2 w-24 h-24 rounded-full shadow-md">
            <span className="rounded-full flex items-center justify-center text-4xl w-16 h-16">
              <FaPerson />
            </span>
            <span> {seguro.personas}x </span>
            <h2>Sseguradas</h2>
          </div>
          <div className="flex flex-col justify-center text-secondary font-bold items-center border-2 w-24 h-24 rounded-full shadow-md">
            <span className="rounded-full flex items-center justify-center text-4xl w-16 h-16">
              <FaPerson />
            </span>
            <span> {seguro.personas}x </span>
            <h2>Sseguradas</h2>
          </div>
          <div className="flex flex-col justify-center text-secondary font-bold items-center border-2 w-24 h-24 rounded-full shadow-md">
            <span className="rounded-full flex items-center justify-center text-4xl w-16 h-16">
              <FaPerson />
            </span>
            <span> {seguro.personas}x </span>
            <h2>Sseguradas</h2>
          </div>
        </div>



        <ul className="text-slate-500 dark:text-slate-300">
          <li className="flex items-center gap-1">
            {formatearFecha(seguro.inicio)}
          </li>
          <li className="flex items-center gap-1">
            {formatearFecha(seguro.fin)}
          </li>
          <li className="flex items-center gap-1">{seguro.destino}</li>
          <li className="flex items-center gap-1">
            Cancelaciónes hasta {seguro.cancelación.toFixed(2)}€
          </li>
          <li className="flex items-center gap-1">
            Equipaje hasta {seguro.equipaje.toFixed(2)}€
          </li>
          <li className="flex items-center gap-1">
            Asistencia médica hasta {seguro.asistenciaMedica.toFixed(2)}€
          </li>
        </ul>
      </section>
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Resumen
        </h2>

        <button className="w-full bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
          {seguro.precio.toFixed(2)}€
        </button>
      </article>
    </main>
  );
}

export default Reserva;
