import { useState } from "react";

import { IoMdOptions } from "react-icons/io";

function Aside() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="lg:hidden w-full flex gap-2 relative border-2 border-gray-200 dark:border-slate-600 rounded-xl p-3 text-slate-700 bg-white dark:bg-slate-800 dark:text-slate-500 shadow-xl"
      >
        <IoMdOptions className="text-xl" /> Filtro vuelos
      </button>
      <div className="hidden lg:block">
        <SidebarContent />
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
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}

function SidebarContent() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4 bg-primary  lg:bg-inherit p-5 lg:p-3 border-b-2 dark:border-slate-600">
        <h3 className="font-semibold text-white lg:text-secondary text-xl ">
          Filtrado
        </h3>
      </div>
      <div className="p-6 lg:p-3 lg:pt-1">
        <span className="font-semibold dark:text-white">Número de escalas</span>
        <div className="flex items-center mb-4">
          <input
            id="sin_escalas"
            type="checkbox"
            value=""
            className="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded focus:ring-secondary dark:focus:ring-secondary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="sin_escalas"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Directo
          </label>
        </div>
      </div>
    </div>
  );
}

export default Aside;
