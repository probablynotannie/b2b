import Buscador from "./filtros/Buscador";
import { FaMapPin } from "react-icons/fa";

import { FaPerson } from "react-icons/fa6";
import { MdLuggage } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { FaCar } from "react-icons/fa6";
import { MdSevereCold } from "react-icons/md";
import Head from "../../estructura/ProductoHeader";
import { useLocation } from "react-router-dom";
import Coches from "../../../motores/Coches";
function Producto() {
  const location = useLocation();
  const producto = location.state;

  const reserva = {
    type: "hotel",
    nombre: producto.nombre,
    fechaIda: producto.fecha,
    fechaVuelta: producto.fechaSalida,
    precio: producto.precio,
  };
  return (
    <main className="flex justify-center flex-col my-10  px-5 md:px-0">
      <div className="container">
        <Buscador />
        <Head
          nombre={producto.nombre}
          descripcion={
            <p className="flex items-center">
              <FaMapPin className="text-secondary text-lg" />
              {producto.recogida.lugar} - {producto.devolucion.lugar}
            </p>
          }
          boton="Reservar"
        />

        <article className="  mt-10 ">
          <section className=" col-span-5 lg:col-span-1 flex flex-col  justify-between border-2 border-gray-200 dark:border-slate-800 rounded-xl p-3  dark:bg-slate-800 shadow-xl">
            <div className="grid grid-cols-3">
              <img
                src={producto.img}
                alt={Coches.nombre}
                className="h-[25vh] col-span-1 object-cover rounded-lg "
              />
              <div className="w-full  col-span-2">
                <div className=" px-10  flex flex-wrap gap-2 justify-between mt-2 dark:text-slate-400 font-semibold text-sm">
                  <span className="flex p-2 transition mr-1">
                    <FaPerson className="text-lg" />
                    {producto.capacidad}
                  </span>
                  <span className="flex p-2 transition mr-1">
                    <MdLuggage className="text-lg" />
                    {producto.maletero}
                  </span>
                  <span className="flex p-2 transition">
                    <GiCarDoor className="text-lg mr-1" />
                    {producto.puertas}
                  </span>
                  <span className="flex p-2 transition">
                    <MdSevereCold className="text-lg mr-1" />
                    {producto.AC === true ? "SÍ" : "NO"}
                  </span>
                  <span className="flex p-2 transition">
                    <FaCar className="text-lg mr-1" /> {producto.tipo}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-10">
                  <div className="border-2">
                    <h3 className="bg-slate-100 p-2 text-lg font-bold">
                      Recogida:
                    </h3>
                    <div className="text-sm p-3">
                      <span>{producto.recogida.lugar}</span>
                    </div>
                  </div>
                  <div className="border-2">
                    <h3 className="bg-slate-100 p-2 text-lg font-bold">
                      Devolución:
                    </h3>
                    <div className="text-sm p-3">
                      <span>{producto.devolucion.lugar}</span>
                      <span>{producto.devolucion.lugar}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

export default Producto;
