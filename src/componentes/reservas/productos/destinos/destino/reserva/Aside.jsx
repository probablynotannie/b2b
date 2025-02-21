import { FaExclamationCircle, FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ImSpoonKnife } from "react-icons/im";
import { FaRegTrashAlt } from "react-icons/fa";
import { Popover } from "flowbite-react";
import { MdMeetingRoom } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Desglose from "./Desglose";
function Aside({
  dates,
  producto,
  handleRoomTypeChange,
  addRoom,
  deleteRoom,
  reserva,
}) {
  const pvp = dates.startDatePrice;
  return (
    <div className="sticky top-5">
      {dates.startDate ? (
        <>
          <h2 className="font-semibold text-xl dark:text-white">
            {producto.nombre}
          </h2>
          <img
            src={producto.img}
            className="object-cover w-full h-[20vh] shadow rounded-md"
            alt="imagen destino"
          />
          <div className="text-sm border-b-2 border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400 py-2">
            <p className="grid grid-cols-2 mt-2 ">
              {producto.pax !== 0 && (
                <span className="flex items-center">
                  <FaPerson className="tw-text-secondary dark:tw-text-secondary" />
                  {producto.pax}x
                </span>
              )}
              <span className="dark:text-slate-300 font-bold text-end">
                {pvp}€
              </span>
            </p>
            <p className="flex gap-2 items-center  ">
              <FaClock className="tw-text-secondary dark:tw-text-secondary" />
              <span>{producto.dias} días</span>
              <ImSpoonKnife className="tw-text-secondary dark:tw-text-secondary" />
              <span> {producto.desayunos}x Desayunos</span>
            </p>

            <div className="flex gap-2 items-center">
              <FaCalendarAlt className="tw-text-secondary dark:tw-text-secondary" />
              <p className="flex flex-row">
                <span className="mr-1">
                  {format(new Date(dates.startDate), "d 'de' MMMM yyyy", {
                    locale: es,
                  })}
                </span>
                <span> -</span>
                <span className="ml-1">
                  {format(new Date(dates.endDate), "d 'de' MMMM yyyy", {
                    locale: es,
                  })}
                </span>
              </p>
            </div>
            <div>
              <Popover
                aria-labelledby="default-popover"
                content={
                  <div className="w-64 text-sm text-slate-500 dark:text-slate-400">
                    <div className="border-b border-slate-200 bg-slate-100 px-3 py-2 dark:border-slate-600 dark:bg-slate-700">
                      <h3
                        id="default-popover"
                        className="font-semibold text-slate-900 dark:text-white"
                      >
                        Nueva habitación
                      </h3>
                    </div>
                    <div className="px-3 py-2">
                      {producto.habitaciones.map((habitacion) => (
                        <div className="mb-2" key={habitacion.id}>
                          <div className="flex justify-between items-center mb-1">
                            <label htmlFor={`room-type-${habitacion.id}`}>
                              Tipo de habitación:
                            </label>
                            <button
                              onClick={() => deleteRoom(habitacion.id)}
                              className="rounded-full text-red-500 text-lg p-1"
                            >
                              <FaRegTrashAlt />
                            </button>
                          </div>
                          <div className="relative">
                            <select
                              className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
                              id={`room-type-${habitacion.id}`}
                              value={habitacion.pax}
                              onChange={(e) =>
                                handleRoomTypeChange(
                                  habitacion.id,
                                  parseInt(e.target.value, 10)
                                )
                              }
                            >
                              <option value="1">Cama Adicional (+1 pax)</option>
                              <option value="2">
                                Habitación Doble (+2 pax)
                              </option>
                              <option value="3">
                                Habitación Triple (+3 pax)
                              </option>
                            </select>
                            <div className="absolute top-0 pointer-events-none tw-bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                              <MdMeetingRoom />
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="mt-3">
                        <label htmlFor="new-room-type" className="block mb-2">
                          Seleccione el tipo de habitación:
                        </label>
                        <select
                          id="new-room-type"
                          className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 w-full cursor-pointer"
                          onChange={(e) => addRoom(e.target.value)}
                        >
                          <option value="Habitación Doble">
                            Habitación Doble
                          </option>
                          <option value="Habitación Triple">
                            Habitación Triple
                          </option>
                          <option value="Cama Adicional">Cama Adicional</option>
                        </select>
                      </div>
                      <div className="text-black dark:text-slate-400 hover:tw-text-secondary hover:font-semibold transition flex justify-end cursor-pointer border-t-2 border-slate-100 dark:border-slate-500 mt-5 pt-2">
                        <div className="w-fit flex items-center space-x-1 font-semibold">
                          <FaPlusCircle className="dark:tw-text-secondary" />
                          <span onClick={() => addRoom("Habitación Doble")}>
                            Agregar una habitación
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              >
                <button className="mt-2 flex items-center dark:hover:text-slate-200 hover:text-slate-700 transition">
                  <FaPlusCircle className="tw-text-secondary dark:tw-text-secondary mr-2" />
                  Agregar una habitación ( {producto.habitaciones.length + 1} )
                </button>
              </Popover>
            </div>
          </div>
          <Desglose precio={producto.precio} />
          <div className="grid grid-cols-3 justify-around w-full text-center"></div>
          <Link to="/datosDestino" state={reserva}>
            <button className="tw-bg-secondary mt-5 w-full text-white text-lg font-semibold rounded-lg shadow-md p-2">
              TOTAL: {producto.precio}€
            </button>
          </Link>
          <div className="flex justify-center text-slate-400 dark:text-slate-400 mt-2">
            <button>Descargar la oferta</button>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <FaExclamationCircle className="text-orange-400 text-3xl animate-pulse" />
          <p className=" font-semibold text-orange-300">
            Por favor selecciona una fecha para continuar
          </p>
        </div>
      )}
    </div>
  );
}
export default Aside;
