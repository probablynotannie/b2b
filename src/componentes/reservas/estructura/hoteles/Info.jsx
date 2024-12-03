import { Accordion } from "flowbite-react";
function Info({ descripcion, titulo }) {
  const info = (
    <div className="text-slate-500 dark:text-slate-400 ">
      <h5 className="font-semibold text-secondary text-lg border-b-2 border-secondary pb-2 mb-2">
        General
      </h5>
      <p>{descripcion}</p>
    </div>
  );
  return (
    <Accordion className="w-full dark:bg-slate-800" collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="dark:text-slate-300">
          {titulo}
        </Accordion.Title>
        <Accordion.Content>{info}</Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default Info;
