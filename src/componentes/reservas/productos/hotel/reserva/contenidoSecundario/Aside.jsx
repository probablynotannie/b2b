import Reserva from "../../../../../../helpers/visuales/ReservaFinal/Resumen";
import { FaPerson } from "react-icons/fa6";
import { FaCalendarAlt, FaDoorOpen, FaHotel, FaMoon } from "react-icons/fa";
import TituloIcono from "../../../../../../helpers/visuales/DatoTituloIcono";
import { Link } from "react-router-dom";
import calcularFechaSalida from "../fechaSalida";
import formatearFecha from "../../../../../../scripts/FormatearFecha";
function Aside({ producto, habitacion, data }) {
  const fechaSalida = calcularFechaSalida(
    producto.reserva.fecini,
    producto.reserva.noc
  );
  return (
    <div className="tw-flex tw-flex-col tw-gap-4">
      <Reserva img={producto.ListFotos[0]} txt={producto.NombreHotel} />
      <div>
        <TituloIcono
          icon={<FaCalendarAlt className="tw-text-lg tw-text-secondary" />}
          title="Fecha Entrada"
          value={formatearFecha(producto.reserva.fecini)}
        />
        <TituloIcono
          icon={<FaCalendarAlt className="tw-text-lg tw-text-secondary" />}
          title="Fecha Entrada"
          value={formatearFecha(fechaSalida)}
        />
        <TituloIcono
          icon={<FaMoon className="tw-text-lg tw-text-secondary" />}
          title="Noches"
          value={producto.reserva.noc + " noches"}
        />
        <TituloIcono
          icon={<FaPerson className="tw-text-lg tw-text-secondary" />}
          title="Pax"
          value={
            <span>
              {habitacion.adultosTotal} adulto
              {habitacion.adultosTotal !== 1 ? "s" : ""}
              {habitacion.niniosTotal > 0 && (
                <span>
                  , {habitacion.niniosTotal} niño
                  {habitacion.niniosTotal !== 1 ? "s" : ""}
                </span>
              )}
            </span>
          }
        />
        <TituloIcono
          icon={<FaDoorOpen className="tw-text-lg tw-text-secondary" />}
          title="Habitación"
          value={habitacion.combinedName}
        />
        <TituloIcono
          icon={<FaHotel className="tw-text-lg tw-text-secondary" />}
          title="Resgimen"
          value={habitacion.BoardName}
        />
      </div>
      <Link to={"/resumenHotel"} state={{ producto, habitacion, data }}>
        <button className="tw-btn_accesorios tw-btn_primario tw-w-full">
          {Number(habitacion.Price).toFixed(2)}
          {habitacion.Currency === "EUR" ? "€" : habitacion.Currency}
        </button>
      </Link>
    </div>
  );
}

export default Aside;
