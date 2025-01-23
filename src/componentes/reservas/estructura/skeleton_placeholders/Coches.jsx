import React from "react";

function Coches() {
  return (
    <>
      {Array.from({ length: 2 }, (_, index) => (
        <article
          key={index}
          className="xl:flex flex-row border-2 border-slate-100 dark:border-slate-800 rounded-xl transition mt-10 relative min-h-[15vh] animate-pulse"
        >
          <div className="w-full h-[25vh] lg:h-auto xl:w-1/3 lg:rounded-l-lg rounded-t-lg overflow-hidden relative">
            <div className="w-full h-full bg-slate-300 dark:bg-slate-900"></div>
          </div>
          <div className="p-5 xl:w-2/3 dark:bg-slate-800">
            <div className="border-b-2 border-slate-200 dark:border-slate-700 pb-2">
              <div className="flex justify-between w-full mb-2">
                <div className="h-5 w-2/3 bg-slate-300 dark:bg-slate-900 rounded"></div>
                <div className="h-5 w-1/3 bg-slate-300 dark:bg-slate-900 rounded"></div>
              </div>
              <div className="flex justify-between w-full mb-4">
                <div className="h-4 w-1/2 bg-slate-300 dark:bg-slate-900 rounded"></div>
                <div className="h-4 w-1/5 bg-slate-300 dark:bg-slate-900 rounded"></div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-slate-300 dark:bg-slate-900 rounded mr-2"></div>
                <div className="h-4 w-1/3 bg-slate-300 dark:bg-slate-900 rounded"></div>
              </div>
              <div className="flex flex-wrap gap-2 justify-between mt-2">
                <div className="h-5 w-12 bg-slate-300 dark:bg-slate-900 rounded"></div>
                <div className="h-5 w-12 bg-slate-300 dark:bg-slate-900 rounded"></div>
                <div className="h-5 w-12 bg-slate-300 dark:bg-slate-900 rounded"></div>
                <div className="h-5 w-12 bg-slate-300 dark:bg-slate-900 rounded"></div>
                <div className="h-5 w-12 bg-slate-300 dark:bg-slate-900 rounded"></div>
              </div>
            </div>
            <ul className="grid md:grid-cols-2 gap-x-10 dark:text-slate-300 mt-4">
              <li className="h-4 w-1/2 bg-slate-300 dark:bg-slate-900 rounded"></li>
              <li className="h-4 w-1/2 bg-slate-300 dark:bg-slate-900 rounded"></li>
              <li className="h-4 w-1/2 bg-slate-300 dark:bg-slate-900 rounded"></li>
              <li className="h-4 w-1/2 bg-slate-300 dark:bg-slate-900 rounded"></li>
            </ul>
            <div className="flex flex-col md:flex-row justify-end mt-3 gap-3">
              <div className="w-full lg:w-20 h-8 bg-slate-300 dark:bg-slate-900 rounded"></div>
              <div className="w-full lg:w-20 h-8 bg-slate-300 dark:bg-slate-900 rounded"></div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default Coches;
