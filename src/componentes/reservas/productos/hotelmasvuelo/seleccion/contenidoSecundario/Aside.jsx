import { FaHotel } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import FormatearFecha from "../../../../../../scripts/FormatearFecha";

function Aside({ hotel, ida, vuelta }) {
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
        <ul className="tw-mt-3">
          <li className="tw-flex tw-justify-between tw-font-semibold">
            Vuelo ida
            <span>
              {ida.flight.salida} - {ida.flight.llegada}
            </span>
          </li>
          <li className="tw-flex tw-justify-between">
            {FormatearFecha(ida.flight.outboundDate)}
            <span>
              {ida.flight.departure} - {ida.flight.arrival}
            </span>
          </li>
        </ul>
        {vuelta && (
          <ul className="tw-mt-3">
            <li className="tw-flex tw-justify-between tw-font-semibold">
              Vuelo Vuelta
              <span>
                {vuelta.flight.salida} - {vuelta.flight.llegada}
              </span>
            </li>
            <li className="tw-flex tw-justify-between">
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
