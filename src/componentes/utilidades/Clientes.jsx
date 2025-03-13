import Sidebar from "./sidebar/Sidebar";
import { FaSearch } from "react-icons/fa";

function Clientes() {
  return (
    <div className="tw-grid tw-grid-cols-7 tw-gap-10 md:tw-px-20 lg:tw-min-h-[78vh] tw-min-h-[90vh] md:tw-py-10">
      <Sidebar />
      <div className="tw-relative tw-p-5 tw-col-span-7 lg:tw-col-span-5 xl:tw-col-span-6 tw-min-h-[68vh] md:tw-rounded-lg md:tw-shadow-lg tw-bg-slate-200">
        <h2 className="tw-text-2xl tw-font-semibold">Listado de clientes</h2>
        <span>Cartera clientes de agencia</span>
        <div className="tw-space-x-3 tw-border-t-2 tw-border-secondary tw-pt-5 tw-mt-3">
          <button className="tw-p-3 tw-px-5 tw-bg-primary tw-text-white tw-rounded-lg tw-shadow-xl">
            Excel
          </button>
          <button className="tw-p-3 tw-px-5 tw-bg-primary tw-text-white tw-rounded-lg tw-shadow-xl">
            Nuevo
          </button>
          <button className="tw-p-3 tw-px-5 tw-bg-primary tw-text-white tw-rounded-lg tw-shadow-xl">
            Editar
          </button>
        </div>
        <div className="tw-mt-5">
          <div>
            <label
              htmlFor="default-search"
              className="tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 tw-sr-only dark:tw-text-white"
            >
              Search
            </label>
            <div className="tw-relative">
              <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-lg">
                <FaSearch />
              </div>
              <input
                type="search"
                id="default-search"
                className="tw-block tw-w-full tw-p-2.5 tw-ps-10 tw-text-sm tw-text-gray-900 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-gray-50 focus:tw-ring-blue-500 focus:tw-border-blue-500 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500"
                placeholder="Buscador de ..."
                required
              />
              <button
                type="submit"
                className="tw-text-white tw-absolute tw-end-0 tw-bottom-0 tw-bg-primary tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 tw-h-full"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clientes;
