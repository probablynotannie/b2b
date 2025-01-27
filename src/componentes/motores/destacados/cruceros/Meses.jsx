import React from "react";

function Meses() {
  return (
    <section className="flex justify-center items-center dark:text-white flex-col border-y-2 py-5 border-slate-100 dark:border-slate-700">
      <h2 className="font-bold text-xl mb-5 text-center text-gray-800 dark:text-slate-100">
        Buscar por meses
      </h2>
      <div className="grid grid-cols-3 gap-0.5 md:w-1/3">
        <div className="border bg-blue-100 dark:bg-blue-800 border-blue-300 dark:border-blue-600 dark:text-white min-h-[8vh] flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-blue-200 dark:hover:bg-blue-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Enero
        </div>
        <div className="border bg-pink-100 dark:bg-pink-700 border-pink-300 dark:border-pink-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-pink-200 dark:hover:bg-pink-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Febrero
        </div>
        <div className="border bg-orange-100 dark:bg-orange-700 border-orange-300 dark:border-orange-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-orange-200 dark:hover:bg-orange-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Marzo
        </div>
        <div className="border bg-emerald-100 dark:bg-emerald-700 border-emerald-300 dark:border-emerald-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-emerald-200 dark:hover:bg-emerald-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Abril
        </div>
        <div className="border bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Mayo
        </div>
        <div className="border bg-red-100 dark:bg-red-700 border-red-300 dark:border-red-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-red-200 dark:hover:bg-red-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Junio
        </div>
        <div className="border bg-purple-100 dark:bg-purple-700 border-purple-300 dark:border-purple-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-purple-200 dark:hover:bg-purple-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Julio
        </div>
        <div className="border bg-cyan-100 dark:bg-cyan-700 border-cyan-300 dark:border-cyan-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-cyan-200 dark:hover:bg-cyan-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Agosto
        </div>
        <div className="border bg-amber-100 dark:bg-amber-700 border-amber-300 dark:border-amber-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-amber-200 dark:hover:bg-amber-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Septiembre
        </div>
        <div className="border bg-teal-100 dark:bg-teal-700 border-teal-300 dark:border-teal-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-teal-200 dark:hover:bg-teal-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Octubre
        </div>
        <div className="border bg-violet-100 dark:bg-violet-700 border-violet-300 dark:border-violet-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-violet-200 dark:hover:bg-violet-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Noviembre
        </div>
        <div className="border bg-green-100 dark:bg-green-700 border-green-300 dark:border-green-500 min-h-[8vh] dark:text-white flex items-center justify-center text-lg font-semibold text-gray-700 rounded-lg shadow-md hover:bg-green-200 dark:hover:bg-green-900 transition duration-300 cursor-pointer transform hover:scale-105">
          Diciembre
        </div>
      </div>
    </section>
  );
}

export default Meses;
