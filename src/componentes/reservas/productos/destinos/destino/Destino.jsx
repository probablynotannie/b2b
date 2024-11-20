import { FaMapPin, FaClock } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { MdRestaurant } from "react-icons/md";
import Detalles from "./Detalles";
import Resumen from "./Resumen";
function Destino() {
  const producto = {
    nombre: "Hamburgo y su puerto",
    ubicacion: "Hamburgo",
    precio: 254,
    dias: 4,
    hotel: "Hoteles 3*",
    desayunos: 3,
    banner: "",
    descripcion:
      "En este viaje tendrá la oportunidad de conocer Hamburgo, la ciudad con los 2500 puentes, también conocida como la Venecia del Norte.",
    itinerario: [
      {
        id: 0,
        ubicacion: "Hamburgo",
        descripcioin:
          "Al llegar a Hamburgo traslado por cuenta propia al hotel.",
        regimen: "Desayuno",
        actividades: [""],
        tarjeta: "Tarjeta Hamburg Card - tickets incluidos",
      },
    ],
  };
  return (
    <article className="container min-h-[80vh] ">
      <header className="dark:bg-slate-800 dark:rounded-xl  border-b-2 border-slate-100 dark:border-slate-800 pb-5 md:mt-10 p-5 ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-bold dark:text-white">
              {producto.nombre}
            </h1>
            <div className="flex items-center">
              <p className="flex items-center font-semibold ">
                <span className="mr-2 flex items-center  text-slate-600 dark:text-slate-400 text-sm">
                  <FaMapPin className="text-secondary text-lg" />
                  {producto.ubicacion}
                </span>
                <span className="mr-2 flex items-center  text-slate-600 dark:text-slate-400 text-sm">
                  <FaClock className="mr-2 text-secondary text-lg" />{" "}
                  {producto.dias} días
                </span>
                <span className="mr-2 flex items-center  text-slate-600 dark:text-slate-400 text-sm">
                  <FaBed className="mr-2 text-secondary text-lg" />
                  {producto.hotel} Hoteles
                </span>
                <span className="mr-2 flex items-center  text-slate-600 dark:text-slate-400 text-sm">
                  <MdRestaurant className="mr-2 text-secondary text-lg" />
                  {producto.desayunos} desayunos
                </span>
              </p>
            </div>
          </div>
          <button className="hidden md:block rounded-xl shadow-md hover:shadow-lg transition p-3 bg-secondary text-white font-bold">
            PVP desde {producto.precio}€
          </button>
        </div>
      </header>
      <article className=" my-5 mt-10 grid grid-cols-3 gap-10">
        <section className="col-span-2 shadow-xl rounded-lg p-5 border-2 border-slate-100 h-[90vh] ">
          <Detalles producto={producto} />
        </section>
        <section className="col-span-1 shadow-xl rounded-lg p-5 border-2 border-slate-100 h-fit sticky top-5">
          <Resumen producto={producto} />
        </section>
      </article>
    </article>
  );
}

export default Destino;
