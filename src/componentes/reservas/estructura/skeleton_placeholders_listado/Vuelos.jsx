import VueloSeleccionado from "./VueloSeleccionado";
function Vuelos() {
  return (
    <div>
      <VueloSeleccionado />
      <div className="tw-p-4 dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-mx-auto tw-border tw-rounded-xl tw-shadow-lg tw-animate-pulse tw-mt-20">
        <div>
          <div className="tw-text-2xl tw-text-end tw-font-bold tw-bg-slate-200 dark:tw-bg-slate-600 tw-rounded-lg tw-shadow-l tw-w-32 tw-h-8"></div>
          <div className="tw-bg-slate-200 dark:tw-bg-slate-900 tw-p-4 tw-rounded-t-lg tw-mt-3">
            <span className="tw-h-4 tw-w-24 tw-bg-slate-300 dark:tw-bg-slate-700 tw-rounded"></span>
          </div>
          <div className="tw-space-y-3 tw-mt-4">
            {Array(2)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="tw-p-3 tw-bg-slate-200 dark:tw-bg-slate-700 tw-rounded-lg tw-flex tw-items-center tw-gap-4"
                >
                  <div className="tw-h-10 tw-w-10 tw-bg-slate-300 dark:tw-bg-slate-600 tw-rounded-full"></div>
                  <div className="tw-flex-1 tw-space-y-2">
                    <div className="tw-h-3 tw-w-3/4 tw-bg-slate-300 dark:tw-bg-slate-600 tw-rounded"></div>
                    <div className="tw-h-3 tw-w-1/2 tw-bg-slate-300 dark:tw-bg-slate-600 tw-rounded"></div>
                  </div>
                </div>
              ))}
          </div>

          <div className="tw-space-y-3 tw-mt-4">
            {Array(2)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="tw-p-3 tw-bg-slate-200 dark:tw-bg-slate-700 tw-rounded-lg tw-flex tw-items-center tw-gap-4"
                >
                  <div className="tw-h-10 tw-w-10 tw-bg-slate-300 dark:tw-bg-slate-600 tw-rounded-full"></div>
                  <div className="tw-flex-1 tw-space-y-2">
                    <div className="tw-h-3 tw-w-3/4 tw-bg-slate-300 dark:tw-bg-slate-600 tw-rounded"></div>
                    <div className="tw-h-3 tw-w-1/2 tw-bg-slate-300 dark:tw-bg-slate-600 tw-rounded"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vuelos;
