import Detalles from "../detalles/Detalles";
import Itinerario from "../detalles/Itinerario";
function Circuito({ actividad }) {
  return (
    <section className="mt-10 shadow-lg hover:shadow-xl transition duration-300 border dark:bg-slate-800 bg-slate-50 p-5 border-slate-200 dark:border-slate-700  rounded-lg">
      <section className="flex justify-between items-center border-b-2 border-slate-100 dark:border-slate-700 pb-2 mb-5">
        <div>
          <h3 className="text-lg font-bold dark:text-white">
            {actividad.titulo}
          </h3>
          <p className="text-slate-500 dark:text-slate-300 flex gap-2 items-center"></p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-secondary dark:text-secondaryDark font-bold">
            {actividad.precio.toFixed(2)}€
          </span>
        </div>
      </section>
      <Itinerario actividad={actividad} cesta={true} />
    </section>
  );
}

export default Circuito;
