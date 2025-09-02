import DatosContacto from "../../../../../helpers/visuales/ReservaFinal/DatosContacto";
import Ferry from "../Ferry";
function Detalles({ ida, vuelta, datosContacto }) {
  return (
    <section>
      <DatosContacto
        nombre={datosContacto.nombre}
        apellidos={datosContacto.apellido}
        email={datosContacto.email}
        numero={datosContacto.numero}
      />
      <Ferry producto={ida} tipo={"ida"} />
      {vuelta && <Ferry producto={vuelta} tipo={"vuelta"} />}
    </section>
  );
}

export default Detalles;
