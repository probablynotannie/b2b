import { useState } from "react";
import Input_Destinos from "../../../../inputs/Destinos";
import Input_DateRange from "../../../../inputs/DateRange";
import Input_Fecha from "../../../../inputs/Fecha";
import { FaSearch } from "react-icons/fa";
import Input_Bonificaciones from "../../../../inputs/Bonificacion";
import { useForm } from "react-hook-form";
import destinos from "./Destinos.json";
import { useNavigate } from "react-router-dom";
function Buscador() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const [viaje, setViaje] = useState("ida");
  const [ages, setAges] = useState({});
  const [pasajeros, setPasajeros] = useState(1);
  const [fecha, setFecha] = useState();

  const handleviajeChange = (type) => {
    setViaje(type);
  };
  const onSubmit = (data) => {
    console.log(data);
    navigate("/listadoFerris", {
      state: { datosForm: data },
    });
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
            <div className="grid grid-cols-2 gap-3 mt-2 text-sm tw-mb-5">
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
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
              <Input_Destinos
                datos={destinos}
                name="origen"
                control={control}
                placeholder="Selecciona un origen"
              />
            </div>
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
              <Input_Destinos
                datos={destinos}
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
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3">
              <Input_Bonificaciones
                ages={ages}
                setAges={setAges}
                pasajeros={pasajeros}
                setPasajeros={setPasajeros}
              />
            </div>
            <div className="tw-flex lg:tw-justify-center tw-justify-end lg:tw-col-span-1 tw-col-span-12 md:tw-col-span-6">
              <button className="tw-bg-slate-800 dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow">
                <FaSearch className="tw-text-white tw-text-xl" />
              </button>
            </div>
          </form>
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

      <div className="tw-hidden lg:tw-block tw-border-2 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-lg tw-min-h-28 tw-p-5 tw-bg-white dark:tw-bg-slate-800">
        <div className="tw-flex tw-justify-between">
          <h2 className="tw-mb-4 tw-font-bold tw-text-xl dark:tw-text-secondaryDark">
            Buscador
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="tw-grid tw-grid-cols-12 tw-gap-3"
        >
          <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-2">
            <Input_Destinos
              datos={destinos}
              name="origen"
              control={control}
              placeholder="Selecciona un origen"
            />
          </div>
          <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-2">
            <Input_Destinos
              datos={destinos}
              name="destino"
              control={control}
              placeholder="Selecciona un destino"
            />
          </div>
          <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3">
            {viaje === "ida" ? (
              <div className="tw-flex tw-flex-col">
                <Input_Fecha
                  fecha={fecha}
                  name={"fecha"}
                  setValue={setValue}
                  control={control}
                  required={true}
                />
                {errors.fecha && (
                  <p className="text-red-500 text-sm">{errors.fecha.message}</p>
                )}
              </div>
            ) : (
              <>
                <Input_DateRange
                  control={control}
                  placeholder={"Fechas"}
                  nameStartDate={"salida"}
                  nameEndDate={"llegada"}
                />
              </>
            )}
          </div>
          <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3 2xl:tw-col-span-3">
            <Input_Bonificaciones
              ages={ages}
              setAges={setAges}
              pasajeros={pasajeros}
              setPasajeros={setPasajeros}
            />
          </div>
          <div className="tw-flex lg:tw-justify-end tw-justify-end lg:tw-col-span-2 xl:tw-col-span-2 2xl:tw-col-span-1 tw-col-span-12 md:tw-col-span-6">
            <button className="tw-bg-slate-800 dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow">
              <FaSearch className="tw-text-white tw-text-xl" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Buscador;
