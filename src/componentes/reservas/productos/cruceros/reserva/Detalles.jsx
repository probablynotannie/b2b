import Itinerario from "../crucero/Itinerario";
import DetallesConIconos from "../crucero/Detalles";
function Detalles({ producto }) {
  return (
    <div>
      <section className="tw-mt-5">
        <div className="tw-bg-slate-50 tw-mt-5 dark:tw-bg-slate-800 dark:tw-text-slate-300 tw-p-3 tw-pt-5 tw-pb-5 tw-my-5 tw-rounded">
          <p className="tw-text-sm  tw-rounded">{producto.barco.descripcion}</p>
          <DetallesConIconos producto={producto} />
        </div>
        <Itinerario producto={producto.itin_dias} />
      </section>
    </div>
  );
}

export default Detalles;
