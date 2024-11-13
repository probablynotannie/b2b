import { Tabs } from "flowbite-react";

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
      <div /* className="border-2 border-slate-100 dark:border-slate-800 shadow-xl mt-5 p-5 rounded-lg bg-white dark:bg-slate-800" */
      >
        <div></div>
        {contacto.nombre}
        {contacto.apellido}
        {contacto.email}
        {contacto.tel}
      </div>
    </div>
  );
}

export default Datos;
