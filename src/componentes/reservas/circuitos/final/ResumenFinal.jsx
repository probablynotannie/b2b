import { useLocation } from "react-router-dom";
import Circuito from "./Circuito";
import Reserva from "../../../../helpers/visuales/ReservaFinal/Reserva";
import { FaGlobe } from "react-icons/fa";
function ResumenFinal() {
  const location = useLocation();
  const { data, fechaIda, actividad, habitacion, adultos, ninios } =
    location.state || {};
  const numReserva = "AOUHPPI2085";
  return (
    <Reserva
      Icono={FaGlobe}
      numReserva={numReserva}
      titulo={actividad.titulo}
      descripcionTitulo={fechaIda}
      precio={actividad.precio.toFixed(2)}
      finalizada={true}
      datosContacto={data}
      main={
        <Circuito
          actividad={actividad}
          fechaIda={fechaIda}
          habitacion={habitacion}
          adultos={adultos}
          ninios={ninios}
        />
      }
    />
  );
}

export default ResumenFinal;
