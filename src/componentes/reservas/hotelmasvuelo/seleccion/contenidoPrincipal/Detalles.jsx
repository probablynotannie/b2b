import Vuelos from "../../../vuelos/VueloSeleccionados";
import Info from "../../../hotel/detalles/contenidoPrincipal/Info";
function Detalles({ hotel, ida, vuelta }) {
  return (
    <>
      <Info hotel={hotel} />
      <Vuelos ida={ida} vuelta={vuelta} cesta={true} />
    </>
  );
}
export default Detalles;
