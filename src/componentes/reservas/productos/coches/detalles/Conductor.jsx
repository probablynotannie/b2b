import { IoPersonSharp } from "react-icons/io5";
import { FaPlane } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Conductor({ coche }) {
  return (
    <div>
      <h2 className="font-semibold text-lg dark:text-white">
        Detalles del conductor
      </h2>

      <div className="relative">
        <h2 className="absolute top-0 w-full h-full bg-orange-600 bg-opacity-40 rounded-lg text-white flex justify-center items-center text-4xl font-bold">
          {coche.nombre}
        </h2>
        <img
          src={coche.img}
          alt={coche.nombre}
          className="h-[30vh] w-full object-cover rounded-lg"
        />
      </div>
      <div className="mt-3">
        <form className="grid grid-cols-2 gap-2">
          <div className="relative">
            <select
              id="tituloConductor"
              className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full "
            >
              <option selected>Titulo</option>
              <option value="US">Sr</option>
              <option value="CA">Sra</option>
              <option value="N/A">Sin especificar</option>
            </select>
            <div className="absolute top-0 pointer-events-none bg-slate-700 dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
              <IoPersonSharp />
            </div>
          </div>
          <div className="relative">
            <input
              id="num_vuelo"
              placeholder="N vuelo"
              className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full "
            />
            <div className="absolute top-0 pointer-events-none bg-slate-700 dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
              <FaPlane />
            </div>
          </div>
          <div className="relative">
            <input
              id="nombre_conductor"
              placeholder="Nombre"
              className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full "
            />
            <div className="absolute top-0 pointer-events-none bg-slate-700 dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xs uppercase font-bold">
              No
            </div>
          </div>
          <div className="relative">
            <input
              id="apellido_conductor"
              placeholder="Apellido/s"
              className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full "
            />
            <div className="absolute top-0 pointer-events-none bg-slate-700 dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xs uppercase font-bold">
              Ap
            </div>
          </div>
          <div className="col-span-2 flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium dark:text-slate-400"
            >
              Acepto{" "}
              <a href="/condiciones_de_reserva" target="_blank">
                <span className="font-bold underline underline-offset-4 dark:text-slate-200">
                  Condiciones de reserva
                </span>{" "}
              </a>
              y la{" "}
              <span className="font-bold underline underline-offset-4 dark:text-slate-200">
                política de privacidad{" "}
              </span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Conductor;
