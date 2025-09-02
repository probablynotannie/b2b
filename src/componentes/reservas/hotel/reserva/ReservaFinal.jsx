import { useLocation } from "react-router-dom";
import Detalles from "./contenidoPrincipal/Detalles";
import Aside from "./contenidoSecundario/Aside";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
function ReservaFinal() {
  const location = useLocation();
  const { producto, habitacion, data } = location.state || {};
  return (
    <PaginaDetalles
      titulo={producto.NombreHotel}
      tituloDescripcion={producto.Dir}
      contenidoPrincipal={<Detalles producto={producto} datosContacto={data} />}
      contenidoSecundario={
        <Aside producto={producto} habitacion={habitacion} data={data} />
      }
    />
  );
}

export default ReservaFinal;
