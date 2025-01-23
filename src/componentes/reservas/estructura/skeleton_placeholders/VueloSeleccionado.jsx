

function VueloSeleccionado() {
  return (
    <>
      <div className="border-slate-100 rounded-t-xl dark:bg-slate-800 animate-pulse mt-5">
        <div
          className={`grid border-2 grid-cols-1 md:grid-cols-4 gap-5 p-2 md:p-5 bg-white dark:bg-slate-800 rounded-t-xl  transition relative border-b-2 border-slate-100 dark:border-slate-600`}
        >
          <span className="absolute -top-5 left-3 p-2 text-2xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-500 text-slate-700 dark:text-slate-500 rounded-full">
            <div className="w-6 h-6 bg-slate-200 dark:bg-slate-600 rounded-full"></div>
          </span>
          <div className="flex flex-col items-center justify-center dark:text-slate-400">
            <div className="w-[50px] h-[30px] bg-slate-200 dark:bg-slate-600 rounded"></div>
            <span className="h-2 w-20 bg-slate-200 dark:bg-slate-600 rounded mt-2"></span>
            <span className="h-2 w-12 bg-slate-200 dark:bg-slate-600 rounded mt-1"></span>
          </div>
          <div className="flex flex-col items-center dark:text-slate-200">
            <span className="h-5 w-28 bg-slate-200 dark:bg-slate-600 rounded"></span>
            <span className="h-4 w-24 bg-slate-200 dark:bg-slate-600 rounded mt-2"></span>
          </div>
          <div className="flex flex-col items-center dark:text-slate-200">
            <span className="h-5 w-28 bg-slate-200 dark:bg-slate-600 rounded"></span>
            <span className="h-4 w-16 bg-slate-200 dark:bg-slate-600 rounded mt-2"></span>
          </div>
          <div className="text-sm flex flex-row justify-between items-center">
            <div className="text-center flex flex-col items-center w-full">
              <span className="h-5 w-24 bg-slate-200 dark:bg-slate-600 rounded"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-slate-100 rounded-b-xl dark:bg-slate-800 animate-pulse">
        <div
          className={`grid border-2 grid-cols-1 md:grid-cols-4 gap-5 p-2 md:p-5 bg-white dark:bg-slate-800 rounded-b-xl  transition relative border-b-2 border-slate-100 dark:border-slate-600`}
        >
          <span className="absolute -bottom-5 right-3 p-2 text-2xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-500 text-slate-700 dark:text-slate-500 rounded-full">
            <div className="w-6 h-6 bg-slate-200 dark:bg-slate-600 rounded-full"></div>
          </span>
          <div className="flex flex-col items-center justify-center dark:text-slate-400">
            <div className="w-[50px] h-[30px] bg-slate-200 dark:bg-slate-600 rounded"></div>
            <span className="h-2 w-20 bg-slate-200 dark:bg-slate-600 rounded mt-2"></span>
            <span className="h-2 w-12 bg-slate-200 dark:bg-slate-600 rounded mt-1"></span>
          </div>
          <div className="flex flex-col items-center dark:text-slate-200">
            <span className="h-5 w-28 bg-slate-200 dark:bg-slate-600 rounded"></span>
            <span className="h-4 w-24 bg-slate-200 dark:bg-slate-600 rounded mt-2"></span>
          </div>
          <div className="flex flex-col items-center dark:text-slate-200">
            <span className="h-5 w-28 bg-slate-200 dark:bg-slate-600 rounded"></span>
            <span className="h-4 w-16 bg-slate-200 dark:bg-slate-600 rounded mt-2"></span>
          </div>
          <div className="text-sm flex flex-row justify-between items-center">
            <div className="text-center flex flex-col items-center w-full">
              <span className="h-5 w-24 bg-slate-200 dark:bg-slate-600 rounded"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VueloSeleccionado;
