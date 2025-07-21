import VueloSeleccionados from "../VueloSeleccionados";
import Pasajeros from "../reserva/contenidoPrincipal/Pasajeros";
function Vuelos({ ida, vuelta, pasajeros }) {
  return (
    <>
      <VueloSeleccionados ida={ida} vuelta={vuelta} cesta={true} />
      {pasajeros && <Pasajeros pasajeros={pasajeros} />}
    </>
  );
}

export default Vuelos;
