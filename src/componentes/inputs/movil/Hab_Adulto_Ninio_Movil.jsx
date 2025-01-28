import { useState } from "react";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { MdMeetingRoom } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

function SelectorPersonas({
  habitacion,
  setHabitacion,
  roomData,
  setRoomData,
  addRoom,
  onAdultosChange,
  onNiniosChange,
  totalAdults,
  totalChildren,
  deleteRoom,
  handleAgeChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div className="relative">
        <div
          onClick={openModal}
          className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
        >
          {habitacion} Habitaciones - {totalAdults} Adultos - {totalChildren}{" "}
          Niños
        </div>
        <div className=" absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2">
          <MdMeetingRoom />
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black  bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-slate-50 dark:bg-slate-800 w-full h-full max-w-4xl overflow-auto">
            <div className="sticky top-0 z-50 flex justify-between items-center mb-4 bg-primary dark:bg-slate-900 p-5 ">
              <h2 className="text-xl font-bold text-white">Habitaciones</h2>
              <button onClick={closeModal} className="text-xl text-white">
                &times;
              </button>
            </div>
            <div className="px-3 pb-5 mt-12">
              {roomData.map((room, roomIndex) => (
                <div
                  className="relative bg-slate-100 dark:bg-slate-700 border border-slate-300 rounded-lg shadow-lg mb-10 p-3 py-12 text-black"
                  key={room.id}
                >
                  <span className="absolute -top-5 border-2 bg-primary text-white rounded-lg p-2 font-semibold">
                    Habitación {roomIndex + 1}
                  </span>
                  <div className="grid grid-cols-6 gap-5">
                    <div className="col-span-3 md:col-span-1">
                      <span className="text-sm text-black dark:text-slate-300">Adultos</span>
                      <div className="relative">
                        <select
                          onChange={(e) => onAdultosChange(room.id, e)}
                          value={room.adultos}
                          className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        <div className="absolute dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 top-0 pointer-events-none tw-bg-secondary text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                          <FaPerson />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                      <span className="text-sm text-black dark:text-slate-300">Niños</span>
                      <div className="relative">
                        <select
                          onChange={(e) => onNiniosChange(room.id, e)}
                          value={room.ninios}
                          className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full"
                        >
                          {[0, 1, 2, 3].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        <div className="absolute dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 top-0 pointer-events-none tw-bg-secondary text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                          <FaChild />
                        </div>
                      </div>
                    </div>

                    {/* Child Age Inputs */}
                    {room.ninios > 0 && (
                      <div className="col-span-6 md:col-span-3">
                        <span className="text-sm text-black">
                          Edad de los niños
                        </span>
                        <div className="grid grid-cols-3 gap-3">
                          {room.ninioAges.map((age, childIndex) => (
                            <select
                              key={childIndex}
                              value={age}
                              onChange={(e) =>
                                handleAgeChange(
                                  room.id,
                                  childIndex,
                                  e.target.value
                                )
                              }
                              className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5  w-full cursor-pointer"
                            >
                              <option value="" disabled>
                                -
                              </option>
                              {Array.from({ length: 18 }).map((_, age) => (
                                <option key={age} value={age}>
                                  {age}
                                </option>
                              ))}
                            </select>
                          ))}
                        </div>
                      </div>
                    )}
                    {roomIndex !== 0 && (
                      <div                           className="absolute -top-5 cursor-pointer right-5 bg-white dark:bg-slate-900 rounded border-2 border-red-500 dark:border-red-700 p-2 text-red-500 dark:text-red-700 dark:hover:bg-red-800 hover:bg-danger hover:text-white transition  flex items-center justify-end pb-2 flex-col"
>
                        <button
                          onClick={() => deleteRoom(room.id)}
                          className="text-xl"
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="mt-10 text-black hover:text-secondary hover:font-semibold transition flex justify-end cursor-pointer">
                <button
                  type="button"
                  onClick={addRoom}
                  className="w-full  flex justify-center items-center space-x-1 bg-secondary text-white p-3 rounded-lg shadow"
                >
                  <span>Agregar una habitación </span>
                  <CiCirclePlus className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectorPersonas;
