import { useState } from "react";
import PrecioRange from "../../../../inputs/PrecioRange";
import Estrellas from "./Filtro_Estrellas";
import Regimenes from "./Filtro_Regimenes";
import Localidades from "./Filtro_Localidades";
import { IoMdOptions } from "react-icons/io";
import { MdCancel } from "react-icons/md";

function Aside({ values, setValues, minMax, setMinMax }) {
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
        className="tw-relative tw-p-3 tw-bg-white tw-border-2 tw-border-gray-200 tw-shadow-xl lg:tw-hidden dark:tw-border-slate-600 tw-rounded-xl tw-text-slate-700 dark:tw-bg-slate-800 dark:tw-text-slate-500"
      >
        <IoMdOptions className="tw-text-xl" />
        {getActiveFiltersCount() > 0 && (
          <span className="tw-absolute tw-p-2 tw-text-xs tw-font-bold tw-text-white tw-border tw-rounded-full tw-bg-secondary -tw-top-7">
            {`(${getActiveFiltersCount()})`}
          </span>
        )}
      </button>
      <div className="tw-hidden lg:tw-block">
        <SidebarContent
          reembolsable={reembolsable}
          setReembolsable={setReembolsable}
          localidades={localidades}
          values={values}
          setValues={setValues}
          minMax={minMax}
          setMinMax={setMinMax}
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
          className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="tw-relative tw-w-full tw-h-full tw-overflow-y-auto tw-bg-white tw-rounded-lg tw-shadow-lg dark:tw-bg-slate-800 lg:tw-h-auto lg:tw-max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="tw-absolute tw-text-xl tw-text-white tw-top-4 tw-right-4 hover:tw-text-gray-700"
            >
              ×
            </button>
            <SidebarContent
              reembolsable={reembolsable}
              setReembolsable={setReembolsable}
              localidades={localidades}
              values={values}
              setValues={setValues}
              minMax={minMax}
              setMinMax={setMinMax}
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
  minMax,
  setMinMax,
  setSelectedStars,
  selectedRegimenes,
  setRegimenes,
  setIsModalOpen,
}) {
  return (
    <div>
      <div className="tw-flex tw-items-center tw-justify-between tw-p-5 tw-mb-4 tw-border-b-2 tw-bg-slate-800 lg:tw-bg-inherit lg:tw-p-3 dark:tw-border-slate-600">
        <h3 className="tw-text-xl tw-font-semibold tw-text-white lg:tw-text-secondary">
          Filtrado
        </h3>
      </div>
      <div className="tw-p-6 lg:tw-p-3 lg:tw-pt-1">
        <div>
          <label
            htmlFor="first_name"
            className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-slate-400"
          >
            Nombre de hotel
          </label>
          <input
            type="text"
            id="first_name"
            className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full"
            required
          />
        </div>
        <div className="tw-flex tw-mt-3">
          <label className="tw-inline-flex tw-items-center tw-justify-between tw-w-full">
            <span className="tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-secondaryDark">
              Reembolsable
            </span>
            <input
              type="checkbox"
              checked={reembolsable}
              onChange={() => setReembolsable(!reembolsable)}
              className="tw-sr-only tw-peer"
            />
            <div className="tw-relative tw-w-11 tw-h-6 tw-bg-gray-200 dark:tw-bg-slate-700 tw-peer-focus:tw-outline-none tw-peer-focus:tw-ring-4 tw-peer-focus:tw-ring-blue-300 tw-rounded-full tw-peer tw-peer-checked:after:tw-translate-x-full rtl:tw-peer-checked:after:-tw-translate-x-full tw-peer-checked:after:tw-border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-start-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all dark:tw-border-gray-600 tw-peer-checked:bg-secondary"></div>
          </label>
        </div>
        <div className="tw-mx-3 tw-mt-5">
          <PrecioRange
            minMax={minMax}
            setMinMax={setMinMax}
            values={values}
            setValues={setValues}
          />
        </div>
        <div className="tw-mt-5">
          <span className="tw-text-sm tw-font-semibold dark:tw-text-secondaryDark">
            Categoría de Hotel
          </span>
          <div className="tw-mt-2">
            <Estrellas
              onChange={(selectedStars) => setSelectedStars(selectedStars)}
            />
          </div>
        </div>
        <div className="tw-mt-5">
          <span className="tw-text-sm tw-font-semibold dark:tw-text-secondaryDark">
            Régimen
          </span>
          <div className="tw-mt-2">
            <Regimenes selected={selectedRegimenes} onChange={setRegimenes} />
          </div>
        </div>
        <div className="tw-mt-5">
          <span className="tw-text-sm tw-font-semibold dark:tw-text-secondaryDark">
            Localidades
          </span>
          <div className="tw-mt-2">
            <Localidades selected={localidades} onChange={setLocalidades} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;
