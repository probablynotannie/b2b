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
    <div className="mt-10">
      <h3 className="text-lg font-bold dark:text-slate-300">
        Datos de contacto
      </h3>
      <div
        /* className="grid grid-cols-4 gap-10" */
        className="border-2 border-slate-100 dark:border-slate-800 shadow-xl mt-5 p-5 rounded-lg bg-white dark:bg-slate-800 grid md:grid-cols-3 gap-10"
      >
        <div className="flex flex-col justify-center items-center font-bold text-secondary">
          <span className="text-4xl text-secondary">
            <FaRegUser />
          </span>
          {contacto.apellidos}
          {contacto.nombre}
        </div>
        <div className="flex flex-col justify-center items-center font-bold text-secondary">
          <span className="text-4xl text-secondary">
            <MdOutlineEmail />
          </span>
          {contacto.email}
        </div>
        <div className="flex flex-col justify-center items-center font-bold text-secondary">
          <span className="text-4xl text-secondary">
            <BsTelephone />
          </span>
          {contacto.tel}
        </div>
      </div>
    </div>
  );
}

export default Datos;
