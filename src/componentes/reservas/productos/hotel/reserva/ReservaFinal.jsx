import { useLocation } from "react-router-dom";
import Detalles from "./Detalles";
import { FaPerson } from "react-icons/fa6";
import { FaCalendar, FaChild, FaDoorOpen } from "react-icons/fa";
import Reserva from "../../../estructura/reserva/Resumen";
import { Link } from "react-router-dom";
function ReservaFinal() {
  const location = useLocation();
  const { producto, habitacion, data } = location.state || {};
  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <h1 className="tw-font-bold dark:tw-text-slate-200">
          {producto.nombre}
        </h1>
        <p className="tw-text-slate-600 tw-text-sm dark:tw-text-slate-300">
          {producto.ubicacion}
        </p>
        <Detalles producto={producto} datosContacto={data} />
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
        <Reserva img={producto.img} txt={producto.nombre} />
        <section>
          <h2 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 dark:tw-text-slate-200 tw-my-3">
            Resumen
          </h2>
          <ul>
            <li className="tw-flex tw-items-center tw-gap-1">
              <FaPerson className="tw-text-xl tw-text-secondary" />
              <span className="tw-text-slate-500 dark:tw-text-slate-400">
                {producto.pax}x adulto{producto.pax !== 1 && "s"}
              </span>
            </li>
            {producto.pax_ninios > 0 && (
              <li className="tw-flex tw-items-center tw-gap-1">
                <FaChild className="tw-text-xl tw-text-secondary" />
                <span className="tw-text-slate-500 dark:tw-text-slate-400">
                  {producto.pax}x Niños{producto.pax !== 1 && "s"}
                </span>
              </li>
            )}

            <li className="tw-flex tw-items-center tw-gap-1">
              <FaCalendar className="tw-text-secondary" />
              <span className="tw-text-slate-500 dark:tw-text-slate-400">
                {producto.fecha} - {producto.fechaSalida}
              </span>
            </li>

            <li className="tw-flex tw-items-center tw-gap-1">
              <FaDoorOpen className="tw-text-secondary" />

              <span className="tw-text-slate-500 dark:tw-text-slate-400">
                {habitacion.nombre} ( {habitacion.regimen})
              </span>
            </li>
          </ul>
        </section>
        <Link to={"/resumenHotel"} state={{ producto, habitacion, data }}>
          <button className="tw-btn tw-w-full tw-mt-3">
            {Number(habitacion.precio).toFixed(2)}€
          </button>
        </Link>
      </article>
    </main>
  );
}

export default ReservaFinal;
