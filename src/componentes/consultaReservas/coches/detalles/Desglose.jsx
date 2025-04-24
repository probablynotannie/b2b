import { FaCalendarAlt, FaCarSide, FaRoute } from "react-icons/fa";
function Desglose({ coche }) {
  const formattedNeto = coche.reserva.importeNeto.toFixed(2) + " €";
  const formattedPvp = coche.reserva.importePVP.toFixed(2) + " €";
  const items = [
    { label: "Tipo", value: coche.reserva.tipoReserva },
    { label: "Neto", value: formattedNeto },
    { label: "PVP", value: formattedPvp },
  ];

  return (
    <div className="tw-my-6 tw-space-y-4">
      <div className="tw-grid tw-grid-cols-2 tw-gap-3">
        <LineaDetalles
          icon={<FaRoute className="tw-text-slate-400 tw-text-lg tw-w-8" />}
          label="Recorrido"
          value={coche.reserva.recorrido}
        />
        <LineaDetalles
          icon={<FaCarSide className="tw-text-slate-400 tw-text-lg tw-w-8" />}
          label="Modelo"
          value={coche.modelo}
        />
        <LineaDetalles
          icon={
            <FaCalendarAlt className="tw-text-slate-400 tw-text-lg tw-w-8" />
          }
          label="Recogida"
          value={coche.reserva.recogida}
        />
        <LineaDetalles
          icon={
            <FaCalendarAlt className="tw-text-slate-400 tw-text-lg tw-w-8" />
          }
          label="Devolución"
          value={coche.reserva.devolucion}
        />
      </div>
      <div className="tw-grid tw-grid-cols-3 tw-bg-white dark:tw-bg-slate-900 tw-rounded-2xl tw-shadow-sm tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-p-4">
        {items.map(({ label, value }, index) => (
          <div
            key={label}
            className={`tw-flex tw-flex-col tw-items-center tw-py-2 ${
              index < items.length - 1
                ? "tw-border-r tw-border-slate-200 dark:tw-border-slate-700"
                : ""
            }`}
          >
            <span className="tw-text-lg tw-font-semibold tw-text-slate-700 dark:tw-text-white">
              {value}
            </span>
            <span className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-300 mt-1">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LineaDetalles({ icon, label, value }) {
  return (
    <div className="tw-flex tw-items-center tw-gap-3">
      {icon}
      <div>
        <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-400">
          {label}
        </p>
        <p className="tw-font-medium tw-text-slate-800 dark:tw-text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

export default Desglose;
