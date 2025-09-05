import { FaHotel, FaShip } from "react-icons/fa";
import DatoTituloIcono from "../../../../../helpers/visuales/DatoTituloIcono";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Resumen";
import formatearFecha from "../../../../../assets/scripts/formatearFecha";
import calcularFechaSalida from "../../../../../assets/scripts/fechaSalidaConInicioYNoches";
import extractFechaHora from "../../../../../assets/scripts/extractDateAndTime";
function Aside({ hotel, ferry, habitacion }) {
  const fechaSalida = calcularFechaSalida(
    hotel.reserva.fecini,
    hotel.reserva.noc
  );
  const { hora: horaIda } = extractFechaHora(ferry.ida.fecha_llegada);
  const { hora: horavuelta } = extractFechaHora(ferry.vuelta?.fecha_llegada);
  return (
    <div>
      <Reserva
        img={" /banners/banner_hoteles.webp"}
        txt={<span>Hotel + ferry de ida {ferry.vuelta && " y vuelta"} </span>}
      />
      <section className="tw-my-2">
        <DatoTituloIcono
          icon={<FaHotel className="tw-text-secondary" />}
          title={hotel.NombreHotel}
          value={
            <span>
              {formatearFecha(hotel.reserva.fecini)} -{" "}
              {formatearFecha(fechaSalida)}
            </span>
          }
        />
        <DatoTituloIcono
          icon={<FaShip className="tw-text-secondary" />}
          title={<span>Ferry de ida</span>}
          value={
            <span>
              {formatearFecha(ferry.ida.fecha_llegada)}, {horaIda}
            </span>
          }
        />
        {ferry.vuelta && (
          <DatoTituloIcono
            icon={<FaShip className="tw-text-secondary" />}
            title={<span>Ferry de vuelta</span>}
            value={
              <span>
                {formatearFecha(ferry.vuelta.fecha_llegada)}, {horavuelta}
              </span>
            }
          />
        )}
      </section>
    </div>
  );
}

export default Aside;
