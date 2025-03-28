import { FaHotel, FaShip } from "react-icons/fa";
import { Link } from "react-router-dom";

const formatDate = (dateString) => {
  if (!dateString || typeof dateString !== "string") return "";

  try {
    const [day, month, year] = dateString.split("-").map(Number);
    if (!day || !month || !year) {
      console.error("Invalid date components:", { day, month, year });
      return "Fecha inválida";
    }
    const date = new Date(year, month - 1, day);
    return new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
    }).format(date);
  } catch (error) {
    console.error("Error parsing date:", error);
    return "Fecha inválida";
  }
};
function Aside({ hotel, ferry, habitacion }) {
  return (
    <div>
      <h2 className="tw-text-lg tw-font-bold tw-pb-1 tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 dark:tw-text-white tw-mb-2">
        Reservando
      </h2>
      <div className="tw-text-sm">
        <ul className="tw-text-slate-500 dark:tw-text-slate-300">
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
            <span>
              {(ferry.ida.precio + ferry.vuelta?.precio || 0).toFixed(2)}€
            </span>
          </li>
          <li className="tw-flex tw-items-center tw-gap-1 tw-text-slate-400">
            {formatDate(ferry.ida.fecha)} - {formatDate(ferry.vuelta?.fecha)}
          </li>
        </ul>
        <Link to={"/datosHotelFerry"} state={{ hotel, ferry, habitacion }}>
          <button className="tw-w-full tw-mt-3 tw-btn">
            {parseFloat(hotel.precio) +
              parseFloat(ferry.ida.precio.toFixed(2)) +
              parseFloat((ferry.vuelta?.precio || 0).toFixed(2))}
            €
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Aside;
