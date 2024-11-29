import { useState, useEffect } from "react";
import Input_Fecha from "../../../../../inputs/DateRangePrice";
import Aside from "./Aside";

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
    notas: [
      {
        id: 0,
        title: "Incluye",
        datos: [
          "Todas las entradas a los lugares notables, museos y galerías.",
          "Agua mineral todos los días durante el transporte",
        ],
      },
      {
        id: 1,
        title: "Importante",
        datos: [
          "Servicios de guía de habla hispana (*excepto el día de llegada a Armenia, el día de salida de Georgia).",
          "En caso de cambios drásticos entre la moneda nacional y extranjera, mantenemos el derecho de revisión de precios.",
          "La mayoría de los museos están cerrados los Lunes, festivos oficiales y locales.",
          "El orden de las visitas puede ser modificado según las condiciones climáticas, de tiempo y consideración de guía en algunos paises no se recomiendan las habitaciones triples.",
          "En algunos paises no se recomiendan las habitaciones triples.",
          "Una vez realizada la reserva, el hotel de programa no tuviera disponibilidad se ofrecera un hotel de caracteristicas similares.",
          "Si los horarios de los vuelos de llegada y salida no coinciden con horarios laborables, el operador puede cobrar un suplemento por traslado nocturno.",
          "El orden de las visitas puede variar.Se informara en destino.",
        ],
      },
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
      {
        id: 0,
        dia: 3,
        ciudad: "Viena",
        descripcion:
          "Traslado a la estación de tren en Viena por cuenta propia, por la mañana seguiremos en tren hacia Múnich, la capital bavara, llegada y traslado al Hotel de Munich por cuenta propia, resto del día libre para realizar actividades opcionales.",
        alojamiento: "Munich",
        hotel: "Garten- & Kunsthotel Gabriel o similar 3*",
        actividades: "Tren Viena - Munich (Segunda Clase) - tickets incluidos",
      },
      {
        id: 0,
        dia: 4,
        ciudad: "Viena",
        descripcion:
          "Por la mañana realizamos un paseo a pie empezando en la Karlstor, pasaremos por la iglesia St. Michael, donde se encuentran los restos de “el Rey Loco”, la Marienplatz, con el Ayuntamiento y su famoso carrillón, la Frauenkirche y su huella del diablo, la Plaza de la Ópera, el Feldherrnhalle o monumento a los generales bávaros, la Bürgersaalkirche, la Residencia Real y la Iglesia de San Pedro hasta cubrir todos los puntos de interés del centro histórico, así como los rincones más escondidos.",
        alojamiento: "Viena",
        hotel: "Garten- & Kunsthotel Gabriel o similar 3*",
        regimen: "Desayuno",
      },
      {
        id: 0,
        dia: 5,
        ciudad: "Viena",
        descripcion:
          "Tiempo libre hasta la hora indicada, recogida en el hotel y traslado al aeropuerto.",
        alojamiento: "Viena",
        actividades:
          "Visita Panorámica de Munich - en grupo - guia local en español",
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
      {
        id: 3,
        name: "Praga",
        country: "República Checa",
        nights: 3,
        lat: 50.0755,
        lng: 14.4378,
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

  const [reserva, setReserva] = useState({
    type: "destino",
    nombre: producto.nombre,
    fechaIda: "",
    fechaVuelta: "",
    precio: 0,
  });

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
      adultos: producto.pax,
      precio: producto.pax * dates.startDatePrice,
    }));
  }, [dates, producto.pax]);

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
          <section>
            <Info />
          </section>
        )}
      </main>
      <aside className="col-span-3 lg:col-span-1 sticky top-5 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 h-fit dark:bg-slate-800">
        <Aside
          dates={dates}
          setProducto={setProducto}
          handleRoomTypeChange={handleRoomTypeChange}
          addRoom={addRoom}
          producto={producto}
          deleteRoom={deleteRoom}
          reserva={reserva}
        />
      </aside>
    </article>
  );
}
export default Fechas;
