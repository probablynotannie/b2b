import { FaCalendarAlt, FaHotel, FaRoute } from "react-icons/fa";
import DatosHotel from "../../../../helpers/visuales/DatoTituloIcono";

function Desglose({ seguro }) {
  const formattedNeto = seguro.reserva.importeNeto.toFixed(2) + " €";
  const formattedPvp = seguro.reserva.importePVP.toFixed(2) + " €";
  const items = [
    { label: "Tipo", value: seguro.reserva.tipoReserva },
    { label: "Neto", value: formattedNeto },
    { label: "PVP", value: formattedPvp },
  ];

  return (
    <div className="tw-my-6 tw-space-y-4">
      <div className="tw-grid tw-grid-cols-2 tw-gap-3">
        <DatosHotel
          icon={<FaRoute className="tw-text-slate-400 tw-text-lg tw-w-8" />}
          title="Ubicación"
          value={seguro.reserva.ubicacion}
        />
        <DatosHotel
          icon={<FaHotel className="tw-text-slate-400 tw-text-lg tw-w-8" />}
          title="Modelo"
          value={seguro.reserva.nombreHotel}
        />
        <DatosHotel
          icon={
            <FaCalendarAlt className="tw-text-slate-400 tw-text-lg tw-w-8" />
          }
          title="Entrada"
          value={seguro.reserva.entrada}
        />
        <DatosHotel
          icon={
            <FaCalendarAlt className="tw-text-slate-400 tw-text-lg tw-w-8" />
          }
          title="Salida"
          value={seguro.reserva.salida}
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

export default Desglose;
