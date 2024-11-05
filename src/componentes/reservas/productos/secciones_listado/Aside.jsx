import PrecioRange from "../../../inputs/PrecioRange";
import Estrellas from "./Estrellas";
import Regimenes from "./Regimenes";
import Localidades from "./Localidades";
function Aside() {
  return (
    <div className="">
      <h3 className="font-semibold text-secondary text-xl mb-2">Filtrado</h3>
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nombre de hotel
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <div className="mt-3 flex">
        <label className="inline-flex justify-between w-full items-center cursor-pointer">
          <span className=" text-sm font-medium text-gray-900 dark:text-gray-300">
            Reembolsable
          </span>
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
        </label>
      </div>
      <div className="mx-3 mt-5">
        <PrecioRange min={0} max={500} />
      </div>
      <div className="mt-5">
        <span className="text-sm font-semibold ">Categoría de Hotel</span>
        <div className="mt-2">
          <Estrellas />
        </div>
      </div>
      <div className="mt-5">
        <span className="text-sm font-semibold ">Régimen</span>
        <div className="mt-2">
          <Regimenes />
        </div>
      </div>
      <div className="mt-5">
        <span className="text-sm font-semibold ">Localidades</span>
        <div className="mt-2">
          <Localidades />
        </div>
      </div>
    </div>
  );
}

export default Aside;
