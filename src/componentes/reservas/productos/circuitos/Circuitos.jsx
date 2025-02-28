import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
function Resultado({ entradas }) {
  return (
    <section className="pb-12 md:mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {entradas.map((actividad, index) => (
        <Link
          to={"/circuito"}
          state={actividad}
          className="border-2  bg-white dark:bg-slate-800 relative border-slate-100 dark:tw-border-slate-700 h-auto max-w-full rounded-lg rounded-t-lg  shadow-lg hover:shadow-xl hover:scale-105 duration-300 transition cursor-pointer"
          key={index}
        >
          <div className="relative ">
            <img
              className="h-[25vh] w-full object-cover object-top  rounded-t-lg"
              src={actividad.img}
              alt={actividad.titulo}
            />
            <div className="bg-emerald-500  tw-bg-opacity-15 absolute top-0 w-full h-full" />
          </div>
          <div className="p-5">
            <h1 className="font-semibold text-slate-600 dark:tw-text-slate-300">
              {actividad.titulo}
            </h1>
            <ul className="text-xs pl-5">
              {actividad.incluido.slice(0, 5).map((incluido, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 dark:tw-text-slate-300"
                >
                  <FaCheckCircle className="text-green-800 dark:tw-text-green-400" />
                  <span>{incluido}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-lg">
              <span className="text-slate-400 text-sm mr-1">Desde:</span>
              <span className="font-bold text-green-600 dark:tw-text-green-400">
                {actividad.precio}€
              </span>
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
export default Resultado;
