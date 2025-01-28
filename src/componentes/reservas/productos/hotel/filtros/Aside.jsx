import { useState } from "react";
import PrecioRange from "../../../../inputs/PrecioRange";
import Estrellas from "./Filtro_Estrellas";
import Regimenes from "./Filtro_Regimenes";
import Localidades from "./Filtro_Localidades";
import { IoMdOptions } from "react-icons/io";
import { MdCancel } from "react-icons/md";

function Aside() {
  const [values, setValues] = useState([0, 500]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reembolsable, setReembolsable] = useState(false);
  const [localidades, setLocalidades] = useState([]);
  const [selectedStars, setSelectedStars] = useState([]);
  const [selectedRegimenes, setRegimenes] = useState([]);

  const getActiveFiltersCount = () => {
    let count = 0;
    if (reembolsable) count += 1;
    if (localidades.length > 0) count += 1;
    if (selectedStars.length > 0) count += 1;
    if (selectedRegimenes.length > 0) count += 1;
    return count;
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="lg:hidden relative border-2 border-gray-200 dark:border-slate-600 rounded-xl p-3 text-slate-700 bg-white dark:bg-slate-800 dark:text-slate-500 shadow-xl"
      >
        <IoMdOptions className="text-xl" />
        {getActiveFiltersCount() > 0 && (
          <span className="absolute rounded-full tw-bg-secondary text-xs text-white font-bold p-2 -top-7 border">
            {`(${getActiveFiltersCount()})`}
          </span>
        )}
      </button>
      <div className="hidden lg:block">
        <SidebarContent
          reembolsable={reembolsable}
          setReembolsable={setReembolsable}
          localidades={localidades}
          values={values}
          setValues={setValues}
          setLocalidades={setLocalidades}
          selectedStars={selectedStars}
          setSelectedStars={setSelectedStars}
          selectedRegimenes={selectedRegimenes}
          setRegimenes={setRegimenes}
          setIsModalOpen={setIsModalOpen}
        />
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
              reembolsable={reembolsable}
              setReembolsable={setReembolsable}
              localidades={localidades}
              values={values}
              setValues={setValues}
              setLocalidades={setLocalidades}
              selectedStars={selectedStars}
              setSelectedStars={setSelectedStars}
              selectedRegimenes={selectedRegimenes}
              setRegimenes={setRegimenes}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      )}
    </>
  );
}

function SidebarContent({
  reembolsable,
  setReembolsable,
  localidades,
  setLocalidades,
  values,
  setValues,
  setSelectedStars,
  selectedRegimenes,
  setRegimenes,
  setIsModalOpen,
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 bg-primary  lg:bg-inherit p-5 lg:p-3 border-b-2 dark:border-slate-600">
        <h3 className="font-semibold text-white lg:text-secondary text-xl ">
          Filtrado
        </h3>
      </div>
      <div className="p-6 lg:p-3 lg:pt-1">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-400"
          >
            Nombre de hotel
          </label>
          <input
            type="text"
            id="first_name"
            className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 w-full"
            required
          />
        </div>
        <div className="mt-3 flex">
          <label className="inline-flex justify-between w-full items-center">
            <span className="text-sm font-medium text-gray-900 dark:tw-text-secondary">
              Reembolsable
            </span>
            <input
              type="checkbox"
              checked={reembolsable}
              onChange={() => setReembolsable(!reembolsable)}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 dark:bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:tw-bg-secondary"></div>
          </label>
        </div>
        <div className="mx-3 mt-5">
          <PrecioRange values={values} setValues={setValues} />
        </div>
        <div className="mt-5">
          <span className="text-sm font-semibold dark:tw-text-secondary">
            Categoría de Hotel
          </span>
          <div className="mt-2">
            <Estrellas
              onChange={(selectedStars) => setSelectedStars(selectedStars)}
            />
          </div>
        </div>
        <div className="mt-5">
          <span className="text-sm font-semibold dark:tw-text-secondary">
            Régimen
          </span>
          <div className="mt-2">
            <Regimenes selected={selectedRegimenes} onChange={setRegimenes} />
          </div>
        </div>
        <div className="mt-5">
          <span className="text-sm font-semibold dark:tw-text-secondary">
            Localidades
          </span>
          <div className="mt-2">
            <Localidades selected={localidades} onChange={setLocalidades} />
          </div>
        </div>
        <div className="my-5 flex md:hidden border-y-2 border-slate-100 dark:border-slate-700 justify-center items-center py-10">
          <button className=" mt-10 " onClick={() => setIsModalOpen(false)}>
            <div className="border-2 text-slate-300 border-slate-300 dark:border-secondaryDark dark:tw-text-secondary w-[50px] h-[50px] text-2xl rounded-full flex justify-center items-center">
              X
            </div>
            <span className="text-slate-400 dark:tw-text-secondary">Cerrar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aside;
