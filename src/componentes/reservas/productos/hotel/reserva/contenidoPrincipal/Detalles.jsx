import Map from "../../detalles/hoteles/Map";
import DatosContacto from "../../../../../../helpers/visuales/ReservaFinal/DatosContacto";
import Imagenes from "../../detalles/hoteles/Imgs";
function Detalles({ producto, datosContacto }) {
  return (
    <article className="mt-3">

      <DatosContacto
        nombre={datosContacto.nombre}
        apellidos={datosContacto.apellido}
        numero={datosContacto.numero}
        email={datosContacto.email}
      />

      <section className="h-full mt-5 lg:mt-5 tw-space-y-8">
        <Map hotel={producto} />
        <Imagenes imagenes={producto.ListFotos} />
      </section>
    </article>
  );
}

export default Detalles;
