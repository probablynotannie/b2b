import { FaCalendarAlt, FaHotel, FaRoute } from "react-icons/fa";
import InfoBox from "../../../../helpers/visuales/DatoTituloIcono";
function Desglose({ destino }) {
  const formattedNeto = destino.reserva.importeNeto.toFixed(2) + " €";
  const formattedPvp = destino.reserva.importePVP.toFixed(2) + " €";
  const items = [
    { label: "Tipo", value: destino.reserva.tipoReserva },
    { label: "Neto", value: formattedNeto },
    { label: "PVP", value: formattedPvp },
  ];
  return (
    <div className="tw-my-6 tw-space-y-4">
      <div className="tw-grid tw-grid-cols-2 tw-gap-3">
        <InfoBox
          icon={<FaRoute className="tw-text-pink-400 tw-text-[1.2rem]" />}
          title="Recorrido"
          value={destino.reserva.recorrido}
        />
        <InfoBox
          icon={<FaHotel className="tw-text-blue-400 tw-text-[1.2rem]" />}
          title="Opcion"
          value={destino.reserva.opcion}
        />
        <InfoBox
          icon={
            <FaCalendarAlt className="tw-text-orange-400 tw-text-[1.2rem]" />
          }
          title="Recogida"
          value={destino.reserva.ida}
        />
        <InfoBox
          icon={<FaCalendarAlt className="tw-text-cyan-500 tw-text-[1.2rem]" />}
          title="Devolución"
          value={destino.reserva.vuelta}
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
