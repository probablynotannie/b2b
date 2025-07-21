import { Accordion } from "flowbite-react";

function Info({ descripcion, titulo }) {
  const info = (
    <div className="tw-text-slate-500 dark:tw-text-slate-400">
      <h5 className="tw-font-semibold tw-text-secondary tw-text-lg tw-border-b-2 tw-border-secondary tw-pb-2 tw-mb-2">
        General
      </h5>
      <p>{descripcion}</p>
    </div>
  );

  return (
    <Accordion
      className="tw-w-full dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-rounded-2xl tw-overflow-hidden hover:tw-bg-slate-100 dark:hover:tw-bg-slate-700"
      collapseAll
    >
      <Accordion.Panel>
        <Accordion.Title className=" dark:hover:tw-text-slate-300 dark:tw-bg-slate-800 ">
          <span className="tw-text-slate-800 dark:tw-text-slate-300">
            {titulo}
          </span>
        </Accordion.Title>
        <Accordion.Content>{info}</Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

export default Info;
