import { useState } from "react";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { MdMeetingRoom } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
function SelectorPersonas({
  habitacion,
  roomData,
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
      <div className="tw-relative">
        <div
          onClick={openModal}
          className="tw-border tw-flex tw-items-center tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
        >
          {habitacion} Hab - {totalAdults} Ad - {totalChildren} Niños
        </div>
        <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
          <MdMeetingRoom />
        </div>
      </div>
      {isOpen && (
        <div className="tw-fixed tw-inset-0 tw-bg-black  tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center tw-z-50">
          <div className="tw-relative tw-bg-slate-50 dark:tw-bg-slate-800 tw-w-full tw-h-full tw-max-w-4xl tw-overflow-auto">
            <div className="tw-sticky tw-top-0 tw-z-50 tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-slate-800 dark:tw-bg-slate-900 tw-p-5">
              <h2 className="tw-text-xl tw-font-bold tw-text-white">
                Habitaciones
              </h2>
              <button onClick={closeModal} className="tw-text-xl tw-text-white">
                &times;
              </button>
            </div>
            <div className="tw-px-3 tw-pb-5 tw-mt-12">
              {roomData.map((room, roomIndex) => (
                <div
                  className="tw-relative tw-bg-slate-100 dark:tw-bg-slate-700 tw-border tw-border-slate-300 dark:tw-border-slate-700 tw-rounded-lg tw-shadow-lg tw-mb-10 tw-p-3 tw-py-12 tw-text-black"
                  key={room.id}
                >
                  <span className="tw-absolute -tw-top-5 tw-border-2 tw-bg-slate-900 dark:tw-border-slate-600 tw-text-white tw-rounded-lg tw-p-2 tw-font-semibold">
                    Habitación {roomIndex + 1}
                  </span>
                  <div className="tw-grid tw-grid-cols-6 tw-gap-5">
                    <div className="tw-col-span-3 md:tw-col-span-1">
                      <span className="tw-text-sm tw-text-black dark:tw-text-slate-300">
                        Adultos
                      </span>
                      <div className="tw-relative">
                        <select
                          onChange={(e) => onAdultosChange(room.id, e)}
                          value={room.adultos}
                          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600  dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        <div className="tw-absolute dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-top-0 tw-pointer-events-none tw-bg-secondary tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                          <FaPerson />
                        </div>
                      </div>
                    </div>
                    <div className="tw-col-span-3 md:tw-col-span-1">
                      <span className="tw-text-sm tw-text-black dark:tw-text-slate-300">
                        Niños
                      </span>
                      <div className="tw-relative">
                        <select
                          onChange={(e) => onNiniosChange(room.id, e)}
                          value={room.ninios}
                          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full"
                        >
                          {[0, 1, 2, 3].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                        <div className="tw-absolute dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-top-0 tw-pointer-events-none tw-bg-secondary tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                          <FaChild />
                        </div>
                      </div>
                    </div>

                    {/* Child Age Inputs */}
                    {room.ninios > 0 && (
                      <div className="tw-col-span-6 md:tw-col-span-3">
                        <span className="tw-text-sm tw-text-black">
                          Edad de los niños
                        </span>
                        <div className="tw-grid tw-grid-cols-3 tw-gap-3">
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
                              className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
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
                      <div className="tw-absolute -tw-top-5 tw-cursor-pointer tw-right-5 tw-bg-white dark:tw-bg-slate-900 tw-rounded tw-border-2 tw-border-red-500 dark:tw-border-red-700 tw-p-2 tw-text-red-500 dark:tw-text-red-700 dark:hover:tw-bg-red-800 hover:tw-bg-danger hover:tw-text-white tw-transition tw-flex tw-items-center tw-justify-end tw-pb-2 tw-flex-col">
                        <button
                          onClick={() => deleteRoom(room.id)}
                          className="tw-text-xl"
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div className="tw-mt-10 tw-text-black hover:tw-text-secondary hover:tw-font-semibold tw-transition tw-flex tw-justify-end tw-cursor-pointer">
                <button
                  type="button"
                  onClick={addRoom}
                  className="tw-w-full tw-flex tw-justify-center tw-items-center tw-space-x-1 tw-bg-secondary tw-text-white tw-p-3 tw-rounded-lg tw-shadow"
                >
                  <span>Agregar una habitación </span>
                  <CiCirclePlus className="tw-text-lg" />
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
