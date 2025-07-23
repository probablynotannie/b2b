import { useLocation } from "react-router-dom";
import Hotel from "../../hotel/final/Hotel";

import Ferry from "../../ferris/final/Ferry";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Reserva";
import { FaHotel } from "react-icons/fa6";
function ResumenFinal() {
  const location = useLocation();
  const { hotel, ferry, data, habitacion } = location.state || {};
  const numReserva = "aouaguoy76";
  const calcularPrecio =
    Number(hotel.precio) +
    Number(ferry.ida.precio.toFixed(2)) +
    Number(ferry.vuelta?.precio || 0);
  return (
    <Reserva
      finalizada={true}
      numReserva={numReserva}
      datosContacto={data}
      Icono={FaHotel}
      titulo={hotel.nombre}
      descripcionTitulo={
        <span>+ Ferry de ida {ferry.vuelta && " y vuelta"}</span>
      }
      precio={calcularPrecio.toFixed(2)}
      main={
        <>
          <Hotel hotel={hotel} habitacion={habitacion} />
          <Ferry ida={ferry.ida} vuelta={ferry.vuelta || null} />
        </>
      }
    />
  );
}

export default ResumenFinal;
