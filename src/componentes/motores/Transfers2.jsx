import Sidebar from "./sidebar/Sidebar";
import Input_Buscador from "../inputs/Buscador";
import Input_DateRange from "../inputs/DateRangeWithTime";
import Input_hora from "../inputs/Hora";
import Input_DateRangeMobile from "../inputs/DateRange";
import Personas from "../inputs/Adulto_Ninio_Infant";
import { Link } from "react-router-dom";
import { useState } from "react";

function Coches() {
  const [adultos, setAdultos] = useState(2);
  const [ninios, setNinios] = useState();
  const [infant, setInfant] = useState();
  const [horaRecogida, setHoraRecogida] = useState("12:00");
  const [horaDevolucion, setHoraDevolucion] = useState("12:00");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <div className="tw-grid tw-grid-cols-10 tw-gap-10 lg:tw-px-20 lg:tw-min-h-[78vh] tw-min-h-[90vh] lg:tw-py-10">
      <Sidebar />
      <div
        className="tw-relative tw-flex lg:tw-block tw-items-center tw-justify-center  tw-col-span-10 lg:tw-col-span-7 xl:tw-col-span-8 tw-h-[full lg:tw-rounded-lg lg:tw-shadow-lg"
        style={{
          backgroundImage: `url(/banner_coches.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`tw-absolute tw-z-0 tw-bg-indigo-800 tw-w-full tw-h-full tw-bg-opacity-35 tw-rounded-lg tw-shadow-lg tw-px-10`}
        ></div>
        <div className="tw-relative lg:tw-top-32 lg:tw-left-20 tw-bg-CajaForms tw-bg-opacity-80 dark:bg-opacity-90 tw-text-white tw-px-4 md:tw-px-10 tw-w-11/12 md:tw-w-2/3 lg:tw-w-3/4 2xl:tw-w-1/2 tw-h-fit tw-py-5 tw-pb-16 tw-rounded-lg tw-shadow-xl">
          <form>
            <h2 className="tw-text-3xl tw-font-bold">Buscador de transfers</h2>
            <div className="tw-grid tw-grid-cols-4 tw-gap-2 tw-mt-2">
              <div className="tw-col-span-4">
                <Input_Buscador />
              </div>
              <div className="tw-col-span-4 tw-block lg:tw-hidden">
                <Input_DateRangeMobile
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                />
              </div>
              <div className="tw-col-span-2 tw-block lg:tw-hidden">
                <Input_hora hora={horaRecogida} setHora={setHoraRecogida} />
              </div>
              <div className="tw-col-span-2 tw-block lg:tw-hidden">
                <Input_hora hora={horaDevolucion} setHora={setHoraDevolucion} />
              </div>
              <div className="tw-col-span-2 tw-hidden lg:tw-block">
                <Input_DateRange
                  placeholder={"Origen"}
                  hora={horaRecogida}
                  date={startDate}
                  setDate={setStartDate}
                  setHora={setHoraRecogida}
                />
              </div>
              <div className="tw-col-span-2  tw-hidden lg:tw-block">
                <Input_DateRange
                  placeholder={"Destino"}
                  hora={horaDevolucion}
                  date={endDate}
                  setDate={setEndDate}
                  setHora={setHoraDevolucion}
                />
              </div>
              <div className="tw-col-span-4 lg:w-col-span-2">
                <Personas
                  adultos={adultos}
                  setAdultos={setAdultos}
                  ninios={ninios}
                  setNinios={setNinios}
                  infant={infant}
                  setInfant={setInfant}
                />
              </div>
            </div>
            <div className="tw-absolute -tw-bottom-5 tw-right-5">
              <Link to={"/listadotransfers"}>
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

export default Coches;
