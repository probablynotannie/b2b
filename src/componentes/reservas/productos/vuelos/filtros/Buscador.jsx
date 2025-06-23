import { useState } from "react";
import Input_Buscador from "../../../../inputs/Buscador";
import Input_DateRange from "../../../../inputs/DateRange";
import Input_Fecha from "../../../../inputs/Fecha";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Input_Hab_Adulto_Ninio from "../../../../inputs/Hab_Adulto_Ninio";
import { useForm } from "react-hook-form";
import { GoArrowSwitch } from "react-icons/go";
function Buscador() {
  const [fecha, setFecha] = useState();
  const [viaje, setViaje] = useState("ida");
  const handleviajeChange = (type) => {
    setViaje(type);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const destinos = [
    { id: 0, type: 2, name: "Aeródromo Balmaceda", destino: "Balmaceda" },
    { id: 1, type: 2, name: "El Prat", destino: "Barcelona" },
    { id: 2, type: 2, name: "BARCELONA", destino: "Madrid" },
    { id: 3, type: 2, name: "SEVILLA", destino: "Sevilla" },
    { id: 6, type: 2, name: "Hotel Madrid", destino: "Madrid" },
    { id: 7, type: 2, name: "Hotel Sevilla", destino: "Sevilla" },
  ];
  const [habitacion, setHabitacion] = useState(1);
  const [roomData, setRoomData] = useState([
    { id: Date.now(), adultos: 1, ninios: 0, ninioAges: [] },
  ]);
  const {
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      adulto: 2,
      ninio: 0,
      infant: 0,
      horaRecogida: "12:00",
      horaDevolucion: "12:00",
      startDate: 0,
      endDate: 0,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
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
        className={`tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black  tw-bg-opacity-50 tw-transition-opacity tw-duration-300 ${
          isModalOpen ? "z-50 opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="tw-bg-white tw-w-full tw-h-full md:tw-w-full md:tw-h-full tw-rounded-none md:tw-rounded-xl tw-shadow-lg dark:tw-bg-slate-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="tw-w-full tw-h-full tw-mx-auto tw-relative">
              <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-slate-800 dark:tw-bg-slate-900 tw-p-5">
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
            <div className="tw-col-span-12 tw-grid tw-grid-cols-2 tw-gap-2 tw-mb-2">
              <div
                onClick={() => handleviajeChange("ida")}
                className={`tw-select-none tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all
      ${
        viaje === "ida"
          ? "tw-bg-pink-100 dark:tw-bg-pink-900  tw-border-pink-500 tw-text-pink-700 dark:tw-text-pink-300"
          : "tw-bg-slate-100 dark:tw-bg-slate-900 tw-border-slate-300 dark:tw-border-slate-600 tw-text-slate-500 dark:tw-text-slate-400"
      }`}
              >
                <FaArrowRight className="tw-text-pink-700 dark:tw-text-pink-500" />
                Solo ida
              </div>
              <div
                onClick={() => handleviajeChange("ida_vuelta")}
                className={`tw-select-none tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all
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
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
              <Input_Buscador
                required={true}
                control={control}
                name={"origen"}
                setValue={setValue}
                placeholder={"Origen"}
                destinos={destinos}
              />
            </div>
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3">
              <Input_Hab_Adulto_Ninio
                habitacion={habitacion}
                setHabitacion={setHabitacion}
                roomData={roomData}
                setRoomData={setRoomData}
              />
            </div>
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
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
            </div>
            <div className="tw-flex lg:tw-justify-center tw-justify-end lg:tw-col-span-1 tw-col-span-12 md:tw-col-span-6">
              <button className="bg-slate-800 dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow">
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
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-3">
          <div className="tw-flex tw-gap-2">
            <div
              onClick={() => handleviajeChange("ida")}
              className={`tw-select-none tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all
                       ${
                         viaje === "ida"
                           ? "tw-bg-pink-100 dark:tw-bg-pink-900  tw-border-pink-500 tw-text-pink-700 dark:tw-text-pink-300"
                           : "tw-bg-slate-100 dark:tw-bg-slate-900 tw-border-slate-300 dark:tw-border-slate-600 tw-text-slate-500 dark:tw-text-slate-400"
                       }`}
            >
              <FaArrowRight className="tw-text-pink-700 dark:tw-text-pink-500" />
              Solo ida
            </div>
            <div
              onClick={() => handleviajeChange("ida_vuelta")}
              className={`tw-select-none tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all
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
            Buscador de Vuelos
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="tw-grid tw-grid-cols-12 tw-gap-3"
        >
          <div className="tw-col-span-4">
            <Input_Buscador
              required={true}
              control={control}
              name={"origen"}
              setValue={setValue}
              placeholder={"Origen"}
              destinos={destinos}
            />
          </div>

          <div className="tw-col-span-3">
            <Input_Hab_Adulto_Ninio
              habitacion={habitacion}
              setHabitacion={setHabitacion}
              roomData={roomData}
              setRoomData={setRoomData}
            />
          </div>
          <div className="tw-col-span-4">
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
