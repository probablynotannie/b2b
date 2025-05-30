import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Input_Mes from "../../../inputs/Mes";
import {
  FaGlobeAfrica,
  FaGlobeAsia,
  FaGlobeEurope,
  FaGlobeAmericas,
} from "react-icons/fa";
import Input_Destinos from "../../../inputs/Pais_Ciudad";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
function Buscador_Destinos() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <div className="tw-w-full sm:tw-hidden">
        <button
          onClick={() => setIsModalOpen(true)}
          className="tw-relative tw-border-2 tw-shadow-xl dark:tw-border-slate-700 tw-bg-white lg:tw-hidden dark:tw-bg-slate-800 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-3 tw-pl-10 tw-w-full tw-cursor-pointer"
        >
          Buscador de Destinos
          <span className="tw-absolute dark:tw-bg-slate-800 dark:tw-border-slate-800 dark:tw-border-y-2 dark:tw-border-l-2 tw-top-0 tw-left-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
            <FaSearch />
          </span>
        </button>
      </div>
      {isModalOpen && (
        <div className="tw-fixed  tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center tw-z-50">
          <div className="tw-bg-white tw-rounded-lg  tw-relative  dark:tw-bg-slate-800 tw-min-h-[100vh] tw-w-[100vw]">
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-slate-800 dark:tw-bg-slate-900 tw-p-5">
              <h2 className="tw-text-xl tw-font-bold tw-text-white">
                Buscador
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="tw-text-xl tw-text-white"
              >
                &times;
              </button>
            </div>
            <div className="tw-p-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="tw-space-y-2">
                  <Input_Destinos
                    control={control}
                    nameContinent="continent"
                    nameRegion="region"
                    continents={continents}
                    regions={regions}
                  />
                  <Input_Mes name={"fechSal"} control={control} />
                </div>
                <button className="tw-bg-slate-800 tw-w-full tw-mt-3 dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow">
                  <FaSearch className="tw-text-white tw-text-xl" />
                </button>
              </form>
              <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-col-span-12">
                <button
                  className="tw-text-2xl tw-rounded-full tw-w-[50px] tw-h-[50px] tw-border-2 tw-mt-10 tw-text-slate-300 tw-border-slate-300 dark:tw-border-slate-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  X
                </button>
                <span className="tw-text-slate-400">Cerrar</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="tw-hidden sm:tw-flex tw-w-full tw-bg-white dark:tw-bg-slate-900 tw-bg-opacity-80 dark:tw-bg-opacity-75 tw-rounded tw-p-4 tw-pb-10 tw-flex-col tw-items-center tw-justify-center tw-h-fit">
        <form onSubmit={handleSubmit(onSubmit)} className="tw-w-full">
          <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
            Buscador de Destinos
          </h2>
          <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-mt-4">
            <Input_Destinos
              control={control}
              nameContinent="continent"
              nameRegion="region"
              continents={continents}
              regions={regions}
            />
            <Input_Mes name={"fechSal"} control={control} />
          </div>
          <button className="tw-absolute tw--bottom-3 lg:tw--bottom-7 tw-right-10 lg:tw-right-5 tw-px-8 tw-btn_primario tw-btn_accesorios">
            Buscar
          </button>
        </form>
      </div>
    </>
  );
}

export default Buscador_Destinos;
