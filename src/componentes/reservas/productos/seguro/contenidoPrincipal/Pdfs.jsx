import { FaDownload } from "react-icons/fa";

function Pdfs() {
  const botones = [
    {
      id: 0,
      icono: "",
      boton: "Condiciones generales",
      color:
        "tw-bg-pink-300 tw-text-pink-500 dark:tw-bg-pink-800 dark:tw-text-pink-300",
      link: "",
    },
    {
      id: 1,
      icono: "",
      boton: "IPID",
      color:
        "tw-bg-blue-300 tw-text-blue-500 dark:tw-bg-blue-800 dark:tw-text-blue-300",
      link: "",
    },
    {
      id: 2,
      icono: "",
      boton: "Protocolo siniestros",
      color:
        "tw-bg-purple-300 tw-text-purple-500 dark:tw-bg-purple-800 dark:tw-text-purple-300",
      link: "",
    },
    {
      id: 3,
      icono: "",
      boton: "Certificado COVID",
      color:
        "tw-bg-orange-300 tw-text-orange-500 dark:tw-bg-orange-800 dark:tw-text-orange-300",
      link: "",
    },
    {
      id: 4,
      icono: "",
      boton: "Resumen coberturas",
      color:
        "tw-bg-red-300 tw-text-danger dark:tw-bg-cyan-800 dark:tw-text-cyan-300",
      link: "",
    },
  ];
  return (
    <>
      <section className="tw-border-y-2 tw-border-slate-100 dark:tw-border-slate-700 tw-py-5">
        <div className="tw-flex tw-items-center tw-justify-around tw-flex-wrap tw-gap-3">
          {botones.map((boton) => (
            <button
              className={`tw-w-[100px] tw-h-[100px] tw-p-3 tw-rounded-full tw-text-sm tw-font-semibold tw-shadow-lg hover:tw-shadow-xl tw-transition hover:tw-scale-105 ${boton.color}`}
              key={boton.id}
            >
              {boton.boton}
            </button>
          ))}
        </div>
      </section>
      <div className="tw-flex tw-justify-end">
        <button className="tw-p-2.5 tw-flex tw-flex-col tw-items-center tw-bg-slate-100 hover:tw-bg-slate-200 tw-transition tw-text-slate-500 dark:tw-bg-slate-500 dark:tw-text-slate-200 tw-text-sm tw-mt-5 tw-rounded-md tw-font-bold">
          <FaDownload className="tw-text-lg" />
          Plantilla aseguradoras
        </button>
      </div>
    </>
  );
}

export default Pdfs;
