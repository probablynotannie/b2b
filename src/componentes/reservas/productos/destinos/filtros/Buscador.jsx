import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Input_Mes from "../../../../inputs/Mes";
import Input_Destinos from "../../../../inputs/Pais_Ciudad";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  FaGlobeAfrica,
  FaGlobeAsia,
  FaGlobeEurope,
  FaGlobeAmericas,
} from "react-icons/fa";
function Buscador() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const navigate = useNavigate();
  const continents = [
    { id: "AF", name: "Africa", flag: <FaGlobeAfrica /> },
    { id: "AM", name: "América", flag: <FaGlobeAmericas /> },
    { id: "AS", name: "Asia", flag: <FaGlobeAsia /> },
    { id: "EU", name: "Europa", flag: <FaGlobeEurope /> },
    { id: "OC", name: "Oceanía", flag: <FaGlobeEurope /> },
    {
      id: "HK",
      name: "Haiku",
      flag: <img src="../../logo.png" alt="logo" className="tw-w-5 tw-h-4" />,
    },
  ];
  const regions = {
    AF: [
      { id: 1, name: "Nigeria" },
      { id: 2, name: "Africa" },
      { id: 3, name: "Egipto" },
    ],
    AM: [
      { id: 4, name: "USA" },
      { id: 5, name: "Canada" },
      { id: 6, name: "Mexico" },
    ],
    AS: [
      { id: 7, name: "China" },
      { id: 8, name: "Japón" },
      { id: 9, name: "India" },
    ],
    EU: [
      { id: 10, name: "Alemania" },
      { id: 11, name: "Francia" },
      { id: 12, name: "Italia" },
    ],
    OC: [
      { id: 13, name: "Australia" },
      { id: 14, name: "Fiji" },
    ],
    HK: [
      { id: 15, name: "Hola" },
      { id: 16, name: "Haiku" },
      { id: 17, name: "Vuela" },
    ],
  };

  const onSubmit = (data) => {
    console.log(data);
    navigate("/listadoDestinos", {
      state: { datosForm: data },
    });
  };
  const { handleSubmit, control } = useForm({
    defaultValues: {
      continent: 0,
      region: 0,
      fechSal: 0,
    },
  });
  return (
    <>
      <button
        onClick={toggleModal}
        className="tw-relative tw-border-2 dark:tw-border-slate-600 tw-bg-white lg:tw-hidden dark:tw-bg-slate-800 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-3 tw-pl-10 tw-w-full tw-cursor-pointer"
      >
        Cambiar busqueda
        <span className="tw-absolute dark:tw-bg-slate-800 dark:tw-border-slate-800 dark:tw-border-y-2 dark:tw-border-l-2 tw-top-0 tw-left-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
          <FaSearch />
        </span>
      </button>
      <div
        className={`tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50 tw-transition-opacity tw-duration-300 ${
          isModalOpen ? "z-50 opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="tw-bg-white tw-w-full tw-h-full md:tw-w-full md:tw-h-full tw-rounded-none md:tw-rounded-xl tw-shadow-lg dark:tw-bg-slate-800"
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="tw-grid tw-grid-cols-12 tw-gap-3 tw-p-5"
          >
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
              <Input_Mes name={"fechSal"} control={control} />
            </div>
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
              <Input_Destinos
                control={control}
                nameContinent="continent"
                nameRegion="region"
                continents={continents}
                regions={regions}
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
          </form>
        </div>
      </div>
      <div className="tw-hidden lg:tw-block tw-border-2 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-lg tw-min-h-28 tw-p-5 tw-bg-white dark:tw-bg-slate-800">
        <h2 className="tw-mb-4 tw-font-bold tw-text-xl dark:tw-text-secondary">
          Buscador
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="tw-grid tw-grid-cols-9 tw-gap-3"
        >
          <div className="tw-col-span-4">
            <Input_Mes name={"fechSal"} control={control} />
          </div>
          <div className="tw-col-span-4">
            <Input_Destinos
              control={control}
              nameContinent="continent"
              nameRegion="region"
              continents={continents}
              regions={regions}
            />
          </div>
          <button className="tw-bg-slate-700 tw-col-span-1 dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-p-3 tw-rounded-lg tw-shadow">
            <FaSearch className="tw-text-white tw-text-xl" />
          </button>
        </form>
      </div>
    </>
  );
}

export default Buscador;
