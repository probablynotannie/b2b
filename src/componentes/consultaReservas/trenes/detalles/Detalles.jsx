import {
  FaClipboardList,
  FaBarcode,
  FaCheckCircle,
  FaTruck,
  FaUser,
} from "react-icons/fa";
import DatosCoche from "../../../../helpers/visuales/DatoTituloIcono";

function Detalles({ tren }) {
  return (
    <>
      <h2 className="tw-font-bold  tw-text-xl  tw-border-b tw-border-slate-100 dark:tw-border-slate-700 dark:tw-text-slate-100 tw-pb-2">
        Reserva: {tren.localizador}
      </h2>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-6 tw-p-4">
        <DatosCoche
          icon={<FaClipboardList className="tw-text-indigo-600" />}
          title="Orden"
          value={tren.orden}
        />
        <DatosCoche
          icon={<FaBarcode className="tw-text-pink-600" />}
          title="Localizador"
          value={tren.localizador}
        />
        <DatosCoche
          icon={<FaCheckCircle className="tw-text-cyan-600" />}
          title="Confirmación"
          value={tren.confirmacion}
        />
        <DatosCoche
          icon={<FaTruck className="tw-text-orange-600" />}
          title="Proveedores"
          value={tren.proveedores}
        />
        <DatosCoche
          icon={<FaUser className="tw-text-blue-600" />}
          title="Titular"
          value={tren.titularReserva}
          className="tw-col-span-2"
        />
      </div>
   
    </>
  );
}

export default Detalles;
