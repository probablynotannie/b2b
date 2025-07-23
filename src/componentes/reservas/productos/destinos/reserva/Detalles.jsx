import DatosContacto from "../../../../../helpers/visuales/ReservaFinal/DatosContacto";
import Notas from "../destino/contenidoPrincipal/Destino";
function Detalles({ reserva, datosContacto }) {
  return (
    <div>
      <DatosContacto
        nombre={datosContacto.nombre}
        apellidos={datosContacto.apellido}
        email={datosContacto.email}
        numero={datosContacto.numero}
      />
      <Notas producto={reserva} cesta={true} />
    </div>
  );
}

export default Detalles;
