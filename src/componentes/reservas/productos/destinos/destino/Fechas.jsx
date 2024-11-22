import { useState } from "react";
import Input_Fecha from "../../../../inputs/DateRangePrice";
function Fechas({ dias }) {
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
    startDatePrice: null,
    endDatePrice: null,
  });
  const diasL = 4;
  const handleDateChange = (
    startDate,
    endDate,
    startDatePrice,
    endDatePrice
  ) => {
    setDates({ startDate, endDate, startDatePrice, endDatePrice });
  };
  const prices = {
    ida: {
      "2024-11-2": 300,
      "2024-11-9": 280,
      "2024-11-16": 150,
      "2024-11-19": 503,
      "2024-11-26": 860,
      "2024-11-30": 268,
      "2024-12-03": 305,
      "2024-12-06": 158,
      "2024-12-10": 158,
      "2024-12-13": 158,
    },
  };
  return (
    <article className="container my-5 mt-10 grid grid-cols-3 gap-10">
      <section className="col-span-3 lg:col-span-2 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 min-h-[70vh] dark:bg-slate-800">
        <span className="font-semibold">Selecciona el rango de fechas</span>
        <Input_Fecha
          onDateChange={handleDateChange}
          dias={diasL}
          prices={prices}
        />
        <p className="flex justify-between mt-2 text-slate-500">
          <span>
            {dates.startDate
              ? dates.startDate.toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "Fecha ida"}{" "}
            -{" "}
            {dates.endDate
              ? dates.endDate.toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "Fecha vuelta"}
          </span>
          <span className="font-semibold text-green-700">
            {dates.startDatePrice ? `${dates.startDatePrice}€` : "Precio"}
          </span>
        </p>
      </section>
      <section className="col-span-3 lg:col-span-1 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 h-fit dark:bg-slate-800">
        aefaf
      </section>
    </article>
  );
}

export default Fechas;
