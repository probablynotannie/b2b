import { FaCalendar, FaFile, FaMapPin } from "react-icons/fa";
import PlaceholderCajas from "../../_skeleton_placeholders/Cajas";
function Cajas({ datos, detalles, loading }) {
  return (
    <>
      {loading ? (
        <>
          <div className="tw-block">
            <PlaceholderCajas />
          </div>
        </>
      ) : datos.length === 0 ? (
        <div className="tw-bg-red-200 tw-text-red-800 tw-font-semibold tw-p-4 tw-rounded-lg tw-text-center tw-my-5">
          No se encontraron resultados.
        </div>
      ) : (
        <div className="tw-columns-1 sm:tw-columns-2 xl:tw-columns-3 tw-mt-5 tw-space-y-5 tw-space-x-4">
          {datos.map((hotel) => {
            const estadoBadgeColor =
              hotel.estado === 0
                ? "tw-bg-red-400 tw-text-red-800"
                : hotel.estado === 1
                ? "tw-bg-green-400 tw-text-green-800"
                : "tw-bg-slate-400 tw-text-slate-700";
            const background =
              hotel.estado === 0
                ? "tw-bg-red-100 dark:tw-bg-red-800"
                : hotel.estado === 1
                ? "tw-bg-green-100 dark:tw-bg-green-900"
                : "tw-bg-slate-100 tw-text-slate-700";

            const border =
              hotel.estado === 0
                ? "tw-border-red-200 dark:tw-border-red-800"
                : hotel.estado === 1
                ? "tw-border-green-200 dark:tw-border-green-900"
                : "tw-border-slate-100";

            const estadoPagoColor =
              hotel.estadoPago === 1
                ? "tw-bg-green-400 tw-text-green-800"
                : "tw-bg-red-400 tw-text-red-800";

            return (
              <div
                onClick={() => detalles(hotel)}
                key={hotel.id}
                className={`tw-cursor-pointer tw-h-fit hover:tw-scale-[102%] tw-smooth tw-shadow hover:tw-shadow-lg tw-rounded-2xl tw-overflow-hidden tw-transition-all ${background} `}
              >
                <div className="tw-flex tw-flex-wrap tw-justify-between tw-items-center tw-px-5 tw-pt-5">
                  <h2 className="tw-text-xl tw-font-semibold tw-text-slate-700 dark:tw-text-white">
                    {hotel.localizador}
                  </h2>
                  <div className="tw-flex tw-flex-wrap tw-gap-2 tw-items-center">
                    <span
                      className={`tw-text-xs tw-font-semibold tw-rounded-xl tw-px-3 tw-py-1 tw-h-fit tw-text-center ${estadoBadgeColor}`}
                    >
                      {hotel.estado === 0
                        ? "Cancelada"
                        : hotel.estado === 1
                        ? "completada"
                        : "Sin estado"}
                    </span>
                    <span
                      className={`tw-text-xs tw-font-semibold tw-rounded-xl tw-px-3 tw-py-1 tw-h-fit tw-text-center ${estadoPagoColor}`}
                    >
                      {hotel.estadoPago === 1
                        ? "Pagado"
                        : hotel.estadoPago === 0
                        ? "Pendiente de pago"
                        : "Sin datos"}
                    </span>
                  </div>
                </div>
                <div className="tw-my-3"></div>
                <div
                  className={`tw-px-5 tw-pb-4 tw-flex tw-flex-wrap sm:tw-grid tw-grid-cols-2 tw-gap-2 tw-bg-slate-100/10 tw-border-y ${border} tw-pt-2`}
                >
                  <div className="tw-text-sm tw-text-slate-600 dark:tw-text-slate-200 tw-flex tw-items-center tw-gap-1">
                    <FaFile className="tw-text-blue-700 tw-shrink-0 tw-text-[1rem]" />
                    <span className="tw-font-medium">
                      {hotel.reserva.tipoSeguro}
                    </span>
                  </div>
                  <div className="tw-text-sm tw-text-slate-700 dark:tw-text-slate-200 tw-flex tw-items-center tw-gap-1">
                    <FaMapPin className="tw-shrink-0 tw-text-[1rem]" />{" "}
                    {hotel.reserva.habitacion} - ({hotel.reserva.regimen})
                  </div>
                  <div className="tw-flex tw-gap-1 tw-text-xs dark:tw-text-slate-200">
                    <FaCalendar className="tw-text-green-700 tw-shrink-0 tw-text-[1rem]" />
                    <span className="tw-font-medium">Entrada:</span>{" "}
                    {hotel.reserva.entrada}
                  </div>
                  <div className="tw-flex tw-gap-1 tw-text-xs dark:tw-text-slate-200">
                    <FaCalendar className="tw-text-red-700 tw-shrink-0 tw-text-[1rem]" />
                    <span className="tw-font-medium">Salida:</span>{" "}
                    {hotel.reserva.salida}
                  </div>
                </div>
                <div
                  className={`tw-p-4 tw-flex tw-gap-1 tw-justify-center tw-items-center dark:tw-text-white tw-mt-3  ${background}`}
                >
                  Orden: <h3 className="tw-font-bold"> {hotel.orden}</h3>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Cajas;
