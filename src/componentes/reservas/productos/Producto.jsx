import Buscador from "./Buscador";
import Carousel from "./Imagenes_Carousel";
import Map from "./Map"; // Import the Map component
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
function Producto() {
  const producto = {
    id: 0,
    nombre: "Luxury appartments",
    ubicacion: " en Passeig de Llevant, 3, Malgrat De Mar (Costa Barcelona)",
    precio: 364,
    fecha: "21 de octubre",
    fechaSalida: "28 de octubre",
    pax: 2,
    pax_ninios: 1,
    descripcion:
      "HB-000273 El Hotel Sorra d?Or Beach Club se encuentra ubicado en Malgrat de Mar, pueblo costero de la Costa del Maresme. Situado en primera línea de playa en Malgrat de Mar, Sorra D?Or Beach Club, es sin duda el hotel ideal para disfrutar de unas vacaciones inolvidables con todo incluido. El Hotel Sorra d?Or Beach Club, hotel todo incluido en Malgrat de Mar, situado en la Costa del Maresme (Costa de Barcelona), situado en primera línea de playa, tan solo 30 metros le separa de la arena. El Hotel Sorra D?Or Beach Club, de 3 estrellas cuenta con unas magníficas, modernas y confortables instalaciones así como el servicio de todo incluido para que pueda disfrutar de sus vacaciones sin límites, sin tener que preocuparse de nada, podrá por fin relajarse y divertirse. Este magnífico hotel todo incluido en la Costa del Maresme esta anclado en una de las mejores zonas de la playa de Malgrat de Mar, dispone de: Servicios del hotel todo incluido en Malgrat de Mar ? Habitaciones dobles, individuales y habitaciones adaptadas para minusválidos. ? Aire acondicionado en plantas nobles. ? Restaurante. ? Bar. ? Tarjetas de crédito aceptadas: Visa, Mastercard Zonas comunes (adaptadas para minusválidos) del hotel todo inlcuido en Malgrat de Mar ? Jardín. ? Solarium. ? Piscina para adultos y para niños. ? Miniclub. ? Tumbonas y sombrillas, (a partir de mediados de Junio). ? Sala de juegos. ? Sala de TV y de video. ? Animación para adultos y niños. Tasa turística de Cataluña no incluida en el precio y de pago directo en el establecimiento.",
    imagenes: [
      {
        id: 0,
        src: "/hotel1.jpg",
      },
      {
        id: 1,
        src: "/hotel2.jpg",
      },
      {
        id: 2,
        src: "/hotel3.jpg",
      },
      {
        id: 3,
        src: "/hotel4.jpg",
      },
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
    <div className="flex justify-center my-10">
      <div className="container ">
        {/* Buscador */}
        <Buscador />
        {/* producto */}
        <div className="mt-10  p-5 ">
          <div className="flex justify-between border-b-2 border-slate-100 pb-5">
            <div>
              <h3 className="text-xl font-bold"> {producto.nombre}</h3>
              <div className="flex space-x-2 items-center">
                <FaMapPin className="text-secondary" />
                <span>{producto.ubicacion}</span>
              </div>
            </div>
            <div>
              <button className="rounded-xl shadow-md hover:shadow-lg transition p-3 bg-secondary text-white font-bold">
                Reservar
              </button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-10 my-5 mt-10">
            <section className="col-span-1 flex flex-col justify-between shadow-xl rounded-xl bg-primary px-2">
              <div className="bg-primary p-3 text-white font-semibold rounded-t-xl border-b-2 border-white">
                <h4>Resumen</h4>
              </div>
              <div className="p-5">
                <div className="flex items-center space-x-3 mt-3">
                  <FaRegCalendarAlt className="text-xl text-secondary" />
                  <span>-</span>
                  <h4 className="text-white font-semibold">{producto.fecha}</h4>
                </div>
                <div className="flex justify-center items-center my-1.5 text-secondary">
                  <FaLongArrowAltDown />
                </div>
                <div className="flex items-center justify-end space-x-3">
                  <h4 className="text-white font-semibold">{producto.fechaSalida}</h4>
                  <span>-</span>
                  <FaRegCalendarAlt className="text-xl text-secondary" />
                </div>
                <div className="flex justify-between my-5">
                  <div className="flex items-center space-x-1 text-white text-sm font-semibold">
                    <FaPerson className="text-lg text-secondary" />
                    <span> {producto.pax && producto.pax}</span>
                    <span>adulto{producto.pax !== 1 && "s"}</span>
                  </div>
                  {producto.pax_ninios && (
                    <div className="flex items-center space-x-1 text-white text-sm font-semibold">
                      <FaChild className="text-lg text-secondary" />
                      <span>
                        {producto.pax_ninios} niño
                        {producto.pax_ninios > 1 && "s"}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Producto;
