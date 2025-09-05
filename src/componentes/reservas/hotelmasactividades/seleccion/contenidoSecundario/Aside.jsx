import { FaHotel } from "react-icons/fa6";
import formatearFecha from "../../../../../assets/scripts/formatearFecha";
import calcularFechaSalida from "../../../../../assets/scripts/fechaSalidaConInicioYNoches";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Resumen";
import DatoTituloIcono from "../../../../../helpers/visuales/DatoTituloIcono";
import { FaTicket } from "react-icons/fa6";
function Aside({ hotel, actividades }) {
  const fechaSalida = calcularFechaSalida(
    hotel.reserva.fecini,
    hotel.reserva.noc
  );
  return (
    <div className="tw-flex tw-flex-col tw-gap-3">
      <Reserva
        img={" /banners/banner_hoteles.webp"}
        txt={
          <span>
            Hotel + {actividades.length} actividad
            {actividades.length > 1 && "es"}
          </span>
        }
      />
      <div className="tw-my-2">
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
        {actividades.map((actividad, index) => (
          <DatoTituloIcono
            key={index}
            icon={<FaTicket className="tw-text-pink-600" />}
            title={actividad.titulo}
            value={
              <span>
                {formatearFecha(actividad.fechaSeleccionada)} a las{" "}
                {actividad.horaSeleccionada}
              </span>
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Aside;
