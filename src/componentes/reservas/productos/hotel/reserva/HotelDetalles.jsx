import Foto from "../../../../../helpers/visuales/ReservaFinal/Resumen";
import { FaPerson, FaChild, FaDoorOpen } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";
import Info from "../../../estructura/hoteles/Info";
function HotelDetalles({ hotel }) {
  return (
    <section>
      <Foto img={hotel.img} txt={<p>{hotel.nombre}</p>} />
      <div className="flex flex-wrap gap-2 justify-between mt-2 text-slate-900 dark:tw-text-slate-400 font-semibold text-sm">
        {
          <span className="flex items-center">
            <FaPerson className="text-lg" /> {hotel.pax} adulto
            {hotel.pax !== 1 && "s"}
          </span>
        }
        <span className="flex items-center">
          <FaChild className="text-lg" /> {hotel.pax_ninios} niño
        </span>
        <span className="flex items-center">
          <FaDoorOpen className="text-lg mr-1" /> {hotel.habitacion}{" "}
          Habitación/es
        </span>
        <span className="flex items-center">
          <MdModeNight className="text-lg" />
          {hotel.noches} noches
        </span>
      </div>
      <div className="my-8">
        <Info titulo={"Descripción de hotel"} descripcion={hotel.descripcion} />
      </div>
    </section>
  );
}

export default HotelDetalles;
