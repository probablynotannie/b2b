import { useState, useEffect } from "react";
import Input_Fecha from "../../../../../inputs/DateRangePrice";
import Aside from "./Aside";
import Info from "./Info";
import { useLocation } from "react-router-dom";
function Fechas() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const location = useLocation();
  const producto = location.state;

  const productoWithHabitaciones = {
    ...producto,
    habitaciones: producto.habitaciones || [],
  };

  const [localProducto, setLocalProducto] = useState(productoWithHabitaciones);

  const [reserva, setReserva] = useState({
    type: "destino",
    nombre: localProducto.nombre,
    fechaIda: "",
    fechaVuelta: "",
    precio: 0,
  });

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

    setReserva((prevReserva) => ({
      ...prevReserva,
      fechaIda: dates.startDate ? formatFecha(dates.startDate) : "",
      fechaVuelta: dates.endDate ? formatFecha(dates.endDate) : "",
      adultos: localProducto.pax,
      precio: localProducto.pax * dates.startDatePrice,
    }));
  }, [dates, localProducto.pax]);

  // Function to add a room to the localProducto object
  const addRoom = () => {
    setLocalProducto((prevState) => {
      const updatedHabitaciones = [
        ...prevState.habitaciones,
        { id: Date.now(), pax: 2 },
      ];

      const totalPax = updatedHabitaciones.reduce(
        (sum, hab) => sum + hab.pax,
        2
      );

      const totalPrice = totalPax * 100;

      return {
        ...prevState,
        habitaciones: updatedHabitaciones, // Update habitaciones
        pax: totalPax,
        precio: totalPrice,
      };
    });
  };

  // Function to delete a room from the localProducto object
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
        habitaciones: updatedHabitaciones, // Update habitaciones
        pax: totalPax,
      };
    });
  };

  // Function to change pax for a specific room
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
        habitaciones: updatedHabitaciones, // Update habitaciones
        pax: totalPax,
      };
    });
  };

  return (
    <article className="container mt-10 grid grid-cols-3 gap-10">
      <main className="col-span-3 lg:col-span-2 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 min-h-[70vh] dark:bg-slate-800">
        <h1 className="font-semibold dark:text-white text-2xl">
          Selecciona el rango de fechas
        </h1>
        <Input_Fecha
          dates={dates}
          dias={localProducto.dias}
          prices={localProducto.prices}
          setDates={setDates}
        />
        <p className="flex justify-between mt-2 text-slate-500 dark:text-slate-400">
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
          <span className="font-semibold text-secondary dark:text-secondaryDark">
            {dates.startDatePrice ? `${dates.startDatePrice}€` : "Precio"}
          </span>
        </p>
        {dates.startDate && (
          <section>
            <Info />
          </section>
        )}
      </main>
      <aside className="col-span-3 lg:col-span-1 sticky top-5 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 h-fit dark:bg-slate-800">
        <Aside
          dates={dates}
          handleRoomTypeChange={handleRoomTypeChange}
          addRoom={addRoom}
          producto={localProducto} // Pass the local product copy to Aside
          deleteRoom={deleteRoom}
          reserva={reserva}
        />
      </aside>
    </article>
  );
}

export default Fechas;
