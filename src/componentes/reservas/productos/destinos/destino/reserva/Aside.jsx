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
    <div className="tw-sticky tw-top-5">
      {dates.startDate ? (
        <>
          <h2 className="tw-font-semibold tw-text-xl dark:tw-text-white">
            {producto.nombre}
          </h2>
          <img
            src={producto.img}
            className="tw-object-cover tw-w-full tw-h-[20vh] tw-shadow tw-rounded-md"
            alt="imagen destino"
          />
          <div className="tw-text-sm tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-text-slate-500 dark:tw-text-slate-400 tw-py-2">
            <p className="tw-grid tw-grid-cols-2 tw-mt-2">
              {producto.pax !== 0 && (
                <span className="tw-flex tw-items-center">
                  <FaPerson className="tw-text-secondary dark:tw-text-secondary" />
                  {producto.pax}x
                </span>
              )}
              <span className="dark:tw-text-slate-300 tw-font-bold tw-text-end">
                {pvp}€
              </span>
            </p>
            <p className="tw-flex tw-gap-2 tw-items-center">
              <FaClock className="tw-text-secondary dark:tw-text-secondary" />
              <span>{producto.dias} días</span>
              <ImSpoonKnife className="tw-text-secondary dark:tw-text-secondary" />
              <span> {producto.desayunos}x Desayunos</span>
            </p>

            <div className="tw-flex tw-gap-2 tw-items-center">
              <FaCalendarAlt className="tw-text-secondary dark:tw-text-secondary" />
              <p className="tw-flex tw-flex-row">
                <span className="tw-mr-1">
                  {format(new Date(dates.startDate), "d 'de' MMMM yyyy", {
                    locale: es,
                  })}
                </span>
                <span> -</span>
                <span className="tw-ml-1">
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
                  <div className="tw-w-64 tw-text-sm tw-text-slate-500 dark:tw-text-slate-400">
                    <div className="tw-border-b tw-border-slate-200 tw-bg-slate-100 tw-px-3 tw-py-2 dark:tw-border-slate-600 dark:tw-bg-slate-700">
                      <h3
                        id="default-popover"
                        className="tw-font-semibold tw-text-slate-900 dark:tw-text-white"
                      >
                        Nueva habitación
                      </h3>
                    </div>
                    <div className="tw-px-3 tw-py-2">
                      {producto.habitaciones.map((habitacion) => (
                        <div className="tw-mb-2" key={habitacion.id}>
                          <div className="tw-flex tw-justify-between tw-items-center tw-mb-1">
                            <label htmlFor={`room-type-${habitacion.id}`}>
                              Tipo de habitación:
                            </label>
                            <button
                              onClick={() => deleteRoom(habitacion.id)}
                              className="tw-rounded-full tw-text-red-500 tw-text-lg tw-p-1"
                            >
                              <FaRegTrashAlt />
                            </button>
                          </div>
                          <div className="tw-relative">
                            <select
                              className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
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
                            <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                              <MdMeetingRoom />
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="tw-mt-3">
                        <label
                          htmlFor="new-room-type"
                          className="tw-block tw-mb-2"
                        >
                          Seleccione el tipo de habitación:
                        </label>
                        <select
                          id="new-room-type"
                          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
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
                      <div className="tw-text-black dark:tw-text-slate-400 hover:tw-text-secondary hover:tw-font-semibold tw-transition tw-flex tw-justify-end tw-cursor-pointer tw-border-t-2 tw-border-slate-100 dark:tw-border-slate-500 tw-mt-5 tw-pt-2">
                        <div className="tw-w-fit tw-flex tw-items-center tw-space-x-1 tw-font-semibold">
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
                <button className="tw-mt-2 tw-flex tw-items-center dark:hover:tw-text-slate-200 hover:tw-text-slate-700 tw-transition">
                  <FaPlusCircle className="tw-text-secondary dark:tw-text-secondary tw-mr-2" />
                  Agregar una habitación ( {producto.habitaciones.length + 1} )
                </button>
              </Popover>
            </div>
          </div>
          <Desglose precio={producto.precio} />
          <div className="tw-grid tw-grid-cols-3 tw-justify-around tw-w-full tw-text-center"></div>
          <Link to="/datosDestino" state={reserva}>
            <button className="tw-bg-secondary tw-mt-5 tw-w-full tw-text-white tw-text-lg tw-font-semibold tw-rounded-lg tw-shadow-md tw-p-2">
              TOTAL: {producto.precio}€
            </button>
          </Link>
          <div className="tw-flex tw-justify-center tw-text-slate-400 dark:tw-text-slate-400 tw-mt-2">
            <button>Descargar la oferta</button>
          </div>
        </>
      ) : (
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <FaExclamationCircle className="tw-text-orange-400 tw-text-3xl tw-animate-pulse" />
          <p className="tw-font-semibold tw-text-orange-300">
            Por favor selecciona una fecha para continuar
          </p>
        </div>
      )}
    </div>
  );
}
export default Aside;
