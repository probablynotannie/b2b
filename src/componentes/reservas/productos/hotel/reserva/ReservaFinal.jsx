import { useLocation } from "react-router-dom";
import Detalles from "./Detalles";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";
import Reserva from "../../../estructura/reserva/Resumen";
import { Link } from "react-router-dom";
function ReservaFinal() {
  const location = useLocation();
  const { producto, habitacion, data } = location.state || {};
  console.log("producto")
  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <h1 className="tw-font-bold dark:tw-text-slate-200">{producto.nombre}</h1>
        <p className="tw-text-slate-600 tw-text-sm dark:tw-text-slate-300">
          {producto.ubicacion}
        </p>
        <Detalles producto={producto} datosContacto={data} />
      </section>
      <article className="tw-sticky tw-top-24 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
        <Reserva img={producto.img} txt={producto.nombre} />
        <section>
          <h2 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 dark:tw-text-slate-200 tw-my-3">
            Resumen
          </h2>
          <ul>
            <li className="tw-flex tw-justify-between">
              <span className="tw-font-semibold tw-mr-1 dark:tw-text-slate-200">
                Habitacion:
              </span>
              <span className="tw-text-slate-500 dark:tw-text-slate-400">
                {habitacion.nombre}
              </span>
            </li>
            <li className="tw-flex tw-justify-between">
              <span className="tw-font-semibold tw-mr-1 dark:tw-text-slate-200">
                Regimen:
              </span>
              <span className="tw-text-slate-500 dark:tw-text-slate-400">
                {habitacion.regimen}
              </span>
            </li>
            <li className="tw-flex tw-justify-between">
              <span className="tw-font-semibold tw-mr-1 dark:tw-text-slate-200">
                Entrada:
              </span>
              <span className="tw-text-slate-500 dark:tw-text-slate-400">
                {producto.fecha}
              </span>
            </li>
            <li className="tw-flex tw-justify-between">
              <span className="tw-font-semibold tw-mr-1 dark:tw-text-slate-200">
                Salida:
              </span>
              <span className="tw-text-slate-500 dark:tw-text-slate-400">
                {producto.fechaSalida}
              </span>
            </li>
          </ul>
          <div className="tw-flex tw-justify-between tw-pb-2 tw-mt-2 tw-border-slate-100 dark:tw-border-slate-700">
            <div className="tw-flex tw-items-center tw-text-sm tw-font-semibold dark:tw-text-slate-100">
              <FaPerson className="tw-text-xl text-secondary" />
              <span>
                {producto.pax}x adulto{producto.pax !== 1 && "s"}
              </span>
            </div>
            {producto.pax_ninios > 0 && (
              <div className="tw-flex tw-items-center tw-text-sm tw-font-semibold dark:tw-text-slate-100">
                <FaChild className="tw-text-lg text-secondary" />
                <span>
                  {producto.pax_ninios}x niño{producto.pax_ninios > 1 && "s"}
                </span>
              </div>
            )}
          </div>
        </section>
        <Link
          to={"/resumenHotel"}
          state={{ producto, habitacion, data }}
        >
          <button className="tw-w-full tw-bg-secondary dark:tw-bg-green-600 tw-rounded-lg hover:tw-shadow-lg tw-transition tw-duration-300 tw-text-white tw-p-3 tw-font-semibold tw-mt-2">
            {habitacion.precio} €
          </button>
        </Link>
      </article>
    </main>
  );
}

export default ReservaFinal;
