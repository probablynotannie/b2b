import { Link } from "react-router-dom";
function Resultado({ entradas }) {
  return (
    <section className="pb-12 md:mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {entradas.map((actividad, index) => (
        <Link
          to={"/actividad"}
          state={actividad}
          className="border-2 bg-white hover:scale-[102%] duration-300 dark:bg-slate-800 relative border-slate-100 dark:border-slate-700 h-auto max-w-full rounded-lg rounded-t-lg  shadow-lg hover:shadow-xl transition cursor-pointer"
          key={index}
        >
          <span
            className={`absolute rotate-45 bg-blue-500 rounded-lg px-2 p-1  font-bold text-sm top-5 right-5 z-10 shadow-lg ${
              actividad.tipoPrecio === "Neto"
                ? "bg-green-300 text-green-800"
                : "bg-red-500 text-red-200"
            }`}
          >
            {actividad.tipoPrecio}
          </span>
          <div className="relative ">
            <img
              className="h-[25vh] w-full object-cover object-top  rounded-t-lg"
              src={actividad.img}
              alt={actividad.titulo}
            />
            <div className="bg-emerald-500 bg-opacity-15 absolute top-0 w-full h-full" />
          </div>
          <div className="p-5">
            <h1 className="font-semibold text-slate-600 dark:text-slate-300">
              {actividad.titulo}
            </h1>
            <p className="text-sm dark:text-slate-400 line-clamp-3">
              {actividad.descripcion_corta}
            </p>
            <p className="mt-3 text-lg">
              <span className="text-slate-400 text-sm mr-1">Desde:</span>
              <span className="font-bold text-green-600 dark:text-green-400">
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
