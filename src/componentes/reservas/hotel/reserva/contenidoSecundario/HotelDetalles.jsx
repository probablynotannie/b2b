import Foto from "../../../../../helpers/visuales/ReservaFinal/Resumen";
import { FaPerson, FaChild, FaDoorOpen } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";
function HotelDetalles({ hotel, habitacion }) {
  return (
    <section>
      <Foto img={hotel.img} txt={<p>{hotel.nombre}</p>} />
      <div className="flex flex-wrap justify-between gap-2 mt-2 text-sm font-semibold text-slate-900 dark:tw-text-slate-400">
        <span className="flex items-center">
          <FaPerson className="text-lg" /> {habitacion.adultosTotal} adulto
          {habitacion.adultosTotal !== 1 && "s"}
        </span>

        <span className="flex items-center">
          <FaChild className="text-lg" /> {habitacion.niniosTotal} niño{" "}
          {habitacion.niniosTotal !== 1 && "s"}
        </span>
        <span className="flex items-center">
          <FaDoorOpen className="mr-1 text-lg" /> {habitacion.habitacion}{" "}
          Habitación/es
        </span>
        <span className="flex items-center">
          <MdModeNight className="text-lg" />
          {hotel.noches} noches
        </span>
      </div>
    </section>
  );
}

export default HotelDetalles;
