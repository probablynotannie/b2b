import { FaMapPin } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Ferrys from "./FerrySeleccionado";

function Cesta({ hotel, reserva, setHotel, ferry, habitacion }) {
  const reservaFinal = {
    habitacion: habitacion || null,
    hotel: hotel || null,
    ferry: ferry || null,
  };
  const removeHotel = () => {
    setHotel(null);
  };
  const totalPrice = hotel
    ? parseFloat(hotel.precio) +
      (ferry.ida?.precio + (ferry.vuelta?.precio || 0))
    : ferry.ida?.precio + (ferry.vuelta?.precio || 0);

  return (
    <div className="mt-5 w-full col-span-9">
      <div className="min-h-[30vh] grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {hotel && (
          <section className="border-2 pb-20 bg-white hover:scale-[102%] duration-300 dark:bg-slate-800 relative border-slate-100 dark:border-slate-700 h-auto max-w-full rounded-lg rounded-t-lg  shadow-lg hover:shadow-xl transition">
            <div className="absolute bottom-0 grid grid-cols-2 justify-between items-center w-full p-2">
              <div className="col-span-2 flex flex-wrap gap-2 justify-between mt-2 text-slate-900 dark:text-slate-400 font-semibold text-sm border-b-2 border-slate-100 dark:border-slate-700 pb-2 mb-2">
                <span className="flex items-center">
                  <FaPerson className="text-lg" /> {reserva.pax} adulto
                  {reserva.pax > 1 && "s"}
                </span>
                <span className="flex items-center">
                  <FaChild className="text-lg" /> {reserva.pax_ninios} niño
                  {reserva.pax_ninios > 1 && "s"}
                </span>
                <span className="flex items-center">
                  <FaDoorOpen className="text-lg mr-1" /> {reserva.habitaciones}{" "}
                  Habitación/es
                </span>
                <span className="flex items-center">
                  <MdModeNight className="text-lg" />
                  {reserva.noches} noches
                </span>
              </div>
              <div className="col-span-2 flex justify-between ">
                <span
                  className={`mt-2 text-lg text-slate-500 dark:text-green-400 rounded-lg px-2 p-1 font-bold `}
                >
                  {hotel.precio}€
                </span>
                <button
                  onClick={removeHotel}
                  className="mt-1 text-sm rounded-lg shadow bg-red-500 dark:bg-red-800 text-white h-fit p-2"
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
            <span
              className={`absolute rotate-45 tw-bg-secondary rounded-lg px-2 p-1  font-bold text-sm top-5 right-5 z-10 shadow-lg`}
            >
              Hotel
            </span>

            <div className="relative">
              <img
                className="h-[25vh] w-full object-cover  rounded-t-lg"
                src={hotel.img}
                alt="imagen hotel"
              />
              <div className="bg-emerald-500 bg-opacity-15 absolute top-0 w-full h-full" />
            </div>
            <div className="p-3">
              <h4 className="tw-text-secondary font-semibold">
                {hotel.nombre}
                <span className="text-sm ml-1 text-slate-400 font-normal">
                  - {hotel.regimen}
                </span>
              </h4>
              <div className=" pb-2">
                <span className="text-slate-400 dark:text-slate-400 text-sm flex items-center mb-2">
                  <FaMapPin className="text-slate-600 dark:text-slate-500 mr-2" />
                  {hotel.direccion}
                </span>
              </div>
            </div>
          </section>
        )}
        <Ferrys ferry={ferry} />
      </div>
      {hotel && (
        <Link state={reservaFinal} to={"/hotelmasferry"}>
          <button className="tw-bg-secondary font-semibold text-white p-3 rounded-lg shadow hover:shadow-lg transition mt-10">
            Total: {totalPrice}€
          </button>
        </Link>
      )}
    </div>
  );
}

export default Cesta;
