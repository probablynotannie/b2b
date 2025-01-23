function Ferris() {
  return (
    <section className="pb-12 md:mt-5 flex flex-col gap-5 animate-pulse">
      {[...Array(5)].map((_, index) => (
        <div
          className="h-[10vh] w-full bg-slate-100 dark:bg-slate-900 rounded-t-lg p-5 flex flex-col gap-4"
          key={index}
        >
          <div className="flex gap-4">
            <div className="h-3 w-24 bg-slate-300"> </div>
            <div className="h-3 w-10 bg-slate-400 rounded-full"> </div>
          </div>
          <div className="flex gap-4">
            <div className="h-2 w-24 bg-slate-300"> </div>
            <div className="h-2 w-24 bg-slate-300"> </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Ferris;
