function Acciones() {
  return (
    <div className="tw-space-y-6">
      <div className="tw-bg-white tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-border tw-border-slate-100 dark:tw-border-slate-700 tw-p-4">
        <h3 className="tw-text-lg tw-font-semibold tw-text-gray-800 mb-4">
          Acciones
        </h3>
        <div className="tw-grid tw-grid-cols-3 tw-gap-3">
          <button className="tw-bg-indigo-800 hover:tw-bg-indigo-700 tw-transition tw-rounded-xl tw-text-white tw-py-2 tw-px-4">
            Bono
          </button>
          <button className="tw-bg-indigo-800 hover:tw-bg-indigo-700 tw-transition tw-rounded-xl tw-text-white tw-py-2 tw-px-4">
            ProForma
          </button>
          <button className="tw-bg-red-700 hover:tw-bg-red-600 tw-transition tw-rounded-xl tw-text-white tw-py-2 tw-px-4">
            Cancelar
          </button>
        </div>
      </div>
      <div className="tw-bg-white tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-border tw-border-slate-100 dark:tw-border-slate-700 tw-p-4">
        <h3 className="tw-text-lg tw-font-semibold tw-text-gray-800 mb-4">
          Pagar con
        </h3>
        <div className="tw-grid tw-grid-cols-2 tw-gap-3">
          <button className="tw-bg-green-800 hover:tw-bg-green-700 tw-transition tw-rounded-xl tw-text-white tw-py-2 tw-px-4 text-left">
            Pagar por TPV
            <span className="tw-text-sm tw-block">(sin coste)</span>
          </button>
          <button className="tw-bg-green-800 hover:tw-bg-green-700 tw-transition tw-rounded-xl tw-text-white tw-py-2 tw-px-4 text-left">
            Pagar por Bizum
            <span className="tw-text-sm tw-block">(sin coste)</span>
          </button>
          <button className="tw-bg-green-800 hover:tw-bg-green-700 tw-transition tw-rounded-xl tw-text-white tw-py-2 tw-px-4 text-left">
            Pagar por transferencia
            <span className="tw-text-sm tw-block">(sin coste)</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Acciones;
