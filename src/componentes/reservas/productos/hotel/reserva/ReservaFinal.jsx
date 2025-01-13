import { useLocation } from "react-router-dom";
import Detalles from "./Detalles";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa";
import Reserva from "../../../estructura/reserva/Resumen";

function ReservaFinal() {
  const location = useLocation();
  const { producto, habitacion, datosContacto } = location.state || {};
  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <h1 className="font-bold dark:text-slate-200">{producto.nombre}</h1>
        <p className="text-slate-600 text-sm dark:text-slate-300">
          {producto.ubicacion}
        </p>
        <Detalles producto={producto} datosContacto={datosContacto} />
      </section>
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <Reserva img={habitacion.img} txt={producto.nombre} />
        <section>
          <h2 className="font-bold border-b-2 border-slate-100 dark:border-slate-700 dark:text-slate-200 my-3">
            Resumen
          </h2>
          <ul>
            <li className="flex justify-between">
              <span className="font-semibold mr-1 dark:text-slate-200">
                Habitacion:
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                {habitacion.nombre}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold mr-1 dark:text-slate-200">
                Regimen:
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                {habitacion.regimen}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold mr-1 dark:text-slate-200">
                Entrada:
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                {producto.fecha}
              </span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold mr-1 dark:text-slate-200">
                Salida:
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                {producto.fechaSalida}
              </span>
            </li>
          </ul>
          <div className="flex justify-between pb-2 mt-2 border-slate-100  dark:border-slate-700">
            <div className="flex items-center text-sm font-semibold  dark:text-slate-100">
              <FaPerson className="text-xl text-secondary" />
              <span>
                {producto.pax}x adulto{producto.pax !== 1 && "s"}
              </span>
            </div>
            {producto.pax_ninios > 0 && (
              <div className="flex items-center text-sm font-semibold  dark:text-slate-100">
                <FaChild className="text-lg text-secondary" />
                <span>
                  {producto.pax_ninios}x niño{producto.pax_ninios > 1 && "s"}
                </span>
              </div>
            )}
          </div>
        </section>
        <button className="w-full bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
          {habitacion.precio} €
        </button>
      </article>
    </main>
  );
}

export default ReservaFinal;
