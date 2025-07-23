import { useLocation } from "react-router-dom";
import Detalles from "../detalles/contenidoPrincipal/Coche";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
import Aside from "./contenidoSecundario/Aside";
function ReservaFinal() {
  const location = useLocation();
  const { producto, selectedExtras, precio, data, conductor } =
    location.state || {};
  return (
    <PaginaDetalles
      titulo={producto.nombre}
      tituloSecundario={producto.tipo}
      contenidoPrincipal={<Detalles coche={producto} />}
      contenidoSecundario={
        <Aside
          producto={producto}
          selectedExtras={selectedExtras}
          precio={precio}
          data={data}
          conductor={conductor}
        />
      }
    />
  );
}

export default ReservaFinal;
