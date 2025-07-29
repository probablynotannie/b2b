import { FaCalendar, FaInfoCircle } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import FormatearFecha from "../../../../../../scripts/FormatearFecha";
import { slugify } from "../../../../../../scripts/slugify";
import Pasajeros_Display from "./Pasajeros_Display";
import Reserva from "../../../../../../helpers/visuales/ReservaFinal/Resumen";
import { Link } from "react-router-dom";
function Aside({ producto, precioSeleccionado, pasajeros, cruiseImage }) {
  return (
    <div
      className={
        !precioSeleccionado && pasajeros.length !== 0
          ? " tw-flex tw-justify-center tw-items-center"
          : ""
      }
    >
      {precioSeleccionado && pasajeros.length !== 0 ? (
        <div>
          <h2 className="tw-font-semibold dark:tw-text-white tw-mb-2">
            {producto?.barco?.nombre?.texto ?? "Nombre no disponible"}
          </h2>
          <Reserva
            img={`//pic-2.vpackage.net/cruceros_img/${cruiseImage}`}
            txt={`${producto?.num_dias ?? "?"} días a bordo de ${
              producto?.barco?.nombre?.texto ?? "este crucero"
            }`}
          />
          <p className="tw-flex tw-gap-2 tw-mt-3 dark:tw-text-slate-100">
            <span className="tw-flex tw-gap-1 tw-items-center">
              <FaCalendar className="tw-text-secondary" />
            </span>
            {FormatearFecha(precioSeleccionado.date)}
          </p>
          <p className="tw-flex tw-gap-2 tw-mt-3 dark:tw-text-slate-100">
            <span className="tw-flex tw-gap-1 tw-items-center">
              <MdMeetingRoom className="tw-text-secondary tw-text-xl" />
            </span>
            {precioSeleccionado.cabin
              ? precioSeleccionado.cabin.charAt(0).toUpperCase() +
                precioSeleccionado.cabin.slice(1).toLowerCase()
              : "Cabina no seleccionada"}
          </p>

          <Pasajeros_Display
            pasajeros={pasajeros}
            precio={precioSeleccionado}
          />

          <Link
            to={`/crucero/datos/${producto?.id_crucero ?? ""}/${slugify(
              producto?.itinerario?.name ?? "itinerario"
            )}`}
            state={{ producto, pasajeros, precioSeleccionado }}
          >
            <div className="tw-flex tw-justify-center">
              <button className="tw-bg-secondary tw-mt-5 tw-w-full tw-p-3 tw-px-8 tw-rounded-xl tw-shadow-md tw-text-white tw-font-bold">
                Total:{" "}
                {(pasajeros.length * precioSeleccionado.price).toFixed(2)} €
              </button>
            </div>
          </Link>
        </div>
      ) : (
        <div className="tw-w-full tw-h-full tw-mt-10 tw-flex tw-flex-col tw-items-center tw-justify-center">
          <FaInfoCircle className="tw-text-danger tw-text-4xl" />
          <p className="tw-text-center tw-text-danger dark:tw-text-red-400 tw-animate-pulse tw-font-semibold">
            Selecciona la cabina y pasajeros a bordo
          </p>
        </div>
      )}
    </div>
  );
}

export default Aside;
