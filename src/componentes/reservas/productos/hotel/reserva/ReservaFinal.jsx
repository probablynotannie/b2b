import { useLocation } from "react-router-dom";
import Detalles from "./contenidoPrincipal/Detalles";

import Reserva from "../../../../../helpers/visuales/ReservaFinal/Resumen";
import { Link } from "react-router-dom";
import Aside from "./contenidoSecundario/Aside";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
function ReservaFinal() {
  const location = useLocation();
  const { producto, habitacion, data } = location.state || {};
  return (
    <PaginaDetalles
      titulo={producto.nombre}
      tituloDescripcion={producto.ubicacion}
      contenidoPrincipal={<Detalles producto={producto} datosContacto={data} />}
      contenidoSecundario={
        <Aside producto={producto} habitacion={habitacion} data={data} />
      }
    />
  );
}

export default ReservaFinal;
