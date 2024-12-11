import Sidebar from "./sidebar/Sidebar";
import Input_Destinos from "../inputs/Destinos";
import Input_Puertos from "../inputs/Puertos";
import Input_Navieras from "../inputs/Navieras";
import Input_Mes from "../inputs/Mes";
import Input_Dias from "../inputs/SelectorDias";
import { Link } from "react-router-dom";
import { useState } from "react";
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
    <div className="grid grid-cols-10 gap-10 lg:px-20 lg:min-h-[78vh] min-h-[90vh] lg:py-10">
      <Sidebar />
      <div
        className="relative flex  lg:block items-center justify-center h-full  col-span-10 lg:col-span-7 xl:col-span-8 min-h-[68vh] lg:rounded-lg lg:shadow-lg"
        style={{
          backgroundImage: `url(/banner_cruise.jfif)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`absolute  z-0 bg-indigo-800 w-full h-full bg-opacity-35 rounded-lg shadow-lg px-10 `}
        ></div>
        <div className="relative xl:top-32 lg:left-20 bg-CajaForms bg-opacity-80 dark:bg-opacity-90 text-white px-4 md:px-10 w-11/12 md:w-2/3 lg:w-2/4  2xl:w-2/7 h-fit py-5 pb-16 rounded-lg shadow-xl">
          <form>
            <h2 className="text-3xl font-bold ">Buscador de cruceros</h2>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="col-span-2 md:col-span-1">
                <Input_Destinos
                  destinos={destinos}
                  destino={destino}
                  setDestino={setDestino}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Input_Puertos
                  destinos={listadoPuertos}
                  puerto={puerto}
                  setPuerto={setPuerto}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Input_Navieras
                  naviera={naviera}
                  setNaviera={setNaviera}
                  destinos={listadoNavieras}
                />
              </div>
              <div className="md:col-span-1">
                <Input_Mes mes={mes} setMes={setMes} />
              </div>
              <div className="md:col-span-1">
                <Input_Dias duracion={duracion} setDuracion={setDuracion} />
              </div>
              <div className="absolute -bottom-5 right-5">
                <Link to="/listadocruceros">
                  <button className="bg-slate-900 border-2 border-white border-opacity-20 shadow-xl rounded-lg p-3 px-16 font-bold w-full">
                    Buscar
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cruceros;
