import DatosContacto from "../../../estructura/DatosContacto";
import Notas from "../destino/Detalles";
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
