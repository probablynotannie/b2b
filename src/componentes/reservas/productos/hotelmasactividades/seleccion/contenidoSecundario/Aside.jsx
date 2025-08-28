import { FaHotel } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import formatearFecha from "../../../../../../assets/scripts/formatearFecha";
import { BsDash } from "react-icons/bs";
function Aside({ hotel, actividades }) {
  return (
    <ul className="dark:tw-text-slate-200">
      <li>
        <ul>
          <li className="tw-flex tw-items-center tw-gap-2 tw-font-semibold">
            <FaHotel className="tw-text-secondary dark:tw-text-secondaryDark" />
            {hotel.nombre}
          </li>
          <li className="tw-text-slate-600 dark:tw-text-slate-400 tw-flex tw-items-center tw-gap-2 tw-ml-2 tw-text-sm">
            <FaCalendarAlt className="tw-text-slate-300" /> {hotel.fecha} -{" "}
            {hotel.fechaSalida}
          </li>
        </ul>
      </li>
      {actividades.map((actividad, index) => (
        <li key={index}>
          <ul>
            <li className="tw-flex tw-items-center tw-gap-1 tw-mt-2">
              <BsDash className="tw-text-secondary dark:tw-text-secondaryDark" />
              {actividad.titulo}
            </li>
            <li className="tw-text-slate-600 dark:tw-text-slate-400 tw-flex tw-items-center tw-gap-2 tw-ml-2 tw-text-sm">
              <FaCalendarAlt className="tw-text-slate-300" />{" "}
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
