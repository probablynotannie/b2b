import { useState } from "react";
import PrecioRange from "../../../../inputs/PrecioRange";
import { IoMdOptions } from "react-icons/io";
import Proveedores from "./Proveedores";
import TiposCoches from "./TiposCoches";
function Aside({ values, setValues, minMax }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [tipos, setTipos] = useState([]);
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="lg:tw-hidden tw-relative tw-border-2 tw-border-slate-200 dark:tw-border-slate-600 tw-rounded-xl tw-p-3 tw-text-slate-700 tw-bg-white dark:tw-bg-slate-800 dark:tw-text-slate-500 tw-shadow-xl"
      >
        <IoMdOptions className="tw-text-xl" />
      </button>
      <div className="tw-hidden lg:tw-block">
        <SidebarContent
          values={values}
          setValues={setValues}
          minMax={minMax}
          categoriasSeleccionadas={categoriasSeleccionadas}
          setCategoriasSeleccionadas={setCategoriasSeleccionadas}
          tipos={tipos}
          setTipos={setTipos}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      {isModalOpen && (
        <div
          className="tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black  tw-bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="tw-relative tw-bg-white tw-w-full dark:tw-bg-slate-800 tw-h-full lg:tw-h-auto lg:tw-max-w-md tw-rounded-lg tw-shadow-lg tw-overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="tw-absolute tw-top-4 tw-text-xl tw-right-4 tw-text-white hover:tw-text-slate-700"
            >
              ×
            </button>
            <SidebarContent
              values={values}
              setValues={setValues}
              minMax={minMax}
              categoriasSeleccionadas={categoriasSeleccionadas}
              setCategoriasSeleccionadas={setCategoriasSeleccionadas}
              tipos={tipos}
              setTipos={setTipos}
              isModalOpen={setIsModalOpen}
            />
            <div className="tw-my-5 tw-flex tw-border-y-2 tw-border-slate-100 dark:tw-border-slate-700 tw-justify-center tw-items-center tw-py-10">
              <button
                className="tw-mt-10"
                onClick={() => setIsModalOpen(false)}
              >
                <div className="tw-border-2 tw-text-slate-300 tw-border-slate-300 dark:tw-border-secondaryDark dark:tw-text-secondaryDark tw-w-[50px] tw-h-[50px] tw-text-2xl tw-rounded-full tw-flex tw-justify-center tw-items-center">
                  X
                </div>
                <span className="tw-text-slate-400 dark:tw-text-secondaryDark">
                  Cerrar
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SidebarContent({
  values,
  setValues,
  minMax,
  categoriasSeleccionadas,
  setCategoriasSeleccionadas,
  tipos,
  setTipos,
}) {
  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-slate-900 lg:tw-bg-inherit tw-p-5 lg:tw-p-3 tw-border-b-2 dark:tw-border-slate-700">
        <h3 className="tw-font-semibold tw-text-white lg:tw-text-secondary tw-text-xl">
          Filtrado
        </h3>
      </div>
      <div className="tw-p-6 lg:tw-p-3 lg:tw-pt-1">
        <div className="tw-mx-3 tw-mt-5">
          <PrecioRange values={values} setValues={setValues} minMax={minMax} />
        </div>
        <div className="tw-mx-3 tw-mt-5">
          <span className="tw-text-sm tw-font-bold tw-text-slate-900 dark:tw-text-secondaryDark">
            Proveedores
          </span>
          <Proveedores
            categoriasSeleccionadas={categoriasSeleccionadas}
            setCategoriasSeleccionadas={setCategoriasSeleccionadas}
          />
        </div>
        <div className="tw-mx-3 tw-mt-5">
          <span className="tw-text-sm tw-font-bold tw-text-slate-900 dark:tw-text-secondaryDark">
            Tipo coches
          </span>
          <TiposCoches tipos={tipos} setTipos={setTipos} />
        </div>
      </div>
    </div>
  );
}

export default Aside;
