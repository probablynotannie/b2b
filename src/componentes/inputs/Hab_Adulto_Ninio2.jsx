import { useState } from "react";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { Popover } from "flowbite-react";
import { CiCirclePlus } from "react-icons/ci";
import { MdMeetingRoom } from "react-icons/md";
import VersionMovil from "./movil/Hab_Adulto_Ninio_Movil";
import { FaTrashAlt } from "react-icons/fa";

function SelectorPersonas() {
  const [habitacion, setHabitacion] = useState(1);
  const [roomData, setRoomData] = useState([
    { id: Date.now(), adultos: 1, ninios: 0, ninioAges: [] },
  ]);

  const addRoom = () => {
    setHabitacion((prevCount) => prevCount + 1);
    setRoomData((prevData) => [
      ...prevData,
      { id: Date.now() + Math.random(), adultos: 1, ninios: 0, ninioAges: [] },
    ]);
  };

  const deleteRoom = (roomId) => {
    setRoomData((prevData) => {
      const updatedData = prevData.filter((room) => room.id !== roomId);
      setHabitacion(Math.max(updatedData.length, 1)); // Update room count based on filtered data
      return updatedData;
    });
  };
  const onAdultosChange = (roomId, e) => {
    const count = parseInt(e.target.value, 10);
    setRoomData((prevData) =>
      prevData.map((room) =>
        room.id === roomId ? { ...room, adultos: count } : room
      )
    );
  };

  const onNiniosChange = (roomId, e) => {
    const count = parseInt(e.target.value, 10);
    setRoomData((prevData) =>
      prevData.map((room) =>
        room.id === roomId
          ? {
              ...room,
              ninios: count,
              ninioAges: room.ninioAges
                .slice(0, count)
                .concat(
                  new Array(Math.max(count - room.ninioAges.length, 0)).fill("")
                ),
            }
          : room
      )
    );
  };

  const handleAgeChange = (roomId, childIndex, age) => {
    setRoomData((prevData) =>
      prevData.map((room) =>
        room.id === roomId
          ? {
              ...room,
              ninioAges: room.ninioAges.map((a, i) =>
                i === childIndex ? age : a
              ),
            }
          : room
      )
    );
  };

  const totalAdults = roomData.reduce((acc, room) => acc + room.adultos, 0);
  const totalChildren = roomData.reduce((acc, room) => acc + room.ninios, 0);

  return (
    <div>
      <div className="lg:hidden">
        <VersionMovil
          deleteRoom={deleteRoom}
          totalAdults={totalAdults}
          totalChildren={totalChildren}
          habitacion={habitacion}
          setHabitacion={setHabitacion}
          roomData={roomData}
          setRoomData={setRoomData}
          addRoom={addRoom}
          onAdultosChange={onAdultosChange}
          onNiniosChange={onNiniosChange}
          handleAgeChange={handleAgeChange}
        />
      </div>
      <div className="hidden lg:grid grid-cols-1 gap-3">
        <Popover
          placement="right"
          aria-labelledby="default-popover"
          content={
            <div className="w-96 text-sm">
              <div className="bg-primary text-white h-14 flex items-center pl-4 font-semibold">
                Adultos / Niños
              </div>
              <div className="px-3 pb-5 max-h-[60vh] overflow-y-auto">
                {roomData.map((room, roomIndex) => (
                  <div
                    className="relative text-black bg-slate-100 shadow mt-8 p-2 py-5 rounded-lg"
                    key={room.id}
                  >
                    <span className="absolute -top-5 p-2 bg-primary text-white font-semibold rounded-lg shadow-lg">
                      Habitación {roomIndex + 1}
                    </span>

                    <div className="grid grid-cols-3 gap-2">
                      <div>
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
                      <div>
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
                      {roomIndex !== 0 && (
                        <button
                          onClick={() => deleteRoom(room.id)}
                          className="absolute -top-5 cursor-pointer right-5 bg-white rounded border-2 border-red-500 p-2 text-red-500 hover:bg-red-500 hover:text-white transition  flex items-center justify-end pb-2 flex-col"
                        >
                          <FaTrashAlt />
                        </button>
                      )}
                    </div>
                    <div>
                      {room.ninios > 0 && (
                        <div className="grid grid-cols-3 gap-1 pb-2 mt-2">
                          {room.ninioAges.map((age, childIndex) => (
                            <div key={childIndex}>
                              <input
                                required
                                type="number"
                                value={age || ""}
                                onChange={(e) =>
                                  handleAgeChange(
                                    room.id,
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
                  className="text-black hover:text-secondary hover:font-semibold transition flex justify-end cursor-pointer border-t-2 border-slate-100 mt-5 pt-2"
                >
                  <div className="w-fit flex items-center space-x-1 font-semibold">
                    <span>Agregar una habitación </span>
                    <CiCirclePlus />
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <div>
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
