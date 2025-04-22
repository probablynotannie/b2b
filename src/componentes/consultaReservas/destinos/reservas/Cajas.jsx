import { FaCalendar, FaHotel, FaMapPin } from "react-icons/fa";
function Cajas({ datos, detalles }) {
  return (
    <div className="tw-columns-1 sm:tw-columns-2 xl:tw-columns-3 tw-mt-5 tw-space-y-3">
      {datos.map((destino) => {
        const estadoBadgeColor =
          destino.estado === 0
            ? "tw-bg-red-400 tw-text-red-800"
            : destino.estado === 2
            ? "tw-bg-orange-300 tw-text-orange-800"
            : destino.estado === 1
            ? "tw-bg-green-400 tw-text-green-800"
            : "tw-bg-slate-400 tw-text-slate-700";

        const background =
          destino.estado === 0
            ? "tw-bg-red-100 dark:tw-bg-red-800"
            : destino.estado === 2
            ? "tw-bg-orange-100 dark:tw-bg-yellow-800"
            : destino.estado === 1
            ? "tw-bg-green-100 dark:tw-bg-green-900"
            : "tw-bg-slate-100 tw-text-slate-700";

        const border =
          destino.estado === 0
            ? "tw-border-red-200 dark:tw-border-red-800"
            : destino.estado === 2
            ? "tw-border-orange-200 dark:tw-border-yellow-800"
            : destino.estado === 1
            ? "tw-border-green-200 dark:tw-border-green-900"
            : "tw-border-slate-100";

        const estadoPagoColor =
          destino.estadoPago === 1
            ? "tw-bg-green-400 tw-text-green-800"
            : "tw-bg-red-400 tw-text-red-800";

        return (
          <div
            onClick={() => detalles(destino)}
            key={destino.id}
            className={`tw-break-inside-avoid
 tw-cursor-pointer tw-h-fit hover:tw-scale-[102%] tw-smooth tw-shadow hover:tw-shadow-lg tw-rounded-2xl tw-overflow-hidden tw-transition-all ${background} `}
          >
            <div className="tw-flex tw-flex-wrap tw-justify-between tw-items-center tw-px-5 tw-pt-5">
              <h2 className="tw-text-xl tw-font-semibold tw-text-slate-700 dark:tw-text-white">
                {destino.localizador}
              </h2>
              <div className="tw-flex tw-gap-2 tw-items-center">
                <span
                  className={`tw-text-xs tw-font-semibold tw-rounded-xl tw-px-3 tw-py-1 tw-h-fit tw-text-center ${estadoBadgeColor}`}
                >
                  {destino.estado === 0
                    ? "Cancelada"
                    : destino.estado === 1
                    ? "Completada"
                    : destino.estado === 2
                    ? "Pendiente"
                    : "Sin estado"}
                </span>
                <span
                  className={`tw-text-xs tw-font-semibold tw-rounded-xl tw-px-3 tw-py-1 tw-h-fit tw-text-center ${estadoPagoColor}`}
                >
                  {destino.estadoPago === 1
                    ? "Pagado"
                    : destino.estadoPago === 0
                    ? "Pendiente de pago"
                    : "Sin datos"}
                </span>
              </div>
            </div>
            <div className="tw-my-3"></div>
            <div
              className={`tw-px-5 tw-pb-4 tw-space-y-2 tw-grid tw-grid-cols-2 tw-gap-2 tw-bg-slate-100/10 tw-border-y ${border} tw-pt-2`}
            >
              <div className="tw-text-sm tw-text-slate-600 dark:tw-text-slate-200 tw-flex tw-items-center tw-gap-1">
                <FaMapPin className="tw-shrink-0 tw-text-[1rem]" />{" "}
                {destino.reserva.recorrido}
              </div>
              <div className="tw-text-sm tw-text-slate-700 dark:tw-text-slate-200 tw-flex tw-items-center tw-gap-1">
                <FaHotel className="tw-shrink-0 tw-text-[1rem]" />{" "}
                {destino.reserva.opcion}
              </div>
              <div className="tw-flex tw-gap-1 tw-text-xs dark:tw-text-slate-200">
                <FaCalendar className="tw-text-green-700 tw-text-[1rem] tw-shrink-0" />
                <span className="tw-font-medium">Recogida:</span>{" "}
                {destino.reserva.ida}
              </div>
              <div className="tw-flex tw-gap-1 tw-text-xs dark:tw-text-slate-200">
                <FaCalendar className="tw-text-red-700 tw-text-[1rem] tw-shrink-0" />
                <span className="tw-font-medium">Devolución:</span>{" "}
                {destino.reserva.vuelta}
              </div>
            </div>
            <div
              className={`tw-p-4 tw-flex tw-gap-1 tw-justify-center tw-items-center dark:tw-text-white tw-mt-3  ${background}`}
            >
              Orden: <h3 className="tw-font-bold"> {destino.orden}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cajas;
