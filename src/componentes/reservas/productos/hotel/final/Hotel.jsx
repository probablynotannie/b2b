import Map from "../detalles/hoteles/Map";
import { FaEye } from "react-icons/fa";
import Estrellas from "../../../../../helpers/visuales/Estrellas";
import getEstrellas from "../hook/getEstrellas";
import useNetoStore from "../../../../../helpers/netoSwitcher/useNetoStore";
import Galeria from "../detalles/contenidoSecundario/Gallery";
import formatearFecha from "../../../../../assets/scripts/formatearFecha";
import calcularFechaSalida from "../../../../../assets/scripts/fechaSalidaConInicioYNoches";
function Hote({ hotel, habitacion }) {
  const { neto, setNeto } = useNetoStore();
  const fechaSalida = calcularFechaSalida(
    hotel.reserva.fecini,
    hotel.reserva.noc
  );
  const datos = [
    {
      id: 0,
      titulo: "Habitaciones",
      descripcion: habitacion.combinedName,
    },
    {
      id: 0,
      titulo: "Entrada",
      descripcion: formatearFecha(hotel.reserva.fecini),
    },
    {
      id: 0,
      titulo: "Salida",
      descripcion: formatearFecha(fechaSalida),
    },
    {
      id: 3,
      titulo: "Noches",
      descripcion: hotel.reserva.noc + " noches",
    },
    {
      id: 0,
      titulo: "Reembolsable",
      descripcion: (
        <span>
          {habitacion?.NoReembolsable === true ||
          habitacion?.NoReembolsable === 1
            ? "No reembolsable"
            : "reembolsable"}
        </span>
      ),
    },

    {
      id: 1,
      titulo: "Regimen",
      descripcion: habitacion.BoardName,
    },
    {
      id: 2,
      titulo: "Pax",
      descripcion: (
        <div>
          <span>adultos: {habitacion.adultosTotal}x</span>
          {habitacion.niniosTotal !== 0 && (
            <span>niños: {habitacion.niniosTotal}x</span>
          )}
        </div>
      ),
    },

    {
      id: 4,
      titulo: "Núm. Hab.",
      descripcion: habitacion.relatedRooms.length + "x",
    },
    {
      id: 5,
      titulo: "Total",
      descripcion: (
        <div>
          {neto === true && <span className="tw-font-normal">Neto:</span>}
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
        </div>
      ),
    },
  ];
  return (
    <>
      <section className="tw-my-10 2xl:tw-flex tw-gap-5">
        <div className="tw-bg-slate-100 dark:tw-bg-slate-800 tw-rounded-lg tw-shadow tw-w-full tw-p-5 tw-col-span-2 tw-h-fit">
          <div className="tw-flex tw-flex-col tw-border-b-2 tw-border-slate-200 tw-pb-2 tw-mb-3 dark:tw-border-slate-700">
            <div className="tw-flex tw-justify-between tw-items-center">
              <div className="tw-flex tw-gap-2">
                <div className="tw-flex tw-gap-1">
                  <h4 className="tw-font-bold dark:tw-text-white">
                    {hotel.NombreHotel}
                  </h4>
                </div>
                <Estrellas estrellas={getEstrellas(hotel.CategoryName)} />
              </div>
              <button
                onClick={() => setNeto(!neto)}
                className={`tw-h-fit tw-w-fit tw-p-1 tw-rounded-lg ${
                  neto === true
                    ? "tw-bg-sky-200 dark:tw-bg-sky-800 tw-text-sky-500"
                    : "tw-bg-secondary tw-text-white"
                }`}
              >
                <FaEye />
              </button>
            </div>
            <div className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-items-center tw-text-sm tw-gap-1 tw-flex-wrap">
              <time dateTime={hotel.reserva.fecini}>
                {formatearFecha(hotel.reserva.fecini)}
              </time>
              -<time dateTime={fechaSalida}>{formatearFecha(fechaSalida)}</time>
              <span>({hotel.reserva.noc} noches)</span>
            </div>
          </div>
          <p className="tw-text-sm dark:tw-text-slate-400">{hotel.ShortDesc}</p>
          <dl className="sm:tw-grid xl:tw-grid-cols-9 md:tw-grid-cols-3 sm:tw-grid-cols-2 tw-mt-3">
            {datos.map((info, index) => (
              <div
                key={info.id}
                className={`tw-bg-white dark:tw-bg-slate-700 dark:tw-text-slate-100 tw-text-xs ${
                  datos.length === index + 1 &&
                  "tw-col-span-2 tw-text-center md:tw-text-left md:tw-col-span-1"
                } `}
              >
                <dt className="tw-text-xs tw-font-bold tw-text-slate-700 tw-uppercase tw-bg-slate-50 dark:tw-bg-slate-900 dark:tw-text-slate-400 tw-p-1">
                  {info.titulo}
                </dt>
                <dd className="tw-p-2">{info.descripcion}</dd>
              </div>
            ))}
          </dl>
          <div className="tw-p-2 tw-bg-red-50 dark:tw-bg-slate-700 dark:tw-border-slate-600 tw-border-t tw-border-slate-100 tw-text-center tw-text-sm tw-flex tw-gap-1 tw-justify-center tw-items-center">
            <div
              className="tw-text-red-500 tw-lowercase"
              dangerouslySetInnerHTML={{
                __html: habitacion.Cancelation,
              }}
            />
          </div>
        </div>
      </section>
      <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-5">
        <div>
          <Galeria imagenes={hotel.ListFotos} />
        </div>
        <div className="tw-h-[40vh] lg:tw-col-span-2 tw-rounded-xl tw-overflow-hidden">
          <Map hotel={hotel} />
        </div>
      </div>
    </>
  );
}

export default Hote;
