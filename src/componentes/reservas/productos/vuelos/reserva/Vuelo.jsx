import { useLocation } from "react-router-dom";
import VueloSeleccionados from "../VueloSeleccionados";
import Pasajeros from "./Pasajeros";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";

function Vuelo() {
  const location = useLocation();
  const { ida, vuelta, email, nombre, numero, apellido, pasajeros } =
    location.state || {};

  if (!ida || !vuelta) {
    return (
      <p className="w-full text-center text-lg animate-pulse text-red-400 dark:text-red-600">
        No se han seleccionado los vuelos...
      </p>
    );
  }
  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <h1 className="font-bold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-800 pb-2">
          Vuelo de ida y vuelta
        </h1>
        <VueloSeleccionados ida={ida} vuelta={vuelta} cesta={true} />
        <Pasajeros pasajeros={pasajeros} />
      </section>
      <article className="col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Reservando vuelo
        </h2>
        <img
          src="/banner_avion.jpg"
          className="opacity-90 rounded shadow mb-4 h-[20vh] w-full object-cover"
          alt="Reserva vuelo"
        />
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Datos de contacto
        </h2>
        <div className="flex flex-nowrap gap-2 mt-2 items-center text-slate-500 dark:text-slate-400">
          <FaUser className="text-slate-700 dark:text-slate-200" />
          <span>{nombre}</span>
          <span>{apellido}</span>
        </div>
        <div className="flex flex-nowrap gap-2 mt-2 items-center text-slate-500 dark:text-slate-400">
          <MdEmail className="text-slate-700 dark:text-slate-200" />
          <span>{email}</span>
        </div>
        <div className="flex flex-nowrap gap-2 mt-2 items-center text-slate-500 dark:text-slate-400">
          <MdPhoneAndroid className="text-slate-700 dark:text-slate-200" />
          <span>{numero}</span>
        </div>
        <p className="text-sm text-red-400 dark:text-red-500 mt-2">
          Comprueba los datos de contacto para poder comunicar cualquier cambio
          con los vuelos sobre cambios.
        </p>
        <button className="w-full bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
          {ida.flight.precio + vuelta?.flight.precio}€
        </button>
      </article>
    </main>
  );
}
export default Vuelo;
