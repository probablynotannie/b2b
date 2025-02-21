import { useLocation } from "react-router-dom";
import Detalles from "./Detalles";
import { Link } from "react-router-dom";
function Reserva() {
  const location = useLocation();
  const { ida, vuelta, datosContacto } = location.state || {};

  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <h1 className="font-bold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-800 pb-2">
          Reservando Ferry
        </h1>
        <Detalles ida={ida} vuelta={vuelta} datosContacto={datosContacto} />
      </section>
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Resumen
        </h2>
        <img
          src={ida.barco}
          className="opacity-90 rounded shadow mb-4 h-[20vh] w-full object-cover"
          alt="Reserva ferry"
        />
        {ida && vuelta ? (
          <h3 className="font-semibold dark:text-slate-100">Ida y vuelta</h3>
        ) : (
          <h3 className="font-semibold dark:text-slate-100">Solo ida</h3>
        )}
        <ul>
          <li className="flex justify-between items-center">
            <span>Tipo</span>
            <span>{ida.tipo}</span>
          </li>
        </ul>
        <Link to={"/resumenFerry"} state={{ ida, vuelta, datosContacto }}>
          <button className="w-full tw-bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
            {(ida.precio + (vuelta ? vuelta.precio : 0)).toFixed(2)} €
          </button>
        </Link>
      </article>
    </main>
  );
}

export default Reserva;
