import Buscador from "../filtros/Buscador";
import { FaPerson } from "react-icons/fa6";
import Listado from "./Listado";
import Listado2 from "./Listado2";
import Imagenes from "./Imgs";
import Info from "./Info";
import Map from "../Map";
import { FaMapPin, FaRegCalendarAlt, FaChild } from "react-icons/fa";

function Producto() {
  const producto = {
    id: 0,
    nombre: "Apartamentos sol y mar",
    ubicacion: "en Passeig de Llevant, 3, Malgrat De Mar (Costa Barcelona)",
    precio: 364,
    fecha: "21 de octubre",
    fechaSalida: "28 de octubre",
    pax: 2,
    pax_ninios: 1,
    descripcion:
      "HB-000273 El Hotel Sorra d’Or Beach Club se encuentra ubicado en Malgrat de Mar, pueblo costero de la Costa del Maresme...",
    imagenes: [
      { id: 0, src: "/hotel1.jpg" },
      { id: 1, src: "/hotel2.jpg" },
      { id: 2, src: "/hotel3.jpg" },
      { id: 3, src: "/hotel4.jpg" },
    ],
    img: "/hotel2.jpg",
    habitaciones: [
      {
        id: 0,
        nombre: "Economy Double",
        regimen: "Alojamiento y desayuno",
        precio: 54,
      },
      {
        id: 1,
        nombre: "Economy Double",
        regimen: "Alojamiento y desayuno",
        precio: 54,
      },
      {
        id: 2,
        nombre: "Standard Double",
        regimen: "Alojamiento y desayuno",
        precio: 88,
      },
      {
        id: 3,
        nombre: "Standard Pool View",
        regimen: "Alojamiento y desayuno",
        precio: 63,
      },
      {
        id: 4,
        nombre: "Economy Sea View",
        regimen: "Alojamiento y desayuno",
        precio: 67,
      },
      {
        id: 5,
        nombre: "Standard Pool View",
        regimen: "Alojamiento y desayuno",
        precio: 78,
      },
      {
        id: 6,
        nombre: "Standard Sea View",
        regimen: "Alojamiento y desayuno",
        precio: 84,
      },
    ],
  };

  return (
    <main className="flex justify-center flex-col my-10  px-5 md:px-0">
      <div className="container">
        <Buscador />
        <div className="mt-5 dark:bg-slate-800 dark:rounded-xl flex justify-between border-b-2 border-slate-100 dark:border-slate-800 pb-5 md:mt-10 p-5 ">
          <div>
            <h3 className="text-xl font-bold dark:text-white">
              {producto.nombre}
            </h3>
            <div className="flex space-x-2 items-center">
              <FaMapPin className="text-secondary text-lg" />
              <span className="text-sm dark:text-slate-400">
                {producto.ubicacion}
              </span>
            </div>
          </div>
          <button className="hidden md:block rounded-xl shadow-md hover:shadow-lg transition p-3 bg-secondary text-white font-bold">
            Reservar
          </button>
        </div>
        <article className="grid grid-cols-5 lg:gap-10 my-5 mt-10 ">
          <section className=" col-span-5 lg:col-span-1 flex flex-col  justify-between border-2 border-gray-200 dark:border-slate-800 rounded-xl p-3 text-slate-700 bg-slate-500 dark:bg-slate-800 shadow-xl">
            <h4 className="p-3 font-bold text-cen rounded-t-xl   text-secondary">
              Resumen
            </h4>
            <div className="flex justify-between pb-2 border-b-2 border-slate-100  dark:border-slate-700">
              <div className="flex items-center space-x-1 text-sm font-semibold  dark:text-slate-100">
                <FaPerson className="text-xl text-secondary" />
                <span className="text-white">{producto.pax}</span>
                <span className="text-white">
                  adulto{producto.pax !== 1 && "s"}
                </span>
              </div>
              {producto.pax_ninios > 0 && (
                <div className="flex items-center space-x-1 text-sm font-semibold  dark:text-slate-100">
                  <FaChild className="text-lg text-secondary" />
                  <span className="text-white">
                    {producto.pax_ninios} niño{producto.pax_ninios > 1 && "s"}
                  </span>
                </div>
              )}
            </div>
            <div className="text-slateo-700 mx-2 mt-3 text-sm ">
              <span className="font-semibold dark:text-slate-400 text-white">
                Entrada
              </span>
              <div className="relative">
                <input
                  className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
                  type="text"
                  disabled
                  value={producto.fecha}
                />
                <div className="absolute top-0 pointer-events-none bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                  <FaRegCalendarAlt />
                </div>
              </div>
              <span className="block mt-2 font-semibold text-white dark:text-slate-400">
                Salida
              </span>
              <div className="relative">
                <input
                  className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
                  type="text"
                  disabled
                  value={producto.fechaSalida}
                />
                <div className="absolute top-0 pointer-events-none bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                  <FaRegCalendarAlt />
                </div>
              </div>
            </div>
          </section>
          <aside className="h-full lg:col-span-4 col-span-5 mt-5 lg:mt-0">
            <Map location={producto.ubicacion} />
          </aside>
          <section className="col-span-5 mt-10 mb-5 lg:my-5">
            <Info />
          </section>
          <section className="col-span-5">
            <Listado2 />
          </section>
          <section className="col-span-5">
            <Listado />
          </section>
          <section className="col-span-5">
            <h4 className="font-bold text-lg mb-3">Imagenes</h4>
            <Imagenes />
          </section>
        </article>
      </div>
    </main>
  );
}

export default Producto;
