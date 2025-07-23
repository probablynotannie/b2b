import VueloSeleccionados from "../../VueloSeleccionados";

import Pasajeros from "./Pasajeros";
function Vuelo({ ida, vuelta, data }) {
  return (
    <div>
      <VueloSeleccionados ida={ida} vuelta={vuelta} cesta={true} />
      <Pasajeros pasajeros={data.pasajeros} />
    </div>
  );
}

export default Vuelo;
