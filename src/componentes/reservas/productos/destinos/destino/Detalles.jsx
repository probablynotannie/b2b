import MapWithJourney from "./MapWithJourney";
import Itinerario from "./Itinerario";
import Incluidos from "./Incluidos";
import Importante from "./Importante";
function Detalles({ producto, cesta }) {
  return (
    <>
      <section>
        {cesta !== null && cesta !== true && (
          <div className="tw-h-[35vh] tw-relative tw-shadow">
            <img
              src={producto.img}
              className="tw-h-full tw-w-full tw-object-cover tw-rounded"
              alt="imagen Destino"
            />
            <div className="tw-bg-black tw-bg-opacity-45 tw-h-full tw-w-full tw-absolute tw-top-0 tw-flex tw-items-center tw-justify-center">
              <h2 className="tw-text-4xl tw-text-slate-100 tw-font-bold">
                {producto.nombre}
              </h2>
            </div>
          </div>
        )}
        <h3 className="dark:tw-text-white tw-text-secondary tw-font-bold tw-mt-3 tw-text-xl">
          Detalles
        </h3>
        <p className="dark:tw-text-slate-300">{producto.descripcion}</p>
        <div className="tw-mt-5 tw-pb-5">
          <Incluidos destino={producto} />
        </div>
        <h3 className="dark:tw-text-white tw-text-slate-700 tw-font-bold tw-mt-3 tw-text-xl">
          Recorrido
        </h3>
        <div className="tw-mt-1">
          <Itinerario destino={producto} />
        </div>
        <div className="tw-h-64 tw-mt-1">
          <MapWithJourney destino={producto} />
        </div>
        <div className="tw-mt-10">
          <Importante destino={producto} />
        </div>
      </section>
    </>
  );
}

export default Detalles;
