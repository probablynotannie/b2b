import { useLocation } from "react-router-dom";
import VueloSeleccionados from "../VueloSeleccionados";
import Pasajeros from "./Pasajeros";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";
import Reserva from "../../../estructura/reserva/Resumen";
import { Link } from "react-router-dom";
function ReservaFinal() {
  const location = useLocation();
  const { ida, vuelta, datosContacto, pasajeros } = location.state || {};

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
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Reservando vuelo
        </h2>
        <Reserva
          img={"banner_avion.jpg"}
          txt={ida.flight.salida + " - " + ida.flight.llegada}
        />

        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Datos de contacto
        </h2>
        <div className="flex flex-nowrap gap-2 mt-2 items-center text-slate-500 dark:text-slate-400">
          <FaUser className="text-slate-700 dark:text-slate-200" />
          <span>{datosContacto.nombre}</span>
          <span>{datosContacto.apellido}</span>
        </div>
        <div className="flex flex-nowrap gap-2 mt-2 items-center text-slate-500 dark:text-slate-400">
          <MdEmail className="text-slate-700 dark:text-slate-200" />
          <span>{datosContacto.email}</span>
        </div>
        <div className="flex flex-nowrap gap-2 mt-2 items-center text-slate-500 dark:text-slate-400">
          <MdPhoneAndroid className="text-slate-700 dark:text-slate-200" />
          <span>{datosContacto.numero}</span>
        </div>
        <p className="text-sm text-red-400 dark:text-red-500 mt-2">
          Comprueba los datos de contacto para poder comunicar cualquier cambio
          con los vuelos sobre cambios.
        </p>
        <Link
          to={"/resumenVuelo"}
          state={{ ida, vuelta, datosContacto, pasajeros }}
        >
          <button className="w-full tw-bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
            {(ida.flight.precio + (vuelta?.flight.precio || 0)).toFixed(2)}€
          </button>
        </Link>
      </article>
    </main>
  );
}
export default ReservaFinal;
