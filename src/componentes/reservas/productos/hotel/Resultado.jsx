import { useState, useEffect } from "react";
import Buscador from "./filtros/Buscador";
import Aside from "./filtros/Aside";
import Hoteles from "./Hoteles";
import hoteles from "./Hoteles.json";
import { GoDotFill } from "react-icons/go";
import PlaceHolder from "../../estructura/skeleton_placeholders/Hoteles";
import Cargando from "../../estructura/skeleton_placeholders/Cargando";
function Productos() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center mb-10">
      <div
        className="relative w-full p-8 bg-center bg-cover shadow-md"
        style={{
          backgroundImage: "url('/banner_hoteles.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full text-pink-600 bg-orange-200 pointer-events-none dark:bg-black bg-opacity-45 dark:bg-opacity-45"></div>
        <div className="flex">
          <div className="container relative">
            <Buscador />
          </div>
          <aside className="col-span-9 px-3 transition rounded-lg lg:hidden lg:col-span-3 h-fit lg:sticky top-5 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200 dark:border-slate-800 lg:shadow-xl hover:lg:shadow-2xl lg:p-3 lg:pb-10">
            <Aside />
          </aside>
        </div>
      </div>

      <article className="container grid w-full grid-cols-9 mt-10 lg:gap-10 xs:gap-28">
        <aside className="hidden col-span-9 px-3 transition rounded-lg lg:block lg:col-span-3 h-fit lg:sticky top-24 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200 dark:border-slate-800 lg:shadow-xl hover:lg:shadow-2xl lg:p-3 lg:pb-10">
          <Aside />
        </aside>
        <section className="col-span-9 p-3 lg:col-span-6">
          {loading ? (
            <>
              <Cargando />
              <PlaceHolder />
            </>
          ) : (
            <Hoteles hoteles={hoteles} />
          )}
        </section>
      </article>
    </main>
  );
}

export default Productos;
