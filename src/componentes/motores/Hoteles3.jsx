import { Link } from "react-router-dom";

function Hoteles2() {
  const destacados = [
    {
      imagen: "../../hotel1.jpg",
      incluidos: ["desayuno", "comida", "cena"],
      precio: 249,
      nombre: "Hotel grand fallo",
      descripcion: "Zaragoza",
    },
    {
      imagen: "../../hotel2.jpg",
      incluidos: [],
      precio: 249,
      nombre: "Hotel grand fallo",
      descripcion: "Cantabria",
    },
    {
      imagen: "../../hotel3.jpg",
      incluidos: [],
      precio: 249,
      nombre: "Hotel grand fallo",
      descripcion: "Zumarraga",
    },
    {
      imagen: "../../hotel4.jpg",
      incluidos: [],
      precio: 249,
      nombre: "Hotel grand fallo",
      descripcion: "Barcelona",
    },
    {
      imagen: "../../hotel1.jpg",
      incluidos: ["desayuno", "comida", "cena"],
      precio: 249,
      nombre: "Hotel grand fallo",
      descripcion: "Zaragoza",
    },
  ];
  return (
    <div className="min-h-[77vh]">
      <div className="relative col-span-4 h-[35vh] bg-[url(../../banner_hoteles.jpg)] bg-cover bg-center">
        <div className="bg-indigo-800 w-full h-full bg-opacity-35"></div>
        <div className="absolute -bottom-28 left-96 bg-CajaForms bg-opacity-75 text-white w-1/3 h-fit px-10 py-5 rounded-lg shadow-xl">
          <form>
            <h2 className="text-3xl font-bold ">Buscador de hoteles</h2>
            <div className="grid grid-cols-3 mt-2 relative">
              <div className="col-span-3">
                <label
                  htmlFor="search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Buscar
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Introduce tu destino"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-5 mt-3">
              <div className="relative col-span-2">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                  className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date start"
                />
              </div>
              <span className="mx-4 text-white text-center">a</span>
              <div className="relative col-span-2">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
                  className="bg-slate-200 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date end"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div>
                <select
                  id="small"
                  className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Habitacion/es</option>
                  <option value="US">1</option>
                </select>
              </div>
              <div>
                <select
                  id="small"
                  className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Adulto/s</option>
                  <option value="US">1</option>
                </select>
              </div>
              <div>
                <select
                  id="small"
                  className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Niños</option>
                  <option value="1">1</option>
                </select>
              </div>
            </div>
            <div className="absolute -bottom-5 right-5">
              <button className="bg-slate-900 border-2 border-white border-opacity-20 rounded-lg p-3 px-16 font-bold w-full">
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-36 pb-20 border-t-2 border-slate-100 pt-5 mx-32">
        <h2 className="font-semibold text-xl mb-3">Alguno de los destacados</h2>

        <div className=" grid grid-cols-5 gap-10">
          {destacados.map((hotel, index) => (
            <div key={index} className="  rounded-lg border-2">
              <div className="relative">
                <img
                  src={hotel.imagen}
                  className=" w-full h-56 object-cover rounded-t-lg"
                />
                <div className="absolute top-0 bg--secondary bg-opacity-20 w-full h-full"></div>
              </div>
              <div className="px-2 text-sm mt-3 mb-3">
                <h3 className="font-semibold"> {hotel.nombre} </h3>
                <span className="text-slate-400">{hotel.descripcion}</span>
                <span className="block">
                  <span className="font-semibold"> {hotel.precio}€ </span>/
                  noche
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hoteles2;
