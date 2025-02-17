import { useState } from "react";
import { MdMeetingRoom } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { Popover } from "flowbite-react";
function SelectorPersonas() {
  const [habitacion, setHabitacion] = useState(1);
  const [roomData, setRoomData] = useState(
    Array.from({ length: 3 }, () => ({ adultos: 1, ninios: 0, ninioAges: [] }))
  );
  const onHabitacionChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setHabitacion(count);
    setRoomData((prevData) =>
      prevData.length < count
        ? [
            ...prevData,
            ...Array.from({ length: count - prevData.length }, () => ({
              adultos: 1,
              ninios: 0,
              ninioAges: [],
            })),
          ]
        : prevData.slice(0, count)
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
    const newRoomData = [...roomData];
    newRoomData[roomIndex].ninios = count;
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
      return updatedData;
    });
  };
  const handleAgeChange = (roomIndex, childIndex, age) => {
    const newRoomData = [...roomData];
    newRoomData[roomIndex].ninioAges[childIndex] = age;
    setRoomData(newRoomData);
  };
  return (
    <div className="">
      <div className="relative">
        <select
          onChange={onHabitacionChange}
          id="habitaciones"
          className="pl-10 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-0 focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
        >
          <option value={0} defaultValue>
            Número de habitaciones
          </option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
        <div className="absolute top-0 pointer-events-none tw-bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
          <MdMeetingRoom />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {Array.from({ length: habitacion }).map((_, roomIndex) => (
          <div key={roomIndex}>
            <Popover
              aria-labelledby="default-popover"
              content={
                <div className="w-64 text-sm">
                  <div className="bg-slate-800 text-white h-14 flex items-center pl-4 font-semibold">
                    Adultos / Niños
                  </div>
                  <div className="px-3">
                    <div key={roomIndex}>
                      <div className="grid grid-cols-2  gap-2 pb-3">
                        <div>
                          <span className="text-sm">Adultos</span>
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

                            <div className="absolute top-0 pointer-events-none tw-bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                              <FaPerson />
                            </div>
                          </div>
                        </div>
                        <div>
                          <span className="text-sm">Niños</span>
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

                            <div className="absolute top-0 pointer-events-none tw-bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                              <FaChild />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        {roomData[roomIndex].ninios > 0 && (
                          <div className="grid grid-cols-3 gap-1 pb-4 mt-2">
                            {Array.from({
                              length: roomData[roomIndex].ninios,
                            }).map((_, childIndex) => (
                              <div key={childIndex}>
                                <label
                                  htmlFor={`child-age-${roomIndex}-${childIndex}`}
                                  className="text-sm text-primary"
                                >
                                  Niño {childIndex + 1}
                                </label>
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
                  </div>
                </div>
              }
            >
              <div className="mt-4">
                <div className="relative">
                  <div className="bg-white text-primary border-secondary border-2 mt-1 p-2.5  rounded-lg text-sm font-semibold pl-4">
                    {` ${roomData[roomIndex].adultos} adultos, ${roomData[roomIndex].ninios} niños`}
                  </div>
                  <div className="absolute -top-2 right-2 space-x-1 text-white font-semibold flex text-center text-xs rounded-full  bg-secondary py-1 px-2">
                    <span>Hab</span>
                    <span>{roomIndex + 1}</span>
                  </div>
                </div>
              </div>
            </Popover>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SelectorPersonas;
