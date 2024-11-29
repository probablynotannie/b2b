import { FaMapPin } from "react-icons/fa";
import { useState } from "react";
import MapWithJourney from "./filtros/MapWithJourney";
import { Link } from "react-router-dom";
function Resultado() {
  const destinos = [
    {
      precio: 1200,
      imagen: "/destinos/cairns.png",
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
          <Link to="/destino">
            <div className="px-5 py-3 dark:text-slate-300"></div>
          </Link>
        </article>
      ))}
    </section>
  );
}
export default Resultado;
