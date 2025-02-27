import { useState } from "react";
import PrecioRange from "../../../../inputs/PrecioRange";
import Dias from "../../../../inputs/SelectorDias";
import Viajeros from "./Viajeros";
import Regimenes from "./Regimenes";
import Categoria from "./Categoria";
import Inspiracion from "./Inspiracion";
import Ciudades from "./Ciudades";
import Paises from "./Paises";
import Proveedores from "./Proveedores";
import { IoMdOptions } from "react-icons/io";

function Aside() {
  const [values, setValues] = useState([0, 500]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [duracion, setDuracion] = useState("");

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="lg:hidden relative border-2 border-gray-200 dark:tw-border-slate-600 rounded-xl p-3 text-slate-700 bg-white dark:bg-slate-800 dark:tw-text-slate-500 shadow-xl"
      >
        <IoMdOptions className="text-xl" />
      </button>
      <div className="hidden lg:block">
        <SidebarContent values={values} setValues={setValues} />
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-white w-full dark:bg-slate-800 h-full lg:h-auto lg:max-w-md rounded-lg shadow-lg overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 text-xl right-4 text-white hover:text-gray-700"
            >
              ×
            </button>
            <SidebarContent
              values={values}
              setValues={setValues}
              duracion={duracion}
              setDuracion={setDuracion}
            />
          </div>
        </div>
      )}
    </>
  );
}

function SidebarContent({ values, setValues, duracion, setDuracion }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 bg-primary  lg:bg-inherit p-5 lg:p-3 border-b-2 dark:tw-border-slate-600">
        <h3 className="font-semibold text-white lg:tw-text-secondary text-xl ">
          Filtrado
        </h3>
      </div>
      <div className="p-6 lg:p-3 lg:pt-1">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:tw-text-slate-400"
          >
            Nombre de programa
          </label>
          <input
            type="text"
            id="first_name"
            className="border bg-white dark:bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 w-full"
            required
          />
        </div>
        <div className="mx-3 mt-5 dark:tw-text-secondary">
          <PrecioRange values={values} setValues={setValues} />
        </div>
        <div className="mt-5 dark:tw-text-secondary">
          <span className="text-sm font-semibold block mb-1">Duración</span>
          <Dias duracion={duracion} setDuracion={setDuracion} />
        </div>
        <div className="mt-5 dark:tw-text-secondary">
          <span className="text-sm font-semibold block mb-1">
            Régimen de alimentación
          </span>
          <Regimenes />
        </div>
        <div className="mt-5 dark:tw-text-secondary">
          <span className="text-sm font-semibold block mb-1">Viajeros</span>
          <Viajeros />
        </div>
        <div className="mt-5 dark:tw-text-secondary">
          <span className="text-sm font-semibold block mb-1">Categorias</span>
          <Categoria />
        </div>
        <div className="mt-5 dark:tw-text-secondary">
          <span className="text-sm font-semibold block mb-1">Isnpiración</span>
          <Inspiracion />
        </div>
        <div className="mt-5 dark:tw-text-secondary">
          <span className="text-sm font-semibold block mb-1">Proveedores</span>
          <Proveedores />
        </div>
        <div className="mt-5 dark:tw-text-secondary">
          <span className="text-sm font-semibold block mb-1">Ciudades</span>
          <Ciudades />
        </div>
        <div className="mt-5 dark:tw-text-secondary">
          <span className="text-sm font-semibold block mb-1">Paises</span>
          <Paises />
        </div>
      </div>
    </div>
  );
}

export default Aside;
