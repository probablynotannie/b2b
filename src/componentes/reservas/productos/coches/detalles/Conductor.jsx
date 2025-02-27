import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaPlane } from "react-icons/fa6";

function Conductor({ coche, conductor, setConductor }) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    setConductor((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  return (
    <div>
      <h2 className="tw-font-semibold tw-text-lg dark:tw-text-white">
        Detalles del conductor
      </h2>

      <div className="tw-relative">
        <h2 className="tw-absolute tw-top-0 tw-w-full tw-h-full tw-bg-orange-600 tw-bg-opacity-40 tw-rounded-lg tw-text-white tw-flex tw-justify-center tw-items-center tw-text-4xl tw-font-bold">
          {coche.nombre}
        </h2>
        <img
          src={coche.img}
          alt={coche.nombre}
          className="tw-h-[30vh] tw-w-full tw-object-cover tw-rounded-lg"
        />
      </div>
      <div className="tw-mt-3">
        <form>
          <div className="tw-grid tw-grid-cols-2 tw-gap-2 tw-border-y-2 tw-border-slate-100 dark:tw-border-slate-700 tw-p-3 tw-mb-2">
            <div className="tw-relative">
              <select
                id="titulo"
                value={conductor.titulo}
                onChange={handleChange}
                className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full"
              >
                <option value="">Titulo</option>
                <option value="Sr">Sr</option>
                <option value="Sra">Sra</option>
                <option value="Sin especificar">Sin especificar</option>
              </select>
              <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-slate-700 dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                <IoPersonSharp />
              </div>
            </div>
            <div className="tw-relative">
              <input
                id="numVuelo"
                placeholder="N vuelo"
                value={conductor.numVuelo}
                onChange={handleChange}
                className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full"
              />
              <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-slate-700 dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                <FaPlane />
              </div>
            </div>
            <div className="tw-relative">
              <input
                id="nombre"
                placeholder="Nombre"
                value={conductor.nombre}
                onChange={handleChange}
                className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full"
              />
              <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-slate-700 dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xs tw-uppercase tw-font-bold">
                No
              </div>
            </div>
            <div className="tw-relative">
              <input
                id="apellido"
                placeholder="Apellido/s"
                value={conductor.apellido}
                onChange={handleChange}
                className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full"
              />
              <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-slate-700 dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xs tw-uppercase tw-font-bold">
                Ap
              </div>
            </div>
          </div>
          <div className="tw-col-span-2 tw-flex tw-items-center tw-mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              className="tw-w-4 tw-h-4 tw-text-secondary tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-blue-500 dark:focus:tw-ring-blue-600 dark:tw-ring-offset-gray-800 focus:tw-ring-2 dark:tw-bg-gray-700 dark:tw-border-gray-600"
            />
            <label
              htmlFor="default-checkbox"
              className="tw-ms-2 tw-text-sm tw-font-medium dark:tw-text-slate-400"
            >
              Acepto{" "}
              <a href="/condiciones_de_reserva" target="_blank">
                <span className="tw-font-bold tw-underline tw-underline-offset-4 dark:tw-text-slate-200">
                  Condiciones de reserva
                </span>{" "}
              </a>
              y la{" "}
              <span className="tw-font-bold tw-underline tw-underline-offset-4 dark:tw-text-slate-200">
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
