import { useLocation } from "react-router-dom";
import VueloSeleccionados from "../VueloSeleccionados";
import Pasajeros from "./Pasajeros";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdPhoneAndroid } from "react-icons/md";
import Reserva from "../../../estructura/reserva/Resumen";
import { Link } from "react-router-dom";
function ReservaFinal() {
  const location = useLocation();
  const { ida, vuelta, data } = location.state || {};

  if (!ida || !vuelta) {
    return (
      <p className="tw-w-full tw-text-center tw-text-lg tw-animate-pulse tw-text-red-400 dark:tw-text-red-600">
        No se han seleccionado los vuelos...
      </p>
    );
  }
  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 tw-mb-20 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <h1 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
          Vuelo de ida y vuelta
        </h1>
        <VueloSeleccionados ida={ida} vuelta={vuelta} cesta={true} />
        <Pasajeros pasajeros={data.pasajeros} />
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Reservando vuelo
        </h2>
        <Reserva
          img={"banner_avion.jpg"}
          txt={ida.flight.salida + " - " + ida.flight.llegada}
        />
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Datos de contacto
        </h2>
        <div className="tw-flex tw-flex-nowrap tw-gap-2 tw-mt-2 tw-items-center tw-text-slate-500 dark:tw-text-slate-400">
          <FaUser className="tw-text-slate-700 dark:tw-text-slate-200" />
          <span>{data.nombre}</span>
          <span>{data.apellido}</span>
        </div>
        <div className="tw-flex tw-flex-nowrap tw-gap-2 tw-mt-2 tw-items-center tw-text-slate-500 dark:tw-text-slate-400">
          <MdEmail className="tw-text-slate-700 dark:tw-text-slate-200" />
          <span>{data.email}</span>
        </div>
        <div className="tw-flex tw-flex-nowrap tw-gap-2 tw-mt-2 tw-items-center tw-text-slate-500 dark:tw-text-slate-400">
          <MdPhoneAndroid className="tw-text-slate-700 dark:tw-text-slate-200" />
          <span>{data.numero}</span>
        </div>
        <Link to={"/resumenVuelo"} state={{ ida, vuelta, data }}>
          <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
            {(ida.flight.precio + (vuelta?.flight.precio || 0)).toFixed(2)}€
          </button>
        </Link>
      </article>
    </main>
  );
}
export default ReservaFinal;
