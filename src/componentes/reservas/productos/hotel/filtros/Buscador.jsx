import { useState } from "react";
import Input_Buscador from "../../../../inputs/Buscador";
import Input_DateRange from "../../../../inputs/DateRange";
import { FaSearch } from "react-icons/fa";
import Input_Hab_Adulto_Ninio from "../../../../inputs/Hab_Adulto_Ninio";
import { useForm } from "react-hook-form";
function Buscador() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const [habitacion, setHabitacion] = useState(1);
  const [roomData, setRoomData] = useState([
    { id: Date.now(), adultos: 1, ninios: 0, ninioAges: [] },
  ]);
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
    /*  navigate("/listadotransfers", {
       state: { data },
     }); */
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="tw-relative tw-w-full tw-p-3 tw-pl-10 tw-text-sm tw-bg-white tw-border-2 tw-rounded-lg tw-cursor-pointer dark:tw-border-slate-700 lg:tw-hidden dark:tw-bg-slate-800 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500"
      >
        Cambiar busqueda
        <span className="tw-absolute tw-top-0 tw-left-0 tw-flex tw-items-center tw-justify-center tw-w-8 tw-h-full tw-text-xl tw-text-white tw-rounded-tl-lg tw-rounded-bl-lg tw-pointer-events-none dark:tw-bg-slate-800 dark:tw-border-slate-800 dark:tw-border-y-2 dark:tw-border-l-2 tw-bg-secondary">
          <FaSearch />
        </span>
      </button>

      <div
        className={`tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50 tw-transition-opacity tw-duration-300 ${
          isModalOpen
            ? "tw-z-50 tw-opacity-100"
            : "tw-opacity-0 tw-pointer-events-none"
        }`}
      >
        <div
          className="tw-w-full tw-h-full tw-bg-white tw-rounded-none tw-shadow-lg md:tw-w-full md:tw-h-full md:tw-rounded-xl dark:tw-bg-slate-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="tw-relative tw-w-full tw-h-full tw-mx-auto">
              <div className="tw-flex tw-items-center tw-justify-between tw-p-5 tw-mb-4 tw-bg-slate-800 dark:tw-bg-slate-900">
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
              <Input_Buscador
                control={control}
                name={"origen"}
                setValue={setValue}
                placeholder={"Origen"}
                destinos={destinos}
              />
            </div>
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
              <Input_Buscador
                control={control}
                name={"destino"}
                setValue={setValue}
                placeholder={"Destino"}
                destinos={destinos}
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
            <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3">
              <Input_Hab_Adulto_Ninio
                habitacion={habitacion}
                setHabitacion={setHabitacion}
                roomData={roomData}
                setRoomData={setRoomData}
              />
            </div>
            <div className="tw-flex tw-justify-end tw-col-span-12 lg:tw-justify-center lg:tw-col-span-1 md:tw-col-span-6">
              <button className="tw-flex tw-items-center tw-justify-center tw-w-full tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow tw-bg-slate-900 dark:tw-bg-slate-900">
                <FaSearch className="tw-text-xl tw-text-white" />
              </button>
            </div>
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-col-span-12">
              <button
                className="tw-text-2xl tw-rounded-full tw-w-[50px] tw-h-[50px] tw-border-2 tw-mt-10 tw-text-slate-300 tw-border-slate-300 dark:tw-border-slate-600"
                onClick={toggleModal}
              >
                X
              </button>
              <span className="tw-text-slate-400">Cerrar</span>
            </div>
          </form>
        </div>
      </div>

      <div
        onSubmit={handleSubmit(onSubmit)}
        className="tw-hidden tw-p-5 tw-bg-white tw-border-2 tw-shadow-lg lg:tw-block dark:tw-border-slate-800 tw-rounded-xl tw-min-h-28 dark:tw-bg-slate-800"
      >
        <h2 className="tw-mb-4 tw-text-xl tw-font-bold dark:tw-text-secondary">
          Buscador
        </h2>
        <form className="tw-grid tw-grid-cols-12 tw-gap-3">
          <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4">
            <Input_Buscador
              control={control}
              name={"origen"}
              setValue={setValue}
              placeholder={"Origen"}
              destinos={destinos}
            />
          </div>
          <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-3 2xl:tw-col-span-4">
            <Input_Buscador
              control={control}
              name={"destino"}
              setValue={setValue}
              placeholder={"Destino"}
              destinos={destinos}
            />
          </div>
          <div className="tw-col-span-12 md:tw-col-span-6 lg:tw-col-span-4 2xl:tw-col-span-3">
            <Input_Hab_Adulto_Ninio
              habitacion={habitacion}
              setHabitacion={setHabitacion}
              roomData={roomData}
              setRoomData={setRoomData}
            />
          </div>
          <button className="tw-flex tw-items-center tw-justify-center tw-h-full tw-p-3  tw-rounded-lg tw-shadow tw-bg-slate-700 dark:tw-bg-slate-900">
            <FaSearch className="tw-text-xl tw-text-white" />
          </button>
        </form>
      </div>
    </>
  );
}

export default Buscador;
