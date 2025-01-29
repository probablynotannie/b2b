import Destacados from "./destacados/crucerosv2/Cruceros2";
import { useState } from "react";
import Input_Destinos from "../inputs/Destinos";
import Input_Puertos from "../inputs/Puertos";
import Input_Navieras from "../inputs/Navieras";
import Input_Mes from "../inputs/Mes";
import Input_Duracion from "../inputs/SelectorDias";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
function Cruceros() {
  const [destino, setDestino] = useState("");
  const [puerto, setPuerto] = useState("");
  const [naviera, setNaviera] = useState("");
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

  const [mes, setMes] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
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
  return (
    <article className="tw-flex-grow">
      <section
        className="tw-w-full tw-bg-cover tw-bg-center tw-p-8 tw-relative tw-shadow-md "
        style={{
          backgroundImage: "url('/banner_cruise.jfif')",
        }}
      >
        <div className="tw-bg-indigo-200 dark:tw-bg-black tw-text-pink-600 tw-bg-opacity-50 dark:tw-bg-opacity-45 tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-pointer-events-none"></div>
        <div className="tw-flex tw-h-full">
          <div className="tw-container tw-relative tw-flex-grow">
            <button
              onClick={toggleModal}
              className="tw-relative tw-border-2 dark:tw-border-slate-700 tw-bg-white lg:tw-hidden dark:tw-bg-slate-800 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-3 tw-pl-10 tw-w-full tw-cursor-pointer"
            >
              Cambiar busqueda
              <span className="tw-absolute dark:tw-bg-slate-800 dark:tw-border-slate-800 dark:tw-border-y-2 dark:tw-border-l-2 tw-top-0 tw-left-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                <FaSearch />
              </span>
            </button>
            <div
              className={`tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50 tw-transition-opacity tw-duration-300 ${
                isModalOpen
                  ? "tw-z-50 tw-opacity-100"
                  : "tw-opacity-0 tw-pointer-events-none"
              }`}
            >
              <div
                className="tw-bg-white tw-w-full tw-h-full tw-md:w-full tw-md:h-full tw-rounded-none tw-md:rounded-xl dark:tw-bg-slate-800"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <div className="tw-w-full tw-h-full tw-mx-auto tw-relative">
                    <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-primary dark:tw-bg-slate-900 tw-p-5">
                      <h2 className="tw-text-xl tw-font-bold tw-text-white">
                        Buscador
                      </h2>
                      <button
                        onClick={toggleModal}
                        className="tw-text-xl tw-text-white"
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                </div>
                <div className="tw-grid tw-grid-cols-12 tw-gap-3 tw-p-5">
                  <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4">
                    <Input_Destinos
                      destinos={destinos}
                      destino={destino}
                      setDestino={setDestino}
                    />
                  </div>
                  <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4">
                    <Input_Puertos
                      destinos={listadoPuertos}
                      puerto={puerto}
                      setPuerto={setPuerto}
                    />
                  </div>
                  <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4">
                    <Input_Navieras
                      destinos={listadoNavieras}
                      naviera={naviera}
                      setNaviera={setNaviera}
                    />
                  </div>
                  <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4">
                    <Input_Mes mes={mes} setMes={setMes} />
                  </div>
                  <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4">
                    <Input_Duracion
                      duracion={duracion}
                      setDuracion={setDuracion}
                    />
                  </div>

                  <div className="tw-flex lg:tw-justify-center tw-justify-end lg:tw-col-span-1 tw-col-span-12 tw-md:col-span-6">
                    <button className="tw-bg-primary dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow">
                      <FaSearch className="tw-text-white tw-text-xl" />
                    </button>
                  </div>
                  <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-col-span-12">
                    <button
                      className="tw-text-2xl tw-rounded-full tw-w-[50px] tw-h-[50px] tw-border-2 tw-mt-10 tw-text-slate-300 tw-border-slate-300"
                      onClick={toggleModal}
                    >
                      X
                    </button>
                    <span className="tw-text-slate-400">Cerrar</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tw-hidden lg:tw-block tw-border-2 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-inner tw-min-h-28 tw-p-5 tw-bg-white dark:tw-bg-slate-800">
              <h2 className="tw-mb-4 tw-font-bold tw-text-xl dark:tw-text-secondary">
                Buscador
              </h2>
              <div className="tw-grid tw-grid-cols-12 tw-gap-3">
                <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4 xl:tw-col-span-2">
                  <Input_Destinos
                    destinos={destinos}
                    destino={destino}
                    setDestino={setDestino}
                  />
                </div>
                <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4 xl:tw-col-span-2">
                  <Input_Puertos
                    destinos={listadoPuertos}
                    puerto={puerto}
                    setPuerto={setPuerto}
                  />
                </div>
                <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4 xl:tw-col-span-2">
                  <Input_Navieras
                    destinos={listadoNavieras}
                    naviera={naviera}
                    setNaviera={setNaviera}
                  />
                </div>
                <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4 xl:tw-col-span-2">
                  <Input_Mes mes={mes} setMes={setMes} />
                </div>
                <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4 xl:tw-col-span-2">
                  <Input_Duracion
                    duracion={duracion}
                    setDuracion={setDuracion}
                  />
                </div>
                <div className="tw-flex lg:tw-justify-end tw-justify-end lg:tw-col-span-12 xl:tw-col-span-2 tw-2xl:col-span-1 tw-col-span-12 tw-md:col-span-6">
                  <Link to="/listadocruceros">
                    <button className="tw-bg-primary dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow">
                      <FaSearch className="tw-text-white tw-text-xl" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tw-container tw-mt-10">
        <Destacados />
      </section>
    </article>
  );
}

export default Cruceros;
