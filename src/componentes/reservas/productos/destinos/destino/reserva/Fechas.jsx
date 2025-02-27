import { useState, useEffect } from "react";
import Input_Fecha from "../../../../../inputs/DateRangePrice";
import Aside from "./Aside";
import Info from "./Info";
import { useLocation } from "react-router-dom";
function Fechas() {
  const location = useLocation();
  const producto = location.state;

  const productoConHabitaciones = {
    ...producto,
    habitaciones: producto.habitaciones || [],
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
  const addRoom = (tipo = "Habitación Doble") => {
    setLocalProducto((prevState) => {
      const updatedHabitaciones = [
        ...prevState.habitaciones,
        { id: Date.now(), pax: 2, tipo }, 
      ];
  
      const totalPax = updatedHabitaciones.reduce(
        (sum, hab) => sum + hab.pax,
        2
      );
  
      const totalPrice = totalPax * 100;
  
      return {
        ...prevState,
        habitaciones: updatedHabitaciones,
        pax: totalPax,
        precio: totalPrice,
      };
    });
  };

  const deleteRoom = (id) => {
    setLocalProducto((prevState) => {
      const updatedHabitaciones = prevState.habitaciones.filter(
        (habitacion) => habitacion.id !== id
      );
      const totalPax = updatedHabitaciones.reduce(
        (sum, hab) => sum + hab.pax,
        2
      );
      return {
        ...prevState,
        habitaciones: updatedHabitaciones,
        pax: totalPax,
      };
    });
  };

  const handleRoomTypeChange = (id, pax) => {
    setLocalProducto((prevState) => {
      const updatedHabitaciones = prevState.habitaciones.map((habitacion) =>
        habitacion.id === id ? { ...habitacion, pax } : habitacion
      );
      const totalPax = updatedHabitaciones.reduce(
        (sum, hab) => sum + hab.pax,
        2
      );
      return {
        ...prevState,
        habitaciones: updatedHabitaciones,
        pax: totalPax,
      };
    });
  };
  return (
    <article className="container mt-10 grid grid-cols-3 gap-10">
      <main className="col-span-3 lg:col-span-2 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:tw-border-slate-700 min-h-[70vh] dark:bg-slate-800">
        <h1 className="font-semibold dark:tw-text-white text-2xl">
          Selecciona el rango de fechas
        </h1>
        <Input_Fecha
          dates={dates}
          dias={localProducto.dias}
          prices={localProducto.prices}
          setDates={setDates}
        />
        <p className="flex justify-between mt-2 text-slate-500 dark:tw-text-slate-400">
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
          <span className="font-semibold tw-text-secondary dark:tw-text-secondary">
            {dates.startDatePrice ? `${dates.startDatePrice}€` : "Precio"}
          </span>
        </p>
        {dates.startDate && (
          <section>
            <Info />
          </section>
        )}
      </main>
      <aside className="col-span-3 lg:col-span-1 sticky top-5 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:tw-border-slate-700 h-fit dark:bg-slate-800">
        <Aside
          dates={dates}
          handleRoomTypeChange={handleRoomTypeChange}
          addRoom={addRoom}
          producto={localProducto}
          deleteRoom={deleteRoom}
          reserva={localProducto}
        />
      </aside>
    </article>
  );
}

export default Fechas;
