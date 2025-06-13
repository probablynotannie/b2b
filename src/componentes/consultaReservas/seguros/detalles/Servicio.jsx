import { FaCalendar, FaFilePdf, FaMoon, FaPhone, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DatosSeguro from "../../../../helpers/visuales/DatoTituloIcono";
import Importante from "./Importante";
function Servicio({ seguro }) {
  return (
    <div>
      <div className="tw-border-b tw-border-slate-100 dark:tw-border-slate-700 tw-flex tw-justify-between tw-items-center">
        <h2 className="tw-font-bold  tw-text-xl dark:tw-text-slate-100 tw-pb-2">
          Servicio ticket
        </h2>
      </div>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-6 tw-p-4">
        <DatosSeguro
          icon={
            <FaFilePdf className="tw-text-slate-400 dark:tw-text-slate-500" />
          }
          title={"Tipo Seguro"}
          value={seguro.reserva.tipoSeguro}
        />
        <DatosSeguro
          icon={
            <FaCalendar className="tw-text-slate-400 dark:tw-text-slate-500" />
          }
          title={"Entrada"}
          value={seguro.reserva.entrada}
        />
        <DatosSeguro
          icon={
            <FaCalendar className="tw-text-slate-400 dark:tw-text-slate-500" />
          }
          title={"Salida"}
          value={seguro.reserva.entrada}
        />
        <DatosSeguro
          icon={<FaMoon className="tw-text-slate-400 dark:tw-text-slate-500" />}
          title={"Noches"}
          value={seguro.reserva.dias}
        />
        <DatosSeguro
          icon={<FaUser className="tw-text-slate-400 dark:tw-text-slate-500" />}
          title={"Titular reserva"}
          value={
            seguro.reserva.titularReserva.nombre +
            " " +
            seguro.reserva.titularReserva.apellidos
          }
        />
        <DatosSeguro
          icon={
            <FaPhone className="tw-text-slate-400 dark:tw-text-slate-500" />
          }
          title={"Téf. titular"}
          value={seguro.reserva.titularReserva.telefono}
        />
        <DatosSeguro
          icon={
            <MdEmail className="tw-text-slate-400 dark:tw-text-slate-500" />
          }
          title={"Email titular"}
          value={seguro.reserva.titularReserva.email}
        />
      </div>
      <div className="tw-py-4 tw-mt-4 tw-pb-4 tw-space-y-2 tw-text-sm tw-text-slate-700">
        <h2 className="dark:tw-text-slate-300 tw-font-bold tw-text-lg">
          Importante
        </h2>
        <Importante seguro={seguro} />
      </div>
    </div>
  );
}

export default Servicio;
