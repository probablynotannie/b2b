import VueloSeleccionado from "./VueloSeleccionado";
function Vuelos() {
  return (
    <div>
      <VueloSeleccionado />
      <div className="p-4 dark:bg-slate-800 dark:border-slate-700 mx-auto border rounded-xl shadow-lg animate-pulse mt-20">
        <div>
          <div className="text-2xl text-end font-bold bg-slate-200 dark:bg-slate-600 rounded-lg shadow-l w-32 h-8 ml-auto"></div>
          <div className="bg-slate-200 dark:bg-slate-900 p-4 rounded-t-lg mt-3">
            <span className="h-4 w-24 bg-slate-300 dark:bg-slate-700 rounded"></span>
          </div>
          <div className="space-y-3 mt-4">
            {Array(2)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="p-3 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center gap-4"
                >
                  <div className="h-10 w-10 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-3/4 bg-slate-300 dark:bg-slate-600 rounded"></div>
                    <div className="h-3 w-1/2 bg-slate-300 dark:bg-slate-600 rounded"></div>
                  </div>
                </div>
              ))}
          </div>

          <div className="space-y-3 mt-4">
            {Array(2)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="p-3 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center gap-4"
                >
                  <div className="h-10 w-10 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-3/4 bg-slate-300 dark:bg-slate-600 rounded"></div>
                    <div className="h-3 w-1/2 bg-slate-300 dark:bg-slate-600 rounded"></div>
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
