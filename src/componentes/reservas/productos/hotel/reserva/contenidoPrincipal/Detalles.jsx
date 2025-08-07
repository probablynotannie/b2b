import Map from "../../detalles/hoteles/Map";
import DatosContacto from "../../../../../../helpers/visuales/ReservaFinal/DatosContacto";
import Imagenes from "../../detalles/hoteles/Imgs";
import Hotel from "../../detalles/contenidoPrincipal/Hotel";
function Detalles({ producto, datosContacto }) {
  return (
    <article className="mt-3">
      <DatosContacto
        nombre={datosContacto.nombre}
        apellidos={datosContacto.apellido}
        numero={datosContacto.numero}
        email={datosContacto.email}
      />
      <Hotel hotel={producto} reservaFinal={true} />
    </article>
  );
}

export default Detalles;
