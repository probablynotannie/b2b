import Sidebar from "./sidebar/Sidebar";

import { useState } from "react";
import Destacados from "./buscadores/cruceros/Cruceros";
import Zonas from "./buscadores/cruceros/Zonas";
import Puertos from "./buscadores/cruceros/Puertos";
import Buscador_Cruceros from "./buscadores/cruceros/Buscador_Cruceros";
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
  console.log("hola", requestData);
  return (
    <article className="lg:tw-grid tw-grid-cols-10  tw-gap-10 lg:tw-px-20 lg:tw-py-10">
      <Sidebar />
      <div className="tw-col-span-10 lg:tw-col-span-7  xl:tw-col-span-8 tw-flex-col">
        <div
          className="tw-relative tw-h-[25vh] lg:tw-rounded-lg lg:tw-shadow tw-flex"
          style={{
            backgroundImage: `url(/banner_cruise.jfif)`,
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
        <div className="tw-grid tw-grid-cols-1 xl:tw-grid-cols-3 tw-gap-10 tw-mt-5 tw-container">
          <div className="xl:tw-col-span-1">
            <Zonas setRequestData={setRequestData} requestData={requestData} />
          </div>
          <div className="xl:tw-col-span-2">
            <Puertos
              setRequestData={setRequestData}
              requestData={requestData}
            />
          </div>
        </div>
      </div>
      <section className="tw-col-span-10 tw-mt-5">
        <Destacados setRequestData={setRequestData} />
      </section>
    </article>
  );
}

export default Cruceros;
