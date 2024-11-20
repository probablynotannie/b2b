import Aside from "../filtros/Aside_Vuelo";
import MasVuelos from "./MasVuelos";
import Buscador from "../filtros/Buscador";
function Vuelos() {
  return (
    <>
      <aside className="col-span-1 h-fit sticky top-5 lg:col-span-3 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200 dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
        <Aside />
      </aside>
      <section className="col-span-9 lg:col-span-6 p-3">
        
        <MasVuelos />
      </section>
    </>
  );
}

export default Vuelos;
