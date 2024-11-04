import Buscador from "./Buscador";
import Carousel from "./Imagenes_Carousel";
import { FaPerson } from "react-icons/fa6";
import Listado from "./habitaciones/Listado";
import Map from "./Map"; // Import the Map component
import {
  FaLongArrowAltDown,
  FaMapPin,
  FaRegCalendarAlt,
  FaChild,
} from "react-icons/fa";

function Producto() {
  const producto = {
    id: 0,
    nombre: "Luxury apartments",
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
    <main className="flex justify-center flex-col my-10 container">
      <Buscador />
      <div className="flex justify-between border-b-2 border-slate-100 pb-5 mt-10 p-5">
        <div>
          <h3 className="text-xl font-bold">{producto.nombre}</h3>
          <div className="flex space-x-2 items-center">
            <FaMapPin className="text-secondary" />
            <span>{producto.ubicacion}</span>
          </div>
        </div>
        <button className="rounded-xl shadow-md hover:shadow-lg transition p-3 bg-secondary text-white font-bold">
          Reservar
        </button>
      </div>
      <article className="grid grid-cols-5 gap-10 my-5 mt-10">
        <section className="bg-slate-600 col-span-1 flex flex-col justify-between border-2 rounded-lg shadow-lg px-2">
          <header className="p-3 text-white font-semibold rounded-t-xl border-b-2 border-slate-200">
            <h4>Resumen</h4>
          </header>
          <div className="px-5 text-white border-b-2 border-slate-700 mx-2 mt-3">
            <div className="flex items-center space-x-3 mt-3">
              <FaRegCalendarAlt className="text-xl text-secondary" />
              <span>-</span>
              <time className="font-semibold" dateTime={producto.fecha}>
                {producto.fecha}
              </time>
            </div>
            <div className="flex justify-center items-center my-1.5 text-secondary">
              <FaLongArrowAltDown />
            </div>
            <div className="flex items-center justify-end space-x-3">
              <time className="font-semibold" dateTime={producto.fechaSalida}>
                {producto.fechaSalida}
              </time>
              <span>-</span>
              <FaRegCalendarAlt className="text-xl text-secondary" />
            </div>
            <div className="flex justify-between my-5">
              <div className="flex items-center space-x-1 text-sm font-semibold">
                <FaPerson className="text-xl text-secondary" />

                <span>{producto.pax}</span>
                <span>adulto{producto.pax !== 1 && "s"}</span>
              </div>
              {producto.pax_ninios > 0 && (
                <div className="flex items-center space-x-1 text-sm font-semibold">
                  <FaChild className="text-lg text-secondary" />
                  <span>
                    {producto.pax_ninios} niño{producto.pax_ninios > 1 && "s"}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="p-2">
            <Map location={producto.ubicacion} />
          </div>
        </section>

        <aside className="h-[45vh] col-span-4 shadow-xl">
          <Carousel imagenes={producto.imagenes} />
        </aside>

        <section className="col-span-5">
          <Listado />
        </section>
      </article>
    </main>
  );
}

export default Producto;
