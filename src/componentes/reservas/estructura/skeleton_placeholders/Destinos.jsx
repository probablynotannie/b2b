function Destinos() {
  return (
    <>
      {Array.from({ length: 2}, (_, index) => (
        <article
          key={index}
          className="bg-slate-50 flex dark:bg-slate-800 shadow-lg border-2 border-slate-100 dark:border-slate-800 rounded-xl mt-5 lg:mt-10 flex-col relative min-lg:h-[25vh] animate-pulse"
        >
          <div className="relative w-full">
            <div className="h-[25vh] bg-slate-300 dark:bg-slate-900 rounded-t-lg"></div>
          </div>
          <div className="px-5 py-3 dark:text-slate-300">
            <div className="flex justify-between items-center">
              <div className="h-5 w-2/3 bg-slate-300 dark:bg-slate-700 rounded"></div>
            </div>
            <div className="flex flex-wrap gap-5 border-b-2 border-slate-100 dark:border-slate-700  pb-5 mt-3">
              <div className="h-4 w-1/2 bg-slate-300 dark:bg-slate-700 rounded"></div>
              <div className="h-4 w-1/2 bg-slate-300 dark:bg-slate-700 rounded"></div>
            </div>
            <div className="mt-4">
              <div className="h-4 w-1/4 bg-slate-300 dark:bg-slate-700 rounded mb-2"></div>
              <div className="h-4 w-1/4 bg-slate-300 dark:bg-slate-700 rounded"></div>
            </div>
            <div className="mt-4 text-center">
              <div className="h-3 w-1/3 bg-slate-300 dark:bg-slate-700 rounded mx-auto"></div>
              <div className="h-3 w-1/4 bg-slate-300 dark:bg-slate-700 rounded mx-auto mt-2"></div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default Destinos;
