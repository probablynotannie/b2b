import { FaCalendar, FaCar, FaMapPin } from "react-icons/fa";
function Cajas({ datos, detalles }) {
  console.log(datos)
  return (
    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-6 tw-mt-5">
      {datos.map((coche) => {
        const estadoBadgeColor =
          coche.estado === "cancelada"
            ? "tw-bg-red-400 tw-text-red-800"
            : coche.estado === "pendiente"
            ? "tw-bg-orange-300 tw-text-orange-800"
            : coche.estado === "completada"
            ? "tw-bg-green-400 tw-text-green-800"
            : "tw-bg-slate-400 tw-text-slate-700";

        const background =
          coche.estado === "cancelada"
            ? "tw-bg-red-100 dark:tw-bg-red-800"
            : coche.estado === "pendiente"
            ? "tw-bg-orange-100 dark:tw-bg-yellow-800"
            : coche.estado === "completada"
            ? "tw-bg-green-100 dark:tw-bg-green-900"
            : "tw-bg-slate-100 tw-text-slate-700";

        const border =
          coche.estado === "cancelada"
            ? "tw-border-red-200 dark:tw-border-red-800"
            : coche.estado === "pendiente"
            ? "tw-border-orange-200 dark:tw-border-yellow-800"
            : coche.estado === "completada"
            ? "tw-border-green-200 dark:tw-border-green-900"
            : "tw-border-slate-100";

        const estadoPagoColor =
          coche.estadoPago === "Si"
            ? "tw-bg-green-400 tw-text-green-800"
            : "tw-bg-red-400 tw-text-red-800";

        return (
          <div
            onClick={() => detalles(coche)}
            key={coche.id}
            className={`tw-cursor-pointer tw-h-fit hover:tw-scale-105 tw-smooth tw-shadow hover:tw-shadow-lg tw-rounded-2xl tw-overflow-hidden tw-transition-all ${background} `}
          >
            <div className="tw-flex tw-flex-wrap tw-justify-between tw-items-center tw-px-5 tw-pt-5">
              <h2 className="tw-text-xl tw-font-semibold tw-text-slate-700 dark:tw-text-white">
                {coche.localizador}
              </h2>
              <div className="tw-flex tw-gap-2 tw-items-center">
                <span
                  className={`tw-text-xs tw-font-semibold tw-rounded-xl tw-px-3 tw-py-1 tw-h-fit tw-text-center ${estadoBadgeColor}`}
                >
                  {coche.estado || "Sin estado"}
                </span>
                <span
                  className={`tw-text-xs tw-font-semibold tw-rounded-xl tw-px-3 tw-py-1 tw-h-fit tw-text-center ${estadoPagoColor}`}
                >
                  {coche.estadoPago === "Si" ? "Pagado" : "Pendiente de pago"}
                </span>
              </div>
            </div>
            <div className="tw-my-3"></div>
            <div
              className={`tw-px-5 tw-pb-4 tw-space-y-2 tw-grid tw-grid-cols-2 tw-gap-2 tw-bg-slate-100/10 tw-border-y ${border} tw-pt-2`}
            >
              <div className="tw-text-sm tw-text-slate-600 dark:tw-text-slate-200 tw-flex tw-items-center tw-gap-1">
                <FaCar className="tw-text-blue-700" />{" "}
                <span className="tw-font-medium">{coche.modelo}</span>
              </div>
              <div className="tw-text-sm tw-text-slate-700 dark:tw-text-slate-200 tw-flex tw-items-center tw-gap-1">
                <FaMapPin /> {coche.reserva.recorrido}
              </div>
              <div className="tw-flex tw-gap-1 tw-text-xs dark:tw-text-slate-200">
                <FaCalendar className="tw-text-green-700" />
                <span className="tw-font-medium">Recogida:</span>{" "}
                {coche.reserva.recogida}
              </div>
              <div className="tw-flex tw-gap-1 tw-text-xs dark:tw-text-slate-200">
                <FaCalendar className="tw-text-red-700" />
                <span className="tw-font-medium">Devolución:</span>{" "}
                {coche.reserva.devolucion}
              </div>
            </div>
            <div
              className={`tw-p-4 tw-flex tw-gap-1 tw-justify-center tw-items-center dark:tw-text-white tw-mt-3  ${background}`}
            >
              Orden: <h3 className="tw-font-bold"> {coche.orden}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cajas;
