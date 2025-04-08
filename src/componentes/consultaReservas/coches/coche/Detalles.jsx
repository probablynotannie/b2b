import {
  FaClipboardList,
  FaBarcode,
  FaCheckCircle,
  FaTruck,
  FaUser,
  FaRoute,
  FaCarSide,
  FaCalendarAlt,
} from "react-icons/fa";

function Detalles({ coche }) {
  return (
    <>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-6">
        <InfoBlock
          icon={<FaClipboardList className="tw-text-indigo-600" />}
          title="Orden"
          value={coche.orden}
        />
        <InfoBlock
          icon={<FaBarcode className="tw-text-pink-600" />}
          title="Localizador"
          value={coche.localizador}
        />
        <InfoBlock
          icon={<FaCheckCircle className="tw-text-cyan-600" />}
          title="Confirmación"
          value={coche.confirmacion}
        />
        <InfoBlock
          icon={<FaTruck className="tw-text-orange-600" />}
          title="Proveedores"
          value={coche.proveedores}
        />
        <InfoBlock
          icon={<FaUser className="tw-text-blue-600" />}
          title="Titular"
          value={coche.titularReserva}
          className="tw-col-span-2"
        />
      </div>

      {/* Details */}
      <div className="tw-border-t tw-mt-4 tw-pt-4 tw-space-y-2 tw-text-sm tw-text-slate-700">
        <DetailLine
          icon={<FaRoute className="tw-text-slate-500 tw-mr-2" />}
          label="Recorrido"
          value={coche.reserva.recorrido}
        />
        <DetailLine
          icon={<FaCarSide className="tw-text-slate-500 tw-mr-2" />}
          label="Modelo"
          value={coche.modelo}
        />
        <DetailLine
          icon={<FaCalendarAlt className="tw-text-slate-500 tw-mr-2" />}
          label="Recogida"
          value={coche.reserva.recogida}
        />
        <DetailLine
          icon={<FaCalendarAlt className="tw-text-slate-500 tw-mr-2" />}
          label="Devolución"
          value={coche.reserva.devolucion}
        />
      </div>
    </>
  );
}

function InfoBlock({ icon, title, value, className = "" }) {
  return (
    <div className={`tw-flex tw-items-start tw-gap-3 ${className}`}>
      <div className="tw-mt-1 tw-text-lg">{icon}</div>
      <div>
        <h4 className="tw-text-sm tw-font-semibold tw-text-slate-600">
          {title}
        </h4>
        <p className="tw-text-base tw-font-medium tw-text-slate-900">{value}</p>
      </div>
    </div>
  );
}

function DetailLine({ icon, label, value }) {
  return (
    <div className="tw-flex tw-items-center">
      {icon}
      <p>
        <span className="tw-font-medium tw-text-slate-800">{label}:</span>{" "}
        <span className="tw-text-slate-600">{value}</span>
      </p>
    </div>
  );
}

export default Detalles;
