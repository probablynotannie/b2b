function Meses({ titulo }) {
  return (
    <section className="tw-flex tw-items-center dark:tw-text-white tw-flex-col tw-py-5">
      {titulo !== true && (
        <h2 className="tw-font-bold tw-text-xl tw-mb-5 tw-text-gray-800 dark:tw-text-slate-100">
          Buscar por meses
        </h2>
      )}

      <div className="tw-grid tw-grid-cols-3 tw-gap-0.5 tw-w-2/3">
        <div className="tw-border tw-bg-blue-100 dark:tw-bg-slate-800 tw-border-blue-300 dark:tw-border-slate-600 dark:tw-text-white tw-min-h-[8vh] tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-semibold tw-text-gray-700 tw-rounded-lg tw-shadow-md hover:tw-bg-blue-200 dark:hover:tw-bg-blue-900 tw-transition tw-duration-300 tw-cursor-pointer tw-transform hover:tw-scale-105">
          Ene
        </div>
        <div className="tw-border tw-bg-pink-100 dark:tw-bg-slate-800 tw-border-pink-300 dark:tw-border-slate-600 tw-min-h-[8vh] dark:tw-text-white tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-semibold tw-text-gray-700 tw-rounded-lg tw-shadow-md hover:tw-bg-pink-200 dark:hover:tw-bg-pink-900 tw-transition tw-duration-300 tw-cursor-pointer tw-transform hover:tw-scale-105">
          Feb
        </div>
        <div className="tw-border tw-bg-orange-100 dark:tw-bg-slate-800 tw-border-orange-300 dark:tw-border-slate-500 tw-min-h-[8vh] dark:tw-text-white tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-semibold tw-text-gray-700 tw-rounded-lg tw-shadow-md hover:tw-bg-orange-200 dark:hover:tw-bg-orange-900 tw-transition tw-duration-300 tw-cursor-pointer tw-transform hover:tw-scale-105">
          Mar
        </div>
        <div className="tw-border tw-bg-emerald-100 dark:tw-bg-slate-800 tw-border-emerald-300 dark:tw-border-slate-500 tw-min-h-[8vh] dark:tw-text-white tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-semibold tw-text-gray-700 tw-rounded-lg tw-shadow-md hover:tw-bg-emerald-200 dark:hover:tw-bg-emerald-900 tw-transition tw-duration-300 tw-cursor-pointer tw-transform hover:tw-scale-105">
          Abr
        </div>
        <div className="tw-border tw-bg-gray-100 dark:tw-bg-slate-800 tw-border-gray-300 dark:tw-border-slate-500 tw-min-h-[8vh] dark:tw-text-white tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-semibold tw-text-gray-700 tw-rounded-lg tw-shadow-md hover:tw-bg-gray-200 dark:hover:tw-bg-gray-900 tw-transition tw-duration-300 tw-cursor-pointer tw-transform hover:tw-scale-105">
          May
        </div>
        <div className="tw-border tw-bg-red-100 dark:tw-bg-slate-800 tw-border-red-300 dark:tw-border-slate-500 tw-min-h-[8vh] dark:tw-text-white tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-semibold tw-text-gray-700 tw-rounded-lg tw-shadow-md hover:tw-bg-red-200 dark:hover:tw-bg-red-900 tw-transition tw-duration-300 tw-cursor-pointer tw-transform hover:tw-scale-105">
          Jun
        </div>
        <div className="tw-border tw-bg-purple-100 dark:tw-bg-slate-800 tw-border-purple-300 dark:tw-border-slate-500 tw-min-h-[8vh] dark:tw-text-white tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-semibold tw-text-gray-700 tw-rounded-lg tw-shadow-md hover:tw-bg-purple-200 dark:hover:tw-bg-purple-900 tw-transition tw-duration-300 tw-cursor-pointer tw-transform hover:tw-scale-105">
          Jul
        </div>
        <div className="tw-border tw-bg-cyan-100 dark:tw-bg-slate-800 tw-border-cyan-300 dark:tw-border-slate-500 tw-min-h-[8vh] dark:tw-text-white tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-semibold tw-text-gray-700 tw-rounded-lg tw-shadow-md hover:tw-bg-cyan-200 dark:hover:tw-bg-cyan-900 tw-transition tw-duration-300 tw-cursor-pointer tw-transform hover:tw-scale-105">
          Ago
        </div>
        <div className="tw-border tw-bg-amber-100 dark:tw-bg-slate-800 tw-border-amber-300 dark:tw-border-slate-500 tw-min-h-[8vh] dark:tw-text-white tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-semibold tw-text-gray-700 tw-rounded-lg tw-shadow-md hover:tw-bg-amber-200 dark:hover:tw-bg-amber-900 tw-transition tw-duration-300 tw-cursor-pointer tw-transform hover:tw-scale-105">
          Sep
        </div>
        <div className="tw-border tw-bg-teal-100 dark:tw-bg-slate-800 tw-border-teal-300 dark:tw-border-slate-500 tw-min-h-[8vh] dark:tw-text-white tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-semibold tw-text-gray-700 tw-rounded-lg tw-shadow-md hover:tw-bg-teal-200 dark:hover:tw-bg-teal-900 tw-transition tw-duration-300 tw-cursor-pointer tw-transform hover:tw-scale-105">
          Oct
        </div>
        <div className="tw-border tw-bg-violet-100 dark:tw-bg-slate-800 tw-border-violet-300 dark:tw-border-slate-500 tw-min-h-[8vh] dark:tw-text-white tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-semibold tw-text-gray-700 tw-rounded-lg tw-shadow-md hover:tw-bg-violet-200 dark:hover:tw-bg-violet-900 tw-transition tw-duration-300 tw-cursor-pointer tw-transform hover:tw-scale-105">
          Nov
        </div>
        <div className="tw-border tw-bg-green-100 dark:tw-bg-slate-800 tw-border-green-300 dark:tw-border-slate-500 tw-min-h-[8vh] dark:tw-text-white tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-semibold tw-text-gray-700 tw-rounded-lg tw-shadow-md hover:tw-bg-green-200 dark:hover:tw-bg-green-900 tw-transition tw-duration-300 tw-cursor-pointer tw-transform hover:tw-scale-105">
          Dic
        </div>
      </div>
    </section>
  );
}

export default Meses;
