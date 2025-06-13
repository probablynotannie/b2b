import {
  FaClipboardList,
  FaBarcode,
  FaCheckCircle,
  FaTruck,
  FaUser,
} from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import DatosHotel from "../../../../helpers/visuales/DatoTituloIcono";
import DatosAgencia from "../../../../helpers/visuales/agencia/DatosAgencia";

function Detalles({ seguro }) {
  return (
    <>
      <h2 className="tw-font-bold  tw-text-xl  tw-border-b tw-border-slate-100 dark:tw-border-slate-700 dark:tw-text-slate-100 tw-pb-2">
        Reserva: {seguro.localizador}
      </h2>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-6 tw-p-4">
        <DatosHotel
          icon={<FaClipboardList className="tw-text-indigo-600" />}
          title="Orden"
          value={seguro.orden}
        />
        <DatosHotel
          icon={<FaBarcode className="tw-text-pink-600" />}
          title="Localizador"
          value={seguro.localizador}
        />
        <DatosHotel
          icon={<FaCheckCircle className="tw-text-cyan-600" />}
          title="Confirmación"
          value={seguro.confirmacion}
        />
        <DatosHotel
          icon={<FaTruck className="tw-text-orange-600" />}
          title="Proveedores"
          value={seguro.proveedores}
        />
        <DatosHotel
          icon={<FaUser className="tw-text-blue-600" />}
          title="Titular"
          value={seguro.titularReserva}
          className="tw-col-span-2"
        />
        {seguro.reserva.penalizacionCancelacion && (
          <DatosHotel
            icon={<MdCancel className="tw-text-red-600" />}
            title="Penalización"
            value={
              "A partir de " +
              seguro.reserva.cancelacion +
              "  " +
              seguro.reserva.penalizacionCancelacion +
              "€"
            }
            className="tw-col-span-2"
          />
        )}
      </div>
      <DatosAgencia
        nombreAgencia={seguro.datosAgencia.agencia}
        telefonoAgencia={seguro.datosAgencia.tel}
        emailAgencia={seguro.datosAgencia.email}
      />
    </>
  );
}

export default Detalles;
