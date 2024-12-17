import Buscador from "./filtros/Buscador";
import Aside from "./filtros/Aside";
import Ferris from "./Ferris";
import ferris from "./Ferris.json";
import { useState } from "react";
function Productos() {
  const [ida, setIda] = useState(null);
  const [vuelta, setVuelta] = useState(null);
  return (
    <main className=" flex justify-center flex-col items-center  mb-10">
      <div
        className="w-full bg-cover bg-center p-8 relative shadow-md"
        style={{
          backgroundImage: "url('/banner_cruise.jfif')",
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
        <aside className="hidden lg:block col-span-9 lg:col-span-3 h-fit lg:sticky  top-24 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
          <Aside />
        </aside>
        <section className="col-span-9 lg:col-span-6 p-3">
          <Ferris
            ferris={ferris}
            ida={ida}
            setIda={setIda}
            vuelta={vuelta}
            setVuelta={setVuelta}
          />
        </section>
      </article>
    </main>
  );
}
export default Productos;
