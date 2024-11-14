import Aside from "./filtros/Aside";
import MasVuelos from "./MasVuelos";

function Vuelos() {
  return (
    <article className="grid grid-cols-9 lg:gap-24 xs:gap-28">
      <aside className="col-span-1 lg:col-span-3 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200 dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
        <Aside />
      </aside>
      <section className="col-span-9 lg:col-span-6 p-3">
        <MasVuelos />
      </section>
    </article>
  );
}

export default Vuelos;
