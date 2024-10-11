import Input_Buscador from "../inputs/Buscador";
import Input_Mes from "../inputs/Mes";
import Input_DateRange2 from "../inputs/DateRange2";
import Buscador from "../inputs/Buscador";
function Hoteles2() {
  return (
    <div className="min-h-[80vh]">
      <div className="relative col-span-4 h-[20vh] bg-[url(../../banner_hoteles.jpg)] bg-cover bg-center border-b-2 border--secondary">
        <div className="bg-indigo-800 w-full h-full bg-opacity-35"></div>
        <div className="absolute -bottom-16 left-96 bg-primary bg-opacity-70 text-white w-2/3 h-fit px-10 py-2 rounded-lg shadow-xl">
          <form>
            <h2 className="text-3xl font-bold ">Buscador de hoteles</h2>
            <div className="grid grid-cols-7 gap-5 mt-2 relative">
              <div>
                <Buscador />
              </div>
              <div className="relative">
                <div className="absolute top-4 left-4 flex items-center  pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  id="datepicker-range-start"
                  name="start"
                  type="date"
                  className=" p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date start"
                />
              </div>

              <div className="relative">
                <div className="absolute top-4 left-4  flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  id="datepicker-range-end"
                  name="end"
                  type="date"
                  className=" p-3 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date end"
                />
              </div>
              <div>
                <select
                  id="small"
                  className="block w-full p-3 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Habitacion/es</option>
                  <option value="US">1</option>
                </select>
              </div>
              <div>
                <select
                  id="small"
                  className="block w-full p-3 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Adulto/s</option>
                  <option value="US">1</option>
                </select>
              </div>
              <div>
                <select
                  id="small"
                  className="block w-full p-3 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Niños</option>
                  <option value="1">1</option>
                </select>
              </div>
              <div>
                <button className="bg--secondary rounded-lg p-3 font-bold w-full">
                  Buscar
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-24 mx-24 border-t-2 border-slate-100 pt-5">
          <div className="grid grid-cols-6 gap-5">
            <div className="mt-2">
              <Input_Buscador />
            </div>
            <div className="mt-2">
              <Input_Mes />
            </div>
            <div className="mt-2">
              <Input_DateRange2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hoteles2;
