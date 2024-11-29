import { useState } from "react";
import { FaMapPin, FaClock } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { MdRestaurant } from "react-icons/md";
import Detalles from "./Detalles";
import Resumen from "./Resumen";

function Destino() {
  const [reserva, setReserva] = useState();
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
  // State to track selected hotel option
  const [selectedHotel, setSelectedHotel] = useState(producto.hotelPrecio[0]);

  // Handler to update selected hotel
  const handleHotelChange = (e) => {
    const selectedOption = producto.hotelPrecio.find(
      (hotel) => hotel.hotel === e.target.value
    );
    setSelectedHotel(selectedOption);
  };

  return (
    <article className="container my-10 lg:mb-10 lg:mt-auto ">
      <header className="dark:bg-slate-800 dark:rounded-xl border-b-2 border-slate-100 dark:border-slate-800 pb-5 md:mt-10 p-5">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-bold dark:text-white">
              {producto.nombre}
            </h1>
            <p className="flex items-center flex-wrap  font-semibold">
              <span className="mr-2 flex items-center text-slate-600 dark:text-slate-400 text-sm">
                <FaMapPin className="text-secondary text-lg" />
                {producto.ubicacion}
              </span>
              <span className="mr-2 flex items-center text-slate-600 dark:text-slate-400 text-sm">
                <FaClock className="mr-2 text-secondary text-lg" />
                {producto.dias} días
              </span>
              <span className="mr-2 flex items-center text-slate-600 dark:text-slate-400 text-sm">
                <FaBed className="mr-2 text-secondary text-lg" />
                {selectedHotel.hotel}
              </span>
              <span className="mr-2 flex items-center text-slate-600 dark:text-slate-400 text-sm">
                <MdRestaurant className="mr-2 text-secondary text-lg" />
                {producto.desayunos} desayunos
              </span>
            </p>
          </div>
          <button className="hidden md:block rounded-xl shadow-md hover:shadow-lg transition p-3 bg-secondary text-white font-bold">
            PVP desde {selectedHotel.precio}€
          </button>
        </div>
      </header>
      <article className="my-5 mt-10 grid grid-cols-3 gap-10">
        <section className="col-span-3 lg:col-span-2 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 min-h-[90vh] dark:bg-slate-800">
          <Detalles producto={producto} />
        </section>
        <section className="col-span-3 lg:col-span-1 shadow-xl rounded-lg p-5 border-2 border-slate-100 dark:border-slate-700 h-fit sticky top-5 dark:bg-slate-800">
          <Resumen
            handleHotelChange={handleHotelChange}
            setSelectedHotel={setSelectedHotel.hotel}
            producto={{ ...producto, precio: selectedHotel.precio }}
          />
        </section>
      </article>
    </article>
  );
}

export default Destino;
