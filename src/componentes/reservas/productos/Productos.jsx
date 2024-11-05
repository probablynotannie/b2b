import Buscador from "./Producto/Buscador";
import Aside from "./secciones_listado/Aside";
import Resultado from "./secciones_listado/Resultado";
function Productos() {
  return (
    <main className="sticky flex justify-center flex-col my-10 container">
      <Buscador />
      <article className="grid grid-cols-4 gap-28 mt-10">
        <aside className="col-span-1 bg-slate-100 rounded-lg shadow-xl p-3 pb-10">
          <Aside />
        </aside>
        <section className="col-span-3 p-3">
          <Resultado />
        </section>
      </article>
    </main>
  );
}

export default Productos;
