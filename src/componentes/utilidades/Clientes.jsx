import Sidebar from "./sidebar/Sidebar";
import { FaSearch } from "react-icons/fa";

function Clientes() {
  return (
    <div className="grid grid-cols-7 gap-10  md:px-20 lg:min-h-[78vh] min-h-[90vh] md:py-10">
      <Sidebar />
      <div className="relative p-5 col-span-7 lg:col-span-5 xl:col-span-6 min-h-[68vh] md:rounded-lg md:shadow-lg bg-slate-200">
        <h2 className="text-2xl font-semibold">Listado de clientes</h2>
        <span>Cartera clientes de agencia</span>
        <div className="space-x-3 border-t-2 border-secondary pt-5 mt-3">
          <button className="p-3 px-5 bg-primary text-white rounded-lg shadow-xl">
            Excel
          </button>
          <button className="p-3 px-5 bg-primary text-white rounded-lg shadow-xl">
            Nuevo
          </button>
          <button className="p-3 px-5 bg-primary text-white rounded-lg shadow-xl">
            Editar
          </button>
        </div>
        <div className="mt-5">
          <div>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute top-0 pointer-events-none tw-bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-lg">
                <FaSearch />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscador de ..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-0 bottom-0 bg-primary font-medium rounded-lg text-sm px-4  h-full"
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
