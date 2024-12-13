import { useState } from "react";
import PrecioRange from "../../../../inputs/PrecioRange";
import { IoMdOptions } from "react-icons/io";

function Aside() {
  const [values, setValues] = useState([0, 500]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="lg:hidden relative border-2 border-gray-200 dark:border-slate-600 rounded-xl p-3 text-slate-700 bg-white dark:bg-slate-800 dark:text-slate-500 shadow-xl"
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
            <SidebarContent values={values} setValues={setValues} />
          </div>
        </div>
      )}
    </>
  );
}

function SidebarContent({ values, setValues }) {
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

        <div className="mx-3 mt-5">
          <PrecioRange values={values} setValues={setValues} />
        </div>
      </div>
    </div>
  );
}

export default Aside;
