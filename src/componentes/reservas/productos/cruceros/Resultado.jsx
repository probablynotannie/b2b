import Buscador from "./filtros/Buscador";
import Aside from "./filtros/Aside";
import Destinos from "./Destinos";
import { useEffect, useState } from "react";
function Productos() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <main className=" flex justify-center flex-col items-center  mb-10">
      <div
        className="w-full bg-cover bg-center p-8 relative shadow-md"
        style={{
          backgroundImage: "url('/banner_cruise.jfif')",
        }}
      >
        <div className="bg-indigo-200 dark:bg-black text-pink-600 bg-opacity-50 dark:bg-opacity-45 absolute top-0 left-0 w-full h-full pointer-events-none"></div>
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
        <aside className="hidden lg:block col-span-9 lg:col-span-3 h-fit lg:sticky  top-24 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
          <Aside />
        </aside>
        <section className="col-span-9 lg:col-span-6 p-3">
          <Destinos />
        </section>
      </article>
    </main>
  );
}
export default Productos;
