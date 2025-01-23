import { useState, useEffect } from "react";
import Buscador from "./filtros/Buscador";
import Aside from "./filtros/Aside";
import Hoteles from "./Hoteles";
import hoteles from "./Hoteles.json";
import { GoDotFill } from "react-icons/go";

function Productos() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const Placeholder = () => (
    <div>
      <div className="flex flex-col lg:flex-row lg:justify-between shadow-md lg:shadow-none p-3 rounded-xl border-2 lg:border-0 border-slate-200 dark:bg-slate-800 dark:md:bg-inherit dark:md:border-0 dark:md:shadow-none dark:border-slate-600 lg:mt-0">
        <h3 className="text-secondary font-semibold text-lg ">Cargando...</h3>
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          <div className="flex gap-2 mb-3">
            <GoDotFill className="animate-bounce animate-infinite animate-delay-0 text-secondary" />
            <GoDotFill className="animate-bounce animate-infinite animate-delay-100 text-pink-400" />
            <GoDotFill className="animate-bounce animate-infinite animate-delay-200 text-blue-500" />
          </div>
        </div>
      </div>
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className="animate-pulse flex space-x-8 border mt-8 border-slate-100 dark:border-slate-800 dark:bg-slate-900 p-3"
        >
          <div className="h-42 w-52 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
          <div className="flex-1 space-y-3 py-1">
            <div className="h-3 bg-gray-200 dark:bg-slate-800 rounded"></div>
            <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-3/4"></div>
            <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-1/2"></div>
            <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-3/4"></div>
            <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-1/2"></div>
            <div className="flex justify-end">
              <div className="flex gap-4">
                <div className="h-7 bg-slate-200 dark:bg-slate-800 rounded w-[100px]"></div>
                <div className="h-7 bg-slate-200 dark:bg-slate-800 rounded w-[100px]"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <main className="flex justify-center flex-col items-center mb-10">
      <div
        className="w-full bg-cover bg-center p-8 relative shadow-md"
        style={{
          backgroundImage: "url('/banner_hoteles.jpg')",
        }}
      >
        <div className="bg-orange-200 dark:bg-black text-pink-600 bg-opacity-45 dark:bg-opacity-45 absolute top-0 left-0 w-full h-full pointer-events-none"></div>
        <div className="flex">
          <div className="container relative">
            <Buscador />
          </div>
          <aside className=" lg:hidden col-span-9 lg:col-span-3 h-fit lg:sticky  top-5 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
            <Aside />
          </aside>
        </div>
      </div>

      <article className="grid grid-cols-9 lg:gap-10 xs:gap-28 w-full container mt-10">
        <aside className="hidden lg:block col-span-9 lg:col-span-3 h-fit lg:sticky top-24 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200 dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
          <Aside />
        </aside>
        <section className="col-span-9 lg:col-span-6 p-3">
          {loading ? <Placeholder /> : <Hoteles hoteles={hoteles} />}
        </section>
      </article>
    </main>
  );
}

export default Productos;
