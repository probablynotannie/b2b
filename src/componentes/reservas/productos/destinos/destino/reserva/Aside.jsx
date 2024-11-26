import { FaExclamationCircle, FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { format } from "date-fns"; // Importing format from date-fns
import { es } from "date-fns/locale"; // Importing Spanish locale
import { ImSpoonKnife } from "react-icons/im";
import { FaPercent, FaEuroSign, FaRegTrashAlt } from "react-icons/fa";
import { Popover } from "flowbite-react";
import { MdMeetingRoom } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
function Aside({ dates, producto, handleRoomTypeChange, addRoom, deleteRoom }) {
  const pvp = dates.startDatePrice;
  const precio = producto.pax * dates.startDatePrice;

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
                  <FaPerson className="text-secondary dark:text-secondary" />
                  {producto.pax}x
                </span>
              )}
              <span className="dark:text-slate-300 font-bold text-end">
                {pvp}€
              </span>
            </p>
            <p className="flex gap-2 items-center  ">
              <FaClock className="text-secondary dark:text-secondaryDark" />
              <span>{producto.dias} días</span>
              <ImSpoonKnife className="text-secondary dark:text-secondaryDark" />
              <span> {producto.desayunos}x Desayunos</span>
            </p>

            <div className="flex gap-2 items-center">
              <FaCalendarAlt className="text-secondary dark:text-secondaryDark" />
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
                              value={habitacion.pax} // Bind the value to the pax state of the room
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
                            <div className="absolute top-0 pointer-events-none bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                              <MdMeetingRoom />
                            </div>
                          </div>
                        </div>
                      ))}
                      <div
                        onClick={addRoom}
                        className="text-black dark:text-slate-400 hover:text-secondary hover:font-semibold transition flex justify-end cursor-pointer border-t-2 border-slate-100 mt-5 pt-2"
                      >
                        <div className="w-fit flex items-center space-x-1 font-semibold">
                          <span>Agregar una habitación </span>
                          <CiCirclePlus className="dark:text-secondaryDark text-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                }
              >
                <button className="mt-2">
                  Agregar una habitación ( {producto.habitaciones.length + 1} )
                </button>
              </Popover>
            </div>
          </div>
          <h3 className="font-semibold text-center border-b-2 my-3 pb-3 dark:text-slate-300 border-slate-100 dark:border-slate-700 uppercase">
            Desglose:
          </h3>
          <div className="grid grid-cols-3 justify-around w-full text-center py-1">
            <p className="flex flex-col justify-center items-center text-sm text-slate-400 dark:text-slate-500">
              <FaPercent className="text-secondary dark:text-secondaryDark" />
              <span className="text-secondary font-semibold text-lg">
                {precio - precio * 0.15}
              </span>
              Neto
            </p>
            <p className="flex flex-col justify-center items-center text-sm text-slate-400 dark:text-slate-500">
              <FaPercent className="text-secondary dark:text-secondaryDark" />
              <span className="text-secondary font-semibold text-lg">15%</span>
              Margen
            </p>
            <p className="flex flex-col justify-center items-center text-sm text-slate-400 dark:text-slate-500">
              <FaEuroSign className="text-secondary dark:text-secondaryDark" />
              <span className="text-secondary font-semibold text-lg">
                {precio}
              </span>
              P.V.P
            </p>
          </div>
          <div className="grid grid-cols-3 justify-around w-full text-center"></div>
          <div className="flex justify-end mt-5">
            <button className="bg-secondary w-full text-white text-lg font-semibold rounded-lg shadow-md p-2">
              TOTAL: {precio}€
            </button>
          </div>
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
