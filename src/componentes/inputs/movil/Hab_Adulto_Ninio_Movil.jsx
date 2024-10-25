import { useState } from "react";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { Modal, Button } from "flowbite-react";
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
      <div className="grid grid-cols-1 gap-3">
        <div className="mt-4">
          <div className="relative">
            <div
              onClick={openModal}
              className="bg-white text-primary border-secondary border-2 mt-1 p-2.5 rounded-lg text-sm pl-10 w-full"
            >
              {habitacion} Habitaciones - {totalAdults} Adultos -{" "}
              {totalChildren} Niños
            </div>
            <div className="absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
              <MdMeetingRoom />
            </div>
          </div>
        </div>

        {/* Modal component */}
        <Modal
          className="h-full"
          show={isOpen}
          onClose={closeModal}
          size="full"
        >
          <Modal.Header className="bg-primary">
            <h3 className="text-white font-semibold">Habitaciones</h3>
          </Modal.Header>
          <Modal.Body>
            <div className="px-3 pb-5">
              {roomData.map((room, roomIndex) => (
                <div
                  className="relative bg-slate-100 rounded-lg shadow-lg mb-10 p-3 py-12 text-black"
                  key={room.id}
                >
                  <span className="absolute -top-3 border-2 bg-primary text-white rounded-lg p-2 font-semibold">
                    Habitación {roomIndex + 1}
                  </span>
                  <div className="grid grid-cols-6 gap-5">
                    <div className="col-span-3 md:col-span-1">
                      <span className="text-sm text-black">Adultos</span>
                      <div className="relative">
                        <select
                          onChange={(e) => onAdultosChange(room.id, e)}
                          value={room.adultos}
                          className="pl-10 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-0 focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        <div className="absolute top-0 pointer-events-none bg-secondary text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
                          <FaPerson />
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3 md:col-span-1">
                      <span className="text-sm text-black">Niños</span>
                      <div className="relative">
                        <select
                          onChange={(e) => onNiniosChange(room.id, e)}
                          value={room.ninios}
                          className="pl-10 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-0 focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                        >
                          {[0, 1, 2, 3].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        <div className="absolute top-0 pointer-events-none bg-secondary text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
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
                              className="mt-1 block w-full px-3 py-2 border text-primary border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
                      <div className="absolute -bottom-5 right-5 flex items-center justify-center border-2 border-red-500 p-2 bg-white text-red-500 rounded shadow-xl mt-5">
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
                <div
                  onClick={addRoom}
                  className="w-fit flex items-center space-x-1"
                >
                  <span>Agregar </span>
                  <CiCirclePlus className="text-lg" />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-end">
            <button
              className="bg-primary p-3 px-6 text-white rounded-lg shadow font-semibold"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default SelectorPersonas;
