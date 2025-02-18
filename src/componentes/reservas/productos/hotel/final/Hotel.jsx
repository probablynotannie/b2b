import { FaHotel } from "react-icons/fa";
import Map from "../../../estructura/hoteles/Map";
import { FaMapPin } from "react-icons/fa6";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { FaCalendarAlt, FaCheck } from "react-icons/fa";
function Hote({ hotel, habitacion }) {
  return (
    <article className="tw-mt-10 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-border dark:tw-bg-slate-800 tw-bg-slate-50 tw-p-5 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
      <section className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
        <div>
          <h3 className="tw-text-lg tw-font-bold dark:tw-text-white">
            {hotel.nombre} ({habitacion.nombre}) - {habitacion.regimen}
          </h3>
          <p className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-gap-2 tw-items-center">
            <FaMapPin className="tw-text-secondary dark:tw-text-secondary" />
            {hotel.ubicacion}
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <FaHotel className="tw-text-xl tw-text-secondary dark:tw-text-secondary" />

          <span className="tw-text-secondary dark:tw-text-secondary tw-font-bold">
            {parseFloat(habitacion.precio).toFixed(2)}€
          </span>
        </div>
      </section>
      <section className="tw-my-10 2xl:tw-flex tw-gap-5">
        <img
          src={hotel.img}
          alt="imagen Habitación"
          className="tw-w-full tw-h-[30vh] 2xl:tw-w-[30vw] tw-object-cover tw-rounded-lg tw-shadow"
        />
        <div className="tw-bg-slate-100 dark:tw-bg-slate-800 tw-rounded-lg tw-shadow tw-w-full tw-p-5">
          <div className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-200 tw-pb-2 tw-mb-3 dark:tw-border-slate-700">
            <div className="tw-flex tw-gap-2">
              <h4 className="tw-font-bold dark:tw-text-white">
                {hotel.nombre}
              </h4>
              <div className="tw-flex tw-text-secondary">
                {Array.from({ length: 5 }, (_, i) =>
                  i < Number(hotel.estrellas) ? (
                    <IoMdStar key={i} className="tw-text-lg" />
                  ) : (
                    <IoMdStarOutline key={i} className="tw-text-lg" />
                  )
                )}
              </div>
            </div>
            <span className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-items-center tw-text-sm tw-gap-2">
              <FaCalendarAlt className="tw-text-secondary dark:tw-text-secondary" />
              {hotel.fecha} - {hotel.fechaSalida}
            </span>
          </div>
          <p className="tw-text-sm dark:tw-text-slate-400">
            {" "}
            {hotel.descripcion}
          </p>

          <div className="tw-grid lg:tw-grid-cols-6 md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-mt-3">
            <div className="tw-bg-white dark:tw-bg-slate-500 dark:tw-text-slate-100 tw-text-xs">
              <h5 className="tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400 tw-p-1">
                Habitaciones
              </h5>
              <span className="tw-p-1">{habitacion.nombre}</span>
            </div>
            <div className="tw-bg-white dark:tw-bg-slate-500 dark:tw-text-slate-100 tw-text-xs">
              <h5 className="tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400 tw-p-1">
                Regimen
              </h5>
              <span className="tw-p-1">{habitacion.regimen}</span>
            </div>
            <div className="tw-bg-white dark:tw-bg-slate-500 dark:tw-text-slate-100 tw-text-xs">
              <h5 className="tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400 tw-p-1">
                Pax
              </h5>
              <span className="tw-p-1">{hotel.pax + hotel.pax_ninios}x</span>
            </div>
            <div className="tw-bg-white dark:tw-bg-slate-500 dark:tw-text-slate-100 tw-text-xs">
              <h5 className="tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400 tw-p-1">
                Noches
              </h5>
              <span className="tw-p-1">{hotel.noches}x</span>
            </div>
            <div className="tw-bg-white dark:tw-bg-slate-500 dark:tw-text-slate-100 tw-text-xs">
              <h5 className="tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400 tw-p-1">
                Núm Hab
              </h5>
              <span className="tw-p-1">{hotel.habitacion}x</span>
            </div>
            <div className="tw-bg-white dark:tw-bg-slate-500 dark:tw-text-slate-100 tw-text-xs">
              <h5 className="tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400 tw-p-1">
                Total
              </h5>
              <span className="tw-p-1">
                {parseFloat(habitacion.precio).toFixed(2)}€
              </span>
            </div>
          </div>
          <div>
            <h5 className="tw-font-bold tw-mt-5 tw-mb-2 dark:tw-text-slate-100">
              Extras
            </h5>
            <ul className="tw-text-sm tw-ml-3 dark:tw-text-slate-300 tw-flex tw-w-full tw-gap-2 tw-text-slate-600">
              {hotel.extras.map((extra, index) => (
                <li key={index} className="tw-flex tw-gap-2">
                  <FaCheck className="tw-text-green-500" />
                  {extra}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="tw-h-[40vh]">
        <Map hotel={hotel} />
      </div>
    </article>
  );
}

export default Hote;
