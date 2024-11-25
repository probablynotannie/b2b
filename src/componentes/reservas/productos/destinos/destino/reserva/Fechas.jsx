import { useState } from "react";
import Input_Fecha from "../../../../../inputs/DateRangePrice";
import Aside from "./Aside";
import Pago from "./Pago";
import Pasajeros from "./Pasajeros";
import Info from "./Info";
function Fechas({ dias }) {
  const producto = {
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
    pax: {
      adultos: 2,
      ninio: 0,
      senior: 0,
    },
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
      "Descubra en un solo viaje la capital de Austria, Viena, y la ciudad con la mejor calidad de vida de Alemania, Munich. Viena, la capital mundial de la música y Munich, la capital de la región de Baviera que cuenta con una notable belleza arquitectónica y natural. Dos ciudades diferentes y las dos muy interesantes.",
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
  };

  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
    startDatePrice: null,
  });
  const diasL = 4;
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
    <article className="container my-5 mt-10 grid grid-cols-3 gap-10">
      <main className="col-span-3 lg:col-span-2 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 min-h-[70vh] dark:bg-slate-800">
        <h1 className="font-semibold dark:text-white text-xl">
          Selecciona el rango de fechas
        </h1>
        <Input_Fecha
          dates={dates}
          dias={diasL}
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
        <section>
          <Info />
        </section>
        <section>
          <Pasajeros />
        </section>
        <section>
          <Pago />
        </section>
      </main>
      <aside className="col-span-3 lg:col-span-1 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 h-fit dark:bg-slate-800">
        <Aside dates={dates} producto={producto} />
      </aside>
    </article>
  );
}

export default Fechas;
