import { useState } from "react";
import Input_Destinos from "../../../../inputs/Destinos";
import Input_DateRange from "../../../../inputs/DateRange";
import Input_selectNum from "../../../../inputs/SelectorNums";
import Input_adultoNinio from "../../../../inputs/Adulto_Ninio";
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import datos_destinos from "./destinos.json";
import { useForm } from "react-hook-form";
function Buscador() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const [adultos, setAdultos] = useState(2);
  const [ninios, setNinios] = useState(0);
  const [ninioAges, setNinioAges] = useState([]);
  const onSubmit = (data) => {
    
    /*     navigate("/listadoFerris", {
      state: { datosForm: data },
    }); */
  };
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();
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
        className={`tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black  tw-bg-opacity-50 tw-transition-opacity tw-duration-300 ${
          isModalOpen ? "z-50 opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="tw-bg-white tw-w-full tw-h-full md:tw-w-full md:tw-h-full tw-rounded-none md:tw-rounded-xl dark:tw-bg-slate-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="tw-w-full tw-h-full tw-mx-auto tw-relative">
              <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-slate-700 dark:tw-bg-slate-900 tw-p-5">
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
              <Input_Destinos
                datos={datos_destinos}
                name="destino"
                control={control}
                placeholder="Selecciona un destino"
              />
            </div>
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
              <Input_DateRange
                control={control}
                placeholder={"Fechas"}
                nameStartDate={"salida"}
                nameEndDate={"llegada"}
              />
            </div>
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
              <Input_selectNum
                control={control}
                name="noches"
                placeholder={"Noches"}
                num={5}
                icono={<FaMoon />}
              />
            </div>
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
              <Input_adultoNinio
                adultos={adultos}
                setAdultos={setAdultos}
                setNinios={setNinios}
                ninios={ninios}
                ninioAges={ninioAges}
                setNinioAges={setNinioAges}
              />
            </div>

            <div className="tw-flex lg:tw-justify-center tw-justify-end lg:tw-col-span-1 tw-col-span-12 md:tw-col-span-6">
              <button className="tw-bg-slate-700 dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow">
                <FaSearch className="tw-text-white tw-text-xl" />
              </button>
            </div>
          </form>
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-col-span-12">
            <button
              className="tw-text-2xl tw-rounded-full tw-w-[50px] tw-h-[50px] tw-border-2 tw-mt-10 tw-text-slate-300 tw-border-slate-300 dark:tw-border-slate-600"
              onClick={toggleModal}
            >
              X
            </button>
            <span className="tw-text-slate-400">Cerrar</span>
          </div>
        </div>
      </div>

      <div className="tw-hidden lg:tw-block tw-border-2 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-inner tw-min-h-28 tw-p-5 tw-bg-white dark:tw-bg-slate-800">
        <h2 className="tw-mb-4 tw-font-bold tw-text-2xl dark:tw-text-secondaryDark">
          Buscador
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="tw-grid tw-grid-cols-12 tw-gap-3"
        >
          <div className="tw-col-span-3">
            <Input_Destinos
              datos={datos_destinos}
              name="destino"
              control={control}
              placeholder="Selecciona un destino"
            />
          </div>
          <div className="tw-col-span-3">
            <Input_DateRange
              control={control}
              placeholder={"Fechas"}
              nameStartDate={"salida"}
              nameEndDate={"llegada"}
            />
          </div>
          <div className="tw-col-span-2">
            <Input_selectNum
              control={control}
              name="noches"
              placeholder={"Noches"}
              num={5}
              icono={<FaMoon />}
            />
          </div>

          <div className="tw-col-span-3">
            <Input_adultoNinio
              adultos={adultos}
              setAdultos={setAdultos}
              setNinios={setNinios}
              ninios={ninios}
              ninioAges={ninioAges}
              setNinioAges={setNinioAges}
            />
          </div>
          <button className="tw-btn_buscador_con_icono dark:tw-btn_buscador_con_icono_dark tw-btn_buscador_con_icono_accesorios">
            <FaSearch className="tw-text-white tw-text-xl" />
          </button>
        </form>
      </div>
    </>
  );
}

export default Buscador;
