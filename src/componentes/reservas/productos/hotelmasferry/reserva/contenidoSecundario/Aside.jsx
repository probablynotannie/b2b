import { FaHotel, FaShip } from "react-icons/fa6";
import formatearFecha from "../../../../../../assets/scripts/formatearFecha";
import Reserva from "../../../../../../helpers/visuales/ReservaFinal/Resumen";

function Aside({ hotel, ferry, precioFerry }) {
  return (
    <div>
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
          {formatearFecha(ferry.ida.fecha)} -{" "}
          {formatearFecha(ferry.vuelta?.fecha)}
        </li>
      </ul>
    </div>
  );
}

export default Aside;
