import Aside from "../vuelos/filtros/Aside_Vuelo";
import MasVuelos from "../vuelos/Vuelos";
function Vuelos({ ida, setIda, vuelta, setVuelta, vuelos }) {
  return (
    <>
      <aside className="tw-col-span-9 lg:tw-col-span-3 tw-h-fit lg:tw-sticky tw-top-5 lg:tw-bg-slate-100 lg:dark:tw-bg-slate-800 lg:tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-lg lg:tw-shadow-xl hover:lg:tw-shadow-2xl tw-transition tw-px-3 lg:tw-p-3 lg:tw-pb-10">
        <Aside />
      </aside>
      <section className="tw-col-span-9 lg:tw-col-span-6 tw-p-3">
        <MasVuelos
          vuelos={vuelos}
          ida={ida}
          setIda={setIda}
          vuelta={vuelta}
          setVuelta={setVuelta}
        />
      </section>
    </>
  );
}

export default Vuelos;
