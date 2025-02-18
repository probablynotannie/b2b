import { useState } from "react";
import Input_Buscador from "../../../../inputs/Buscador2";
import Input_DateRange from "../../../../inputs/DateRange";
import Input_Hora from "../../../../inputs/Hora";
import Input_Edad from "../../../../inputs/Edad";
import { FaSearch } from "react-icons/fa";
function Buscador() {
  const [horaRecogida, setHoraRecogida] = useState(new Date());
  const [horaDevolucion, setHoraDevolucion] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [edad, setEdad] = useState();
  const [destino, setDestino] = useState();
  const [devolucion, setDevolucion] = useState();
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEntregaCiudadChecked, setIsEntregaCiudadChecked] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const handleCheckboxChange = (event) => {
    setIsEntregaCiudadChecked(event.target.checked);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="tw-relative tw-border-2 dark:tw-border-slate-700 tw-bg-white lg:tw-hidden dark:tw-bg-slate-800 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-3 tw-pl-10 tw-w-full tw-cursor-pointer"
      >
        Cambiar busqueda
        <span className="tw-absolute dark:tw-bg-slate-800 dark:tw-border-slate-800 dark:tw-border-y-2 dark:tw-border-l-2 tw-top-0 tw-left-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
          <FaSearch />
        </span>
      </button>

      <div
        className={`tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50 tw-transition-opacity tw-duration-300 ${
          isModalOpen
            ? "tw-opacity-100 tw-z-50 "
            : "tw-opacity-0 tw-pointer-events-none"
        }`}
      >
        <div
          className="tw-bg-white tw-w-full tw-h-full md:tw-w-full md:tw-h-full tw-rounded-none md:tw-rounded-xl tw-shadow-lg dark:tw-bg-slate-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="tw-w-full tw-h-full tw-mx-auto tw-relative">
              <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 bg-primary dark:tw-bg-slate-900 tw-p-5">
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
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
              <Input_Buscador
                destinos={destinos}
                destino={destino}
                setDestino={setDestino}
              />
            </div>
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
              <Input_DateRange
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            </div>
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
              <Input_Hora hora={horaRecogida} setHora={setHoraRecogida} />
            </div>
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
              <Input_Hora hora={horaDevolucion} setHora={setHoraDevolucion} />
            </div>
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
              <Input_Edad edad={edad} setEdad={setEdad} />
            </div>

            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
              <Input_Buscador
                destinos={destinos}
                destino={devolucion}
                setDestino={setDevolucion}
                disable={isEntregaCiudadChecked}
              />
            </div>

            <div className="tw-flex lg:tw-justify-center tw-justify-end lg:tw-col-span-1 tw-col-span-12 md:tw-col-span-6">
              <button className="bg-primary dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow">
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

      <div className="tw-hidden lg:tw-block tw-border-2 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-lg tw-min-h-28 tw-p-5 tw-bg-white dark:tw-bg-slate-800">
        <h2 className="tw-mb-4 tw-font-bold tw-text-xl dark:tw-text-secondary">
          Buscador
        </h2>
        <div className="tw-grid tw-grid-cols-12 tw-gap-3">
          <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-6 xl:tw-col-span-3">
            <Input_Buscador
              destinos={destinos}
              destino={destino}
              setDestino={setDestino}
            />
            <div className="tw-flex tw-items-center tw-mb-4">
              <input
                id="entrega_ciudad"
                type="checkbox"
                checked={isEntregaCiudadChecked}
                onChange={handleCheckboxChange}
                className="tw-w-4 tw-h-4 tw-text-secondary tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-secondary dark:focus:tw-ring-secondary dark:tw-ring-offset-gray-800 focus:tw-ring-2 dark:tw-bg-gray-700 dark:tw-border-gray-600"
              />
              <label
                htmlFor="entrega_ciudad"
                className="tw-ms-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-gray-300"
              >
                Entrega en la misma ciudad
              </label>
            </div>
          </div>

          <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-6 xl:tw-col-span-3">
            <Input_Buscador
              destinos={destinos}
              destino={devolucion}
              setDestino={setDevolucion}
              disable={isEntregaCiudadChecked}
            />
          </div>

          <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-2">
            <Input_DateRange
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>
          <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3 xl:tw-col-span-1">
            <Input_Hora hora={horaRecogida} setHora={setHoraRecogida} />
          </div>
          <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3 xl:tw-col-span-1">
            <Input_Hora hora={horaDevolucion} setHora={setHoraDevolucion} />
          </div>
          <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-2 xl:tw-col-span-1">
            <Input_Edad edad={edad} setEdad={setEdad} />
          </div>
          <button className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-2 xl:tw-col-span-1 tw-h-fit tw-bg-slate-700 dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-p-3 tw-rounded-lg tw-shadow">
            <FaSearch className="tw-text-white tw-text-xl" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Buscador;
