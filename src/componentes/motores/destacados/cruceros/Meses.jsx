import React from "react";

function Meses() {
  return (
    <section className="flex items-center dark:text-white flex-col py-5">
      <h2 className="font-bold text-xl mb-5 text-center text-gray-800 dark:text-slate-100">
        Buscar por meses
      </h2>
      <div className="grid grid-cols-3 gap-0.5 w-2/3">
        <div className="border bg-blue-100 dark:bg-slate-700 border-blue-300 dark:border-slate-600 dark:text-white min-h-[8vh] flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-blue-200 dark:hover:bg-blue-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Ene
        </div>
        <div className="border bg-pink-100 dark:bg-slate-700 border-pink-300 dark:border-slate-600 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-pink-200 dark:hover:bg-pink-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Feb
        </div>
        <div className="border bg-orange-100 dark:bg-slate-700 border-orange-300 dark:border-slate-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-orange-200 dark:hover:bg-orange-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Mar
        </div>
        <div className="border bg-emerald-100 dark:bg-slate-700 border-emerald-300 dark:border-slate-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-emerald-200 dark:hover:bg-emerald-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Abr
        </div>
        <div className="border bg-gray-100 dark:bg-slate-700 border-gray-300 dark:border-slate-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-900 transition duration-300 cursor-pointer transform hover:scale-105">
          May
        </div>
        <div className="border bg-red-100 dark:bg-slate-700 border-red-300 dark:border-slate-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-red-200 dark:hover:bg-red-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Jun
        </div>
        <div className="border bg-purple-100 dark:bg-slate-700 border-purple-300 dark:border-slate-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-purple-200 dark:hover:bg-purple-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Jul
        </div>
        <div className="border bg-cyan-100 dark:bg-slate-700 border-cyan-300 dark:border-slate-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-cyan-200 dark:hover:bg-cyan-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Ago
        </div>
        <div className="border bg-amber-100 dark:bg-slate-700 border-amber-300 dark:border-slate-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-amber-200 dark:hover:bg-amber-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Sep
        </div>
        <div className="border bg-teal-100 dark:bg-slate-700 border-teal-300 dark:border-slate-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-teal-200 dark:hover:bg-teal-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Oct
        </div>
        <div className="border bg-violet-100 dark:bg-slate-700 border-violet-300 dark:border-slate-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-violet-200 dark:hover:bg-violet-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Nov
        </div>
        <div className="border bg-green-100 dark:bg-slate-700 border-green-300 dark:border-slate-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-green-200 dark:hover:bg-green-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Dic
        </div>
      </div>
    </section>
  );
}

export default Meses;
