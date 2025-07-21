import VueloSeleccionados from "../VueloSeleccionados";
import Pasajeros from "../reserva/contenidoPrincipal/Pasajeros";
function Vuelos({ ida, vuelta, pasajeros }) {
  return (
    <>
      <h2 className="tw-font-bold dark:tw-text-slate-100 tw-mt-10">
        Vuelos Reservados
      </h2>
      <VueloSeleccionados ida={ida} vuelta={vuelta} cesta={true} />
      {pasajeros && <Pasajeros pasajeros={pasajeros} />}
    </>
  );
}

export default Vuelos;
