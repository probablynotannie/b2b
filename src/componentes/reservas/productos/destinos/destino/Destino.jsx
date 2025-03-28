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
    <article className="tw-container tw-my-10 lg:tw-mb-10 lg:tw-mt-auto">
      <article className="tw-my-5 tw-mt-10 tw-grid tw-grid-cols-3 tw-gap-10">
        <section className="tw-col-span-3 lg:tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-p-5 tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-min-h-[55vh] dark:tw-bg-slate-800">
          <Detalles producto={producto} />
        </section>
        <section className="tw-col-span-3 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-p-5 tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-h-fit tw-sticky tw-top-5 dark:tw-bg-slate-800">
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
