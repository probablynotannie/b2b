import {
  FaClipboardList,
  FaBarcode,
  FaCheckCircle,
  FaTruck,
  FaUser,
} from "react-icons/fa";
import Pasajeros from "./Pasajeros";
import Importante from "./Importante";
import DatosDestino from "../../../../helpers/visuales/DatoTituloIcono";
import DatosAgencia from "../../../../helpers/visuales/agencia/DatosAgencia";

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
      <DatosAgencia
        nombreAgencia={destino.datosAgencia.agencia}
        telefonoAgencia={destino.datosAgencia.telefono}
        emailAgencia={destino.datosAgencia.email}
      />
    </>
  );
}

export default Detalles;
