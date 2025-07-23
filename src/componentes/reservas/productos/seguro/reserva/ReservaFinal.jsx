import { useLocation } from "react-router-dom";
import Seguro from "../contenidoPrincipal/Seguro";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
import Aside from "./contenidoSecundario/Aside";
function Reserva() {
  const location = useLocation();
  const { seguro, data } = location.state || {};
  return (
    <PaginaDetalles
      titulo={seguro.titulo}
      contenidoPrincipal={<Seguro data={data} seguro={seguro} />}
      contenidoSecundario={<Aside seguro={seguro} data={data} />}
    />
  );
}

export default Reserva;
