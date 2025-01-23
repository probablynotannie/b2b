import { GoDotFill } from "react-icons/go";
function Hoteles() {
  return (
    <div>
      
      {Array.from({ length: 5 }, (_, index) => (
        <article
          key={index}
          className="lg:flex flex-row bg-slate-100 dark:bg-slate-800 shadow-lg border-2 border-slate-100 dark:border-slate-800 rounded-xl mt-10 relative min-h-[15vh] animate-pulse"
        >
          <div className="w-full h-[25vh] lg:h-auto lg:w-1/3 lg:rounded-l-lg rounded-t-lg overflow-hidden">
            <div className="h-full w-full bg-slate-300 dark:bg-slate-900"></div>
          </div>
          <div className="p-5 lg:w-2/3">
            <div className="border-b-2 border-slate-200 dark:border-slate-900 pb-2">
              <div className="flex justify-between w-full">
                <div className="h-6 w-3/5 bg-slate-300 dark:bg-slate-900 rounded"></div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-4 w-4 bg-slate-300 dark:bg-slate-900 rounded"
                    ></div>
                  ))}
                </div>
              </div>
              <div className="h-4 w-2/3 bg-slate-300 dark:bg-slate-900 rounded mt-3"></div>
              <div className="flex flex-wrap gap-2 justify-between mt-4 text-sm">
                <div className="h-3 w-1/3 bg-slate-300 dark:bg-slate-900 rounded"></div>
                <div className="h-3 w-1/3 bg-slate-300 dark:bg-slate-900 rounded"></div>
                <div className="h-3 w-1/3 bg-slate-300 dark:bg-slate-900 rounded"></div>
                <div className="h-3 w-1/3 bg-slate-300 dark:bg-slate-900 rounded"></div>
              </div>
            </div>
            <div className="mt-4 h-5 w-full bg-slate-300 dark:bg-slate-900 rounded"></div>
            <div className="flex justify-end mt-4">
              <div className="h-10 w-32 bg-slate-300 dark:bg-slate-900 rounded"></div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Hoteles;
