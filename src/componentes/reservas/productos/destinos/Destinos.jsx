import { FaMapPin, FaClock } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { MdRestaurant } from "react-icons/md";
import { useState } from "react";
import MapWithJourney from "./filtros/MapWithJourney";
import { Link } from "react-router-dom";
function Resultado() {
  const destinos = [
    {
      id: "OMT31259089",
      map: "https://goo.gl/maps/example1",
      precio: 1200,
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
      titulo: "Aventura en la Gran Barrera de Coral",
      imagen: "/destinos/cairns.png",
      noches_en: ["Cairns", "Port Douglas", "Fitzroy Island"],
      sitio_noches: [
        "Gran Barrera de Coral",
        "Daintree Rainforest",
        "Playa de Fitzroy Island",
      ],
      dias: 5,
      categorias: "Económico",
      comidas: "Desayuno, Almuerzo",
      agencia: "Coral Reef Adventures",
    },
    {
      id: "OMT312513508",
      map: "https://goo.gl/maps/example2",
      precio: 850,
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
      titulo: "Escapada Romántica en Cairns",
      imagen: "/destinos/cairns.png",
      noches_en: ["Cairns", "Green Island", "Palm Cove"],
      sitio_noches: [
        "Laguna Esplanade",
        "Green Island Resort",
        "Palm Cove Beach",
      ],
      dias: "OMT312513506",
      categorias: "Confort",
      comidas: "Desayuno",
      agencia: "Tropical Getaways",
    },
    {
      id: "OMT31258952",
      map: "https://goo.gl/maps/example3",
      precio: 500,
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
      titulo: "Relax en las Playas de Cairns",
      imagen: "/destinos/cairns.png",
      noches_en: ["Cairns", "Trinity Beach", "Mission Beach"],
      sitio_noches: ["Playa Trinity", "Cascadas Crystal", "Playa Mission"],
      dias: 7,
      categorias: "Confort",
      comidas: "Todo Incluido",
      agencia: "Cairns Beach Resorts",
    },
    {
      id: "OGL31752659",
      map: "https://goo.gl/maps/example4",
      precio: 1100,

      titulo: "Safari en la Selva Tropical de Daintree",
      imagen: "/destinos/cairns.png",
      noches_en: ["Cairns", "Daintree Rainforest", "Mossman Gorge"],
      sitio_noches: [
        "Parque Nacional Daintree",
        "Río Daintree",
        "Garganta Mossman",
      ],
      dias: "OMT312519457",
      categorias: "Confort",
      comidas: "Desayuno, Cena",
      agencia: "Wildlife Tours Cairns",
    },
    {
      id: "ES30556032",
      map: "https://goo.gl/maps/example5",
      precio: 950,
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
          id: 3,
          name: "Praga",
          country: "República Checa",
          nights: 3,
          lat: 50.0755,
          lng: 14.4378,
        },
      ],
      titulo: "Exploración en Cairns y Alrededores",
      imagen: "/destinos/cairns.png",
      noches_en: ["Cairns", "Kuranda", "Atherton Tablelands"],
      sitio_noches: [
        "Mercado de Kuranda",
        "Cataratas Barron",
        "Meseta Atherton",
      ],
      dias: 5,
      categorias: "Económico",
      comidas: "Desayuno",
      agencia: "Zen Explorers",
    },
  ];

  const [activeMap, setActiveMap] = useState(null);
  const toggleMap = (id) => {
    setActiveMap((prev) => (prev === id ? null : id));
  };

  return (
    <section className="pb-12 mt-5">
      <div className="flex flex-col lg:flex-row lg:justify-between shadow-xl lg:shadow-none p-3 rounded-xl border-2 lg:border-0 border-slate-200 dark:bg-slate-800 dark:md:bg-inherit dark:md:border-0 dark:md:shadow-none dark:border-slate-600 mt-4 lg:mt-0">
        <h3 className="text-secondary font-semibold text-lg ">
          Resultados ({destinos.length})
        </h3>
      </div>
      <Link to="/destino">
        {destinos.map((destino, index) => (
          <article
            key={index}
            className="cursor-pointer bg-white flex dark:bg-slate-800 shadow-xl lg:shadow-lg hover:shadow-xl border-2 border-slate-100 dark:border-slate-800 rounded-xl transition mt-10 lg:flex flex-col relative min-lg:h-[25vh]"
          >
            <div className="relative w-full">
              {activeMap === destino.id ? (
                <div className="h-[25vh]   rounded-t-lg flex items-center justify-center">
                  <MapWithJourney destino={destino} />
                </div>
              ) : (
                <div className="relative h-[25vh] rounded-t-lg">
                  <div className="bg-indigo-700 bg-opacity-40 w-full h-full rounded-t-lg absolute" />
                  <img
                    src={destino.imagen}
                    alt="destino"
                    className="w-full object-cover h-full border-y-2 border-secondary rounded-t-lg dark:border-slate-800"
                  />
                </div>
              )}
              <button
                onClick={() => toggleMap(destino.id)}
                className="flex items-center font-semibold bg-secondary text-white px-2 p-1 rounded-bl-lg absolute top-0 right-0"
              >
                {activeMap === destino.id ? "Ocultar mapa" : "Mostrar mapa"}
                <FaMapPin className="text-white ml-2" />
              </button>
              <span className="text-xl font-bold bg-secondary text-white px-2 p-1 rounded-br-lg absolute top-0">
                {destino.precio}€
              </span>
            </div>
            <div className="px-5 py-3 dark:text-slate-300">
              <div className="flex justify-between items-center">
                <h4 className="dark:text-secondaryDark font-semibold text-secondary">
                  {destino.titulo}
                </h4>
              </div>
              <div className="flex flex-wrap gap-5 border-b-2 border-slate-100 pb-5">
                <p className="flex">
                  <span className="font-semibold flex items-center">
                    Noches en:
                  </span>
                  {destino.noches_en.map((noche, i) => (
                    <span key={i} className="ml-1">
                      {noche}
                      {i < destino.noches_en.length - 1 && ","}{" "}
                    </span>
                  ))}
                </p>
                <p className="flex">
                  <span className="font-semibold flex items-center">
                    Visitando:
                  </span>
                  {destino.sitio_noches.map((noche, i) => (
                    <span key={i} className="ml-1">
                      {noche}
                      {i < destino.noches_en.length - 1 && ","}{" "}
                    </span>
                  ))}
                </p>
              </div>
              <div>
                <p className="flex items-center font-semibold px-2 p-1 rounded-tr-lg bottom-0 left-0">
                  <span className="mr-2 flex items-center">
                    <FaClock className="mr-2" />
                    {destino.dias} días
                  </span>
                  <span className="mr-2 flex items-center">
                    <FaBed className="mr-2" />
                    {destino.categorias}
                  </span>
                  <span className="mr-2 flex items-center">
                    <MdRestaurant className="mr-2" />
                    {destino.comidas}
                  </span>
                </p>
              </div>
              <p className="text-sm text-secondary text-center font-bold">
                {destino.id}
              </p>
              <p className="text-slate-400 dark:text-slate-500 text-sm text-center">
                Por
                <span className="ml-1 font-semibold text-slate-700 dark:text-slate-400">
                  {destino.agencia}
                </span>
              </p>
            </div>
          </article>
        ))}
      </Link>
    </section>
  );
}
export default Resultado;
