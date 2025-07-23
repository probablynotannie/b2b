import Aside from "./contenidoSecundario/Aside";
import seguro from "./Seguro.json";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
import Seguro from "./contenidoPrincipal/Seguro";
function Resultado() {
  return (
    <PaginaDetalles
      titulo={seguro.titulo}
      contenidoPrincipal={<Seguro seguro={seguro} />}
      contenidoSecundario={<Aside seguro={seguro} />}
    />
  );
}

export default Resultado;
