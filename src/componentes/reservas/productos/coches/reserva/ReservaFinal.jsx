import { useLocation } from "react-router-dom";

function Reserva() {
  const location = useLocation();
  const { producto, selectedExtras } = location.state || {};
  console.log(producto, selectedExtras);
  return (
    <main className="grid grid-cols-3 min-h-[55vh] items-start container gap-12">
      <section className="col-span-2 shadow-lg rounded-lg min-h-[15vh] border border-slate-100 dark:border-slate-700 dark:bg-slate-900 p-5">
        <h1 className="font-bold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-800 pb-2">
          Reservando coche
        </h1>
      </section>
      <article className="col-span-1 shadow-lg rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Datos de pasajero
        </h2>

        <button className="w-full bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
          123123123€
        </button>
      </article>
    </main>
  );
}

export default Reserva;
