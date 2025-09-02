import { useLocation } from "react-router-dom";
import DatosContacto from "../../../../helpers/visuales/ReservaFinal/DatosContacto";
import Aside from "./contenidoSecundario/Aside";
import Detalles from "../seleccion/contenidoPrincipal/Detalles";
import Pasajeros from "../../vuelos/reserva/contenidoPrincipal/Pasajeros";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
function ReservaFinal() {
  const location = useLocation();
  const { selectedHotel, ida, vuelta, data, habitacion } = location.state || {};
  return (
    <PaginaDetalles
      titulo={"Reservando Hotel + Vuelo"}
      contenidoPrincipal={
        <>
          <DatosContacto
            nombre={data.nombre}
            apellidos={data.apellido}
            email={data.email}
            numero={data.numero}
          />
          <Detalles ida={ida} vuelta={vuelta} hotel={selectedHotel} />
          <Pasajeros pasajeros={data.pasajeros} />
        </>
      }
      contenidoSecundario={
        <Aside
          selectedHotel={selectedHotel}
          ida={ida}
          vuelta={vuelta}
          data={data}
          habitacion={habitacion}
          hotel={selectedHotel}
        />
      }
    />
  );
}

export default ReservaFinal;
