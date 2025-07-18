import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
import Detalles from "./Detalles";
import Resumen from "./Resumen";
import { useLocation } from "react-router-dom";
function Destino() {
  const location = useLocation();
  const producto = location.state;

  return (
    <PaginaDetalles
      contenidoPrincipal={<Detalles producto={producto} />}
      contenidoSecundario={<Resumen producto={producto} />}
    />
  );
}

export default Destino;
