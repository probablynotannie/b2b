import { useState } from "react";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { Popover } from "flowbite-react";
import { CiCirclePlus } from "react-icons/ci";
import { MdMeetingRoom } from "react-icons/md";
import VersionMovil from "./movil/Hab_Adulto_Ninio_Movil";
function SelectorPersonas() {
  const [habitacion, setHabitacion] = useState(1);
  const [roomData, setRoomData] = useState(
    Array.from({ length: 1 }, () => ({ adultos: 1, ninios: 0, ninioAges: [] }))
  );

  const addRoom = () => {
    setHabitacion((prevCount) => prevCount + 1);
    setRoomData((prevData) => [
      ...prevData,
      { adultos: 1, ninios: 0, ninioAges: [] },
    ]);
  };

  const deleteRoom = (roomIndex) => {
    setHabitacion((prevCount) => Math.max(prevCount - 1, 1));
    setRoomData((prevData) =>
      prevData.filter((_, index) => index !== roomIndex)
    );
  };

  const onAdultosChange = (roomIndex, e) => {
    const count = parseInt(e.target.value, 10);
    const newRoomData = [...roomData];
    newRoomData[roomIndex].adultos = count;
    setRoomData(newRoomData);
  };

  const onNiniosChange = (roomIndex, e) => {
    const count = parseInt(e.target.value, 10);
    setRoomData((prevData) => {
      const updatedData = [...prevData];
      if (updatedData[roomIndex].ninioAges.length < count) {
        updatedData[roomIndex].ninioAges = [
          ...updatedData[roomIndex].ninioAges,
          ...new Array(count - updatedData[roomIndex].ninioAges.length).fill(
            ""
          ),
        ];
      } else {
        updatedData[roomIndex].ninioAges = updatedData[
          roomIndex
        ].ninioAges.slice(0, count);
      }
      updatedData[roomIndex].ninios = count;
      return updatedData;
    });
  };

  const handleAgeChange = (roomIndex, childIndex, age) => {
    const newRoomData = [...roomData];
    newRoomData[roomIndex].ninioAges[childIndex] = age;
    setRoomData(newRoomData);
  };

  const totalAdults = roomData.reduce((acc, room) => acc + room.adultos, 0);
  const totalChildren = roomData.reduce((acc, room) => acc + room.ninios, 0);

  return (
    <div>
      <div className=" lg:hidden">
        <VersionMovil />
      </div>
      <div className="hidden lg:grid grid-cols-1 gap-3">
        <Popover
          aria-labelledby="default-popover"
          content={
            <div className="w-96 text-sm">
              <div className="bg-primary text-white h-14 flex items-center pl-4 font-semibold">
                Adultos / Niños
              </div>
              <div className="px-3 pb-5">
                {Array.from({ length: habitacion }).map((_, roomIndex) => (
                  <div className="text-black" key={roomIndex}>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <span className="text-sm text-black">Adultos</span>
                        <div className="relative">
                          <select
                            onChange={(e) => onAdultosChange(roomIndex, e)}
                            id={`adultos-${roomIndex}`}
                            className="pl-10 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-0 focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                          >
                            <option defaultValue value={1}>
                              1
                            </option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                          </select>
                          <div className="absolute top-0 pointer-events-none bg-secondary text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
                            <FaPerson />
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-black">Niños</span>
                        <div className="relative">
                          <select
                            onChange={(e) => onNiniosChange(roomIndex, e)}
                            id={`ninios-${roomIndex}`}
                            className="pl-10 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-0 focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                          >
                            <option value={0} defaultValue>
                              0
                            </option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                          </select>
                          <div className="absolute top-0 pointer-events-none bg-secondary text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
                            <FaChild />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-end flex-col">
                        <span className="flex justify-end mt-3">
                          {" "}
                          Habitacion {roomIndex + 1}{" "}
                        </span>
                        {roomIndex !== 0 && (
                          <button
                            onClick={() => deleteRoom(roomIndex)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Eliminar
                          </button>
                        )}
                      </div>
                    </div>
                    <div>
                      {roomData[roomIndex].ninios > 0 && (
                        <div className="grid grid-cols-3 gap-1 pb-2 mt-2">
                          {Array.from({
                            length: roomData[roomIndex].ninios,
                          }).map((_, childIndex) => (
                            <div key={childIndex}>
                              <input
                                required
                                type="number"
                                id={`child-age-${roomIndex}-${childIndex}`}
                                value={
                                  roomData[roomIndex].ninioAges[childIndex] ||
                                  ""
                                }
                                onChange={(e) =>
                                  handleAgeChange(
                                    roomIndex,
                                    childIndex,
                                    e.target.value
                                  )
                                }
                                className="mt-1 block w-full px-3 py-2 border text-primary border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Edad"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div
                  onClick={addRoom}
                  className="mt-2 text-black hover:text-secondary hover:font-semibold transition flex justify-end cursor-pointer"
                >
                  <div className="w-fit flex items-center space-x-1">
                    <span>Agregar </span>
                    <CiCirclePlus />
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <div className="mt-4">
            <div className="relative">
              <div className="bg-white text-primary border-secondary border-2 mt-1 p-2.5 rounded-lg text-sm  pl-10">
                {habitacion} Habitaciones - {totalAdults} Adultos -{" "}
                {totalChildren} Niños
              </div>
              <div className="absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl ">
                <MdMeetingRoom />
              </div>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
}

export default SelectorPersonas;
