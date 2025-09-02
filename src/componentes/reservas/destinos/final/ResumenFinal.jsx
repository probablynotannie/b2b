import { useLocation } from "react-router-dom";

import Destino from "./Destino";
import Reserva from "../../../../helpers/visuales/ReservaFinal/Reserva";
import { FaClock, FaGlobe } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
function ResumenFinal() {
  const location = useLocation();
  const { reserva, data } = location.state || {};
  const numReserva = "AHOIUHK27658IU";

  return (
    <Reserva
      numReserva={numReserva}
      titulo={reserva.nombre}
      precio={reserva.precio.toFixed(2)}
      Icono={FaGlobe}
      descripcionTitulo={
        <div>
          {reserva.fechaIda} - {reserva.fechaVuelta}
          <div className="tw-flex tw-justify-between tw-gap-3 tw-flex-wrap tw-text-slate-600 dark:tw-text-slate-100">
            <div className="tw-flex tw-items-center tw-gap-1">
              <FaPerson className="tw-text-secondary dark:tw-text-secondaryDark" />
              <span>{reserva.pax}x</span>
            </div>

            <div className="tw-flex tw-items-center tw-gap-1">
              <FaClock className="tw-text-secondary dark:tw-text-secondaryDark" />
              <span>{reserva.dias} días</span>
            </div>
            <div className="tw-flex tw-items-center tw-gap-1">
              <ImSpoonKnife className="tw-text-secondary dark:tw-text-secondaryDark" />
              <span> {reserva.desayunos}x Desayunos</span>
            </div>
          </div>
        </div>
      }
      finalizada={true}
      datosContacto={data}
      main={<Destino reserva={reserva} />}
    />
  );
}

export default ResumenFinal;
