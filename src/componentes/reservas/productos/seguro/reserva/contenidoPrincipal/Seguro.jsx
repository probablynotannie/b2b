import DatosContacto from "../../../../../../helpers/visuales/ReservaFinal/DatosContacto";
import Detalles from "./Detalles";
function Seguro({ seguro, data }) {
  return (
    <>
      <DatosContacto
        nombre={data.nombre}
        apellidos={data.apellidos}
        email={data.email}
        numero={data.numero}
      />
      <Detalles seguro={seguro} />
    </>
  );
}

export default Seguro;
