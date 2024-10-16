import { useState } from "react";
import { MdMeetingRoom } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { Drawer, Sidebar } from "flowbite-react";

function SelectorPersonas() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);
  const [habitacion, setHabitacion] = useState(1);
  const [roomData, setRoomData] = useState(
    Array.from({ length: 3 }, () => ({ adultos: 2, ninios: 0, ninioAges: [] }))
  );

  const onHabitacionChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setHabitacion(count);
    setRoomData((prevData) =>
      prevData.length < count
        ? [...prevData, ...Array.from({ length: count - prevData.length }, () => ({ adultos: 2, ninios: 0, ninioAges: [] }))]
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
          ...new Array(count - updatedData[roomIndex].ninioAges.length).fill(""),
        ];
      } else {
        updatedData[roomIndex].ninioAges = updatedData[roomIndex].ninioAges.slice(0, count);
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
    <div className="relative w-full">
      <div className="absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl ">
        <MdPeopleAlt />
      </div>

      <div
        onClick={() => setIsOpen(true)}
        className="border border-gray-300 bg-white text-gray-700 p-2.5 rounded-lg pl-10 text-sm"
      >
        {habitacion} hab {roomData.reduce((sum, room) => sum + room.adultos, 0)} adultos {roomData.reduce((sum, room) => sum + room.ninios, 0)} niños
      </div>
      <Drawer position="right" open={isOpen} onClose={handleClose}>
        <Drawer.Header
          className="border-b-2 border-slate-100"
          title="Habitación/Adulto/Niños"
          titleIcon={() => <></>}
        />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2 pr-1">
              <div className="space-y-2 text-sm text-gray-500">
                <div>
                  <span className="text-sm">Habitaciones</span>
                  <div className="relative">
                    <select
                      onChange={onHabitacionChange}
                      id="habitaciones"
                      className="pl-10 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-0 focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                    >
                      <option value={1} defaultValue>
                        1
                      </option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>

                    <div className="absolute top-0 pointer-events-none bg-secondary text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
                      <MdMeetingRoom />
                    </div>
                  </div>
                </div>

                <div>
                  {habitacion > 0 && (
                    <div className="grid grid-cols-1 gap-1">
                      {Array.from({ length: habitacion }).map((_, roomIndex) => (
                        <div key={roomIndex} className="mt-4 py-2">
                          <div>
                            <span className="text-sm">Adultos</span>
                            <div className="relative">
                              <select
                                onChange={(e) => onAdultosChange(roomIndex, e)}
                                id={`adultos-${roomIndex}`}
                                className="pl-10 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-0 focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                              >
                                <option value={1}>1</option>
                                <option value={2} defaultValue>
                                  2
                                </option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                              </select>

                              <div className="absolute top-0 pointer-events-none bg-primary text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
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

                              <div className="absolute top-0 pointer-events-none bg-primary text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
                                <FaChild />
                              </div>
                            </div>
                          </div>

                          {roomData[roomIndex].ninios > 0 && (
                            <div className="grid grid-cols-1 gap-1">
                              {Array.from({ length: roomData[roomIndex].ninios }).map((_, childIndex) => (
                                <div key={childIndex} className="mt-2">
                                  <label htmlFor={`child-age-${roomIndex}-${childIndex}`} className="text-sm">Edad del Niño {childIndex + 1}</label>
                                  <input
                                    required
                                    type="number"
                                    id={`child-age-${roomIndex}-${childIndex}`} // Unique ID for each input
                                    value={roomData[roomIndex].ninioAges[childIndex] || ""}
                                    onChange={(e) => handleAgeChange(roomIndex, childIndex, e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Edad"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </div>
  );
}

export default SelectorPersonas;
