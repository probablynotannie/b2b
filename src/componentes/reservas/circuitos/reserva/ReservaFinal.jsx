import { useLocation } from "react-router-dom";
import DatosContacto from "../../../../helpers/visuales/ReservaFinal/DatosContacto";
import Detalles from "../detalles/contenidoPrincipal/Detalles";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
import Aside from "./contenidoSecundario/Aside";
function ReservaFinal() {
  const location = useLocation();
  const { data, fechaIda, actividad, habitacion, roomData } =
    location.state || {};
  const adultos = roomData.reduce((acc, room) => acc + room.adultos, 0);
  const ninios = roomData.reduce((acc, room) => acc + room.ninios, 0);

  return (
    <PaginaDetalles
      titulo={actividad.titulo}
      contenidoPrincipal={
        <>
          <DatosContacto
            nombre={data.nombre}
            apellidos={data.apellido}
            email={data.email}
            numero={data.numero}
          />
          <Detalles actividad={actividad} cesta={true} />
        </>
      }
      contenidoSecundario={
        <Aside
          fechaIda={fechaIda}
          habitacion={habitacion}
          adultos={adultos}
          ninios={ninios}
          actividad={actividad}
          data={data}
        />
      }
    />
  );
}
export default ReservaFinal;
