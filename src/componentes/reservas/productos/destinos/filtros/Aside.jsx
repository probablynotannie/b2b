import { useState } from "react";
import PrecioRange from "../../../../inputs/PrecioRange";
import Viajeros from "./Viajeros";
import Regimenes from "./Regimenes";
import Categoria from "./Categoria";
import Inspiracion from "./Inspiracion";
import Ciudades from "./Ciudades";
import Paises from "./Paises";
import Proveedores from "./Proveedores";
import { IoMdOptions } from "react-icons/io";

function Aside({ values, setValues, minMax }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [duracion, setDuracion] = useState("");

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="lg:tw-hidden tw-relative tw-border-2 tw-border-gray-200 dark:tw-border-slate-600 tw-rounded-xl tw-p-3 tw-text-slate-700 tw-bg-white dark:tw-bg-slate-800 dark:tw-text-slate-500 tw-shadow-xl"
      >
        <IoMdOptions className="tw-text-xl" />
      </button>
      <div className="tw-hidden lg:tw-block">
        <SidebarContent
          values={values}
          setValues={setValues}
          minMax={minMax}
          duracion={duracion}
          setDuracion={setDuracion}
        />
      </div>
      {isModalOpen && (
        <div
          className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="tw-relative tw-bg-white tw-w-full dark:tw-bg-slate-800 tw-h-full lg:tw-h-auto lg:tw-max-w-md tw-rounded-lg tw-shadow-lg tw-overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="tw-absolute tw-top-4 tw-text-xl tw-right-4 tw-text-white hover:tw-text-gray-700"
            >
              ×
            </button>
            <SidebarContent
              values={values}
              setValues={setValues}
              minMax={minMax}
              duracion={duracion}
              setDuracion={setDuracion}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      )}
    </>
  );
}

function SidebarContent({
  values,
  setValues,
  duracion,
  setDuracion,
  minMax,
  setIsModalOpen,
}) {
  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 bg-primary lg:tw-bg-inherit tw-p-5 lg:tw-p-3 tw-border-b-2 dark:tw-border-slate-600">
        <h3 className="tw-font-semibold tw-text-white lg:tw-text-secondary tw-text-xl">
          Filtrado
        </h3>
      </div>
      <div className="tw-p-6 lg:tw-p-3 lg:tw-pt-1">
        <div>
          <label
            htmlFor="first_name"
            className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-slate-400"
          >
            Nombre de programa
          </label>
          <input
            type="text"
            id="first_name"
            className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full"
            required
          />
        </div>
        <div className="tw-mx-3 tw-mt-5 dark:tw-text-secondary">
          <PrecioRange values={values} setValues={setValues} minMax={minMax} />
        </div>
        <div className="tw-mt-5 dark:tw-text-secondary">
          <span className="tw-text-sm tw-font-semibold tw-block tw-mb-1">
            Régimen de alimentación
          </span>
          <Regimenes />
        </div>
        <div className="tw-mt-5 dark:tw-text-secondary">
          <span className="tw-text-sm tw-font-semibold tw-block tw-mb-1">
            Viajeros
          </span>
          <Viajeros />
        </div>
        <div className="tw-mt-5 dark:tw-text-secondary">
          <span className="tw-text-sm tw-font-semibold tw-block tw-mb-1">
            Categorias
          </span>
          <Categoria />
        </div>
        <div className="tw-mt-5 dark:tw-text-secondary">
          <span className="tw-text-sm tw-font-semibold tw-block tw-mb-1">
            Isnpiración
          </span>
          <Inspiracion />
        </div>
        <div className="tw-mt-5 dark:tw-text-secondary">
          <span className="tw-text-sm tw-font-semibold tw-block tw-mb-1">
            Proveedores
          </span>
          <Proveedores />
        </div>
        <div className="tw-mt-5 dark:tw-text-secondary">
          <span className="tw-text-sm tw-font-semibold tw-block tw-mb-1">
            Ciudades
          </span>
          <Ciudades />
        </div>
        <div className="tw-mt-5 dark:tw-text-secondary">
          <span className="tw-text-sm tw-font-semibold tw-block tw-mb-1">
            Paises
          </span>
          <Paises />
        </div>
        <div className="tw-my-5 tw-flex tw-border-y-2 tw-border-slate-100 dark:tw-border-slate-700 tw-justify-center tw-items-center tw-py-10">
          <button className="tw-mt-10" onClick={() => setIsModalOpen(false)}>
            <div className="tw-border-2 tw-text-slate-300 tw-border-slate-300 dark:tw-border-secondaryDark dark:tw-text-secondary tw-w-[50px] tw-h-[50px] tw-text-2xl tw-rounded-full tw-flex tw-justify-center tw-items-center">
              X
            </div>
            <span className="tw-text-slate-400 dark:tw-text-secondary">
              Cerrar
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Aside;
