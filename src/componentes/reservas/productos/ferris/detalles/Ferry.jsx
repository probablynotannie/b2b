import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
import { useLocation } from "react-router-dom";
import Detalles from "./contenidoPrincipal/Detalles";
import Aside from "./contenidoSecundario/Aside";

function Ferry() {
  const location = useLocation();
  const { ferry, ferrisData } = location.state || {};
  const { ida, vuelta } = ferry || {};
  return (
    <PaginaDetalles
      titulo={"Ferry"}
      contenidoPrincipal={<Detalles ida={ida} vuelta={vuelta} />}
      contenidoSecundario={
        <Aside ida={ida} vuelta={vuelta} ferry={ferrisData} />
      }
      background={"url('/banners/banner_ferry.webp')"}
      position={"center"}
      color={"tw-bg-blue-200/50"}
    />
  );
}

export default Ferry;
