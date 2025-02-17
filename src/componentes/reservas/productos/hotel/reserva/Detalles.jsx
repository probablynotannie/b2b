import Info from "../../../estructura/hoteles/Info";
import Map from "../../../estructura/hoteles/Map";
import DatosContacto from "../../../estructura/DatosContacto";
import Imagenes from "../../../estructura/hoteles/Imgs"
function Detalles({ producto, datosContacto }) {
  return (
    <article className="mt-3">
      <section className="col-span-5 mt-10 mb-5 lg:my-5">
        <Info
          titulo={"Descripción del hotel"}
          descripcion={producto.descripcion}
        />
      </section>
      <DatosContacto
        nombre={datosContacto.nombre}
        apellidos={datosContacto.apellido}
        numero={datosContacto.email}
        email={datosContacto.tel}
      />

      <section className="h-full mt-5 lg:mt-5 tw-space-y-8">
        <Map location={producto.ubicacion} />
        <Imagenes imagenes={producto.habitacionImgs} />

      </section>
    </article>
  );
}

export default Detalles;
