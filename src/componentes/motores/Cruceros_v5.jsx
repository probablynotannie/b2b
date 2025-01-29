import Sidebar from "./sidebar/Sidebar";
import Input_Destinos from "../inputs/Destinos";
import Input_Puertos from "../inputs/Puertos";
import Input_Navieras from "../inputs/Navieras";
import Input_Mes from "../inputs/Mes";
import Input_Dias from "../inputs/SelectorDias";
import { Link } from "react-router-dom";
import { useState } from "react";
import Destacados from "./destacados/crucerosv3/Cruceros";
import Puertos2 from "./destacados/crucerosv3/Puertos";
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
            <div className="tw-relative tw-bg-white tw-rounded-lg tw-shadow-md hover:tw-shadow-lg tw-transition tw-duration-300 tw-border-2 dark:tw-bg-slate-600 dark:tw-bg-opacity-55 tw-bg-opacity-80 tw-p-4 tw-pb-10">
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
        <div className="tw-mt-4 tw-flex tw-justify-between tw-items-center  tw-bg-white dark:tw-bg-slate-800 tw-shadow-sm tw-rounded-lg tw-py-5 tw-border-slate-100 dark:tw-border-slate-700">
          <ul className="tw-flex tw-gap-4 tw-text-slate-500 dark:tw-text-slate-300">
            <li className="hover:tw-scale-105 tw-shadow hover:tw-shadow-md tw-font-medium tw-bg-pink-100 tw-px-3 tw-py-1 tw-rounded-lg tw-text-pink-700 tw-transition tw-duration-300 tw-cursor-pointer">
              Mediterraneo
            </li>
            <li className="hover:tw-scale-105 tw-shadow hover:tw-shadow-md tw-font-medium tw-bg-cyan-100 tw-px-3 tw-py-1 tw-rounded-lg tw-text-cyan-700 tw-transition tw-duration-300 tw-cursor-pointer">
              Islas Canarias
            </li>
            <li className="hover:tw-scale-105 tw-shadow hover:tw-shadow-md tw-font-medium tw-bg-blue-100 tw-px-3 tw-py-1 tw-rounded-lg tw-text-blue-700 tw-transition tw-duration-300 tw-cursor-pointer">
              Norte de europa y Flordos
            </li>
            <li className="hover:tw-scale-105 tw-shadow hover:tw-shadow-md tw-font-medium tw-bg-green-100 tw-px-3 tw-py-1 tw-rounded-lg tw-text-green-700 tw-transition tw-duration-300 tw-cursor-pointer">
              Caribe
            </li>
          </ul>
        </div>
        <div className=" tw-gap-10 ">
          <div className="tw-col-span-2">
            <Puertos2 titulo={true} />
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
