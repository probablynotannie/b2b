import { useState } from "react";
import Input_Buscador from "../../../inputs/Buscador2";
import Input_DateRange from "../../../inputs/DateRange";
import { FaSearch } from "react-icons/fa";
import Input_Hab_Adulto_Ninio from "../../../inputs/Hab_Adulto_Ninio2";

function Buscador() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for opening and closing the modal

  const toggleModal = () => setIsModalOpen(!isModalOpen); // Toggle modal visibility

  return (
    <>
      {/* The search button */}
      <button
        onClick={toggleModal}
        className="border-2 text-sm border-gray-100 text-slate-500 w-full text-start p-3 px-10 rounded-xl shadow-lg lg:hidden relative"
      >
        Cambiar busqueda
        <span className="absolute top-0 left-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
          <FaSearch />
        </span>
      </button>

      {/* Modal for md screens and above */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
          isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        // Close modal when clicking outside
      >
        <div
          className=" bg-white w-full h-full md:w-full md:h-full rounded-none md:rounded-xl shadow-lg"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
        >
          <div className="">
            <div className="w-full h-full mx-auto  relative">
              <div className="flex justify-between items-center mb-4 bg-primary p-5 ">
                <h2 className="text-xl font-bold text-white">Buscador</h2>
                <button onClick={toggleModal} className="text-xl text-white">
                  &times;
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3 p-5">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <Input_Buscador />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <Input_DateRange />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <Input_Hab_Adulto_Ninio />
            </div>
            <div className="flex lg:justify-center justify-end lg:col-span-1 col-span-12 md:col-span-6">
              <button className="bg-primary flex justify-center items-center w-full h-full p-3 px-10 rounded-lg shadow">
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

      {/* For smaller screens, show as normal layout (not a modal) */}
      <div className="hidden lg:block border-2 rounded-xl shadow-lg min-h-28 p-5 ">
        <h2 className="mb-4 font-bold text-xl">Buscador</h2>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Input_Buscador />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Input_DateRange />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3">
            <Input_Hab_Adulto_Ninio />
          </div>
          <div className="flex lg:justify-end justify-end  lg:col-span-12 xl:col-span-12 2xl:col-span-1 col-span-12 md:col-span-6 ">
            <button className="bg-primary flex justify-center items-center h-full p-3 px-10 rounded-lg shadow">
              <FaSearch className="text-white text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Buscador;
