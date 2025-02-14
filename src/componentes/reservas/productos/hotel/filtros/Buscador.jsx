import { useState } from "react";
import Input_Buscador from "../../../../inputs/Buscador2";
import Input_DateRange from "../../../../inputs/DateRange";
import { FaSearch } from "react-icons/fa";
import Input_Hab_Adulto_Ninio from "../../../../inputs/Hab_Adulto_Ninio2";

function Buscador() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for opening and closing the modal
  const toggleModal = () => setIsModalOpen(!isModalOpen); // Toggle modal visibility
  const [destino, setDestino] = useState("");
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
  return (
    <>
      <button
        onClick={toggleModal}
        className="relative w-full p-3 pl-10 text-sm bg-white border-2 rounded-lg cursor-pointer dark:border-slate-700 lg:hidden dark:bg-slate-800 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500"
      >
        Cambiar busqueda
        <span className="absolute top-0 left-0 flex items-center justify-center w-8 h-full text-xl text-white rounded-tl-lg rounded-bl-lg pointer-events-none dark:bg-slate-800 dark:border-slate-800 dark:border-y-2 dark:border-l-2 bg-inputIcon">
          <FaSearch />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
          isModalOpen ? "z-50 opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="w-full h-full bg-white rounded-none shadow-lg  md:w-full md:h-full md:rounded-xl dark:bg-slate-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="relative w-full h-full mx-auto ">
              <div className="flex items-center justify-between p-5 mb-4 bg-primary dark:bg-slate-900 ">
                <h2 className="text-xl font-bold text-white ">Buscador</h2>
                <button onClick={toggleModal} className="text-xl text-white">
                  &times;
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 p-5 ">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <Input_Buscador
                destinos={destinos}
                destino={destino}
                setDestino={setDestino}
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <Input_DateRange
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <Input_Hab_Adulto_Ninio
                habitacion={habitacion}
                setHabitacion={setHabitacion}
                roomData={roomData}
                setRoomData={setRoomData}
              />
            </div>
            <div className="flex justify-end col-span-12 lg:justify-center lg:col-span-1 md:col-span-6">
              <button className="flex items-center justify-center w-full h-full p-3 px-10 rounded-lg shadow bg-primary dark:bg-slate-900">
                <FaSearch className="text-xl text-white" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center col-span-12 ">
              <button
                className="text-2xl rounded-full w-[50px] h-[50px] border-2 mt-10 text-slate-300 border-slate-300"
                onClick={toggleModal}
              >
                X
              </button>
              <span className="text-slate-400">Cerrar</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden p-5 bg-white border-2 shadow-lg lg:block dark:border-slate-800 rounded-xl min-h-28 dark:bg-slate-800">
        <h2 className="mb-4 text-xl font-bold dark:tw-text-secondary">
          Buscador
        </h2>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Input_Buscador
              destinos={destinos}
              destino={destino}
              setDestino={setDestino}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Input_DateRange
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3">
            <Input_Hab_Adulto_Ninio
              habitacion={habitacion}
              setHabitacion={setHabitacion}
              roomData={roomData}
              setRoomData={setRoomData}
            />
          </div>
          <div className="flex justify-end col-span-12 lg:justify-end lg:col-span-12 xl:col-span-12 2xl:col-span-1 md:col-span-6 ">
            <button className="flex items-center justify-center h-full p-3 px-10 rounded-lg shadow bg-primary dark:bg-slate-900">
              <FaSearch className="text-xl text-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buscador;
