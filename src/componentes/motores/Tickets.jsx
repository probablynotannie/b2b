import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import Input_Buscador from "../inputs/Buscador";
import Input_DateRange from "../inputs/DateRange";
import Input_AdultoNInio from "../inputs/Adulto_Ninio";
import { Link } from "react-router-dom";
function Tickets() {
  const [adultos, setAdultos] = useState(2);
  const [ninios, setNinios] = useState(0);
  const [ninioAges, setNinioAges] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className="tw-grid tw-grid-cols-10 tw-gap-10 lg:tw-px-20 lg:tw-min-h-[78vh] tw-min-h-[90vh] lg:tw-py-10">
      <Sidebar />
      <div
        className="tw-relative tw-flex lg:tw-block tw-items-center tw-justify-center tw-h-full tw-col-span-10 lg:tw-col-span-7 xl:tw-col-span-8 tw-min-h-[68vh] lg:tw-rounded-lg lg:tw-shadow-lg"
        style={{
          backgroundImage: `url(/banner_hoteles.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div
          className={`tw-absolute tw-z-0 tw-bg-indigo-800 tw-w-full tw-h-full tw-bg-opacity-35 tw-rounded-lg tw-shadow-lg tw-px-10`}
        ></div>
        <div className="tw-relative xl:tw-top-32 lg:tw-left-20 tw-bg-CajaForms tw-bg-opacity-80 dark:tw-bg-opacity-90 tw-text-white tw-px-4 md:tw-px-10 tw-w-11/12 md:tw-w-2/3 lg:tw-w-2/4 2xl:tw-w-2/7 tw-h-fit tw-py-5 tw-pb-16 tw-rounded-lg tw-shadow-xl">
          <form>
            <h2 className="tw-text-3xl tw-font-bold">Buscador de tickets</h2>
            <div className="tw-grid tw-gap-2 tw-mt-2">
              <div>
                <Input_Buscador />
              </div>

              <div>
                <Input_DateRange
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                />
              </div>
              <div>
                <Input_AdultoNInio
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
              <Link to={"/listadoTickets"}>
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

export default Tickets;
