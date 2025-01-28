import { FaLongArrowAltRight } from "react-icons/fa";

function Cruceros_destacados({ cruceros }) {
  return (
    <div className="mb-6">
      <div className="grid gap-3  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cruceros.map((crucero, index) => (
          <div
            key={index}
            className="w-full  p-6 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 dark:bg-slate-800 dark:border-slate-700"
          >
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                {crucero.descripcion}
              </h5>
            </a>
            <p className="mb-3 font-normal text-slate-700 dark:text-slate-400">
              {crucero.titulo}
            </p>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Salidas
            </span>
            <ul className="flex flex-wrap gap-3 text-slate-700 dark:text-slate-300 text-sm my-2">
              {crucero.salidas.map((fecha, index) => (
                <li
                  key={index}
                  className="px-3 py-1 bg-slate-200 rounded-lg dark:bg-slate-700"
                >
                  {fecha}
                </li>
              ))}
            </ul>
            <button className="inline-flex items-center mt-3 px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-secondarydark dark:hover:bg-secondary ">
              Precios desde {crucero.precio}
              <FaLongArrowAltRight className="text-lg ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cruceros_destacados;
