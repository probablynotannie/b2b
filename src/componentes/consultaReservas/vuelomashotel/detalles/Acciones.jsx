function Acciones({ estado, estadoPago }) {
  return (
    <div className="tw-space-y-8">
      <div className="tw-bg-white dark:tw-bg-slate-800 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-border tw-border-slate-100 dark:tw-border-slate-700 tw-p-4">
        <h3 className="tw-text-lg tw-font-semibold tw-text-gray-800 dark:tw-text-slate-100 mb-4">
          Acciones
        </h3>
        <div className="tw-grid tw-grid-cols-2 tw-gap-3">
          <button className="tw-bg-slate-400 dark:tw-bg-slate-600 hover:tw-bg-indigo-700 dark:hover:tw-bg-indigo-700 tw-smooth tw-rounded-lg tw-text-white tw-py-2 tw-px-4">
            Bono
          </button>
          <button className="tw-bg-slate-400 dark:tw-bg-slate-600 hover:tw-bg-indigo-700 dark:hover:tw-bg-indigo-700 tw-smooth tw-rounded-lg tw-text-white tw-py-2 tw-px-4">
            ProForma
          </button>
          {estado !== 0 && (
            <div className="tw-col-span-2 tw-flex tw-flex-col tw-items-center tw-gap-2">
              <span className="tw-text-slate-300">o</span>
              <button className="tw-w-full tw-bg-red-100 dark:tw-bg-red-900 dark:tw-border-red-900 hover:dark:tw-border-red-700 hover:dark:tw-text-red-400 hover:tw-text-red-800 tw-border tw-border-red-100 hover:tw-border-red-300 tw-smooth tw-rounded-lg tw-text-red-500 tw-py-3 tw-px-4 tw-uppercase tw-font-semibold">
                Cancelar
              </button>
            </div>
          )}
        </div>
      </div>
      {estadoPago === 0 && 
      <div className="tw-bg-white dark:tw-bg-slate-800 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-border tw-border-slate-100 dark:tw-border-slate-700 tw-p-4">
        <h3 className="tw-text-lg tw-font-semibold tw-text-gray-800 dark:tw-text-slate-100 mb-4">
          Pagar con
        </h3>
        <div className="tw-grid tw-grid-cols-3 tw-gap-3">
          <button className="tw-bg-slate-400 dark:tw-bg-slate-600 hover:tw-bg-green-700 dark:hover:tw-bg-green-700 tw-smooth tw-rounded-lg tw-text-white tw-py-2 tw-px-4 text-left">
            TPV <span className="tw-text-sm tw-block">(sin coste)</span>
          </button>
          <button className="tw-bg-slate-400 dark:tw-bg-slate-600 hover:tw-bg-green-700 dark:hover:tw-bg-green-700 tw-smooth tw-rounded-lg tw-text-white tw-py-2 tw-px-4 text-left">
            Bizum <span className="tw-text-sm tw-block">(sin coste)</span>
          </button>
          <button className="tw-bg-slate-400 dark:tw-bg-slate-600 hover:tw-bg-green-700 dark:hover:tw-bg-green-700 tw-smooth tw-rounded-lg tw-text-white tw-py-2 tw-px-4 text-left">
            transferencia
            <span className="tw-text-sm tw-block">(sin coste)</span>
          </button>
        </div>
      </div>
      }
    </div>
  );
}

export default Acciones;
