import { useLocation } from "react-router-dom";
import VueloSeleccionados from "./VueloSeleccionados";
function Vuelo() {
  const location = useLocation();
  const { ida, vuelta } = location.state || {};

  if (!ida || !vuelta) {
    return <p>Cargando...</p>;
  }

  return (
    <main className="grid grid-cols-3 min-h-[55vh] items-start container gap-12">
      <section className="col-span-2 shadow-lg rounded-lg min-h-[15vh] border border-slate-100 p-5">
        <h1 className="font-bold text-xl">Vuelo de ida y vuelta</h1>
        
        <VueloSeleccionados ida={ida} vuelta={vuelta} cesta={true} />
      </section>
      <article className="col-span-1 shadow-lg rounded-lg min-h-[15vh] border border-slate-100 p-5">
        <h2 className="font-semibold">Resumen</h2>
      </article>
    </main>
  );
}

export default Vuelo;
