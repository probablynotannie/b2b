import Sidebar from "./sidebar/Sidebar";

import { useState } from "react";
import Buscador_Cruceros from "./buscadores/transfers/Buscador_Transfers";
import { FaClock } from "react-icons/fa";
import Resumen from "../reservas/estructura/reserva/Resumen";
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
  const destacados = [
    {
      id: 0,
      origen: "Barcelona aeropuerto",
      destino: "Barcelona centro",
      personas: 2,
      img: "/transfers/barcelona.jpg",
      salida: "15:00",
    },
    {
      id: 1,
      origen: "Madrid aeropuerto",
      destino: "Madird centro",
      personas: 2,
      img: "/transfers/madrid.jpg",
      salida: "15:00",
    },
    {
      id: 2,
      origen: "Sevilla aeropuerto",
      destino: "Sevilla centro",
      personas: 2,
      img: "/transfers/sevilla.jpg",
      salida: "15:00",
    },
    {
      id: 3,
      origen: "Valencia aeropuerto",
      destino: "Valencia centro",
      personas: 2,
      img: "/transfers/valencia.jpg",
      salida: "15:00",
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
        <div className="tw-p-5 tw-mt-10">
          <h2 className="tw-text-2xl tw-font-semibold">Búsqueda rápida</h2>
          <div className="tw-grid tw-grid-cols-4 tw-gap-5 tw-mt-4">
            {destacados.map((destacado) => (
              <div
                key={destacado.id}
                className="tw-p-3 tw-border-2 tw-flex tw-flex-col tw-justify-center tw-items-center tw-border-slate-100 dark:tw-border-slate-700 tw-bg-slate-50 tw-min-h-10 tw-shadow hover:tw-border-secondary tw-rounded-lg tw-cursor-pointer hover:tw-shadow-xl hover:tw-scale-105 tw-transition tw-duration-300 "
              >
                <Resumen
                  img={destacado.img}
                  txt={
                    <div>
                      {destacado.origen} <span className="tw-block"> - </span>{" "}
                      {destacado.destino}
                    </div>
                  }
                />

                <ul className="tw-flex tw-gap-2 tw-flex-wrap tw-mt-3">
                  <li className="tw-flex tw-items-center tw-gap-1">
                    <FaPerson /> {destacado.personas}x Adultos
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-1">
                    <FaClock /> Salida {destacado.salida}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Cruceros;
