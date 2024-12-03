import { useState } from "react";
import { FaMapPin, FaClock } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { MdRestaurant } from "react-icons/md";
import Detalles from "./Detalles";
import Resumen from "./Resumen";
import Head from "../../../estructura/ProductoHeader";
import { useLocation } from "react-router-dom";
function Destino() {
  const location = useLocation();
  const producto = location.state;
  const [selectedHotel, setSelectedHotel] = useState(producto.hotelPrecio[0]);
  const handleHotelChange = (e) => {
    const selectedOption = producto.hotelPrecio.find(
      (hotel) => hotel.hotel === e.target.value
    );
    setSelectedHotel(selectedOption);
  };

  return (
    <article className="container my-10 lg:mb-10 lg:mt-auto ">
      <Head
        nombre={producto.nombre}
        descripcion={
          <p className="flex items-center flex-wrap  font-semibold">
            <span className="mr-2 flex items-center text-slate-600 dark:text-slate-400 text-sm">
              <FaMapPin className="text-secondary text-lg" />
              {producto.ubicacion}
            </span>
            <span className="mr-2 flex items-center text-slate-600 dark:text-slate-400 text-sm">
              <FaClock className="mr-2 text-secondary text-lg" />
              {producto.dias} días
            </span>
            <span className="mr-2 flex items-center text-slate-600 dark:text-slate-400 text-sm">
              <FaBed className="mr-2 text-secondary text-lg" />
              {selectedHotel.hotel}
            </span>
            <span className="mr-2 flex items-center text-slate-600 dark:text-slate-400 text-sm">
              <MdRestaurant className="mr-2 text-secondary text-lg" />
              {producto.desayunos} desayunos
            </span>
          </p>
        }
        boton={"PVP Desde " + selectedHotel.precio}
      />
      <article className="my-5 mt-10 grid grid-cols-3 gap-10">
        <section className="col-span-3 lg:col-span-2 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 min-h-[90vh] dark:bg-slate-800">
          <Detalles producto={producto} />
        </section>
        <section className="col-span-3 lg:col-span-1 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 h-fit sticky top-5 dark:bg-slate-800">
          <Resumen
            handleHotelChange={handleHotelChange}
            setSelectedHotel={setSelectedHotel.hotel}
            producto={{ ...producto, precio: selectedHotel.precio }}
          />
        </section>
      </article>
    </article>
  );
}

export default Destino;
