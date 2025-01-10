import Itinerario from "../crucero/Itinerario";
import DatosContacto from "../../../estructura/DatosContacto";
function Detalles({ datosContacto, cabinPhotos, producto }) {
  return (
    <div>
      <DatosContacto
        nombre={datosContacto.nombre}
        apellidos={datosContacto.apellido}
        email={datosContacto.email}
        numero={datosContacto.numero}
      />
      <section className="mt-5">
        <h3 className="font-semibold dark:text-slate-100">Incluidos</h3>
        <div className="flex flex-wrap gap-3 mt-2">
          {producto.incluidos.map((incluido, index) => (
            <span
              key={index}
              className="rounded-lg bg-secondary font-semibold dark:bg-slate-700 text-sm p-1 text-white"
            >
              {incluido}
            </span>
          ))}
        </div>
        <p className=" text-sm bg-slate-50 mt-5 dark:bg-slate-700 dark:text-slate-300 p-3 rounded">
          {producto.descripcion}
        </p>
        <Itinerario producto={producto} />
      </section>
      <section className="p-3">
        <h3 className="font-semibold dark:text-slate-100">Fotos Camarote</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 p-2">
          {cabinPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photo`}
              className="rounded-lg shadow-md hover:shadow-lg object-cover hover:scale-110 transition duration-300"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Detalles;
