import Sidebar from "./sidebar/Sidebar";
import { useState } from "react";
import Buscador_Cruceros from "./buscadores/transfers/Buscador_Transfers";
import { FaClock } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
function Cruceros() {
  const [destino, setDestino] = useState("");
  const [mes, setMes] = useState("");
  const [duracion, setDuracion] = useState(2);
  const [puerto, setPuerto] = useState("");
  const [naviera, setNaviera] = useState("");
  const [requestData, setRequestData] = useState({
    idZona: 0,
    fechSal: 0,
    duracion: 0,
    idPuerto: 0,
    idNav: 0,
  });
  const getAdjustedTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 30);
    return now.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const destacados = [
    {
      id: 0,
      origen: "Barcelona aeropuerto",
      destino: "Barcelona centro",
      personas: 2,
      img: "/transfers/barcelona.jpg",
      salida: getAdjustedTime(),
    },
    {
      id: 1,
      origen: "Madrid aeropuerto",
      destino: "Madrid centro",
      personas: 2,
      img: "/transfers/madrid.jpg",
      salida: getAdjustedTime(),
    },
    {
      id: 2,
      origen: "Sevilla aeropuerto",
      destino: "Sevilla centro",
      personas: 2,
      img: "/transfers/sevilla.jpg",
      salida: getAdjustedTime(),
    },
    {
      id: 3,
      origen: "Valencia aeropuerto",
      destino: "Valencia centro",
      personas: 2,
      img: "/transfers/valencia.jpg",
      salida: getAdjustedTime(),
    },
    {
      id: 4,
      origen: "Barcelona Centro",
      destino: "Barcelona Aeropuerto",
      personas: 2,
      img: "/transfers/barcelona.jpg",
      salida: getAdjustedTime(),
    },
    {
      id: 5,
      origen: "Madrid Centro",
      destino: "Madrid Aeropuerto",
      personas: 2,
      img: "/transfers/madrid.jpg",
      salida: getAdjustedTime(),
    },
  ];
  return (
    <article className="lg:tw-grid tw-grid-cols-10  tw-gap-10 lg:tw-px-20 lg:tw-py-10 tw-min-h-[76vh]">
      <Sidebar />
      <div className="tw-col-span-10 lg:tw-col-span-7 xl:tw-col-span-8 tw-flex-col">
        <div
          className="tw-relative tw-h-fit md:tw-h-[25vh] lg:tw-rounded-lg lg:tw-shadow tw-flex"
          style={{
            backgroundImage: `url(/banner_coches.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="tw-w-full tw-h-full tw-bg-indigo-500 dark:tw-bg-indigo-900 dark:tw-bg-opacity-60 tw-rounded tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-bg-opacity-40 tw-p-5 tw-flex tw-items-center tw-justify-center">
            <Buscador_Cruceros
              setDestino={setDestino}
              setPuerto={setPuerto}
              destino={destino}
              naviera={naviera}
              mes={mes}
              setNaviera={setNaviera}
              setMes={setMes}
              setDuracion={setDuracion}
              duracion={duracion}
              puerto={puerto}
              requestData={requestData}
              setRequestData={setRequestData}
            />
          </div>
        </div>
        <div className="tw-p-5 tw-mt-5">
          <h2 className="tw-text-2xl tw-font-semibold">Búsqueda rápida</h2>
          <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-5 tw-mt-4">
            {destacados.map((destacado) => (
              <div
                key={destacado.id}
                className="tw-relative tw-group tw-rounded-lg tw-overflow-hidden tw-shadow-md tw-transition tw-duration-300 tw-cursor-pointer"
                role="button"
              >
                <img
                  src={destacado.img}
                  className="tw-w-full tw-h-[15vh] md:tw-h-[20vh] tw-object-cover tw-transition-transform tw-duration-300 group-hover:tw-scale-105"
                  alt={`Reserva de ${destacado.origen} a ${destacado.destino}`}
                />
                <div className="tw-absolute tw-inset-0 tw-bg-indigo-900 tw-bg-opacity-60 group-hover:tw-bg-opacity-70 tw-transition tw-duration-300 tw-flex tw-items-center tw-justify-center">
                  <div className="tw-text-white tw-text-center tw-px-3">
                    <h3 className="tw-text-2xl tw-font-semibold">
                      {destacado.origen} - {destacado.destino}
                    </h3>
                    <ul className="tw-flex tw-gap-3 tw-justify-center tw-mt-2 tw-text-sm">
                      <li className="tw-flex tw-items-center tw-gap-1">
                        <FaPerson /> {destacado.personas}x Adultos
                      </li>
                      <li className="tw-flex tw-items-center tw-gap-1">
                        <FaClock /> {destacado.salida}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Cruceros;
