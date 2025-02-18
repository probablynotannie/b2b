import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { Popover } from "flowbite-react";
import { CiCirclePlus } from "react-icons/ci";
import { MdMeetingRoom } from "react-icons/md";
import VersionMovil from "./movil/Hab_Adulto_Ninio_Movil";
import { FaTrashAlt } from "react-icons/fa";

function SelectorPersonas({
  habitacion,
  setHabitacion,
  roomData,
  setRoomData,
}) {
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
      setHabitacion(Math.max(updatedData.length, 1));
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
      <div className="lg:tw-hidden">
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
      <div className="tw-hidden lg:tw-grid tw-grid-cols-1 tw-gap-3">
        <Popover
          placement="right"
          aria-labelledby="default-popover"
          content={
            <div className="tw-w-96 tw-text-sm">
              <div className="bg-primary dark:tw-bg-slate-900 tw-text-white tw-h-14 tw-flex tw-items-center tw-pl-4 tw-font-semibold">
                Adultos / Niños
              </div>
              <div className="tw-px-3 tw-pb-5 tw-max-h-[80vh] tw-overflow-y-auto">
                {roomData.map((room, roomIndex) => (
                  <div
                    className="tw-relative tw-text-black dark:tw-text-slate-400 tw-bg-slate-100 dark:tw-bg-slate-700 dark:tw-shadow-inner dark:tw-shadow-slate-600 tw-shadow tw-mt-10 tw-p-2 tw-py-5 tw-rounded-lg"
                    key={room.id}
                  >
                    <span className="tw-absolute -tw-top-5 tw-p-2 bg-primary dark:tw-bg-slate-900 tw-text-white tw-font-semibold tw-rounded-lg tw-shadow-lg">
                      Habitación {roomIndex + 1}
                    </span>
                    <div className="tw-grid tw-grid-cols-3 tw-gap-2">
                      <div>
                        <span className="tw-text-sm tw-text-black dark:tw-text-slate-400">
                          Adultos
                        </span>
                        <div className="tw-relative">
                          <select
                            onChange={(e) => onAdultosChange(room.id, e)}
                            value={room.adultos}
                            className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
                          >
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                          <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                            <FaPerson />
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="tw-text-sm tw-text-black dark:tw-text-slate-400">
                          Niños
                        </span>
                        <div className="tw-relative">
                          <select
                            onChange={(e) => onNiniosChange(room.id, e)}
                            value={room.ninios}
                            className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
                          >
                            {[0, 1, 2, 3].map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                          <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                            <FaChild />
                          </div>
                        </div>
                      </div>
                      {roomIndex !== 0 && (
                        <button
                          onClick={() => deleteRoom(room.id)}
                          className="tw-absolute -tw-top-5 tw-cursor-pointer tw-right-5 tw-bg-white dark:tw-bg-slate-900 tw-rounded tw-border-2 tw-border-red-500 dark:tw-border-red-700 tw-p-2 tw-text-red-500 dark:tw-text-red-700 dark:hover:tw-bg-red-800 hover:tw-bg-danger hover:tw-text-white tw-transition tw-flex tw-items-center tw-justify-end tw-pb-2 tw-flex-col"
                        >
                          <FaTrashAlt />
                        </button>
                      )}
                    </div>
                    <div>
                      {room.ninios > 0 && (
                        <div className="tw-grid tw-grid-cols-3 tw-gap-1 tw-pb-2 tw-mt-2">
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
                                className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
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
                  className="tw-text-black dark:tw-text-slate-400 hover:tw-text-secondary hover:tw-font-semibold tw-transition tw-flex tw-justify-end tw-cursor-pointer tw-border-t-2 tw-border-slate-100 tw-mt-5 tw-pt-2"
                >
                  <div className="tw-w-fit tw-flex tw-items-center tw-space-x-1 tw-font-semibold">
                    <span>Agregar una habitación </span>
                    <CiCirclePlus className="dark:tw-text-secondary tw-text-lg" />
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <div>
            <div className="tw-relative">
              <div className="tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-secondary dark:focus:tw-border-secondary text-primary tw-border-2 tw-p-2.5 tw-rounded-lg tw-text-sm tw-pl-10">
                {habitacion} Habitaciones - {totalAdults} Adultos -{" "}
                {totalChildren} Niños
              </div>
              <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
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
