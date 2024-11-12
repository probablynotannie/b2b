import { Tabs } from "flowbite-react";

function Datos() {
  const contacto = {
    nombre: "Ana",
    apellidos: "Vachadze",
    email: "vachadze123@gmail.com",
    tel: "631694540",
  };
  return (
    <>
      <div className="flex justify-end gap-5 mt-5">
        <div className="border-2 min-h-48 w-1/3"></div>
      </div>
    </>
  );
}

export default Datos;
