import Buscador from "./filtros/Buscador";
import { useState } from "react";
import { FaMapPin } from "react-icons/fa";
import Head from "../../estructura/ProductoHeader";
import { useLocation } from "react-router-dom";
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
          <section className=" col-span-5 lg:col-span-1 flex flex-col  justify-between border-2 border-gray-200 dark:border-slate-800 rounded-xl p-3 text-slate-700 bg-slate-500 dark:bg-slate-800 shadow-xl"></section>
        </article>
      </div>
    </main>
  );
}

export default Producto;
