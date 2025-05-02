import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Datos from "../../../../helpers/visuales/DatoTituloIcono";

function DatosAccionRealizada({ user }) {
  return (
    <div
      className="
    tw-mb-8 tw-bg-red-200 dark:tw-bg-red-800/40
      tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-p-5"
    >
      <h2 className="tw-font-bold tw-text-lg tw-mb-3 tw-border-b tw-border-red-100 dark:tw-border-red-800 dark:tw-text-white">
        Cancelada por
      </h2>
      <div className="tw-flex tw-flex-wrap tw-gap-5">
        <Datos
          icon={<FaUser className="tw-text-red-400 tw-text-lg tw-w-6 tw-h-6" />}
          title="Nombre completo"
          value={user?.nombre + " " + user.apellidos}
        />
        <Datos
          icon={
            <MdEmail className="tw-text-red-400 tw-text-lg tw-w-6 tw-h-6" />
          }
          title="Correo electrónico"
          value={user?.email ?? "No disponible"}
        />
        <Datos
          icon={
            <FaCalendarAlt className="tw-text-red-400 tw-text-lg tw-w-6 tw-h-6" />
          }
          title="Fecha de cancelación"
          value={user?.fecha ?? "No disponible"}
        />
      </div>
    </div>
  );
}

export default DatosAccionRealizada;
