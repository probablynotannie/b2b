import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Seleccion from "../seleccion/Detalles";
import Reserva from "../../../estructura/reserva/Resumen";
import { FaHotel, FaShip } from "react-icons/fa";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
import DatosContacto from "../../../estructura/DatosContacto";
function ReservaFinal() {
  const location = useLocation();
  const { hotel, ferry, data, habitacion } = location.state || {};
  const precioFerry = Number(
    ferry.ida.precio + (ferry.vuelta?.precio || 0)
  ).toFixed(2);
  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 tw-mb-20 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 
tw-bg-white dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <Seleccion hotel={hotel} ferry={ferry} />
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-bg-white dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Datos de pasajero
        </h2>
        <Reserva img={"/banners/ferry.webp"} txt={"Hotel + Ferry"} />
        <ul className="tw-text-slate-500 dark:tw-text-slate-300 tw-text-sm tw-my-3">
          <li className="tw-flex tw-justify-between tw-items-center">
            <span className="tw-flex tw-items-center tw-gap-1">
              <FaHotel className="tw-text-secondary" />
              {hotel.nombre}
            </span>
            <span>{hotel.precio}€</span>
          </li>
          <li className="tw-flex tw-items-center tw-gap-1 tw-text-slate-400">
            {hotel.fecha} - {hotel.fechaSalida}
          </li>
          <li className="tw-flex tw-justify-between tw-items-center">
            <span className="tw-flex tw-items-center tw-gap-1">
              <FaShip className="tw-text-secondary" />
              {ferry.ida.ruta}
            </span>
            <span>{precioFerry}€</span>
          </li>
          <li className="tw-flex tw-items-center tw-gap-1 tw-text-slate-400">
            {FormatearFecha(ferry.ida.fecha)} -{" "}
            {FormatearFecha(ferry.vuelta?.fecha)}
          </li>
        </ul>
        <div className="tw-border-t-2 tw-border-slate-100 dark:tw-border-slate-700 tw-mt-5">
          <DatosContacto
            nombre={data.nombre}
            apellidos={data.apellido}
            email={data.email}
            numero={data.numero}
          />
        </div>
        <Link
          to={"/resumenHotelmasFerry"}
          state={{ hotel, ferry, data, habitacion }}
        >
          <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
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
