import { FaHotel } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import formatearFecha from "../../../estructura/FormatearFecha";
import { BsDash } from "react-icons/bs";
function Aside({ hotel, actividades }) {
  return (
    <ul className="dark:tw-text-slate-200">
      <li>
        <ul>
          <li className="flex items-center gap-2 font-semibold">
            <FaHotel className="tw-text-secondary dark:tw-text-secondary" />
            {hotel.nombre}
          </li>
          <li className="text-slate-600 dark:tw-text-slate-400 flex items-center gap-2 ml-2 text-sm">
            <FaCalendarAlt className="text-slate-300" /> {hotel.fecha} -{" "}
            {hotel.fechaSalida}
          </li>
        </ul>
      </li>
      {actividades.map((actividad, index) => (
        <li key={index}>
          <ul>
            <li className="flex items-center gap-1 mt-2">
              <BsDash className="tw-text-secondary  dark:tw-text-secondary" />
              {actividad.titulo}
            </li>
            <li className="text-slate-600 dark:tw-text-slate-400 flex items-center gap-2 ml-2 text-sm">
              <FaCalendarAlt className="text-slate-300" />{" "}
              {formatearFecha(actividad.fechaSeleccionada)} a las{" "}
              {actividad.horaSeleccionada}
            </li>
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default Aside;
