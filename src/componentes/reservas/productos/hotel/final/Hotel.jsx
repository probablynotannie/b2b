import Map from "../detalles/hoteles/Map";
import { FaCalendarAlt } from "react-icons/fa";
import Estrellas from "../../../../../helpers/visuales/Estrellas";
import getEstrellas from "../scripts/getEstrellas";
function Hote({ hotel, habitacion }) {
  console.log("hotel", hotel);
  return (
    <>
      <section className="tw-my-10 2xl:tw-flex tw-gap-5">
        <img
          src={hotel.ListFotos[0]}
          alt="imagen Habitación"
          className="tw-w-full tw-h-[30vh] 2xl:tw-w-[30vw] tw-object-cover tw-rounded-lg tw-shadow"
        />
        <div className="tw-bg-slate-100 dark:tw-bg-slate-800 tw-rounded-lg tw-shadow tw-w-full tw-p-5 tw-mt-8">
          <div className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-200 tw-pb-2 tw-mb-3 dark:tw-border-slate-700">
            <div className="tw-flex tw-gap-2">
              <h4 className="tw-font-bold dark:tw-text-white">
                {hotel.NombreHotel}
              </h4>
              <Estrellas estrellas={getEstrellas(hotel.CategoryName)} />
            </div>
            <span className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-items-center tw-text-sm tw-gap-2">
              <FaCalendarAlt className="tw-text-secondary dark:tw-text-secondaryDark" />
              {hotel.fecha} - {hotel.fechaSalida}
            </span>
          </div>
          <p className="tw-text-sm dark:tw-text-slate-400">{hotel.ShortDesc}</p>
          <div className="tw-grid lg:tw-grid-cols-6 md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-mt-3">
            <div className="tw-bg-white dark:tw-bg-slate-500 dark:tw-text-slate-100 tw-text-xs">
              <h5 className="tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400 tw-p-1">
                Habitaciones
              </h5>
              <span className="tw-p-1">{habitacion.combinedName}</span>
            </div>
            <div className="tw-bg-white dark:tw-bg-slate-500 dark:tw-text-slate-100 tw-text-xs">
              <h5 className="tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400 tw-p-1">
                Regimen
              </h5>
              <span className="tw-p-1">{habitacion.BoardName}</span>
            </div>
            <div className="tw-bg-white dark:tw-bg-slate-500 dark:tw-text-slate-100 tw-text-xs">
              <h5 className="tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400 tw-p-1">
                Pax
              </h5>
              <span className="tw-p-1">
                {habitacion.adultosTotal + habitacion.niniosTotal}x
              </span>
            </div>
            <div className="tw-bg-white dark:tw-bg-slate-500 dark:tw-text-slate-100 tw-text-xs">
              <h5 className="tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400 tw-p-1">
                Noches
              </h5>
              <span className="tw-p-1">2x</span>
            </div>
            <div className="tw-bg-white dark:tw-bg-slate-500 dark:tw-text-slate-100 tw-text-xs">
              <h5 className="tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400 tw-p-1">
                Núm Hab
              </h5>
              <span className="tw-p-1">{habitacion.relatedRooms.length}x</span>
            </div>
            <div className="tw-bg-white dark:tw-bg-slate-500 dark:tw-text-slate-100 tw-text-xs">
              <h5 className="tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400 tw-p-1">
                Total
              </h5>
              <span className="tw-p-1">
                {parseFloat(habitacion.Price).toFixed(2)}{" "}
                {habitacion.Currency === "EUR" ? "€" : habitacion.Currency}
              </span>
            </div>
          </div>
          <div>
            <h5 className="tw-font-bold tw-mt-5 tw-mb-2 dark:tw-text-slate-100">
              Extras
            </h5>
            {/* <ul className="tw-text-sm tw-ml-3 dark:tw-text-slate-300 tw-flex tw-w-full tw-gap-2 tw-text-slate-600">
              {hotel.extras.map((extra, index) => (
                <li key={index} className="tw-flex tw-gap-2">
                  <FaCheck className="tw-text-green-500" />
                  {extra}
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </section>
      <div className="tw-h-[40vh]">
        <Map hotel={hotel} />
      </div>
    </>
  );
}

export default Hote;
