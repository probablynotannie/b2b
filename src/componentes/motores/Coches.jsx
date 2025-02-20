import Sidebar from "./sidebar/Sidebar";
import Input_Buscador from "../inputs/Buscador";
import Input_DateRange from "../inputs/DateRange";
import Input_hora from "../inputs/Hora";
import Input_Edad from "../inputs/Edad";
import { Link } from "react-router-dom";
import { useState } from "react";
function Coches() {
  const [edad, setEdad] = useState();
  const [horaRecogida, setHoraRecogida] = useState(new Date());
  const [horaDevolucion, setHoraDevolucion] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className="tw-grid tw-grid-cols-10 tw-gap-10 lg:tw-px-20 lg:tw-min-h-[78vh] tw-min-h-[90vh] lg:tw-py-10">
      <Sidebar />
      <div
        className="tw-relative tw-flex lg:tw-block tw-items-center tw-justify-center tw-h-full tw-col-span-10 lg:tw-col-span-7 xl:tw-col-span-8 tw-min-h-[68vh] lg:tw-rounded-lg lg:tw-shadow-lg"
        style={{
          backgroundImage: `url(/banner_coches.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`tw-absolute tw-z-0 tw-bg-indigo-800 tw-w-full tw-h-full tw-bg-opacity-35 tw-rounded-lg tw-shadow-lg tw-px-10`}
        ></div>
        <div className="tw-relative lg:tw-top-32 lg:tw-left-20 tw-bg-CajaForms tw-bg-opacity-80 dark:bg-opacity-90 tw-text-white tw-px-4 md:tw-px-10 tw-w-11/12 md:tw-w-2/3 lg:tw-w-2/4 2xl:tw-w-2/7 tw-h-fit tw-py-5 tw-pb-16 tw-rounded-lg tw-shadow-xl">
          <form>
            <h2 className="tw-text-3xl tw-font-bold">Buscador de coches</h2>
            <div className="tw-grid tw-grid-cols-3 tw-gap-2 tw-mt-2">
              <div className="tw-col-span-3">
                <Input_Buscador />
              </div>
              <div className="tw-col-span-3">
                <Input_DateRange
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                />
              </div>
              <div>
                <span className="tw-block tw-mb-1 tw-text-sm tw-font-semibold">
                  Recogida
                </span>
                <Input_hora hora={horaRecogida} setHora={setHoraRecogida} />
              </div>
              <div>
                <span className="tw-block tw-mb-1 tw-text-sm tw-font-semibold">
                  Devolución
                </span>
                <Input_hora hora={horaDevolucion} setHora={setHoraDevolucion} />
              </div>
              <div>
                <span className="tw-block tw-mb-1 tw-text-sm tw-font-semibold">
                  Edad conductor
                </span>
                <Input_Edad edad={edad} setEdad={setEdad} />
              </div>
            </div>
            <div className="tw-absolute -tw-bottom-5 tw-right-5">
              <Link to={"/listadocoches"}>
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
