import React from "react";

function Circuitos() {
  return (
    <section className="pb-12 md:mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
      {[...Array(2)].map((_, index) => (
        <div
          className="border-2 bg-white dark:bg-slate-800 relative border-slate-100 dark:border-slate-700 h-auto max-w-full rounded-lg shadow-lg"
          key={index}
        >
          <span className="absolute rotate-45 bg-slate-300 dark:bg-slate-800 rounded-lg px-2 p-1 top-5 right-5 z-10 shadow-lg w-16 h-6"></span>
          <div className="relative">
            <div className="h-[25vh] w-full bg-slate-400 dark:bg-slate-900 rounded-t-lg"></div>
          </div>
          <div className="p-5">
            <div className="h-3 w-3/4 bg-slate-300 dark:bg-slate-700 rounded mb-2"></div>
            <ul className="my-5 flex flex-col gap-2">
              <li className="h-2 w-52 bg-slate-300 dark:bg-slate-700 rounded" />
              <li className="h-2 w-52 bg-slate-300 dark:bg-slate-700 rounded" />
              <li className="h-2 w-52 bg-slate-300 dark:bg-slate-700 rounded" />
              <li className="h-2 w-52 bg-slate-300 dark:bg-slate-700 rounded" />
            </ul>
            <div className="flex items-center gap-2">
              <div className="h-4 w-12 bg-slate-300 dark:bg-slate-700 rounded"></div>
              <div className="h-4 w-12 bg-slate-300 dark:bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Circuitos;
