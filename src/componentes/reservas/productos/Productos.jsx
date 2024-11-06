import Buscador from "./Producto/Buscador";
import Aside from "./secciones_listado/Aside";
import Resultado from "./secciones_listado/Resultado";
function Productos() {
  return (
    <main className="sticky flex justify-center flex-col lg:my-10 items-center px-5">
      <div className="container">
        <article className="grid grid-cols-9 lg:gap-24 xs:gap-28 mt-10 ">
          <div className="col-span-7 md:col-span-8 lg:col-span-9 mx-3">
            <Buscador />
          </div>
          <aside className="col-span-1 lg:col-span-3 lg:bg-slate-100 lg:border-2 border-slate-200 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
            <Aside />
          </aside>
          <section className="col-span-9 lg:col-span-6 p-3">
            <Resultado />
          </section>
        </article>
      </div>
    </main>
  );
}

export default Productos;
