import { useLocation } from "react-router-dom";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
import Aside from "./contenidoSecundario/Aside";
import Vuelo from "./contenidoPrincipal/Vuelo";
function ReservaFinal() {
  const location = useLocation();
  const { ida, vuelta, data } = location.state || {};

  if (!ida || !vuelta) {
    return (
      <p className="tw-w-full tw-text-center tw-text-lg tw-animate-pulse tw-text-red-400 dark:tw-text-red-600">
        No se han seleccionado los vuelos...
      </p>
    );
  }
  return (
    <PaginaDetalles
      titulo={"Vuelo de ida " + (vuelta ? " y vuelta" : "")}
      contenidoPrincipal={
        <>
          <Vuelo ida={ida} vuelta={vuelta} data={data} />
        </>
      }
      contenidoSecundario={<Aside ida={ida} data={data} vuelta={vuelta} />}
    />
  );
}
export default ReservaFinal;
