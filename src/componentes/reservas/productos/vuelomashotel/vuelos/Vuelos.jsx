import Aside from "../filtros/Aside_Vuelo";
import MasVuelos from "./MasVuelos";
function Vuelos({
  texto,
  selectedOutboundFlight,
  setSelectedOutboundFlight,
  selectedReturnFlight,
  setSelectedReturnFlight,
}) {
  return (
    <>
      <aside className="col-span-1 h-fit sticky top-20 lg:col-span-3 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200 dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
        <Aside />
      </aside>
      <section className="col-span-9 lg:col-span-6 p-3">
        <MasVuelos
          texto={texto}
          selectedOutboundFlight={selectedOutboundFlight}
          setSelectedOutboundFlight={setSelectedOutboundFlight}
          selectedReturnFlight={selectedReturnFlight}
          setSelectedReturnFlight={setSelectedReturnFlight}
        />
      </section>
    </>
  );
}

export default Vuelos;
