import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Input_Buscador from "../../../inputs/Buscador";
import Input_DateRange from "../../../inputs/DateRange";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
function Buscador_Cruceros() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const destinos = [
    { id: 0, type: 2, name: "Aeródromo Balmaceda", destino: "Balmaceda" },
    { id: 1, type: 2, name: "El Prat", destino: "Barcelona" },
    { id: 2, type: 2, name: "BARCELONA", destino: "Madrid" },
    { id: 3, type: 2, name: "SEVILLA", destino: "Sevilla" },
    { id: 6, type: 2, name: "Hotel Madrid", destino: "Madrid" },
    { id: 7, type: 2, name: "Hotel Sevilla", destino: "Sevilla" },
  ];

  const {
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      adulto: 2,
    },
  });

  const onSubmit = (data) => {
    navigate("/listadovuelos", {
      state: { data },
    });
  };
  return (
    <>
      <div className="tw-w-full sm:tw-hidden">
        <button
          onClick={() => setIsModalOpen(true)}
          className="tw-relative tw-border-2 tw-shadow-xl dark:tw-border-slate-700 tw-bg-white lg:tw-hidden dark:tw-bg-slate-800 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-3 tw-pl-10 tw-w-full tw-cursor-pointer"
        >
          Buscador de Vuelos
          <span className="tw-absolute dark:tw-bg-slate-800 dark:tw-border-slate-800 dark:tw-border-y-2 dark:tw-border-l-2 tw-top-0 tw-left-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
            <FaSearch />
          </span>
        </button>
      </div>
      {isModalOpen && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center tw-z-50">
          <div className="tw-bg-white tw-rounded-lg tw-relative  dark:tw-bg-slate-800 tw-min-h-[100vh] tw-w-[100vw]">
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
                  <Input_Buscador
                    control={control}
                    name={"origen"}
                    setValue={setValue}
                    placeholder={"Origen"}
                    destinos={destinos}
                  />
                  <Input_Buscador
                    control={control}
                    name={"destino"}
                    setValue={setValue}
                    placeholder={"Destino"}
                    destinos={destinos}
                  />
                  <Input_DateRange
                    control={control}
                    placeholder={"Fechas"}
                    nameStartDate={"salida"}
                    nameEndDate={"llegada"}
                  />
                </div>
                <button className="tw-bg-slate-800 tw-w-full tw-mt-3 dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow">
                  <FaSearch className="tw-text-white tw-text-xl" />
                </button>
              </form>
              <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-col-span-12">
                <button
                  className="tw-text-2xl tw-rounded-full tw-w-[50px] tw-h-[50px] tw-border-2 tw-mt-10 tw-text-slate-300 tw-border-slate-300  dark:tw-border-slate-600"
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
      <div className="tw-hidden sm:tw-flex tw-w-full tw-bg-white dark:tw-bg-slate-900 dark:tw-bg-opacity-80 tw-bg-opacity-80 tw-rounded tw-p-4 tw-pb-10 tw-flex-col tw-items-center tw-justify-center tw-h-fit">
        <form onSubmit={handleSubmit(onSubmit)} className="tw-w-full">
          <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
            Buscador de Vuelos
          </h2>
          <div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-mt-4">
            <Input_Buscador
              required={true}
              control={control}
              name={"origen"}
              setValue={setValue}
              placeholder={"Origen"}
              destinos={destinos}
            />
            <Input_Buscador
              required={true}
              control={control}
              name={"destino"}
              setValue={setValue}
              placeholder={"Destino"}
              destinos={destinos}
            />
            <Input_DateRange
              control={control}
              placeholder={"Fechas"}
              nameStartDate={"salida"}
              nameEndDate={"llegada"}
            />
          </div>
          <button className="tw-absolute tw--bottom-3 lg:tw--bottom-7 tw-right-10 lg:tw-right-5 tw-px-8 tw-btn_primario tw-btn_accesorios">
            Buscar
          </button>
        </form>
      </div>
    </>
  );
}

export default Buscador_Cruceros;
