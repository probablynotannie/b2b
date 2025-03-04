import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Input_Select from "../../../inputs/Select";
import Input_Fecha from "../../../inputs/Fecha";
import Input_DateRange from "../../../inputs/DateRange";
import Input_Bonificacion from "../../../inputs/Pasajeros_Descuentos";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
function Buscador_Destinos() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viaje, setViaje] = useState("ida");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [fecha, setFecha] = useState();

  const [adultos, setAdultos] = useState(2);
  const [ninios, setNinios] = useState(0);
  const [ninioAges, setNinioAges] = useState([]);
  const [descuentos, setDescuentos] = useState(false);
  const [discapacidad, setDiscapacidad] = useState(false);
  const [selectedDiscapacidad, setSelectedDiscapacidad] = useState({
    adultos: [],
    ninios: [],
  });

  const handleviajeChange = (type) => {
    setViaje(type);
  };
  const onSubmit = (data) => {
    navigate("/listadoTrenes", {
      state: { datosForm: data },
    });
  };
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm();
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
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-primary dark:tw-bg-slate-900 tw-p-5">
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
                <div className="grid grid-cols-2 gap-3 text-sm tw-mb-5 ">
                  <button
                    type="button"
                    className={`p-2.5 rounded-lg font-bold tw-text-white ${
                      viaje === "ida"
                        ? "tw-bg-secondary"
                        : "bg-gray-400 dark:bg-slate-600"
                    }`}
                    onClick={() => handleviajeChange("ida")}
                  >
                    Solo ida
                  </button>
                  <button
                    type="button"
                    className={`p-2 rounded-lg font-bold tw-text-white ${
                      viaje === "ida_vuelta"
                        ? "tw-bg-secondary"
                        : "bg-gray-400 dark:bg-slate-600"
                    }`}
                    onClick={() => handleviajeChange("ida_vuelta")}
                  >
                    Ida y vuelta
                  </button>
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
                      required={true}
                    />
                  ) : (
                    <Input_DateRange
                      startDate={startDate}
                      endDate={endDate}
                      setStartDate={setStartDate}
                      setEndDate={setEndDate}
                    />
                  )}
                  <Input_Bonificacion
                    adultos={adultos}
                    ninios={ninios}
                    setAdultos={setAdultos}
                    setNinios={setNinios}
                    ninioAges={ninioAges}
                    setNinioAges={setNinioAges}
                    descuentos={descuentos}
                    setDescuentos={setDescuentos}
                    discapacidad={discapacidad}
                    setDiscapacidad={setDiscapacidad}
                    selectedDiscapacidad={selectedDiscapacidad}
                    setSelectedDiscapacidad={setSelectedDiscapacidad}
                  />
                </div>
                <button
                  onClick={() => {
                    handleSubmit();
                    setIsModalOpen(false);
                  }}
                  className="tw-bg-primary tw-w-full tw-mt-3 dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow"
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
            <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
              Buscador de Ferris
            </h2>
            <div>
              <ul className="tw-flex tw-items-center tw-gap-2">
                <li
                  className={`tw-bg-pink-300 tw-rounded tw-p-0.5 tw-px-1 tw-text-sm tw-lowercase tw-text-pink-900 tw-cursor-pointer hover:tw-scale-105 tw-transition tw-duration-300 hover:tw-shadow-md ${
                    viaje === "ida"
                      ? "tw-ring-2 tw-ring-pink-500 tw-font-bold"
                      : ""
                  }`}
                  onClick={() => handleviajeChange("ida")}
                >
                  Solo ida
                </li>
                <li
                  className={`tw-bg-blue-300 tw-rounded tw-p-0.5 tw-px-1 tw-text-sm tw-lowercase tw-text-blue-900 tw-cursor-pointer hover:tw-scale-105 tw-transition tw-duration-300 hover:tw-shadow-md ${
                    viaje === "ida_vuelta"
                      ? "tw-ring-2 tw-ring-blue-500 tw-font-bold"
                      : ""
                  }`}
                  onClick={() => handleviajeChange("ida_vuelta")}
                >
                  Ida y vuelta
                </li>
              </ul>
            </div>
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
                required={true}
              />
            ) : (
              <Input_DateRange
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            )}
            <div>
              <Input_Bonificacion
                adultos={adultos}
                ninios={ninios}
                setAdultos={setAdultos}
                setNinios={setNinios}
                ninioAges={ninioAges}
                setNinioAges={setNinioAges}
                descuentos={descuentos}
                setDescuentos={setDescuentos}
                discapacidad={discapacidad}
                setDiscapacidad={setDiscapacidad}
                selectedDiscapacidad={selectedDiscapacidad}
                setSelectedDiscapacidad={setSelectedDiscapacidad}
              />
            </div>
          </div>
          <button
            className="tw-absolute tw--bottom-3 lg:tw--bottom-7 tw-right-10 lg:tw-right-5 tw-px-8 tw-bg-secondary tw-p-3 tw-font-bold tw-rounded-lg tw-text-white"
          >
            Buscar
          </button>
        </form>
      </div>
    </>
  );
}

export default Buscador_Destinos;
