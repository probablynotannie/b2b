import Conductor from "./Conductor";
import Reembolso from "./Reembolso";
import Precio from "./Extras";
function Aside({
  conductor,
  setConductor,
  producto,
  contratar,
  setContratar,
  reembolso,
  totalExtras,
  setTotalExtras,
  precio,
  selectedExtras,
  setSelectedExtras,
  confirmacion,
}) {
  return (
    <aside className="tw-col-span-2 lg:tw-col-span-1 tw-flex tw-flex-col tw-gap-10">
      <section className="tw-p-3 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-rounded-xl tw-border-2 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-border-slate-100 tw-pb-3">
        <Conductor
          conductor={conductor}
          setConductor={setConductor}
          coche={producto}
        />
      </section>
      <section className="tw-p-3 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-rounded-xl tw-border-2 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-border-slate-100 tw-pb-3">
        <Reembolso
          contratar={contratar}
          setContratar={setContratar}
          reembolso={reembolso}
        />
      </section>
      <section className="tw-p-3 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-rounded-xl tw-border-2 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-border-slate-100 tw-pb-3">
        <Precio
          coche={producto}
          extras={totalExtras}
          selectedExtras={selectedExtras}
          setSelectedExtras={setSelectedExtras}
          setExtras={setTotalExtras}
        />
      </section>

      <button
        onClick={confirmacion}
        className="tw-w-full tw-btn_accesorios tw-btn_primario"
      >
        Reservar {precio}€
      </button>
    </aside>
  );
}

export default Aside;
