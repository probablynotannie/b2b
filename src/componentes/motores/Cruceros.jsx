import Sidebar from "./sidebar/Sidebar";
import Input_Destinos from "../inputs/Destinos";
import Input_Puertos from "../inputs/Puertos";
import Input_Navieras from "../inputs/Navieras";
import Input_Mes from "../inputs/Mes";
import Input_Dias from "../inputs/SelectorDias";
import { useState } from "react";
import Destacados from "./destacados/cruceros/Cruceros";
import Zonas from "./destacados/cruceros/Zonas";
import Puertos from "./destacados/cruceros/Puertos";
import { useNavigate } from "react-router-dom";

function Cruceros() {
  const navigate = useNavigate();

  const [destino, setDestino] = useState("");
  const [mes, setMes] = useState("");
  const [duracion, setDuracion] = useState(2);
  const [puerto, setPuerto] = useState("");
  const [naviera, setNaviera] = useState("");

  const [requestData, setRequestData] = useState({
    destino: destino,
    mes: mes,
    duracion: duracion,
    puerto: puerto,
    naviera: naviera,
  });
  const handleSubmit = () => {
    navigate("/listadoCruceros", { state: requestData });
  };
  const updateRequestData = (key, value) => {
    const newRequestData = {
      ...requestData,
      [key]: value,
    };

    setRequestData(newRequestData);

    console.log("Updated newRequestData:", newRequestData);
  };

  const listadoNavieras = [
    {
      label: "Destacados",
      options: [{ value: "Costa cruceros", label: "Costa Cruceros" }],
    },
    {
      label: "Resto",
      options: [
        { value: "Alma cruceros", label: "Alma Cruceros" },
        { value: "MSC Cruceros", label: "Msc cruceros" },
      ],
    },
  ];

  const destinos = [
    {
      label: "Destacados",
      options: [
        { value: "Mediterraneo", label: "Mediterraneo" },
        {
          value: "Norte de Europa y Fiordos",
          label: "Norte de Europa y Fiordos",
        },
        { value: "Posicionales", label: "Posicionales" },
      ],
    },
    {
      label: "Resto",
      options: [
        { value: "Africa", label: "Africa" },
        { value: "Caribe", label: "Caribe" },
        { value: "Emiratos y Mar Rojo", label: "Emiratos y Mar Rojo" },
        { value: "Persian Gulf", label: "Persian Gulf" },
        { value: "Round World", label: "Round World" },
      ],
    },
  ];

  const listadoPuertos = [
    {
      label: "Destacados",
      options: [
        { value: "Mediterraneo", label: "Mediterraneo" },
        {
          value: "Norte de Europa y Fiordos",
          label: "Norte de Europa y Fiordos",
        },
        { value: "Posicionales", label: "Posicionales" },
      ],
    },
    {
      label: "Resto",
      options: [
        { value: "Africa", label: "Africa" },
        { value: "Caribe", label: "Caribe" },
        { value: "Emiratos y Mar Rojo", label: "Emiratos y Mar Rojo" },
        { value: "Persian Gulf", label: "Persian Gulf" },
        { value: "Round World", label: "Round World" },
      ],
    },
  ];

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
            <div className="tw-relative tw-bg-white dark:tw-bg-slate-600 dark:tw-bg-opacity-55 tw-bg-opacity-80 tw-rounded tw-p-4 tw-pb-10 tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-fit">
              <form>
                <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
                  Buscador de cruceros
                </h2>
                <div className="tw-grid tw-grid-cols-3  md:tw-grid-cols-3 lg:tw-grid-cols-5 tw-gap-4 tw-mt-4">
                  <div className="tw-col-span-1 md:tw-col-span-1">
                    <Input_Destinos
                      destinos={destinos}
                      destino={destino}
                      setDestino={(value) => {
                        setDestino(value);
                        updateRequestData("destino", value);
                      }}
                    />
                  </div>

                  <div className="tw-col-span-1 md:tw-col-span-1">
                    <Input_Puertos
                      destinos={listadoPuertos}
                      puerto={puerto}
                      setPuerto={(value) => {
                        setPuerto(value);
                        updateRequestData("puerto", value);
                      }}
                    />
                  </div>

                  <div className="tw-col-span-1 md:tw-col-span-1">
                    <Input_Navieras
                      naviera={naviera}
                      setNaviera={(value) => {
                        setNaviera(value);
                        updateRequestData("naviera", value);
                      }}
                      destinos={listadoNavieras}
                    />
                  </div>

                  <div className="tw-col-span-1 md:tw-col-span-1">
                    <Input_Mes
                      mes={mes}
                      setMes={(value) => {
                        setMes(value);
                        updateRequestData("mes", value);
                      }}
                    />
                  </div>

                  <div className="tw-col-span-1 md:tw-col-span-1">
                    <Input_Dias
                      duracion={duracion}
                      setDuracion={(value) => {
                        setDuracion(value);
                        updateRequestData("duracion", value);
                      }}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="tw-absolute tw--bottom-7 tw-right-5 tw-px-8 tw-bg-secondary tw-p-3 tw-font-bold tw-rounded-lg tw-text-white"
                  onClick={handleSubmit}
                >
                  Buscar
                </button>
              </form>
            </div>
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
