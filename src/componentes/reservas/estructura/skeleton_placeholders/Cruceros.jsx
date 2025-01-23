function Cruceros() {
  return (
    <article className="cursor-pointer bg-slate-100 flex dark:bg-slate-800 shadow-xl lg:shadow-lg hover:shadow-xl border-2 border-slate-100 dark:border-slate-700 rounded-xl transition mt-5 lg:mt-10 lg:flex flex-col relative min-lg:h-[25vh] animate-pulse">
      <div className="relative w-full">
        <div className="min-h-[25vh] border-t-2 border-slate-200 dark:border-slate-900 rounded-tr-xl rounded-tl-xl max-h-[45vh] flex relative">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 w-[33.33%] sm:w-[25%] bg-slate-300 dark:bg-slate-800 min-h-[20vh] max-h-[45vh] flex justify-center items-center`}
            >
              <div className="md:text-xl font-semibold text-white bg-slate-800 bg-opacity-45 p-2 w-full h-full flex justify-center items-center flex-col">
                <div className="w-20 h-4 bg-slate-300 dark:bg-slate-700 rounded"></div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-0 w-full bg-slate-400 dark:bg-slate-900 bg-opacity-90 text-white font-bold px-5 h-2"></div>
        </div>
        <div className="flex items-center font-semibold bg-slate-300 dark:bg-slate-700 text-white px-2 p-1 rounded-full absolute top-5 right-5 w-16 h-8"></div>
      </div>
      <div className="px-5 py-3 dark:text-white pb-5 md:pb-0">
        <div className="h-4 w-3/4 bg-slate-300 dark:bg-slate-700 rounded mb-2"></div>
        <div className="h-3 w-full bg-slate-300 dark:bg-slate-700 rounded mb-1"></div>
        <div className="h-3 w-5/6 bg-slate-300 dark:bg-slate-700 rounded mb-3"></div>
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mb-3">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center bg-slate-300 dark:bg-slate-900 p-4 rounded-lg"
            >
              <div className="w-20 h-4 bg-slate-300 dark:bg-slate-800 rounded mb-2"></div>
              <div className="h-8 w-16 bg-slate-300 dark:bg-slate-800 rounded"></div>
              <div className="h-6 w-16 bg-slate-300 dark:bg-slate-800 rounded mt-2"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:flex justify-end">
        <div className="text-center w-full md:w-fit flex flex-col items-center justify-center font-bold bg-slate-300 dark:bg-slate-950 text-white p-2 px-4 rounded-br-lg rounded-tl-xl">
          <div className="w-24 h-4 bg-slate-300 dark:bg-slate-900 rounded mb-2"></div>
          <div className="h-4 w-16 bg-slate-300 dark:bg-slate-900 rounded mb-2"></div>
        </div>
      </div>
    </article>
  );
}
export default Cruceros;
