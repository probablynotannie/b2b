import Detalles from "./Detalles";
import Pasajeros from "../reserva/Pasajeros";

function Crucero({ producto, pasajeros }) {
  return (
    <>
      <Pasajeros pasajeros={pasajeros} />
      <Detalles producto={producto} />
    </>
  );
}

export default Crucero;
