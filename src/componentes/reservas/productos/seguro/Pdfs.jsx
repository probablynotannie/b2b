import { FaDownload } from "react-icons/fa";

function Pdfs() {
  const botones = [
    {
      id: 0,
      icono: "",
      boton: "Condiciones generales",
      color: "bg-pink-300 text-pink-500 dark:bg-pink-800 dark:text-pink-300",
      link: "",
    },
    {
      id: 1,
      icono: "",
      boton: "IPID",
      color: "bg-blue-300 text-blue-500 dark:bg-blue-800 dark:text-blue-300",
      link: "",
    },
    {
      id: 2,
      icono: "",
      boton: "Protocolo siniestros",
      color:
        "bg-purple-300 text-purple-500 dark:bg-purple-800 dark:text-purple-300",
      link: "",
    },
    {
      id: 3,
      icono: "",
      boton: "Certificado COVID",
      color:
        "bg-orange-300 text-orange-500 dark:bg-orange-800 dark:text-orange-300",
      link: "",
    },
    {
      id: 4,
      icono: "",
      boton: "Resumen coberturas",
      color: "bg-red-300 text-red-500 dark:bg-cyan-800 dark:text-cyan-300",
      link: "",
    },
  ];
  return (
    <>
      <section className="border-y-2 border-slate-100 dark:border-slate-700 py-5">
        <div className="flex items-center justify-around flex-wrap gap-3">
          {botones.map((boton) => (
            <button
              className={`w-[100px] h-[100px] p-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition hover:scale-105 ${boton.color}`}
              key={boton.id}
            >
              {boton.boton}
            </button>
          ))}
        </div>
      </section>
      <div className="flex justify-end">
        <button className="p-2.5 flex flex-col items-center bg-slate-100 hover:bg-slate-200 transition text-slate-500 dark:bg-slate-500 dark:text-slate-200 text-sm  mt-5 rounded-md font-bold">
          <FaDownload className="text-lg" />
          Plantilla aseguradoras
        </button>
      </div>
    </>
  );
}

export default Pdfs;
