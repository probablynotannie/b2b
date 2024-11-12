import { Tabs } from "flowbite-react";

function Datos() {
  const contacto = {
    nombre: "Ana",
    apellidos: "Vachadze",
    email: "vachadze123@gmail.com",
    tel: "631694540",
  };
  return (
    <Tabs aria-label="Default tabs" variant="default">
      <Tabs.Item active title="Contacto" icon={""}></Tabs.Item>
      <Tabs.Item title="Dashboard" icon={""}>
        This is . Clicking another tab will toggle the visibility of this one
        for the next. The tab JavaScript swaps classes to control the content
        visibility and styling.
      </Tabs.Item>
    </Tabs>
  );
}

export default Datos;
