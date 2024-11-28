import MapWithJourney from "./MapWithJourney";
import Itinerario from "./Itinerario";
import Incluidos from "./Incluidos";
import Importante from "./Importante";
function Detalles({ producto }) {
  return (
    <>
      <section>
        <div className="h-[35vh] relative shadow">
          <img
            src={producto.img}
            className="h-full w-full object-cover rounded"
            alt="imagen Destino"
          />
          <div className="bg-black bg-opacity-45 h-full w-full absolute top-0 flex items-center justify-center">
            <h2 className="text-4xl text-slate-100 font-bold">
              {producto.nombre}
            </h2>
          </div>
        </div>
        <h3 className="dark:text-white text-secondary font-bold mt-3 text-xl">
          Detalles
        </h3>
        <p className="dark:text-slate-300">{producto.descripcion}</p>
        <div className="mt-5 border-b-2 border-slate-100 pb-5">
          <Incluidos destino={producto} />
        </div>
        <h3 className="dark:text-white text-slate-700 font-bold mt-3 text-xl">
          Recorrido
        </h3>

        <div className="mt-1">
          <Itinerario destino={producto} />
        </div>
        <div className="h-64 mt-1 z-0">
          <MapWithJourney destino={producto} />
        </div>
        <div className="mt-10 z-50">
          <Importante destino={producto} />
        </div>
      </section>
    </>
  );
}

export default Detalles;
