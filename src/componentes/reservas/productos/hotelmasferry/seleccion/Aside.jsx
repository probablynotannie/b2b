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
function Aside({ hotel, ferry }) {
  return (
    <div>
      <h2 className="text-lg font-bold pb-1 border-b-2 border-slate-100 dark:border-slate-700 dark:text-white mb-2">
        Reservando
      </h2>
      <div className="text-sm">
        <ul className="text-slate-500 dark:text-slate-300">
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
            {formatDate(ferry.ida.fecha)} - {formatDate(ferry.vuelta?.fecha)}
          </li>
        </ul>
        <Link to={"/datosHotelFerry"} state={{ hotel, ferry }}>
          <button className="w-full p-3 bg-secondary dark:bg-green-600 text-white font-bold rounded-lg mt-3">
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
