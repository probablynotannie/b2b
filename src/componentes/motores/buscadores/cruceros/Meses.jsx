import { useNavigate } from "react-router-dom";
function Meses({ setRequestData }) {
  const navigate = useNavigate();
  const getNombreMes = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const handleMonthSelect = (monthNumber) => {
    const mes = getNombreMes[monthNumber - 1];
    const newRequestData = {
      idPuerto: "",
      idZona: "",
      fechSal: monthNumber,
      duracion: "",
      idNav: "",
    };

    const enlace = `/fechSal/${mes}`;
    setRequestData(newRequestData);
    navigate(`/listadoCruceros${enlace}`, {
      state: { datosForm: newRequestData },
    });
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
            className={`tw-border tw-min-h-[8vh] tw-flex tw-items-center tw-justify-center tw-text-lg tw-font-semibold tw-rounded-lg tw-shadow-md tw-smooth tw-cursor-pointer tw-transform hover:tw-scale-105
    ${
      color === "blue"
        ? "tw-bg-blue-100 tw-border-blue-300 hover:tw-bg-blue-200 dark:tw-bg-blue-900 dark:tw-border-blue-600"
        : ""
    }
    ${
      color === "pink"
        ? "tw-bg-pink-100 tw-border-pink-300 hover:tw-bg-pink-200 dark:tw-bg-pink-900 dark:tw-border-pink-600"
        : ""
    }
    ${
      color === "orange"
        ? "tw-bg-orange-100 tw-border-orange-300 hover:tw-bg-orange-200 dark:tw-bg-orange-900 dark:tw-border-orange-600"
        : ""
    }
    ${
      color === "emerald"
        ? "tw-bg-emerald-100 tw-border-emerald-300 hover:tw-bg-emerald-200 dark:tw-bg-emerald-900 dark:tw-border-emerald-600"
        : ""
    }
    ${
      color === "gray"
        ? "tw-bg-gray-100 tw-border-gray-300 hover:tw-bg-gray-200 dark:tw-bg-indigo-800 dark:tw-border-indigo-5   00"
        : ""
    }
    ${
      color === "red"
        ? "tw-bg-red-100 tw-border-red-300 hover:tw-bg-red-200 dark:tw-bg-red-900 dark:tw-border-red-600"
        : ""
    }
    ${
      color === "purple"
        ? "tw-bg-purple-100 tw-border-purple-300 hover:tw-bg-purple-200 dark:tw-bg-purple-900 dark:tw-border-purple-600"
        : ""
    }
    ${
      color === "cyan"
        ? "tw-bg-cyan-100 tw-border-cyan-300 hover:tw-bg-cyan-200 dark:tw-bg-cyan-900 dark:tw-border-cyan-600"
        : ""
    }
    ${
      color === "amber"
        ? "tw-bg-amber-100 tw-border-amber-300 hover:tw-bg-amber-200 dark:tw-bg-amber-900 dark:tw-border-amber-600"
        : ""
    }
    ${
      color === "teal"
        ? "tw-bg-teal-100 tw-border-teal-300 hover:tw-bg-teal-200 dark:tw-bg-teal-900 dark:tw-border-teal-600"
        : ""
    }
    ${
      color === "violet"
        ? "tw-bg-violet-100 tw-border-violet-300 hover:tw-bg-violet-200 dark:tw-bg-violet-900 dark:tw-border-violet-600"
        : ""
    }
    ${
      color === "green"
        ? "tw-bg-green-100 tw-border-green-300 hover:tw-bg-green-200 dark:tw-bg-green-900 dark:tw-border-green-600"
        : ""
    }
  `}
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
