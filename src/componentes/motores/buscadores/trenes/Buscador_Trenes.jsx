import { useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Input_Select from "../../../inputs/Select";
import Input_Fecha from "../../../inputs/Fecha";
import Input_DateRange from "../../../inputs/DateRange";
import Input_Bonificacion from "../../../inputs/Pasajeros_Descuentos";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GoArrowSwitch } from "react-icons/go";

function Buscador_Destinos() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viaje, setViaje] = useState("ida");
  const [fecha, setFecha] = useState();
  const handleviajeChange = (type) => {
    setViaje(type);
  };
  const onSubmit = (data) => {
    console.log(data);
    navigate("/listadoTrenes", {
      state: { datosForm: data },
    });
  };
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      adultos: 2,
      ninios: 0,
      ninioAges: [],
      descuentos: false,
      discapacidad: false,
      selectedDiscapacidad: { adultos: [], ninios: [] },
      selectedDescuentos: { adultos: [], ninios: [] },
    },
  });
  return (
    <>
      <div className="tw-w-full sm:tw-hidden">
        <button
          onClick={() => setIsModalOpen(true)}
          className="tw-relative tw-border-2 tw-shadow-xl dark:tw-border-slate-700 tw-bg-white lg:tw-hidden dark:tw-bg-slate-800 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-3 tw-pl-10 tw-w-full tw-cursor-pointer"
        >
          Buscador de Trenes
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
                <div className="tw-grid tw-grid-cols-2 tw-gap-2 tw-mb-2">
                  <div
                    onClick={() => handleviajeChange("ida")}
                    className={` tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all
      ${
        viaje === "ida"
          ? "tw-bg-pink-100 dark:tw-bg-pink-900  tw-border-pink-500 tw-text-pink-700 dark:tw-text-pink-400"
          : "tw-bg-slate-100 dark:tw-bg-slate-900 tw-border-slate-300 dark:tw-border-slate-600 tw-text-slate-500 dark:tw-text-slate-400"
      }`}
                  >
                    <FaArrowRight className="tw-text-pink-700 dark:tw-text-pink-500" />
                    Solo ida
                  </div>
                  <div
                    onClick={() => handleviajeChange("ida_vuelta")}
                    className={`tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all
      ${
        viaje === "ida_vuelta"
          ? "tw-bg-blue-100 dark:tw-bg-blue-900 tw-border-blue-500 tw-text-blue-700 dark:tw-text-blue-300"
          : "tw-bg-slate-100 dark:tw-bg-slate-900 tw-border-slate-300 dark:tw-border-slate-600 tw-text-slate-500 dark:tw-text-slate-400"
      }`}
                  >
                    <GoArrowSwitch className="tw-text-blue-700 dark:tw-text-blue-500" />
                    Ida y vuelta
                  </div>
                </div>
                <div className="tw-space-y-2">
                  <Input_Select placeholder={"Origen"} />
                  <Input_Select placeholder={"Destino"} />
                  {viaje === "ida" ? (
                    <Input_Fecha
                      fecha={fecha}
                      name={"fecha"}
                      setValue={setValue}
                      control={control}
                    />
                  ) : (
                    <Input_DateRange
                      control={control}
                      placeholder={"Fechas"}
                      nameStartDate={"salida"}
                      nameEndDate={"llegada"}
                    />
                  )}
                  <Input_Bonificacion
                    register={register}
                    setValue={setValue}
                    watch={watch}
                    control={control}
                  />
                </div>
                <button
                  onClick={() => {
                    handleSubmit();
                    setIsModalOpen(false);
                  }}
                  className="tw-bg-slate-800 tw-w-full tw-mt-3 dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow"
                >
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
          <div className="tw-flex tw-justify-between">
            <div className="tw-flex tw-gap-2">
              <div
                onClick={() => handleviajeChange("ida")}
                className={`tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all
      ${
        viaje === "ida"
          ? "tw-bg-pink-100 dark:tw-bg-pink-900  tw-border-pink-500 tw-text-pink-700 dark:tw-text-pink-400"
          : "tw-bg-slate-100 dark:tw-bg-slate-900 tw-border-slate-300 dark:tw-border-slate-600 tw-text-slate-500 dark:tw-text-slate-400"
      }`}
              >
                <FaArrowRight className="tw-text-pink-700 dark:tw-text-pink-500" />
                Solo ida
              </div>
              <div
                onClick={() => handleviajeChange("ida_vuelta")}
                className={`tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all
      ${
        viaje === "ida_vuelta"
          ? "tw-bg-blue-100 dark:tw-bg-blue-900 tw-border-blue-500 tw-text-blue-700 dark:tw-text-blue-300"
          : "tw-bg-slate-100 dark:tw-bg-slate-900 tw-border-slate-300 dark:tw-border-slate-600 tw-text-slate-500 dark:tw-text-slate-400"
      }`}
              >
                <GoArrowSwitch className="tw-text-blue-700 dark:tw-text-blue-500" />
                Ida y vuelta
              </div>
            </div>

            <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
              Buscador de Trenes
            </h2>
          </div>
          <div className="tw-grid tw-grid-cols-3  2xl:tw-grid-cols-4 tw-gap-4 tw-mt-4">
            <Input_Select placeholder={"Origen"} />
            <Input_Select placeholder={"Destino"} />
            {viaje === "ida" ? (
              <Input_Fecha
                fecha={fecha}
                name={"fecha"}
                setValue={setValue}
                control={control}
              />
            ) : (
              <Input_DateRange
                control={control}
                placeholder={"Fechas"}
                nameStartDate={"salida"}
                nameEndDate={"llegada"}
              />
            )}
            <div>
              <Input_Bonificacion
                register={register}
                setValue={setValue}
                watch={watch}
                control={control}
              />
            </div>
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