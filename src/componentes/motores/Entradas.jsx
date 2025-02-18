import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Input_Buscador from "../inputs/Buscador2";
import Input_Fecha from "../inputs/Fecha";
import Input_adultoNinio from "../inputs/Adulto_Ninio";
import { Link } from "react-router-dom";
function Entradas() {
  const [adultos, setAdultos] = useState(2);
  const [ninios, setNinios] = useState(0);
  const [ninioAges, setNinioAges] = useState([]);
  const [fecha, setFecha] = useState(null);
  const destinos = [
    { type: "Destino", name: "MADRID Centro", destino: "Madrid" },
    { type: "Destino", name: "MADRID Afueras", destino: "Madrid" },
    { type: "Destino", name: "BARCELONA", destino: "Madrid" },
    { type: "Destino", name: "SEVILLA", destino: "Sevilla" },
    { type: "Destino", name: "MADRID - CAPE GIRARDEAU", destino: "Madrid" },
    { type: "Hotel", name: "Hotel Barcelona", destino: "Barcelona" },
    { type: "Hotel", name: "Hotel Madrid", destino: "Madrid" },
    { type: "Hotel", name: "Hotel Sevilla", destino: "Sevilla" },
  ];
  const [destino, setDestino] = useState("");
  return (
    <div className="tw-grid tw-grid-cols-10 tw-gap-10 lg:tw-px-20 lg:tw-min-h-[78vh] tw-min-h-[90vh] lg:tw-py-10">
      <Sidebar />
      <div
        className="tw-relative tw-flex lg:tw-block tw-items-center tw-justify-center tw-h-full tw-col-span-10 lg:tw-col-span-7 xl:tw-col-span-8 tw-min-h-[68vh] lg:tw-rounded-lg lg:tw-shadow-lg"
        style={{
          backgroundImage: `url(/banner_entradas.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`tw-absolute tw-z-0 tw-bg-indigo-800 tw-w-full tw-h-full tw-bg-opacity-35 tw-rounded-lg tw-shadow-lg tw-px-10`}
        ></div>
        <div className="tw-relative xl:tw-top-32 lg:tw-left-20 tw-bg-CajaForms tw-bg-opacity-80 dark:tw-bg-opacity-90 tw-text-white tw-px-4 md:tw-px-10 tw-w-11/12 md:tw-w-2/3 lg:tw-w-2/4 2xl:tw-w-2/7 tw-h-fit tw-py-5 tw-pb-16 tw-rounded-lg tw-shadow-xl">
          <form>
            <h2 className="tw-text-3xl tw-font-bold">Buscador de entradas</h2>
            <div className="tw-grid tw-grid-cols-2 tw-gap-2 tw-mt-2">
              <div className="tw-col-span-2">
                <Input_Buscador
                  destino={destino}
                  setDestino={setDestino}
                  destinos={destinos}
                />
              </div>
              <div className="tw-col-span-2 md:tw-col-span-1">
                <Input_Fecha fecha={fecha} setFecha={setFecha} />
              </div>
              <div className="tw-col-span-2 md:tw-col-span-1">
                <Input_adultoNinio
                  adultos={adultos}
                  setAdultos={setAdultos}
                  setNinios={setNinios}
                  ninios={ninios}
                  ninioAges={ninioAges}
                  setNinioAges={setNinioAges}
                />
              </div>
            </div>
            <div className="tw-absolute -tw-bottom-5 tw-right-5">
              <Link to={"/listadoEntradas"}>
                <button className="tw-bg-slate-900 tw-border-2 tw-border-white tw-border-opacity-20 tw-shadow-xl tw-rounded-lg tw-p-3 tw-px-16 tw-font-bold tw-w-full">
                  Buscar
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Entradas;
