import Sidebar from "./sidebar/Sidebar";
import Input_Destinos from "../inputs/Destinos";
import Input_Puertos from "../inputs/Puertos";
import Input_Navieras from "../inputs/Navieras";
import Input_Mes from "../inputs/Mes";
import Input_Dias from "../inputs/SelectorDias";
import { Link } from "react-router-dom";
import { useState } from "react";
import Destacados from "./destacados/crucerosv3/Cruceros";
import Zonas from "./destacados/crucerosv3/Zonas";
import Puertos from "./destacados/crucerosv3/Puertos3";
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
    <article className="tw-grid tw-grid-cols-10 tw-gap-10 lg:tw-px-20 lg:tw-py-10">
      <Sidebar />
      <div className="w-col-span-10 lg:tw-col-span-7 xl:tw-col-span-8  tw-flex-col">
        <div>
          <div>
            <div className="tw-relative tw-bg-white tw-rounded-lg tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-border-2 dark:tw-bg-slate-600 dark:tw-bg-opacity-55 tw-bg-opacity-80 tw-p-4 tw-pb-10">
              <form>
                <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
                  Buscador de cruceros
                </h2>
                <div className="tw-grid tw-grid-cols-5 tw-gap-2 tw-mt-2">
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
                </div>
                <Link to={"/listadocruceros"}>
                  <button className="tw-absolute tw--bottom-7 tw-right-5 tw-px-8 tw-bg-secondary tw-p-3 tw-font-bold tw-rounded-lg tw-text-white">
                    Buscar
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
        <div className=" tw-gap-10 tw-mt-16">
          <div className="tw-col-span-1">
            <Zonas />
          </div>
          <div className="tw-col-span-2">
            <Puertos />
          </div>
        </div>
      </div>
      <section className="tw-col-span-10 tw-mt-5">
        <Destacados />
      </section>
    </article>
  );
}

export default Cruceros;
