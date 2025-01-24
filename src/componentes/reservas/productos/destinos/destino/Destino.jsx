import { useState } from "react";

import Detalles from "./Detalles";
import Resumen from "./Resumen";
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
      <article className="my-5 mt-10 grid grid-cols-3 gap-10">
        <section className=" col-span-3 lg:col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 min-h-[55vh] dark:bg-slate-800">
          <Detalles producto={producto} />
        </section>
        <section className="col-span-3 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 h-fit sticky top-5 dark:bg-slate-800">
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
