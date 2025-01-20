import { FaHotel } from "react-icons/fa";
import Map from "../../../estructura/hoteles/Map";
import { FaMapPin } from "react-icons/fa6";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { FaCalendarAlt, FaCheck } from "react-icons/fa";
function Hote({ hotel, habitacion }) {
  return (
    <section className="mt-10 shadow-lg hover:shadow-xl transition duration-300 border dark:bg-slate-800 bg-slate-50 p-5 border-slate-200 dark:border-slate-700  rounded-lg">
      <section className="flex justify-between items-center border-b-2 border-slate-100 dark:border-slate-700 pb-2 mb-5">
        <div>
          <h3 className="text-lg font-bold dark:text-white">
            {hotel.nombre} ({habitacion.nombre}) - {habitacion.regimen}
          </h3>
          <p className="text-slate-500 dark:text-slate-300 flex gap-2 items-center">
            <FaMapPin className="text-secondary dark:text-secondaryDark" />
            {hotel.ubicacion}
          </p>
        </div>
        <FaHotel className="text-xl text-secondary dark:text-secondaryDark" />
      </section>
      <section className="my-10 2xl:flex gap-5">
        <img
          src={hotel.img}
          alt="imagen Habitación"
          className="w-full h-[30vh] 2xl:w-[30vw] object-cover rounded-lg shadow"
        />
        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg shadow w-full p-5">
          <div className="flex justify-between items-center border-b-2 border-slate-200 pb-2 mb-3 dark:border-slate-700">
            <div className="flex gap-2">
              <h4 className="font-bold dark:text-white">{hotel.nombre}</h4>
              <div className="flex text-secondary">
                {Array.from({ length: 5 }, (_, i) =>
                  i < Number(hotel.estrellas) ? (
                    <IoMdStar key={i} className="text-lg" />
                  ) : (
                    <IoMdStarOutline key={i} className="text-lg" />
                  )
                )}
              </div>
            </div>
            <span className="text-slate-500 dark:text-slate-300 flex items-center text-sm gap-2">
              <FaCalendarAlt className="text-secondary dark:text-secondaryDark" />
              {hotel.fecha} - {hotel.fechaSalida}
            </span>
          </div>
          <p className="text-sm dark:text-slate-400"> {hotel.descripcion}</p>

          <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 mt-3">
            <div className="bg-white dark:bg-slate-500 dark:text-slate-100 text-xs">
              <h5 className="text-xs font-bold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-1">
                Habitaciones
              </h5>
              <span className="p-1">{habitacion.nombre}</span>
            </div>
            <div className="bg-white dark:bg-slate-500 dark:text-slate-100 text-xs">
              <h5 className="text-xs font-bold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-1">
                Regimen
              </h5>
              <span className="p-1">{habitacion.regimen}</span>
            </div>
            <div className="bg-white dark:bg-slate-500 dark:text-slate-100 text-xs">
              <h5 className="text-xs font-bold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-1">
                Pax
              </h5>
              <span className="p-1">{hotel.pax + hotel.pax_ninios}x</span>
            </div>
            <div className="bg-white dark:bg-slate-500 dark:text-slate-100 text-xs">
              <h5 className="text-xs font-bold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-1">
                Noches
              </h5>
              <span className="p-1">{hotel.noches}x</span>
            </div>
            <div className="bg-white dark:bg-slate-500 dark:text-slate-100 text-xs">
              <h5 className="text-xs font-bold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-1">
                Núm Hab
              </h5>
              <span className="p-1">{hotel.habitacion}x</span>
            </div>
            <div className="bg-white dark:bg-slate-500 dark:text-slate-100 text-xs">
              <h5 className="text-xs font-bold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 p-1">
                Total
              </h5>
              <span className="p-1">{habitacion.precio.toFixed(2)}€</span>
            </div>
          </div>
          <div>
            <h5 className="font-bold mt-5 mb-2 dark:text-slate-100">Extras</h5>
            <ul className="text-sm ml-3 dark:text-slate-300 flex w-full gap-2 text-slate-600">
              {hotel.extras.map((extra, index) => (
                <li key={index} className="flex gap-2">
                  <FaCheck className="text-green-500" />
                  {extra}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="h-[40vh]">
        <Map hotel={hotel} />
      </div>
    </section>
  );
}
export default Hote;
