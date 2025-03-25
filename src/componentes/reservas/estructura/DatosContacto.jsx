import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

function DatosContacto({ nombre, apellidos, email, numero }) {
  return (
    <section className="tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-4">
      <h3 className="tw-font-bold tw-text-center tw-my-5 tw-text-slate-800 dark:tw-text-slate-300 text-md">
        Reserva asociado/a a:
      </h3>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-y-10 md:tw-gap-10">
        <div className="tw-flex tw-items-center tw-justify-center tw-flex-col md:tw-text-center tw-text-sm tw-text-slate-400 dark:tw-text-secondaryDark tw-font-semibold">
          <FaUser className="tw-text-2xl tw-text-secondary tw-mb-2 md:tw-mb-0" />
          <span>
            {nombre} {apellidos}
          </span>
        </div>
        <div className="tw-flex tw-items-center tw-justify-center tw-flex-col md:tw-text-center tw-text-sm tw-text-slate-400 dark:tw-text-secondaryDark tw-font-semibold">
          <MdMarkEmailRead className="tw-text-3xl tw-text-secondary" />
          {email}
        </div>
        <div className="tw-flex tw-items-center tw-justify-center tw-flex-col md:tw-text-center tw-text-sm tw-text-slate-400 dark:tw-text-secondaryDark tw-font-semibold">
          <BsFillTelephoneFill className="tw-text-2xl tw-text-secondary" />
          {numero}
        </div>
      </div>
    </section>
  );
}

export default DatosContacto;
