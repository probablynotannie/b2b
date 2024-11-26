import { useState } from "react";
import Input_Fecha from "../../../../../inputs/DateRangePrice";
import Aside from "./Aside";
import Pago from "./Pago";
import Pasajeros from "./Pasajeros";
import Info from "./Info";

function Fechas() {
  const [producto, setProducto] = useState({
    nombre: "Hamburgo y su puerto",
    ubicacion: "Hamburgo",
    img: "/destinos/destinoBanner.jpg",
    incluidos: [
      "Translado de llegada",
      "Translado de salida",
      "2 desayunos",
      "Hoteles",
      "Régimen alimenticio",
      "Visitas y guias segun se especifique",
    ],
    no_incluidos: [
      "Vuelos internacionales",
      "Vuelos internos no detallados",
      "Transporte entre ciudades",
      "Tasas de aeropuerto",
      "Tasas del país",
    ],
    pax: 2,
    habitaciones: [],
    itinerarioViaje: [
      {
        id: 0,
        dia: 1,
        ciudad: "Viena",
        descripcion:
          "Llegada a Viena y traslado al hotel. Entrega de todas las informaciones.",
        alojamiento: "Viena",
        hotel: "Garten- & Kunsthotel Gabriel o similar 3*",
        actividades:
          "Visita Panorámica de Viena - en grupo - guia local en español",
      },
      {
        id: 0,
        dia: 2,
        ciudad: "Viena",
        descripcion:
          "Siguiendo el anillo Ringstrasse, realizaremos una interesante panorámica a pie, donde podrán admirar los numerosos edificios que aquí se encuentran. Como ejemplos de estos, mencionamos: la Ópera del Estado, los Museos de Historia del Arte e Historia de la Naturaleza, el Barrio de los Museos, el Palacio Imperial (la antigua residencia invernal del Emperador), el Parlamento, el Ayuntamiento y el Teatro Burgtheater. Tarde libre dedicada a las visitas opcionales.",
        alojamiento: "Munich",
        hotel: "Garten- & Kunsthotel Gabriel o similar 3*",
        actividades:
          "Visita Panorámica de Viena - en grupo - guia local en español",
      },
    ],
    noches: [
      {
        id: 1,
        name: "Dresde",
        country: "Alemania",
        nights: 1,
        lat: 51.0504,
        lng: 13.7373,
      },
      {
        id: 2,
        name: "Berlín",
        country: "Alemania",
        nights: 2,
        lat: 52.52,
        lng: 13.405,
      },
    ],
    hotelPrecio: [
      {
        precio: 257,
        hotel: "Hotel 3*",
      },
      {
        precio: 458,
        hotel: "Hotel 4*",
      },
    ],
    dias: 4,
    desayunos: 3,
    banner: "",
    descripcion:
      "Descubra en un solo viaje la capital de Austria, Viena, y la ciudad con la mejor calidad de vida de Alemania, Munich.",
    itinerario: [
      {
        id: 0,
        ubicacion: "Hamburgo",
        descripcioin:
          "Al llegar a Hamburgo traslado por cuenta propia al hotel.",
        regimen: "Desayuno",
        actividades: [""],
        tarjeta: "Tarjeta Hamburg Card - tickets incluidos",
      },
    ],
  });

  const addRoom = () => {
    setProducto((prevState) => {
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
        habitaciones: updatedHabitaciones,
        pax: totalPax,
        precio: totalPrice,
      };
    });
  };
  // Delete Room Function
  const deleteRoom = (id) => {
    setProducto((prevState) => {
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

  // Handle Room Type Change
  const handleRoomTypeChange = (id, pax) => {
    setProducto((prevState) => {
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

  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
    startDatePrice: null,
  });

  const prices = {
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
  };

  return (
    <article className="container mt-10 grid grid-cols-3 gap-10">
      <main className="col-span-3 lg:col-span-2 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 min-h-[70vh] dark:bg-slate-800">
        <h1 className="font-semibold dark:text-white text-2xl">
          Selecciona el rango de fechas
        </h1>
        <Input_Fecha
          dates={dates}
          dias={producto.dias}
          prices={prices}
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
          <>
            <section>
              <Info />
            </section>
          </>
        )}
      </main>
      <aside className="col-span-3 lg:col-span-1 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 h-fit dark:bg-slate-800">
        <Aside
          dates={dates}
          setProducto={setProducto}
          handleRoomTypeChange={handleRoomTypeChange}
          addRoom={addRoom}
          producto={producto}
          deleteRoom={deleteRoom}
        />
      </aside>
    </article>
  );
}

export default Fechas;
