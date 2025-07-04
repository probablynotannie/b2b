import { useNavigate } from "react-router-dom";

function Meses({ setRequestData }) {
  const navigate = useNavigate();
  const today = new Date();
  const currentMonthIdx = today.getMonth();
  const currentYear = today.getFullYear();

  const monthsData = [
    { short: "Ene", num: "01", color: "blue", full: "enero" },
    { short: "Feb", num: "02", color: "pink", full: "febrero" },
    { short: "Mar", num: "03", color: "orange", full: "marzo" },
    { short: "Abr", num: "04", color: "emerald", full: "abril" },
    { short: "May", num: "05", color: "gray", full: "mayo" },
    { short: "Jun", num: "06", color: "red", full: "junio" },
    { short: "Jul", num: "07", color: "purple", full: "julio" },
    { short: "Ago", num: "08", color: "cyan", full: "agosto" },
    { short: "Sep", num: "09", color: "amber", full: "septiembre" },
    { short: "Oct", num: "10", color: "teal", full: "octubre" },
    { short: "Nov", num: "11", color: "violet", full: "noviembre" },
    { short: "Dic", num: "12", color: "green", full: "diciembre" },
  ];

  const availableMonths = monthsData.slice(currentMonthIdx);

  const colorClasses = {
    blue: "tw-bg-blue-100 tw-border-blue-300 hover:tw-bg-blue-200 dark:tw-bg-blue-900 dark:tw-border-blue-600",
    pink: "tw-bg-pink-100 tw-border-pink-300 hover:tw-bg-pink-200 dark:tw-bg-pink-900 dark:tw-border-pink-600",
    orange:
      "tw-bg-orange-100 tw-border-orange-300 hover:tw-bg-orange-200 dark:tw-bg-orange-900 dark:tw-border-orange-600",
    emerald:
      "tw-bg-emerald-100 tw-border-emerald-300 hover:tw-bg-emerald-200 dark:tw-bg-emerald-900 dark:tw-border-emerald-600",
    gray: "tw-bg-gray-100 tw-border-gray-300 hover:tw-bg-gray-200 dark:tw-bg-indigo-800 dark:tw-border-indigo-500",
    red: "tw-bg-red-100 tw-border-red-300 hover:tw-bg-red-200 dark:tw-bg-red-900 dark:tw-border-red-600",
    purple:
      "tw-bg-purple-100 tw-border-purple-300 hover:tw-bg-purple-200 dark:tw-bg-purple-900 dark:tw-border-purple-600",
    cyan: "tw-bg-cyan-100 tw-border-cyan-300 hover:tw-bg-cyan-200 dark:tw-bg-cyan-900 dark:tw-border-cyan-600",
    amber:
      "tw-bg-amber-100 tw-border-amber-300 hover:tw-bg-amber-200 dark:tw-bg-amber-900 dark:tw-border-amber-600",
    teal: "tw-bg-teal-100 tw-border-teal-300 hover:tw-bg-teal-200 dark:tw-bg-teal-900 dark:tw-border-teal-600",
    violet:
      "tw-bg-violet-100 tw-border-violet-300 hover:tw-bg-violet-200 dark:tw-bg-violet-900 dark:tw-border-violet-600",
    green:
      "tw-bg-green-100 tw-border-green-300 hover:tw-bg-green-200 dark:tw-bg-green-900 dark:tw-border-green-600",
  };

  const handleMonthSelect = ({ num }) => {
    const anioMes = `${currentYear}-${num}`;
    const mesAnio = `${num}-${currentYear}`;
    const datosForm = {
      idPuerto: "",
      idZona: "",
      fechSal: anioMes,
      duracion: "",
      idNav: "",
    };

    setRequestData(datosForm);
    navigate(`/listadoCruceros/fechSal/${mesAnio}`, {
      state: { datosForm: datosForm },
    });
  };

  return (
    <section className="tw-flex tw-items-center dark:tw-text-white tw-flex-col tw-py-5">
      <h2 className="tw-font-bold tw-text-xl tw-mb-5 tw-text-center tw-text-gray-800 dark:tw-text-slate-100">
        Buscar por meses
      </h2>

      <div className="tw-grid tw-grid-cols-3 tw-gap-0.5 tw-w-2/3">
        {availableMonths.map(({ short, num, color }) => (
          <div
            key={num}
            className={`
              tw-border tw-min-h-[8vh] tw-flex tw-items-center tw-justify-center
              tw-text-lg tw-font-semibold tw-rounded-lg tw-shadow-md
              tw-cursor-pointer tw-transition-transform hover:tw-scale-105
              ${colorClasses[color]}
            `}
            onClick={() => handleMonthSelect({ num })}
          >
            {short}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Meses;
