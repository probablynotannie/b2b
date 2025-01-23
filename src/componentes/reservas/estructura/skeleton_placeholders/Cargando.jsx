import { GoDotFill } from "react-icons/go";
function Cargando() {
  return (
    <div className="flex flex-row justify-between p-3 rounded-xl dark:bg-slate-800 dark:md:bg-inherit dark:md:border-0 dark:md:shadow-none dark:border-slate-600 lg:mt-0">
      <h3 className="text-secondary font-semibold text-lg ">Cargando...</h3>
      <div className="flex flex-col gap-5 md:flex-row md:justify-between">
        <div className="flex gap-2 mb-3">
          <GoDotFill className="animate-bounce animate-infinite animate-delay-0 text-secondary" />
          <GoDotFill className="animate-bounce animate-infinite animate-delay-100 text-pink-400" />
          <GoDotFill className="animate-bounce animate-infinite animate-delay-200 text-blue-500" />
        </div>
      </div>
    </div>
  );
}

export default Cargando;
