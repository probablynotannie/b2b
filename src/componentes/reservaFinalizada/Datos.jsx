import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

function Datos() {
  const contacto = {
    nombre: "Ana",
    apellidos: "Vachadze",
    email: "vachadze123@gmail.com",
    tel: "631694540",
  };
  return (
    <div className="tw-rounded-lg tw-bg-white dark:tw-bg-slate-800 tw-flex tw-gap-10">
      <div className="tw-flex tw-justify-center tw-items-center tw-font-semibold tw-text-slate-400 tw-gap-1">
        <span className="tw-text-secondary">
          <FaRegUser />
        </span>
        {contacto.apellidos}
        {contacto.nombre}
      </div>
      <div className="tw-flex tw-justify-center tw-items-center tw-font-semibold tw-text-slate-400 tw-gap-1">
        <span className="tw-text-secondary">
          <MdOutlineEmail />
        </span>
        {contacto.email}
      </div>
      <div className="tw-flex tw-justify-center tw-items-center tw-font-semibold tw-text-slate-400 tw-gap-1">
        <span className="tw-text-secondary">
          <BsTelephone />
        </span>
        {contacto.tel}
      </div>
    </div>
  );
}

export default Datos;
