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
import Pasajeros from "./Pasajeros";
import Importante from "./Importante";
import DatosDestino from "../../../../helpers/visuales/DatoTituloIcono";

function Detalles({ destino }) {
  return (
    <>
      <h2 className="tw-font-bold tw-text-xl tw-border-b tw-border-slate-100 dark:tw-border-slate-700 dark:tw-text-slate-100 tw-pb-2">
        {destino.reserva.recorrido}
      </h2>
      <div className="sm:tw-grid tw-grid-cols-2 tw-space-y-2 sm:tw-space-y-0 tw-gap-6 tw-p-4">
        <DatosDestino
          icon={<FaClipboardList className="tw-text-indigo-600" />}
          title="Orden"
          value={destino.orden}
        />
        <DatosDestino
          icon={<FaBarcode className="tw-text-pink-600" />}
          title="Localizador"
          value={destino.localizador}
        />
        <DatosDestino
          icon={<FaCheckCircle className="tw-text-cyan-600" />}
          title="Confirmación"
          value={destino.confirmacion}
        />
        <DatosDestino
          icon={<FaTruck className="tw-text-orange-600" />}
          title="Proveedores"
          value={destino.proveedores}
        />
        <DatosDestino
          icon={<FaUser className="tw-text-blue-600" />}
          title="Titular"
          value={destino.titularReserva}
          className="tw-col-span-2"
        />
      </div>
      <div>
        <Pasajeros destino={destino} />
        <Importante destino={destino} />
      </div>
      <div className="tw-border-t tw-border-slate-100 tw-py-4 dark:tw-border-slate-700 tw-mt-4 tw-pb-4 tw-space-y-2 tw-text-sm tw-text-slate-700">
        <h4 className="tw-font-bold tw-text-2xl tw-text-center tw-text-secondary dark:tw-text-secondaryDark tw-mb-5">
          Datos Agencia
        </h4>
        <div className="tw-grid tw-grid-cols-3 tw-gap-4">
          <DatosAgencia
            icon={
              <FaHotel className="tw-text-secondary dark:tw-text-secondaryDark tw-text-3xl tw-mr-2" />
            }
            value={destino.datosAgencia.agencia}
          />
          <DatosAgencia
            icon={
              <FaPhone className="tw-text-secondary dark:tw-text-secondaryDark tw-text-3xl tw-mr-2" />
            }
            value={destino.datosAgencia.telefono}
          />
          <DatosAgencia
            icon={
              <MdEmail className="tw-text-secondary dark:tw-text-secondaryDark tw-text-3xl tw-mr-2" />
            }
            value={destino.datosAgencia.email}
          />
        </div>
      </div>
    </>
  );
}

function DatosAgencia({ icon, value }) {
  return (
    <div className="tw-flex tw-flex-col tw-items-center">
      {icon}
      <span className="tw-text-slate-600 dark:tw-text-slate-100 tw-font-bold tw-mt-1">
        {value}
      </span>
    </div>
  );
}

export default Detalles;
