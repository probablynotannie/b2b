import { FaMapPin } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function Cesta({ hotel, actividades, reserva, setHotel, setActividades }) {
  console.log(actividades);
  const removeHotel = () => {
    setHotel(null); // Set hotel state to null or empty, depending on how the state is structured
  };

  // Function to remove actividad
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
      <div className="min-h-[30vh] grid grid-cols-3 gap-4">
        {hotel && (
          <section className="border-2 pb-10 bg-white hover:scale-[102%] duration-300 dark:bg-slate-800 relative border-slate-100 dark:border-slate-700 h-auto max-w-full rounded-lg rounded-t-lg  shadow-lg hover:shadow-xl transition">
            <div className="flex justify-between items-center border-t-2 mt-2 border-slate-100 dark:border-slate-700 absolute bottom-0 w-full p-2">
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
                <div className="flex flex-wrap gap-2 justify-between mt-2 text-slate-900 dark:text-slate-400 font-semibold text-sm">
                  <span className="flex items-center">
                    <FaPerson className="text-lg" /> {reserva.pax} adulto
                    {reserva.pax !== 1 && "s"}
                  </span>
                  <span className="flex items-center">
                    <FaChild className="text-lg" /> {reserva.pax_ninios} niño
                  </span>
                  <span className="flex items-center">
                    <FaDoorOpen className="text-lg mr-1" />{" "}
                    {reserva.habitaciones} Habitación/es
                  </span>
                  <span className="flex items-center">
                    <MdModeNight className="text-lg" />
                    {reserva.noches} noches
                  </span>
                </div>
              </div>
            </div>
          </section>
        )}
        {actividades.length > 0 && (
          <>
            {actividades.map((actividad, index) => (
              <section
                className="pb-10 bg-white hover:scale-[102%] duration-300 dark:bg-slate-800 relative  h-auto max-w-full rounded-lg rounded-t-lg  shadow-lg hover:shadow-xl transition"
                key={index}
              >
                <div className="flex justify-between items-center border-t-2 mt-2 border-slate-100 dark:border-slate-700 absolute bottom-0 w-full p-2">
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
                  <p className="text-sm dark:text-slate-400">
                    {actividad.descripcion_corta}
                  </p>
                </div>
              </section>
            ))}
          </>
        )}
      </div>
      {hotel && actividades.length > 0 && (
        <button className="bg-secondary font-semibold text-white p-3 rounded-lg shadow hover:shadow-lg transition mt-10">
          Total: {totalPrice}€
        </button>
      )}
    </div>
  );
}

export default Cesta;
