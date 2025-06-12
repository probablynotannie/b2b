import { useState, useEffect } from "react";
import Input_Fecha from "../../../../../inputs/DateRangePrice";
import Aside from "./Aside";
import Info from "./Info";
import { useLocation } from "react-router-dom";
import Hoteles from "./hoteles/Hoteles";
function Fechas() {
  const location = useLocation();
  const producto = location.state;
  const productoConHabitaciones = {
    ...producto,
  };
  const [localProducto, setLocalProducto] = useState(productoConHabitaciones);
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
    startDatePrice: null,
  });

  useEffect(() => {
    const formatFecha = (date) => {
      if (!date) return "";
      const options = { day: "numeric", month: "long", year: "numeric" };
      return new Intl.DateTimeFormat("es-ES", options).format(date);
    };

    setLocalProducto((prevReserva) => ({
      ...prevReserva,
      fechaIda: dates.startDate ? formatFecha(dates.startDate) : "",
      fechaVuelta: dates.endDate ? formatFecha(dates.endDate) : "",
      adultos: localProducto.pax,
      precio: localProducto.pax * dates.startDatePrice,
    }));
  }, [dates, localProducto.pax]);
  return (
    <article className="tw-container tw-my-10 tw-grid tw-grid-cols-3 tw-gap-10">
      <main className="tw-col-span-3 lg:tw-col-span-2 tw-shadow-xl tw-rounded-lg tw-p-5 tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-min-h-[70vh] dark:tw-bg-slate-800">
        <Input_Fecha
          dates={dates}
          dias={localProducto.dias}
          prices={localProducto.prices}
          setDates={setDates}
        />
        <p className="tw-flex tw-justify-between tw-mt-2 tw-text-slate-500 dark:tw-text-slate-400">
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
          <span className="tw-font-semibold tw-text-secondary dark:tw-text-secondaryDark">
            {dates.startDatePrice ? `${dates.startDatePrice}€` : "Precio"}
          </span>
        </p>
        {dates.startDate && (
          <section>
            <Hoteles />
            <Info />
          </section>
        )}
      </main>
      <aside className="tw-col-span-3 lg:tw-col-span-1 tw-sticky tw-top-5 tw-shadow-xl tw-rounded-lg tw-p-5 tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-h-fit dark:tw-bg-slate-800">
        <Aside dates={dates} producto={localProducto} reserva={localProducto} />
      </aside>
    </article>
  );
}

export default Fechas;
