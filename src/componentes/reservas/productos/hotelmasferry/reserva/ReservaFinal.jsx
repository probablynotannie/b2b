import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Seleccion from "../seleccion/Detalles";
import Reserva from "../../../estructura/reserva/Resumen";
import { FaHotel, FaShip } from "react-icons/fa";
import formatearFecha from "../../../estructura/FormatearFecha";

import DatosContacto from "../../../estructura/DatosContacto";
function ReservaFinal() {
  const location = useLocation();
  const { hotel, ferry, datosContacto, habitacion } = location.state || {};
  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <Seleccion hotel={hotel} ferry={ferry} />
      </section>
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Datos de pasajero
        </h2>
        <Reserva img={"/banner_ferry.jpg"} txt={"Hotel + Ferry"} />
        <ul className="text-slate-500 dark:text-slate-300 text-sm my-3">
          <li className="flex justify-between items-center">
            <span className="flex items-center gap-1">
              <FaHotel className="text-secondary" />
              {hotel.nombre}
            </span>
            <span>{hotel.precio}€</span>
          </li>
          <li className="flex items-center gap-1 text-slate-400">
            {hotel.fecha} - {hotel.fechaSalida}
          </li>
          <li className="flex justify-between items-center">
            <span className="flex items-center gap-1">
              <FaShip className="text-secondary" />
              {ferry.ida.ruta}
            </span>
            <span>
              {(ferry.ida.precio + ferry.vuelta?.precio || 0).toFixed(2)}€
            </span>
          </li>
          <li className="flex items-center gap-1 text-slate-400">
            {formatearFecha(ferry.ida.fecha)} -{" "}
            {formatearFecha(ferry.vuelta?.fecha)}
          </li>
        </ul>
        <div className="border-t-2 border-slate-100 dark:border-slate-700 mt-5">
          <DatosContacto
            nombre={datosContacto.nombre}
            apellidos={datosContacto.apellido}
            email={datosContacto.email}
            numero={datosContacto.numero}
          />
        </div>
        <Link
          to={"/resumenHotelmasFerry"}
          state={{ hotel, ferry, datosContacto, habitacion }}
        >
          <button className="w-full tw-bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
            {parseFloat(hotel.precio) +
              parseFloat(ferry.ida.precio.toFixed(2)) +
              parseFloat((ferry.vuelta?.precio || 0).toFixed(2))}
            €
          </button>
        </Link>
      </article>
    </main>
  );
}

export default ReservaFinal;
