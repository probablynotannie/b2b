import { FaHotel, FaShip, FaCalendarAlt } from "react-icons/fa";

const formatDate = (dateString) => {
  if (!dateString || typeof dateString !== "string") return ""; // Handle invalid input

  try {
    // Split the date string into day, month, and year
    const [day, month, year] = dateString.split("-").map(Number);

    // Validate the parsed values
    if (!day || !month || !year) {
      console.error("Invalid date components:", { day, month, year });
      return "Fecha inválida";
    }

    // Create a new Date object using the parsed values
    const date = new Date(year, month - 1, day); // Month is zero-indexed in JavaScript

    // Format the date to "day and month" in Spanish
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
  console.log("Hotel", hotel);
  console.log("Ferry", ferry);

  return (
    <div>
      <h2 className="text-lg font-bold pb-1 border-b-2 border-slate-100 dark:border-slate-700 dark:text-white mb-2">
        Reservando
      </h2>
      <div className="text-sm">
        <ul className="text-slate-500 dark:text-slate-300">
          <li className="flex justify-between">
            <span className="flex items-center gap-1">
              <FaHotel className="text-secondary" />
              {hotel.nombre}
            </span>
            <span>{hotel.precio}€</span>
          </li>
          <li className="flex items-center gap-1 ml-4">
            <FaCalendarAlt className="text-slate-400" />
            {hotel.fecha} - {hotel.fechaSalida}
          </li>

          <li className="">
            <span className="flex items-center gap-1">
              <FaShip className="text-secondary" />
              {ferry.ida.ruta}
            </span>
          </li>
          <li className="flex items-center gap-1 ml-4">
            <FaCalendarAlt className="text-slate-400" />
            {formatDate(ferry.ida.fecha)} - {formatDate(ferry.vuelta?.fecha)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aside;
