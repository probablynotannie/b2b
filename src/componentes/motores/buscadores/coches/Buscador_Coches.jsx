import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Input_Destinos from "../../../inputs/Buscador";
import Input_DateRange from "../../../inputs/DateRangeWithTime";
import Input_Edad from "../../../inputs/Edad";
import Input_DateRangeMobile from "../../../inputs/DateRange";
import Input_Hora from "../../../inputs/Hora";

import { useNavigate } from "react-router-dom";

function Buscador_Coches() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [edad, setEdad] = useState();

  const [horaRecogida, setHoraRecogida] = useState("12:00");
  const [horaDevolucion, setHoraDevolucion] = useState("12:00");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [destino, setDestino] = useState();
  const [origen, setOrigen] = useState();
  const destinos = [
    { id: 0, type: "Destino", name: "MADRID Centro", destino: "Madrid" },
    { id: 1, type: "Destino", name: "MADRID Afueras", destino: "Madrid" },
    { id: 2, type: "Destino", name: "BARCELONA", destino: "Madrid" },
    { id: 3, type: "Destino", name: "SEVILLA", destino: "Sevilla" },
    {
      id: 4,
      type: "Destino",
      name: "MADRID - CAPE GIRARDEAU",
      destino: "Madrid",
    },
    { id: 5, type: "Hotel", name: "Hotel Barcelona", destino: "Barcelona" },
    { id: 6, type: "Hotel", name: "Hotel Madrid", destino: "Madrid" },
    { id: 7, type: "Hotel", name: "Hotel Sevilla", destino: "Sevilla" },
  ];
  const handleSubmit = () => {
    const newRequestData = {
      origin: origen ? origen.id : 0,
      destination: destino ? destino.id : 0,
      departureDate: startDate ? startDate : 0,
      returnDate: endDate ? endDate : 0,
      edad: edad ? edad : 0,
      pickupTime: horaRecogida ? horaRecogida : 0,
      returnTime: horaDevolucion ? horaDevolucion : 0,
    };
    navigate("/listadoTransfers", { state: { newRequestData } });
  };
  return (
    <>
      <div className="tw-w-full sm:tw-hidden">
        <button
          onClick={() => setIsModalOpen(true)}
          className="tw-relative tw-border-2 tw-shadow-xl dark:tw-border-slate-700 tw-bg-white lg:tw-hidden dark:tw-bg-slate-800 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-3 tw-pl-10 tw-w-full tw-cursor-pointer"
        >
          Cambiar busqueda
          <span className="tw-absolute dark:tw-bg-slate-800 dark:tw-border-slate-800 dark:tw-border-y-2 dark:tw-border-l-2 tw-top-0 tw-left-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
            <FaSearch />
          </span>
        </button>
      </div>
      {isModalOpen && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center tw-z-50">
          <div className="tw-bg-white tw-rounded-lg tw-p-6 tw-relative tw-w-[90%] tw-max-w-md dark:tw-bg-slate-700">
            <button
              className="tw-absolute tw-top-3 tw-right-3 tw-text-gray-600 dark:tw-text-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <form>
              <h2 className="tw-text-xl tw-font-bold dark:tw-text-white tw-mb-4">
                Buscador de Coches
              </h2>
              <div className="tw-grid tw-grid-cols-1 tw-gap-4">
                <Input_Destinos
                  placeholder={"Origen"}
                  destinos={destinos}
                  destino={origen}
                  setDestino={setOrigen}
                />
                <Input_Destinos
                  placeholder={"Destino"}
                  destinos={destinos}
                  destino={destino}
                  setDestino={setDestino}
                />
                <Input_DateRangeMobile
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                />
                <Input_Hora hora={horaRecogida} setHora={setHoraRecogida} />
                <Input_Hora hora={horaDevolucion} setHora={setHoraDevolucion} />
                <Input_Edad
                  edadMinima={22}
                  edadMaxima={90}
                  edad={edad}
                  setEdad={setEdad}
                />
              </div>
              <button
                type="button"
                className="tw-w-full tw-mt-4 tw-bg-secondary tw-text-white tw-font-bold tw-p-3 tw-rounded-lg"
                onClick={() => {
                  handleSubmit();
                  setIsModalOpen(false);
                }}
              >
                Buscar
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="tw-hidden sm:tw-flex tw-w-full tw-bg-white dark:tw-bg-slate-900 dark:tw-bg-opacity-80 tw-bg-opacity-80 tw-rounded tw-p-4 tw-pb-10 tw-flex-col tw-items-center tw-justify-center tw-h-fit">
        <form className="tw-w-full">
          <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
            Buscador de Coches
          </h2>
          <div className="tw-grid tw-grid-cols-3 md:tw-grid-cols-3  xl:tw-grid-cols-5 tw-gap-4 tw-mt-4">
            <Input_Destinos
              placeholder={"Origen"}
              destinos={destinos}
              destino={origen}
              setDestino={setOrigen}
            />
            <Input_Destinos
              placeholder={"Destino"}
              destinos={destinos}
              destino={destino}
              setDestino={setDestino}
            />
            <Input_DateRange
              placeholder={"Recogida"}
              hora={horaRecogida}
              date={startDate}
              setDate={setStartDate}
              setHora={setHoraRecogida}
            />
            <Input_DateRange
              placeholder={"Devolución"}
              hora={horaDevolucion}
              date={endDate}
              setDate={setEndDate}
              setHora={setHoraDevolucion}
            />
            <Input_Edad
              edadMinima={22}
              edadMaxima={90}
              edad={edad}
              setEdad={setEdad}
            />
          </div>
          <button
            type="button"
            className="tw-absolute tw--bottom-3 lg:tw--bottom-7 tw-right-10 lg:tw-right-5 tw-px-8 tw-bg-secondary tw-p-3 tw-font-bold tw-rounded-lg tw-text-white"
            onClick={handleSubmit}
          >
            Buscar
          </button>
        </form>
      </div>
    </>
  );
}

export default Buscador_Coches;
