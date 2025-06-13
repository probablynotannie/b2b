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

function Detalles({ hotel }) {
  return (
    <>
      <h2 className="tw-font-bold  tw-text-xl  tw-border-b tw-border-slate-100 dark:tw-border-slate-700 dark:tw-text-slate-100 tw-pb-2">
        Reserva: {hotel.localizador}
      </h2>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-6 tw-p-4">
        <DatosHotel
          icon={<FaClipboardList className="tw-text-indigo-600" />}
          title="Orden"
          value={hotel.orden}
        />
        <DatosHotel
          icon={<FaBarcode className="tw-text-pink-600" />}
          title="Localizador"
          value={hotel.localizador}
        />
        <DatosHotel
          icon={<FaCheckCircle className="tw-text-cyan-600" />}
          title="Confirmación"
          value={hotel.confirmacion}
        />
        <DatosHotel
          icon={<FaTruck className="tw-text-orange-600" />}
          title="Proveedores"
          value={hotel.proveedores}
        />
        <DatosHotel
          icon={<FaUser className="tw-text-blue-600" />}
          title="Titular"
          value={hotel.titularReserva}
          className="tw-col-span-2"
        />
        {hotel.reserva.penalizacionCancelacion && (
          <DatosHotel
            icon={<MdCancel className="tw-text-red-600" />}
            title="Penalización"
            value={
              "A partir de " +
              hotel.reserva.cancelacion +
              "  " +
              hotel.reserva.penalizacionCancelacion +
              "€"
            }
            className="tw-col-span-2"
          />
        )}
      </div>
      <DatosAgencia
        nombreAgencia={hotel.datosAgencia.agencia}
        telefonoAgencia={hotel.datosAgencia.tel}
        emailAgencia={hotel.datosAgencia.email}
      />
    </>
  );
}

export default Detalles;
