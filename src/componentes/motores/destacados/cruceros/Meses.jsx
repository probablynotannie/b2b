import { useNavigate } from "react-router-dom";
function Meses({ setRequestData }) {
  const navigate = useNavigate();
  const handleMonthSelect = (monthNumber) => {
    const newRequestData = {
      puerto: "",
      destino: "",
      mes: monthNumber,
      duracion: "",
      naviera: "",
    };

    setRequestData(newRequestData);
    console.log(monthNumber);
    navigate("/listadoCruceros", { state: { newRequestData } });
  };

  return (
    <section className="tw-flex tw-items-center dark:tw-text-white tw-flex-col tw-py-5">
      <h2 className="tw-font-bold tw-text-xl tw-mb-5 tw-text-center tw-text-gray-800 dark:tw-text-slate-100">
        Buscar por meses
      </h2>
      <div className="tw-grid tw-grid-cols-3 tw-gap-0.5 tw-w-2/3">
        {[
          { month: "Ene", number: "01", color: "blue" },
          { month: "Feb", number: "02", color: "pink" },
          { month: "Mar", number: "03", color: "orange" },
          { month: "Abr", number: "04", color: "emerald" },
          { month: "May", number: "05", color: "gray" },
          { month: "Jun", number: "06", color: "red" },
          { month: "Jul", number: "07", color: "purple" },
          { month: "Ago", number: "08", color: "cyan" },
          { month: "Sep", number: "09", color: "amber" },
          { month: "Oct", number: "10", color: "teal" },
          { month: "Nov", number: "11", color: "violet" },
          { month: "Dic", number: "12", color: "green" },
        ].map(({ month, number, color }, index) => (
          <div
            key={index}
            className={`tw-border tw-bg-${color}-100 dark:tw-bg-slate-700 tw-border-${color}-300 dark:tw-border-slate-600 dark:tw-text-white tw-min-h-[8vh] tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-semibold tw-text-gray-700 tw-rounded-lg tw-shadow-md hover:tw-bg-${color}-200 dark:hover:tw-bg-${color}-900 tw-transition tw-duration-300 tw-cursor-pointer tw-transform hover:tw-scale-105`}
            onClick={() => handleMonthSelect(number)}
          >
            {month}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Meses;
