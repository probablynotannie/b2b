import { FaMapPin } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import formatearFecha from "../../estructura/FormatearFecha";
function Cesta({ hotel, actividades, reserva, setHotel, setActividades }) {
  const reservaFinal = {
    hotel: hotel || null,
    actividades: actividades || [],
  };
  console.log(reservaFinal);
  const removeHotel = () => {
    setHotel(null);
  };
  const removeActividad = (actividad) => {
    setActividades((prevActividades) =>
      prevActividades.filter((item) => item.titulo !== actividad.titulo)
    );
  };
  const totalPrice =
    (hotel ? parseFloat(hotel.precio) : 0) +
    actividades.reduce(
      (sum, actividad) => sum + parseFloat(actividad.precioTotal),
      0
    );

  return (
    <div className="mt-5">
      <div className="min-h-[30vh] grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {hotel && (
          <section className=" border-2 pb-20 bg-white hover:scale-[102%] duration-300 dark:bg-slate-800 relative border-slate-100 dark:border-slate-700 h-auto max-w-full rounded-lg rounded-t-lg  shadow-lg hover:shadow-xl transition">
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
              className={`absolute rotate-45 bg-secondary rounded-lg px-2 p-1  font-bold text-sm top-5 right-5 z-10 shadow-lg`}
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
            <div className="p-5">
              <h4 className="text-secondary font-semibold">
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
        {actividades.length > 0 && (
          <>
            {actividades.map((actividad, index) => (
              <section
                className="pb-20 bg-white hover:scale-[102%] duration-300 dark:bg-slate-800 h-auto max-w-full rounded-lg rounded-t-lg  shadow-lg hover:shadow-xl transition relative"
                key={index}
              >
                <div className="absolute bottom-0 grid grid-cols-2 justify-between items-center w-full p-2">
                  <div className="col-span-2 flex justify-between pb-2 mb-2 border-b-2 border-slate-100 dark:border-slate-700">
                    <span className="flex items-center">
                      <FaPerson className="text-lg" />{" "}
                      {actividad.paxReserva.adultos} adulto
                      {actividad.paxReserva.adultos > 1 && "s"}
                    </span>
                    <span className="flex items-center">
                      <FaChild className="text-lg" />{" "}
                      {actividad.paxReserva.ninios} niño
                      {actividad.paxReserva.ninios > 1 && "s"}
                    </span>
                  </div>
                  <div className="flex justify-between col-span-2">
                    <span
                      className={`mt-2 text-lg text-slate-500 dark:text-green-400 rounded-lg px-2 p-1 font-bold `}
                    >
                      {actividad.precioTotal}€
                    </span>
                    <button
                      onClick={() => removeActividad(actividad)}
                      className="mt-1 text-sm rounded-lg shadow bg-red-500 dark:bg-red-800 text-white h-fit p-2"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </div>
                <span
                  className={`absolute rotate-45 bg-blue-500 rounded-lg px-2 p-1  font-bold text-sm top-5 right-5 z-10 shadow-lg ${
                    actividad.tipoPrecio === "Neto"
                      ? "bg-green-300 text-green-800"
                      : "bg-red-500 text-red-200"
                  }`}
                >
                  {actividad.tipoPrecio}
                </span>
                <div className="relative">
                  <img
                    className="h-[25vh] w-full object-cover  rounded-t-lg"
                    src={actividad.img}
                    alt={actividad.titulo}
                  />
                  <div className="bg-emerald-500 bg-opacity-15 absolute top-0 w-full h-full" />
                </div>
                <div className="p-5">
                  <h1 className="font-semibold text-slate-600 dark:text-slate-300">
                    {actividad.titulo}
                  </h1>

                  <div>
                    <p className="flex items-center gap-2">
                      <FaCalendarAlt className="text-secondary" />
                      {formatearFecha(actividad.fechaSeleccionada)} a las{" "}
                      {actividad.horaSeleccionada}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </>
        )}
      </div>
      {hotel && actividades.length > 0 && (
        <Link to="/hotel+actividades" state={{ hotel, actividades }}>
          <button className="bg-secondary font-semibold text-white p-3 rounded-lg shadow hover:shadow-lg transition mt-10">
            Total: {totalPrice.toFixed(2)}€
          </button>
        </Link>
      )}
    </div>
  );
}

export default Cesta;
