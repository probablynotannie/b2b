import {
  FaClipboardList,
  FaBarcode,
  FaCheckCircle,
  FaTruck,
  FaUser,
  FaPhone,
  FaHotel,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DatosCoche from "../../../../helpers/visuales/DatoTituloIcono";
import DatosAgencia from "../../../../helpers/visuales/agencia/DatosAgencia";

function Detalles({ coche }) {
  return (
    <>
      <h2 className="tw-font-bold  tw-text-xl  tw-border-b tw-border-slate-100 dark:tw-border-slate-700 dark:tw-text-slate-100 tw-pb-2">
        Reserva: {coche.localizador}
      </h2>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-6 tw-p-4">
        <DatosCoche
          icon={<FaClipboardList className="tw-text-indigo-600" />}
          title="Orden"
          value={coche.orden}
        />
        <DatosCoche
          icon={<FaBarcode className="tw-text-pink-600" />}
          title="Localizador"
          value={coche.localizador}
        />
        <DatosCoche
          icon={<FaCheckCircle className="tw-text-cyan-600" />}
          title="Confirmación"
          value={coche.confirmacion}
        />
        <DatosCoche
          icon={<FaTruck className="tw-text-orange-600" />}
          title="Proveedores"
          value={coche.proveedores}
        />
        <DatosCoche
          icon={<FaUser className="tw-text-blue-600" />}
          title="Titular"
          value={coche.titularReserva}
          className="tw-col-span-2"
        />
      </div>
      <DatosAgencia
        nombreAgencia={coche.datosAgencia.agencia}
        telefonoAgencia={coche.datosAgencia.tel}
        emailAgencia={coche.datosAgencia.email}
      />
    </>
  );
}

export default Detalles;
