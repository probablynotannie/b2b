import Tren from "../detalles/contenidoPrincipal/Tren";
import Map from "../Mapa";

function Trenes({ tren }) {
  const ida = tren.ida;
  const vuelta = tren.vuelta ? tren.vuelta : null;
  return (
    <>
      <section className="tw-grid lg:tw-grid-cols-2 tw-gap-10">
        <section className="tw-flex tw-flex-col tw-gap-4 tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-bg-slate-100 dark:tw-bg-slate-900 tw-rounded tw-shadow tw-p-3">
          <Tren tren={ida} tipo="ida" cesta={true} />
          <Map tren={ida} />
        </section>
        {vuelta && (
          <section className="tw-flex tw-flex-col tw-gap-4 tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-bg-slate-100 dark:tw-bg-slate-900 tw-rounded tw-shadow tw-p-3">
            <Tren tren={vuelta} tipo="vuelta" cesta={true} />
            <Map tren={vuelta} />
          </section>
        )}
      </section>
    </>
  );
}

export default Trenes;
