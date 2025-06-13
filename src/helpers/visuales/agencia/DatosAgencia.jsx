import { FaHotel, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function DatosAgencia({ nombreAgencia, telefonoAgencia, emailAgencia }) {
  return (
    <div className="tw-border-t tw-border-slate-100 tw-py-4 dark:tw-border-slate-700 tw-mt-4 tw-pb-4 tw-space-y-2 tw-text-sm tw-text-slate-700">
      <h4 className="tw-font-bold tw-text-2xl tw-text-center tw-text-secondary dark:tw-text-secondaryDark tw-mb-5">
        Datos Agencia
      </h4>
      <div className="tw-grid tw-grid-cols-3 tw-gap-4">
        <Info
          icon={
            <FaHotel className="tw-text-secondary dark:tw-text-secondaryDark tw-text-3xl tw-mr-2" />
          }
          value={nombreAgencia}
        />
        <Info
          icon={
            <FaPhone className="tw-text-secondary dark:tw-text-secondaryDark tw-text-3xl tw-mr-2" />
          }
          value={telefonoAgencia}
        />
        <Info
          icon={
            <MdEmail className="tw-text-secondary dark:tw-text-secondaryDark tw-text-3xl tw-mr-2" />
          }
          value={emailAgencia}
        />
      </div>
    </div>
  );
}
function Info({ icon, value }) {
  return (
    <div className="tw-flex tw-flex-col tw-items-center">
      {icon}
      <span className="tw-text-slate-600 dark:tw-text-slate-100 tw-font-bold tw-mt-1">
        {value}
      </span>
    </div>
  );
}
export default DatosAgencia;
