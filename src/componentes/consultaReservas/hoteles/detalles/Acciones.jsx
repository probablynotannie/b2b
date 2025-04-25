function Acciones() {
  return (
    <div className="tw-space-y-8">
      <div className="tw-bg-white dark:tw-bg-slate-800 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-border tw-border-slate-100 dark:tw-border-slate-700 tw-p-4">
        <h3 className="tw-text-lg tw-font-semibold tw-text-gray-800 dark:tw-text-slate-100 mb-4">
          Acciones
        </h3>
        <div className="tw-grid tw-grid-cols-2 tw-gap-3">
          <button className="tw-bg-slate-400 dark:tw-bg-slate-600 hover:tw-bg-indigo-700 dark:hover:tw-bg-indigo-700 tw-transition tw-rounded-lg tw-text-white tw-py-2 tw-px-4">
            Bono
          </button>
          <button className="tw-bg-slate-400 dark:tw-bg-slate-600 hover:tw-bg-indigo-700 dark:hover:tw-bg-indigo-700 tw-transition tw-rounded-lg tw-text-white tw-py-2 tw-px-4">
            ProForma
          </button>
        </div>
      </div>
      <div className="tw-bg-white dark:tw-bg-slate-800 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-border tw-border-slate-100 dark:tw-border-slate-700 tw-p-4">
        <h3 className="tw-text-lg tw-font-semibold tw-text-gray-800 dark:tw-text-slate-100 mb-4">
          Pagar con
        </h3>
        <div className="tw-grid tw-grid-cols-3 tw-gap-3">
          <button className="tw-bg-slate-400 dark:tw-bg-slate-600 hover:tw-bg-green-700 dark:hover:tw-bg-green-700 tw-transition tw-rounded-lg tw-text-white tw-py-2 tw-px-4 text-left">
            TPV <span className="tw-text-sm tw-block">(sin coste)</span>
          </button>
          <button className="tw-bg-slate-400 dark:tw-bg-slate-600 hover:tw-bg-green-700 dark:hover:tw-bg-green-700 tw-transition tw-rounded-lg tw-text-white tw-py-2 tw-px-4 text-left">
            Bizum <span className="tw-text-sm tw-block">(sin coste)</span>
          </button>
          <button className="tw-bg-slate-400 dark:tw-bg-slate-600 hover:tw-bg-green-700 dark:hover:tw-bg-green-700 tw-transition tw-rounded-lg tw-text-white tw-py-2 tw-px-4 text-left">
            transferencia
            <span className="tw-text-sm tw-block">(sin coste)</span>
          </button>
        </div>
      </div>
      <button className="tw-w-full tw-bg-red-500 hover:tw-bg-red-600 tw-transition tw-rounded-lg tw-text-white tw-py-4 tw-px-4 tw-uppercase tw-font-semibold">
        Cancelar
      </button>
    </div>
  );
}

export default Acciones;
