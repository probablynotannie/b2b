import { useState } from "react";
import Input_Destinos from "../../../../inputs/Destinos";
import Input_DateRange from "../../../../inputs/DateRange";
import { FaSearch } from "react-icons/fa";
import Input_Bonificaciones from "../../../../inputs/Bonificacion";

function Buscador() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const [destino, setDestino] = useState("");
  const [origen, setOrigen] = useState("");
  const [ages, setAges] = useState({});
  const [pasajeros, setPasajeros] = useState(1);
  const destinos = [
    {
      label: "Destacados",
      options: [
        { value: "Mediterraneo", label: "Mediterraneo" },
        {
          value: "Norte de Europa y Fiordos",
          label: "Norte de Europa y Fiordos",
        },
        { value: "Posicionales", label: "Posicionales" },
      ],
    },
    {
      label: "Resto",
      options: [
        { value: "Africa", label: "Africa" },
        { value: "Caribe", label: "Caribe" },
        { value: "Emiratos y Mar Rojo", label: "Emiratos y Mar Rojo" },
        { value: "Persian Gulf", label: "Persian Gulf" },
        { value: "Round World", label: "Round World" },
      ],
    },
  ];
  const origenes = [
    {
      label: "Destacados",
      options: [
        { value: "Mediterraneo", label: "Mediterraneo" },
        {
          value: "Norte de Europa y Fiordos",
          label: "Norte de Europa y Fiordos",
        },
        { value: "Posicionales", label: "Posicionales" },
      ],
    },
    {
      label: "Resto",
      options: [
        { value: "Africa", label: "Africa" },
        { value: "Caribe", label: "Caribe" },
        { value: "Emiratos y Mar Rojo", label: "Emiratos y Mar Rojo" },
        { value: "Persian Gulf", label: "Persian Gulf" },
        { value: "Round World", label: "Round World" },
      ],
    },
  ];
  return (
    <>
      <button
        onClick={toggleModal}
        className="relative border-2 dark:tw-border-slate-700 bg-white lg:hidden dark:bg-slate-800  dark:placeholder-slate-400 dark:tw-text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-3 pl-10 w-full cursor-pointer"
      >
        Cambiar busqueda
        <span className="absolute dark:bg-slate-800 dark:tw-border-slate-800 dark:tw-border-y-2 dark:tw-border-l-2 top-0 left-0 pointer-events-none tw-bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
          <FaSearch />
        </span>
      </button>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black  tw-bg-opacity-50 transition-opacity duration-300 ${
          isModalOpen ? "z-50 opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className=" bg-white w-full h-full md:w-full md:h-full rounded-none md:rounded-xl shadow-lg dark:bg-slate-800 "
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="w-full h-full mx-auto  relative ">
              <div className="flex justify-between items-center mb-4 bg-primary dark:bg-slate-900  p-5 ">
                <h2 className="text-xl font-bold text-white ">Buscador</h2>
                <button onClick={toggleModal} className="text-xl text-white">
                  &times;
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 p-5 ">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <Input_Destinos
                destinos={destinos}
                destino={destino}
                setDestino={setDestino}
              />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <Input_Destinos
                destinos={origenes}
                destino={origen}
                setDestino={setOrigen}
                placeholder="Opcional"
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
              <Input_Bonificaciones
                ages={ages}
                setAges={setAges}
                pasajeros={pasajeros}
                setPasajeros={setPasajeros}
              />
            </div>
            <div className="flex lg:justify-center justify-end lg:col-span-1 col-span-12 md:col-span-6">
              <button className="bg-primary dark:bg-slate-900 flex justify-center items-center w-full h-full p-3 px-10 rounded-lg shadow">
                <FaSearch className="text-white text-xl" />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center col-span-12 ">
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

      <div className="hidden lg:block border-2 dark:tw-border-slate-800 rounded-xl shadow-lg min-h-28 p-5 bg-white dark:bg-slate-800">
        <h2 className="mb-4 font-bold text-xl dark:tw-text-secondary">
          Buscador
        </h2>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <Input_Destinos
              destinos={destinos}
              destino={destino}
              setDestino={setDestino}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-2">
            <Input_Destinos
              destinos={origenes}
              destino={origen}
              setDestino={setOrigen}
              placeholder="Opcional"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <Input_DateRange
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 2xl:col-span-3">
            <Input_Bonificaciones
              ages={ages}
              setAges={setAges}
              pasajeros={pasajeros}
              setPasajeros={setPasajeros}
            />
          </div>
          <div className="flex lg:justify-end justify-end  lg:col-span-2 xl:col-span-2 2xl:col-span-1 col-span-12 md:col-span-6 ">
            <button className="bg-primary dark:bg-slate-900 flex justify-center items-center h-full p-3 px-10 rounded-lg shadow">
              <FaSearch className="text-white text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buscador;
