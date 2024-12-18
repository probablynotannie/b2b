import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { FaMapPin } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";
import { Carousel } from "flowbite-react";
import { FaDoorOpen } from "react-icons/fa";

function Cesta({ hotel, actividades, reserva }) {
  return (
    <div className="min-h-[30vh]">
      {hotel && (
        <article
          className={`lg:flex flex-row transition mt-10 relative min-h-[15vh] rounded-xl bg-slate-100 dark:bg-slate-800 border-slate-100 dark:border-slate-800 shadow-xl lg:shadow-lg hover:shadow-xl border-2`}
        >
          <div className="p-5 lg:w-2/3">
            <div className="border-b-2 border-slate-200 dark:border-slate-700 pb-2">
              <div className="flex justify-between w-full">
                <h4 className="text-secondary font-semibold">
                  {hotel.nombre}
                  <span className="text-sm ml-1 text-slate-400 font-normal">
                    - {hotel.regimen}
                  </span>
                </h4>
                <div className="flex text-secondary">
                  {[...Array(5)].map((_, i) =>
                    i < hotel.estrellas ? (
                      <IoMdStar key={i} className="text-lg" />
                    ) : (
                      <IoMdStarOutline key={i} className="text-lg" />
                    )
                  )}
                </div>
              </div>
              <span className="text-slate-400 dark:text-slate-400 text-sm flex items-center mb-2">
                <FaMapPin className="text-slate-600 dark:text-slate-500 mr-2" />
                {hotel.direccion}
              </span>
              <div className="flex flex-wrap gap-2 justify-between mt-2 text-slate-900 dark:text-slate-400 font-semibold text-sm">
                <span className="flex items-center">
                  <FaPerson className="text-lg" /> {reserva.pax} adulto
                  {reserva.pax !== 1 && "s"}
                </span>
                <span className="flex items-center">
                  <FaChild className="text-lg" /> {reserva.pax_ninios} niño
                </span>
                <span className="flex items-center">
                  <FaDoorOpen className="text-lg mr-1" /> {reserva.habitaciones}
                  Habitación/es
                </span>
                <span className="flex items-center">
                  <MdModeNight className="text-lg" />
                  {reserva.noches} noches
                </span>
              </div>
            </div>
            <p className="lg:text-slate-600 mt-2 dark:text-slate-400 text-sm text-slate-500 line-clamp-2">
              {hotel.descripcion}
            </p>
          </div>
        </article>
      )}
    </div>
  );
}

export default Cesta;
