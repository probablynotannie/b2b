import Buscador from "./filtros/Buscador";
import Aside from "./filtros/Aside";
import Resultado from "./Resultado";
function Productos() {
  return (
    <main className=" flex justify-center flex-colmy-10 items-center container my-10">
      <article className="grid grid-cols-9 lg:gap-24 xs:gap-28">
        <div className="col-span-7 md:col-span-8 lg:col-span-9 mx-3 md:mx-0">
          <Buscador />
        </div>
        <aside className="col-span-1 h-fit sticky top-5 lg:col-span-3 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
          <Aside />
        </aside>
        <section className="col-span-9 lg:col-span-6 p-3">
          <Resultado />
        </section>
      </article>
    </main>
  );
}

export default Productos;
