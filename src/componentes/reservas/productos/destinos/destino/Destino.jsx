import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
import Resumen from "./contenidoSecundario/Resumen";
import { useLocation } from "react-router-dom";
import ComponenteDestino from "./contenidoPrincipal/Destino";
function Destino() {
  const location = useLocation();
  const producto = location.state;

  return (
    <PaginaDetalles
      contenidoPrincipal={<ComponenteDestino producto={producto} />}
      contenidoSecundario={<Resumen producto={producto} />}
    />
  );
}

export default Destino;
