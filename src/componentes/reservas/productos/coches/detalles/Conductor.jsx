import React, { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaPlane } from "react-icons/fa6";

function Conductor({ coche, conductor,setConductor }) {

  const handleChange = (e) => {
    const { id, value } = e.target;
    setConductor((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
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
        <form>
          <div className="grid grid-cols-2 gap-2 border-y-2 border-slate-100 dark:border-slate-700 p-3 mb-2">
            <div className="relative">
              <select
                id="titulo"
                value={conductor.titulo}
                onChange={handleChange}
                className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full"
              >
                <option value="">Titulo</option>
                <option value="Sr">Sr</option>
                <option value="Sra">Sra</option>
                <option value="Sin especificar">Sin especificar</option>
              </select>
              <div className="absolute top-0 pointer-events-none bg-slate-700 dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                <IoPersonSharp />
              </div>
            </div>
            <div className="relative">
              <input
                id="numVuelo"
                placeholder="N vuelo"
                value={conductor.numVuelo}
                onChange={handleChange}
                className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full"
              />
              <div className="absolute top-0 pointer-events-none bg-slate-700 dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                <FaPlane />
              </div>
            </div>
            <div className="relative">
              <input
                id="nombre"
                placeholder="Nombre"
                value={conductor.nombre}
                onChange={handleChange}
                className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full"
              />
              <div className="absolute top-0 pointer-events-none bg-slate-700 dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xs uppercase font-bold">
                No
              </div>
            </div>
            <div className="relative">
              <input
                id="apellido"
                placeholder="Apellido/s"
                value={conductor.apellido}
                onChange={handleChange}
                className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full"
              />
              <div className="absolute top-0 pointer-events-none bg-slate-700 dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xs uppercase font-bold">
                Ap
              </div>
            </div>
          </div>
          <div className="col-span-2 flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
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
