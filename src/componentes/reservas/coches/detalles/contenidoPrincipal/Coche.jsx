import Detalles from "./Detalles";
import Info from "./Info";
import Itinerario from "./Itinerario";
function Coche({ coche }) {
  return (
    <>
      <Info coche={coche} />
      <Itinerario coche={coche} />
      <Detalles coche={coche} />
    </>
  );
}

export default Coche;
