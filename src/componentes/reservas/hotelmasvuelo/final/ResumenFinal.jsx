import { useLocation } from "react-router-dom";
import Hotel from "../../hotel/final/Hotel";

import Vuelo from "../../vuelos/final/Vuelos";
import Reserva from "../../../../helpers/visuales/ReservaFinal/Reserva";
import { FaHotel } from "react-icons/fa";
function ResumenFinal() {
  const location = useLocation();
  const { selectedHotel, ida, vuelta, data, habitacion } = location.state || {};
  const numReserva = "aouaguoy76";

  return (
    <Reserva
      finalizada={true}
      datosContacto={data}
      Icono={FaHotel}
      numReserva={numReserva}
      main={
        <>
          <Hotel hotel={selectedHotel} habitacion={habitacion} />
          <Vuelo ida={ida} vuelta={vuelta} pasajeros={data.pasajeros} />
        </>
      }
    />
  );
}

export default ResumenFinal;
