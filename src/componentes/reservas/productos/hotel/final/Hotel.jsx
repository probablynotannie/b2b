import Map from "../detalles/hoteles/Map";
import { FaCalendarAlt, FaEye } from "react-icons/fa";
import Estrellas from "../../../../../helpers/visuales/Estrellas";
import getEstrellas from "../scripts/getEstrellas";
import useNetoStore from "../scripts/zustand/useNetoStore";
import Galeria from "../detalles/contenidoSecundario/Gallery";
function Hote({ hotel, habitacion }) {
  const { neto, setNeto } = useNetoStore();
  return (
    <>
      <section className="tw-my-10 2xl:tw-flex tw-gap-5">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-5">
          <div>
            <Galeria
              imagenes={hotel.ListFotos}
              texto={habitacion.combinedName}
            />
          </div>
          <div className="tw-bg-slate-100 dark:tw-bg-slate-800 tw-rounded-lg tw-shadow tw-w-full tw-p-5 tw-col-span-2">
            <div className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-200 tw-pb-2 tw-mb-3 dark:tw-border-slate-700">
              <div className="tw-flex tw-gap-2">
                <div className="tw-flex tw-gap-1">
                  <button
                    onClick={() => setNeto(!neto)}
                    className={` tw-w-fit tw-p-1 tw-rounded-lg ${
                      neto === true
                        ? "tw-bg-sky-100 tw-text-sky-500"
                        : "tw-bg-secondary tw-text-white"
                    }`}
                  >
                    <FaEye />
                  </button>
                  <h4 className="tw-font-bold dark:tw-text-white">
                    {hotel.NombreHotel}
                    hola
                  </h4>
                </div>
                <Estrellas estrellas={getEstrellas(hotel.CategoryName)} />
              </div>
              <span className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-items-center tw-text-sm tw-gap-2">
                <FaCalendarAlt className="tw-text-secondary dark:tw-text-secondaryDark" />
                {hotel.fecha} - {hotel.fechaSalida}
              </span>
            </div>
            <p className="tw-text-sm dark:tw-text-slate-400">
              {hotel.ShortDesc}
            </p>
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
                <span className="tw-p-1">
                  {habitacion.relatedRooms.length}x
                </span>
              </div>
              <div
                className={`
                tw-bg-white dark:tw-bg-slate-500 dark:tw-text-slate-100 tw-text-xs
                ${neto === true && "tw-text-sky-800 tw-font-semibold"}
                `}
              >
                <h5 className="tw-text-xs tw-font-bold tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400 tw-p-1">
                  Total
                </h5>
                <span className="tw-p-1">
                  {neto === true && (
                    <span className="tw-font-normal">Neto:</span>
                  )}
                  {parseFloat(
                    neto === true ? habitacion.Pvp : habitacion.Price
                  ).toFixed(2)}
                  {habitacion.Currency === "EUR" ? "€" : habitacion.Currency}
                  <span
                    className={`tw-font-normal ${
                      neto === true ? "tw-block" : "tw-hidden"
                    } `}
                  >
                    Agencia: {habitacion.Price} (+
                    {parseFloat(habitacion.Price - habitacion.Pvp).toFixed(2)})
                  </span>
                </span>
              </div>
            </div>
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
