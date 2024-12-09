import Buscador from "./filtros/Buscador";
import Aside from "./filtros/Aside";
import Hoteles from "./Hoteles";
function Productos() {
  return (
    <main className=" flex justify-center  items-center container my-10">
      <article className="grid grid-cols-9 lg:gap-10 xs:gap-28 w-full">
        <div className="col-span-7 md:col-span-8 lg:col-span-9 mx-3 md:mx-0">
          <Buscador />
        </div>
        <aside className="col-span-1 lg:col-span-3 h-fit lg:sticky  top-5 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
          <Aside />
        </aside>
        <section className="col-span-9 lg:col-span-6 p-3">
          <Hoteles />
        </section>
      </article>
    </main>
  );
}
export default Productos;
