import { useLocation } from "react-router-dom";
import Tren from "./detalles/Tren";
function Producto() {
  const location = useLocation();
  const producto = location.state;
  const ida = producto[0];
  const vuelta = producto[1] && producto[1];

  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <h1 className="font-bold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-800 pb-2">
          Reservando tren de ida {vuelta && "y vuelta"}
        </h1>
        <section className="border-2 border-slate-200 rounded-xl shadow bg-slate-50 dark:bg-slate-800 dark:border-slate-700 p-5">
          <h2>IDA</h2>
          <Tren tren={vuelta} tipo={"ida"} />
        </section>
        {vuelta && (
          <section className="border-2 border-slate-200 rounded-xl shadow bg-slate-50 dark:bg-slate-800 dark:border-slate-700 p-5 mt-10">
            <Tren tren={vuelta} tipo={"Vuelta"} />
          </section>
        )}
      </section>
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Datos de pasajero
        </h2>
        <button className="w-full bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
          {(ida.price + vuelta?.price || 0).toFixed(2)}€
        </button>
      </article>
    </main>
  );
}

export default Producto;
