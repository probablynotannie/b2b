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
    <div className="tw-mt-5 tw-w-full tw-col-span-9">
      <div className="tw-min-h-[30vh] tw-grid lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-4">
        {hotel && (
          <section className="tw-border-2 tw-pb-20 tw-bg-white hover:tw-scale-[102%] tw-duration-300 dark:tw-bg-slate-800 tw-relative tw-overflow-hidden tw-border-slate-100 dark:tw-border-slate-700 tw-h-auto tw-max-w-full tw-rounded-lg tw-rounded-t-lg tw-shadow-lg hover:tw-shadow-xl tw-transition">
            <div className="tw-absolute tw-bottom-0 tw-grid tw-grid-cols-2 tw-justify-between tw-items-center tw-w-full tw-p-2">
              <div className="tw-col-span-2 tw-flex tw-flex-wrap tw-gap-2 tw-justify-between tw-mt-2 tw-text-slate-900 dark:tw-text-slate-400 tw-font-semibold tw-text-sm tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-2">
                <span className="tw-flex tw-items-center">
                  <FaPerson className="tw-text-lg" /> {reserva.pax} adulto
                  {reserva.pax > 1 && "s"}
                </span>
                <span className="tw-flex tw-items-center">
                  <FaChild className="tw-text-lg" /> {reserva.pax_ninios} niño
                  {reserva.pax_ninios > 1 && "s"}
                </span>
                <span className="tw-flex tw-items-center">
                  <FaDoorOpen className="tw-text-lg tw-mr-1" />{" "}
                  {reserva.habitaciones} Habitación/es
                </span>
                <span className="tw-flex tw-items-center">
                  <MdModeNight className="tw-text-lg" />
                  {reserva.noches} noches
                </span>
              </div>
              <div className="tw-col-span-2 tw-flex tw-justify-between">
                <span
                  className={`tw-mt-2 tw-text-lg tw-text-slate-500 dark:tw-text-green-400 tw-rounded-lg tw-px-2 tw-p-1 tw-font-bold`}
                >
                  {hotel.precio}€
                </span>
                <button
                  onClick={removeHotel}
                  className="tw-mt-1 tw-text-sm tw-rounded-lg tw-shadow tw-bg-red-500 dark:tw-bg-red-800 tw-text-white tw-h-fit tw-p-2"
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
            <span
              className={`tw-absolute tw-w-[150px] tw-text-center tw-rotate-45 tw-bg-secondary/40 tw-text-white tw-rounded-lg tw-px-2 tw-p-1 tw-font-bold tw-text-sm tw-top-5 -tw-right-10 tw-z-10 tw-shadow-lg`}
            >
              Hotel
            </span>

            <div className="tw-relative">
              <img
                className="tw-h-[25vh] tw-w-full tw-object-cover tw-rounded-t-lg"
                src={hotel.img}
                alt="imagen hotel"
              />
              <div className="tw-bg-emerald-500 tw-bg-opacity-15 tw-absolute tw-top-0 tw-w-full tw-h-full" />
            </div>
            <div className="tw-p-3">
              <h4 className="tw-text-secondary tw-font-semibold">
                {hotel.nombre}
                <span className="tw-text-sm tw-ml-1 tw-text-slate-400 tw-font-normal">
                  - {hotel.regimen}
                </span>
              </h4>
              <div className="tw-pb-2">
                <span className="tw-text-slate-400 dark:tw-text-slate-400 tw-text-sm tw-flex tw-items-center tw-mb-2">
                  <FaMapPin className="tw-text-slate-600 dark:tw-text-slate-500 tw-mr-2" />
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
          <button className=" tw-btn_accesorios tw-btn_primario  tw-mt-10">
            Total: {totalPrice}€
          </button>
        </Link>
      )}
    </div>
  );
}

export default Cesta;
