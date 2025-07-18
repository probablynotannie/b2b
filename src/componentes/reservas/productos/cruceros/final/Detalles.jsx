import Itinerario from "../crucero/contenidoPrincipal/Itinerario";
import DetallesConIconos from "../crucero/contenidoPrincipal/Detalles";
function Detalles({ producto }) {
  return (
    <section className="tw-mt-5">
      <div className="tw-bg-slate-50 tw-mt-5 dark:tw-bg-slate-800 dark:tw-text-slate-300 tw-p-3 tw-pt-5 tw-pb-5 tw-my-5 tw-rounded">
        <DetallesConIconos producto={producto} />
      </div>
      <Itinerario producto={producto.itin_dias} />
    </section>
  );
}

export default Detalles;
