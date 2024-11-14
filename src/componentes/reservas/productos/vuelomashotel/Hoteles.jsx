import Aside from "./filtros/Aside";
import Resultado from "./Resultado";
import Vuelos from "./VueloSeleccionados";
import MasVUelos from "./MasVuelos";
import Buscador from "./filtros/Buscador";
import { Tabs } from "flowbite-react";
function Productos() {
  return (
    <main className=" flex justify-center flex-col  items-center container my-10">
      <div className="w-full">
        <Tabs aria-label="Pills" variant="pills">
          <Tabs.Item active title="Hoteles">
            <article className="grid grid-cols-9 lg:gap-24 xs:gap-28">
              <div className="col-span-7 md:col-span-8 lg:col-span-9 mx-3 md:mx-0">
                <Buscador />
              </div>
              <aside className="col-span-1 lg:col-span-3 lg:bg-slate-100 lg:dark:bg-slate-800 lg:border-2 border-slate-200  dark:border-slate-800 rounded-lg lg:shadow-xl hover:lg:shadow-2xl transition px-3 lg:p-3 lg:pb-10">
                <Aside />
              </aside>
              <section className="col-span-9 lg:col-span-6 p-3">
                <Vuelos />
                <Resultado />
              </section>
            </article>
          </Tabs.Item>
          <Tabs.Item title="Cambiar vuelos">
            <MasVUelos />
          </Tabs.Item>
        </Tabs>
      </div>
    </main>
  );
}

export default Productos;
