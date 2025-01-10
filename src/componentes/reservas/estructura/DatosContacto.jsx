import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";

function DatosContacto({ nombre, apellidos, email, numero }) {
  return (
    <section className="border-b-2 border-slate-100 dark:border-slate-700 pb-4">
      <h3 className="font-bold text-center my-5 text-slate-800 dark:text-slate-300 text-md">
        Reserva asociado/a a:
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-10 ">
        <div className="flex items-center justify-center flex-col md:text-center text-sm text-slate-400 dark:text-secondaryDark font-semibold">
          <FaUser className="text-2xl text-secondary mb-2 md:mb-0" />
          <span>
            {nombre} {apellidos}
          </span>
        </div>
        <div className="flex items-center justify-center flex-col md:text-center text-sm text-slate-400 dark:text-secondaryDark font-semibold">
          <MdMarkEmailRead className="text-3xl text-secondary" />
          {email}
        </div>
        <div className="flex items-center justify-center flex-col md:text-center text-sm text-slate-400 dark:text-secondaryDark font-semibold">
          <BsFillTelephoneFill className="text-2xl text-secondary" />
          {numero}
        </div>
      </div>
    </section>
  );
}

export default DatosContacto;
