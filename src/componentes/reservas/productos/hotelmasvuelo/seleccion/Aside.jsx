import { FaHotel } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import FormatearFecha from "../../../estructura/FormatearFecha";
function Aside({ hotel, ida, vuelta }) {
  return (
    <ul className="dark:text-slate-200">
      <li>
        <ul>
          <li className="flex items-center gap-2 font-semibold">
            <FaHotel className="tw-text-secondary dark:tw-text-secondary" />
            {hotel.nombre}
          </li>
          <li className="text-slate-600 dark:text-slate-400 flex items-center gap-2 ml-2 text-sm">
            <FaCalendarAlt className="text-slate-300" /> {hotel.fecha} -{" "}
            {hotel.fechaSalida}
          </li>
        </ul>
        <ul className="mt-3">
          <li className="flex justify-between font-semibold">
            Vuelo ida
            <span>
              {ida.flight.salida} - {ida.flight.llegada}
            </span>
          </li>
          <li className="flex justify-between">
            {FormatearFecha(ida.flight.outboundDate)}
            <span>
              {ida.flight.departure} - {ida.flight.arrival}
            </span>
          </li>
        </ul>
        {vuelta && (
          <ul className="mt-3">
            <li className="flex justify-between font-semibold">
              Vuelo Vuelta
              <span>
                {vuelta.flight.salida} - {vuelta.flight.llegada}
              </span>
            </li>
            <li className="flex justify-between">
              {FormatearFecha(vuelta.flight.returnDate)}
              <span>
                {vuelta.flight.departure} - {vuelta.flight.arrival}
              </span>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
}

export default Aside;
