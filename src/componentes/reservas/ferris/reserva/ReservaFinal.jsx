import { useLocation } from "react-router-dom";
import Detalles from "./contenidoPrincipal/Detalles";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
import Aside from "./contenidoSecundario/Aside";
function Reserva() {
  const location = useLocation();
  const { ida, vuelta, data } = location.state || {};
  return (
    <>
      <PaginaDetalles
        titulo={data.img}
        contenidoPrincipal={
          <Detalles ida={ida} vuelta={vuelta} datosContacto={data} />
        }
        contenidoSecundario={<Aside data={data} ida={ida} vuelta={vuelta} />}
      />
    </>
  );
}

export default Reserva;
