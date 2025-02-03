import { FaLongArrowAltRight } from "react-icons/fa";

function Cruceros_destacados({ cruceros }) {
  return (
    <div className="tw-mb-6">
      <div className="tw-grid tw-gap-3 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-3">
        {cruceros.map((crucero, index) => (
          <div
            key={index}
            className="tw-w-full tw-p-6 tw-bg-white tw-border tw-border-slate-200 tw-rounded-lg tw-shadow-sm hover:tw-shadow-lg tw-transition tw-duration-300 dark:tw-bg-slate-800 dark:tw-border-slate-700"
          >
            <a href="#">
              <h5 className="tw-mb-2 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-slate-900 dark:tw-text-white">
                {crucero.descripcion}
              </h5>
            </a>
            <p className="tw-mb-3 tw-font-normal tw-text-slate-700 dark:tw-text-slate-400">
              {crucero.titulo}
            </p>
            <span className="tw-font-semibold tw-text-slate-700 dark:tw-text-slate-300">
              Salidas
            </span>
            <ul className="tw-flex tw-flex-wrap tw-gap-3 tw-text-slate-700 dark:tw-text-slate-300 tw-text-sm tw-my-2">
              {crucero.salidas.map((fecha, index) => (
                <li
                  key={index}
                  className="tw-px-3 tw-py-1 tw-bg-slate-200 tw-rounded-lg dark:tw-bg-slate-700"
                >
                  {fecha}
                </li>
              ))}
            </ul>
            <button className="tw-inline-flex tw-items-center tw-mt-3 tw-px-3 tw-py-2 tw-text-sm tw-font-medium tw-text-center tw-text-white tw-bg-secondary tw-rounded-lg hover:tw-bg-secondary focus:tw-ring-4 focus:tw-outline-none focus:tw-ring-blue-300 dark:tw-bg-secondarydark dark:hover:tw-bg-secondary">
              Precios desde {crucero.precio}
              <FaLongArrowAltRight className="tw-text-lg tw-ml-2" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cruceros_destacados;
