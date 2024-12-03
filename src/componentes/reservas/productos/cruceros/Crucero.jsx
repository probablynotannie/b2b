import Buscador from "./filtros/Buscador";
import { GiCruiser } from "react-icons/gi";
import Tarifas from "./Tarifa_lista";
import Head from "../../estructura/ProductoHeader";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function Producto() {
  const location = useLocation();
  const producto = location.state;
  function getRandomTailwindColor() {
    const colors = [
      "bg-red-500",
      "bg-green-500",
      "bg-blue-500",
      "bg-yellow-500",
      "bg-indigo-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-teal-500",
      "bg-orange-500",
      "bg-gray-500",
      "bg-emerald-500",
      "bg-cyan-500",
      "bg-fuchsia-500",
      "bg-rose-500",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const adultos = producto.pax[0].pax;
  const ninios = producto.pax[1].pax;
  const [precio, setPrecio] = useState(0);
  const reserva = {
    type: "crucero",
    nombre: producto.nombre,
    fechaIda: producto.fecha,
    fechaVuelta: producto.fechaSalida,
    precio: precio,
  };
  return (
    <main className="flex justify-center flex-col my-10  px-5 md:px-0">
      <div className="container">
        <Buscador />
        <Head
          nombre={producto.nombreCrucero}
          descripcion={
            <p className="flex items-center">
              <GiCruiser className="text-secondary text-lg" />
              {producto.titulo}
            </p>
          }
          boton="Reservar"
        />
        <article className="mt-5">
          <section className="flex flex-col md:flex-row  gap-10">
            <img
              src={producto.crucero}
              alt="imagen crucero"
              className="h-[25vh] shadow-md rounded-xl object-cover"
            />
            <div>
              <h2 className="font-semibold text-lg dark:text-white">
                {producto.recorrido}
              </h2>
              <p className="mt-5 text-slate-500 dark:text-slate-300 text-sm pr-10">
                {producto.descripcion}
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mt-5">
                {producto.incluidos.map((incluido, index) => (
                  <span
                    key={index}
                    className={`p-1 flex items-center justify-center text-center rounded-md text-sm lowercase text-white font-semibold ${getRandomTailwindColor()}`} // Apply random Tailwind background color
                  >
                    {incluido}
                  </span>
                ))}
              </div>
            </div>
          </section>
          <section>
            {adultos}
            {ninios}
          </section>
          <section>
            <Tarifas setPrecio={setPrecio} precios={producto.precios} />
            {precio}
          </section>
        </article>
      </div>
    </main>
  );
}

export default Producto;
