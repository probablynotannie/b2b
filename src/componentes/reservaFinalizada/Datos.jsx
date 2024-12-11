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
    <div className="rounded-lg bg-white dark:bg-slate-800 flex gap-10">
      <div className="flex justify-center items-center font-semibold text-slate-400 gap-1">
        <span className="text-secondary">
          <FaRegUser />
        </span>
        {contacto.apellidos}
        {contacto.nombre}
      </div>
      <div className="flex justify-center items-center font-semibold text-slate-400 gap-1">
        <span className="text-secondary">
          <MdOutlineEmail />
        </span>
        {contacto.email}
      </div>
      <div className="flex justify-center items-center font-semibold text-slate-400 gap-1">
        <span className="text-secondary">
          <BsTelephone />
        </span>
        {contacto.tel}
      </div>
    </div>
  );
}

export default Datos;
