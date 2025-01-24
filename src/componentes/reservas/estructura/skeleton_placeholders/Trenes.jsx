function Trenes() {
  return (
    <section className="pb-12 md:mt-5 flex flex-col gap-5 animate-pulse">
      {[...Array(3)].map((_, index) => (
        <div
          className="h-[20vh] w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg p-5 flex flex-col gap-4 py-10"
          key={index}
        >
          <div className="flex justify-between">
            <div className="border-l-2 border-slate-400 dark:border-slate-700 pl-3 flex flex-col gap-3">
              <div className="h-2 w-52 bg-slate-300 dark:bg-slate-900 rounded" />
              <div className="h-2 w-52 bg-slate-300 dark:bg-slate-900 rounded" />
              <div className="h-2 w-52 bg-slate-300 dark:bg-slate-900 rounded" />
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-16 bg-slate-300 dark:bg-slate-900  rounded" />
              <div className="h-8 w-16 bg-slate-300 dark:bg-slate-900  rounded" />
              <div className="h-8 w-16 bg-slate-300 dark:bg-slate-900  rounded" />
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="h-8 w-20 rounded-lg bg-slate-400 dark:bg-slate-700" />
              <div className="h-8 w-20 rounded-lg bg-slate-300 dark:bg-slate-600" />
            </div>
            <div className="h-8 w-20 rounded-lg bg-slate-300 dark:bg-slate-900" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Trenes;
