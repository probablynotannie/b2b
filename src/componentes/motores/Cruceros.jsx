import Sidebar from "./sidebar/Sidebar";
import Input_Destinos from "../inputs/Destinos";
import Input_Puertos from "../inputs/Puertos";
import Input_Navieras from "../inputs/Navieras";
import Input_Mes from "../inputs/Mes";
import Input_Dias from "../inputs/SelectorDias";
import { Link } from "react-router-dom";
import { useState } from "react";
import Destacados from "./destacados/cruceros/Cruceros";

function Cruceros() {
  const [destino, setDestino] = useState("");
  const [mes, setMes] = useState();
  const [duracion, setDuracion] = useState("");
  const listadoNavieras = [
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
  const [puerto, setPuerto] = useState("");
  const [naviera, setNaviera] = useState("");

  return (
    <article className="tw-grid tw-grid-cols-10 tw-gap-10 lg:tw-px-20 lg:tw-min-h-[78vh] tw-min-h-[90vh] lg:tw-py-10">
      <Sidebar />
      <div
        className="tw-relative tw-flex lg:tw-block tw-items-center tw-justify-center tw-h-full tw-col-span-10 lg:tw-col-span-7 xl:tw-col-span-8 tw-min-h-[68vh] lg:tw-rounded-lg lg:tw-shadow-lg"
        style={{
          backgroundImage: `url(/banner_cruise.jfif)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`tw-absolute tw-z-0 tw-bg-indigo-800 tw-w-full tw-h-full tw-bg-opacity-35 tw-rounded-lg tw-shadow-lg tw-px-10`}
        ></div>
        <div className="tw-relative xl:tw-top-32 lg:tw-left-20 tw-bg-CajaForms tw-bg-opacity-80 dark:tw-bg-opacity-90 tw-text-white tw-px-4 md:tw-px-10 tw-w-11/12 md:tw-w-2/3 lg:tw-w-2/4 2xl:tw-w-2/7 tw-h-fit tw-py-5 tw-pb-16 tw-rounded-lg tw-shadow-xl">
          <form>
            <h2 className="tw-text-3xl tw-font-bold">Buscador de cruceros</h2>
            <div className="tw-grid tw-grid-cols-2 tw-gap-2 tw-mt-2">
              <div className="tw-col-span-2 md:tw-col-span-1">
                <Input_Destinos
                  destinos={destinos}
                  destino={destino}
                  setDestino={setDestino}
                />
              </div>
              <div className="tw-col-span-2 md:tw-col-span-1">
                <Input_Puertos
                  destinos={listadoPuertos}
                  puerto={puerto}
                  setPuerto={setPuerto}
                />
              </div>
              <div className="tw-col-span-2 md:tw-col-span-1">
                <Input_Navieras
                  naviera={naviera}
                  setNaviera={setNaviera}
                  destinos={listadoNavieras}
                />
              </div>
              <div className="md:tw-col-span-1">
                <Input_Mes mes={mes} setMes={setMes} />
              </div>
              <div className="md:tw-col-span-1">
                <Input_Dias duracion={duracion} setDuracion={setDuracion} />
              </div>
              <div className="tw-absolute -tw-bottom-5 tw-right-5">
                <Link to="/listadocruceros">
                  <button className="tw-bg-slate-900 tw-border-2 tw-border-white tw-border-opacity-20 tw-shadow-xl tw-rounded-lg tw-p-3 tw-px-16 tw-font-bold tw-w-full">
                    Buscar
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <section className="tw-col-span-10 tw-mt-5">
        <Destacados />
      </section>
    </article>
  );
}

export default Cruceros;
