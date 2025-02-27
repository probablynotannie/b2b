import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { FaMapPin } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";
import { Carousel } from "flowbite-react";
import { FaDoorOpen } from "react-icons/fa";
import { Modal } from "flowbite-react";
import { useState } from "react";
import Listado_cajas from "../../estructura/hoteles/Listado_cajas";
import Listado2 from "../../estructura/hoteles/Listado";
import Imagenes from "../../estructura/hoteles/Imgs";
import Info from "../../estructura/hoteles/Info";
import Map from "../../estructura/hoteles/Map";
import { FaRegCalendarAlt } from "react-icons/fa";
function Resultado({ hoteles, selectedHotel, setHotel, setHabitacion }) {
  const reserva = {
    pax: 2,
    pax_ninios: 1,
    habitaciones: 2,
    noches: 7,
  };
  const [openModal, setOpenModal] = useState(null);
  const [openInNewTab, setOpenInNewTab] = useState(false);
  return (
    <section className="pb-12">
      <div className="flex flex-col lg:flex-row lg:justify-between p-3 rounded-xl lg:mt-0">
        <h3 className="tw-text-secondary font-semibold text-lg ">
          Resultados ({hoteles.length})
        </h3>
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={openInNewTab}
              onChange={(e) => setOpenInNewTab(e.target.checked)}
            />
            <div className="relative w-11 h-6 bg-gray-200 dark:bg-slate-800 dark:md:bg-slate-800 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:tw-bg-secondary"></div>
            <span className="ms-3 text-sm font-medium text-slate-500 dark:tw-text-slate-400">
              Abrir enlace pestaña nueva
            </span>
          </label>
        </div>
      </div>
      {hoteles.map((hotel, index) => (
        <article
          key={index}
          className={`lg:flex flex-row transition mt-10 relative min-h-[15vh] rounded-xl ${
            selectedHotel?.id === hotel.id
              ? "bg-elegido dark:bg-slate-900 border-secondary"
              : "bg-slate-100 dark:bg-slate-800 border-slate-100 dark:tw-border-slate-800"
          } shadow-xl lg:shadow-lg hover:shadow-xl border-2`}
        >
          <div className="w-full h-[25vh] lg:h-auto lg:w-1/3 lg:rounded-l-lg rounded-t-lg overflow-hidden">
            <Carousel slide={false} indicators={true}>
              {hotel.fotos.map((foto, idx) => (
                <img
                  key={idx}
                  src={foto}
                  alt={`Imagen ${idx + 1} de ${hotel.nombre}`}
                  className="h-full w-full object-cover"
                />
              ))}
            </Carousel>
          </div>
          <div className="p-5 lg:w-2/3">
            <div className="border-b-2 border-slate-200 dark:tw-border-slate-700 pb-2">
              <div className="flex justify-between w-full">
                <h4 className="tw-text-secondary font-semibold">
                  {hotel.nombre}
                  <span className="text-sm ml-1 text-slate-400 font-normal">
                    - {hotel.regimen}
                  </span>
                </h4>
                <div className="flex tw-text-secondary">
                  {[...Array(5)].map((_, i) =>
                    i < hotel.estrellas ? (
                      <IoMdStar key={i} className="text-lg" />
                    ) : (
                      <IoMdStarOutline key={i} className="text-lg" />
                    )
                  )}
                </div>
              </div>
              <span className="text-slate-400 dark:tw-text-slate-400 text-sm flex items-center mb-2">
                <FaMapPin className="text-slate-600 dark:tw-text-slate-500 mr-2" />
                {hotel.direccion}
              </span>
              <div className="flex flex-wrap gap-2 justify-between mt-2 text-slate-900 dark:tw-text-slate-400 font-semibold text-sm">
                <span className="flex items-center">
                  <FaPerson className="text-lg" /> {reserva.pax} adulto
                  {reserva.pax !== 1 && "s"}
                </span>
                <span className="flex items-center">
                  <FaChild className="text-lg" /> {reserva.pax_ninios} niño
                </span>
                <span className="flex items-center">
                  <FaDoorOpen className="text-lg mr-1" /> {reserva.habitaciones}
                  Habitación/es
                </span>
                <span className="flex items-center">
                  <MdModeNight className="text-lg" />
                  {reserva.noches} noches
                </span>
              </div>
            </div>
            <p className="lg:text-slate-600 mt-2 dark:tw-text-slate-400 text-sm text-slate-500 line-clamp-2">
              {hotel.descripcion}
            </p>
            <div className="flex justify-end mt-3">
              <button
                className="w-full lg:w-fit p-3 tw-bg-secondary text-white font-semibold rounded-xl shadow"
                onClick={() => setOpenModal(index)}
              >
                Detalles
              </button>
              <Modal
                size="7xl"
                dismissible
                show={openModal === index}
                onClose={() => setOpenModal(null)}
              >
                <Modal.Header className="bg-white dark:bg-slate-900">
                  {hotel.nombre}
                </Modal.Header>
                <Modal.Body className="bg-white dark:bg-slate-900">
                  <div className="container">
                    <article className="grid grid-cols-5 lg:gap-10 my-5 mt-10 ">
                      <section className=" col-span-5 lg:col-span-1 flex flex-col  justify-between border-2 border-gray-200 dark:tw-border-slate-800 rounded-xl p-3 text-slate-700 bg-slate-500 dark:bg-slate-800 shadow-xl">
                        <h4 className="p-3 font-bold text-cen rounded-t-xl   tw-text-secondary">
                          Resumen
                        </h4>
                        <div className="flex justify-between pb-2 border-b-2 border-slate-100  dark:tw-border-slate-700">
                          <div className="flex items-center space-x-1 text-sm font-semibold  dark:tw-text-slate-100">
                            <FaPerson className="text-xl tw-text-secondary" />
                            <span className="text-white">{hotel.pax}</span>
                            <span className="text-white">
                              adulto{hotel.pax !== 1 && "s"}
                            </span>
                          </div>
                          {hotel.pax_ninios > 0 && (
                            <div className="flex items-center space-x-1 text-sm font-semibold  dark:tw-text-slate-100">
                              <FaChild className="text-lg tw-text-secondary" />
                              <span className="text-white">
                                {hotel.pax_ninios} niño
                                {hotel.pax_ninios > 1 && "s"}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="text-slateo-700 mx-2 mt-3 text-sm ">
                          <span className="font-semibold dark:tw-text-slate-400 text-white">
                            Entrada
                          </span>
                          <div className="relative">
                            <input
                              className="border bg-white dark:bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
                              type="text"
                              disabled
                              value={hotel.fecha}
                            />
                            <div className="absolute top-0 pointer-events-none tw-bg-inputIcon dark:bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                              <FaRegCalendarAlt />
                            </div>
                          </div>
                          <span className="block mt-2 font-semibold text-white dark:tw-text-slate-400">
                            Salida
                          </span>
                          <div className="relative">
                            <input
                              className="border bg-white dark:bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
                              type="text"
                              disabled
                              value={hotel.fechaSalida}
                            />
                            <div className="absolute top-0 pointer-events-none tw-bg-inputIcon dark:bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                              <FaRegCalendarAlt />
                            </div>
                          </div>
                        </div>
                      </section>
                      <aside className="h-full lg:col-span-4 col-span-5 mt-5 lg:mt-0">
                        <Map location={hotel.ubicacion} />
                      </aside>
                      <section className="col-span-5 mt-10 mb-5 lg:my-5">
                        <Info
                          titulo={"Descripción del hotel"}
                          descripcion={hotel.descripcion}
                        />
                      </section>
                      <section className="col-span-5 hidden md:flex">
                        <Listado2
                          setHabitacion={setHabitacion}
                          seleccion={"seleccionar"}
                          hotel={hotel}
                          setHotel={setHotel}
                          setOpenModal={setOpenModal}
                          reserva={reserva}
                          habitaciones={hotel.habitaciones}
                        />
                      </section>
                      <section className="col-span-5 md:hidden">
                        <Listado_cajas
                          setHabitacion={setHabitacion}
                          seleccion={"seleccionar"}
                          hotel={hotel}
                          setHotel={setHotel}
                          setOpenModal={setOpenModal}
                          reserva={reserva}
                          habitaciones={hotel.habitaciones}
                        />
                      </section>
                      <section className="col-span-5">
                        <h4 className="font-bold text-lg mb-3 dark:tw-text-white">
                          Imagenes
                        </h4>
                        <Imagenes imagenes={hotel.habitacionImgs} />
                      </section>
                    </article>
                  </div>
                </Modal.Body>
                <Modal.Footer className="bg-white dark:bg-slate-900 flex justify-end">
                  <button
                    className="w-full lg:w-fit p-3 tw-bg-secondary text-white font-semibold rounded-xl shadow"
                    onClick={() => setOpenModal(null)}
                  >
                    Cerrar
                  </button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Resultado;
