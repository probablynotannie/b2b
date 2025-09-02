import { useLocation } from "react-router-dom";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
import Detalles from "./contenidoPrincipal/Detalles";
import Aside from "./contenidoSecundario/Aside";
function ReservaFinal() {
  const location = useLocation();
  const { ida, vuelta, data } = location.state || {};
  const tren = {
    ida: ida,
    vuelta: vuelta,
  };
  return (
    <PaginaDetalles
      titulo={"Reservando tren de ida " + (vuelta && "y vuelta")}
      contenidoPrincipal={<Detalles ida={ida} vuelta={vuelta} data={data} />}
      contenidoSecundario={
        <Aside ida={ida} vuelta={vuelta} tren={tren} data={data} />
      }
    />
  );
}

export default ReservaFinal;
