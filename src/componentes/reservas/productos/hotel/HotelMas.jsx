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
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  return (
    <section className="tw-pb-12">
      <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between tw-p-3 tw-rounded-xl lg:tw-mt-0">
        <h3 className="tw-text-secondary tw-font-semibold tw-text-lg">
          Resultados ({hoteles.length})
        </h3>
        <div className="tw-flex tw-flex-col tw-gap-5 md:tw-flex-row md:tw-justify-between">
          <label className="tw-inline-flex tw-items-center tw-cursor-pointer">
            <input
              type="checkbox"
              className="tw-sr-only tw-peer"
              checked={openInNewTab}
              onChange={(e) => setOpenInNewTab(e.target.checked)}
            />
            <div className="tw-relative tw-w-11 tw-h-6 tw-bg-gray-200 dark:tw-bg-slate-800 dark:md:tw-bg-slate-800 peer-focus:outline-none peer-focus:ring-4 tw-rounded-full tw-peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-start-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all peer-checked:tw-bg-secondary"></div>
            <span className="tw-ms-3 tw-text-sm tw-font-medium tw-text-slate-500 dark:tw-text-slate-400">
              Abrir enlace pestaña nueva
            </span>
          </label>
        </div>
      </div>
      {hoteles.map((hotel, index) => (
        <>
          <article
            key={index}
            className={`lg:tw-flex tw-flex-row tw-transition tw-mt-10 tw-relative tw-min-h-[15vh] tw-z-0 tw-rounded-xl ${
              selectedHotel?.id === hotel.id
                ? "tw-bg-elegido dark:tw-bg-slate-900 tw-border-secondary"
                : "tw-bg-slate-100 dark:tw-bg-slate-800 tw-border-slate-100 dark:tw-border-slate-800"
            } tw-shadow-xl lg:tw-shadow-lg hover:tw-shadow-xl tw-border-2`}
          >
            <div className="tw-w-full tw-h-[25vh] lg:tw-h-auto lg:tw-w-1/3 lg:tw-rounded-l-lg tw-rounded-t-lg tw-overflow-hidden">
              <Carousel slide={false} indicators={true}>
                {hotel.fotos.map((foto, idx) => (
                  <img
                    key={idx}
                    src={foto}
                    alt={`Imagen ${idx + 1} de ${hotel.nombre}`}
                    className="tw-h-full tw-w-full tw-object-cover"
                  />
                ))}
              </Carousel>
            </div>
            <div className="tw-p-5 lg:tw-w-2/3">
              <div className="tw-border-b-2 tw-border-slate-200 dark:tw-border-slate-700 tw-pb-2">
                <div className="tw-flex tw-justify-between tw-w-full">
                  <h4 className="tw-text-secondary tw-font-semibold">
                    {hotel.nombre}
                    <span className="tw-text-sm tw-ml-1 tw-text-slate-400 tw-font-normal">
                      - {hotel.regimen}
                    </span>
                  </h4>
                  <div className="tw-flex tw-text-secondary">
                    {[...Array(5)].map((_, i) =>
                      i < hotel.estrellas ? (
                        <IoMdStar key={i} className="tw-text-lg" />
                      ) : (
                        <IoMdStarOutline key={i} className="tw-text-lg" />
                      )
                    )}
                  </div>
                </div>
                <span className="tw-text-slate-400 dark:tw-text-slate-400 tw-text-sm tw-flex tw-items-center tw-mb-2">
                  <FaMapPin className="tw-text-slate-600 dark:tw-text-slate-500 tw-mr-2" />
                  {hotel.direccion}
                </span>
                <div className="tw-flex tw-flex-wrap tw-gap-2 tw-justify-between tw-mt-2 tw-text-slate-900 dark:tw-text-slate-400 tw-font-semibold tw-text-sm">
                  <span className="tw-flex tw-items-center">
                    <FaPerson className="tw-text-lg" /> {reserva.pax} adulto
                    {reserva.pax !== 1 && "s"}
                  </span>
                  <span className="tw-flex tw-items-center">
                    <FaChild className="tw-text-lg" /> {reserva.pax_ninios} niño
                  </span>
                  <span className="tw-flex tw-items-center">
                    <FaDoorOpen className="tw-text-lg tw-mr-1" />{" "}
                    {reserva.habitaciones}
                    Habitación/es
                  </span>
                  <span className="tw-flex tw-items-center">
                    <MdModeNight className="tw-text-lg" />
                    {reserva.noches} noches
                  </span>
                </div>
              </div>
              <p className="lg:tw-text-slate-600 tw-mt-2 dark:tw-text-slate-400 tw-text-sm tw-text-slate-500 tw-line-clamp-2">
                {hotel.descripcion}
              </p>
              <div className="tw-flex tw-justify-end tw-mt-3">
                <button
                  className="tw-w-full lg:tw-w-fit tw-p-3 tw-bg-secondary tw-text-white tw-font-semibold tw-rounded-xl tw-shadow"
                  onClick={() => setOpenModal(index)}
                >
                  Detalles
                </button>
              </div>
            </div>
          </article>
          <div
            className={`${
              openModal === index
                ? "tw-fixed tw-inset-0 tw-z-50 tw-bg-black  tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center"
                : "tw-hidden"
            }`}
          >
            <div
              className={`${
                openModal === index
                  ? "tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center"
                  : "tw-hidden"
              }`}
            >
              <div className=" tw-w-[80vw] tw-max-h-[80vh] lg:tw-w-7/12 tw-bg-white dark:tw-bg-slate-900 tw-rounded-xl tw-shadow-xl tw-overflow-y-auto">
                <div className="tw-text-2xl tw-font-bold tw-p-5 tw-bg-slate-800 tw-text-white">
                  {hotel.nombre}
                </div>
                <div className="tw-container">
                  <article className="tw-grid tw-grid-cols-5 lg:tw-gap-10 tw-my-5 tw-mt-10">
                    <section className="tw-col-span-5 lg:tw-col-span-1 tw-flex tw-flex-col tw-justify-between tw-border-2 tw-border-gray-200 dark:tw-border-slate-800 tw-rounded-xl tw-p-3 tw-text-slate-700 tw-bg-slate-500 dark:tw-bg-slate-800 tw-shadow-xl">
                      <h4 className="tw-p-3 tw-font-bold text-cen tw-rounded-t-xl tw-text-secondary">
                        Resumen
                      </h4>
                      <div className="tw-flex tw-justify-between tw-pb-2 tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700">
                        <div className="tw-flex tw-items-center tw-space-x-1 tw-text-sm tw-font-semibold dark:tw-text-slate-100">
                          <FaPerson className="tw-text-xl tw-text-secondary" />
                          <span className="tw-text-white">{hotel.pax}</span>
                          <span className="tw-text-white">
                            adulto{hotel.pax !== 1 && "s"}
                          </span>
                        </div>
                        {hotel.pax_ninios > 0 && (
                          <div className="tw-flex tw-items-center tw-space-x-1 tw-text-sm tw-font-semibold dark:tw-text-slate-100">
                            <FaChild className="tw-text-lg tw-text-secondary" />
                            <span className="tw-text-white">
                              {hotel.pax_ninios} niño
                              {hotel.pax_ninios > 1 && "s"}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-slateo-700 tw-mx-2 tw-mt-3 tw-text-sm">
                        <span className="tw-font-semibold dark:tw-text-slate-400 tw-text-white">
                          Entrada
                        </span>
                        <div className="tw-relative">
                          <input
                            className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
                            type="text"
                            disabled
                            value={hotel.fecha}
                          />
                          <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                            <FaRegCalendarAlt />
                          </div>
                        </div>
                        <span className="tw-block tw-mt-2 tw-font-semibold tw-text-white dark:tw-text-slate-400">
                          Salida
                        </span>
                        <div className="tw-relative">
                          <input
                            className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
                            type="text"
                            disabled
                            value={hotel.fechaSalida}
                          />
                          <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                            <FaRegCalendarAlt />
                          </div>
                        </div>
                      </div>
                    </section>
                    <aside className="tw-h-full lg:tw-col-span-4 tw-col-span-5 tw-mt-5 lg:tw-mt-0">
                      <Map location={hotel.ubicacion} />
                    </aside>
                    <section className="tw-col-span-5 tw-mt-10 tw-mb-5 lg:tw-my-5">
                      <Info
                        titulo={"Descripción del hotel"}
                        descripcion={hotel.descripcion}
                      />
                    </section>
                    <section className="tw-col-span-5 tw-hidden md:tw-flex">
                      <Listado2
                        values={values}
                        setValues={setValues}
                        minMax={minMax}
                        setHabitacion={setHabitacion}
                        seleccion={"seleccionar"}
                        hotel={hotel}
                        setHotel={setHotel}
                        setOpenModal={setOpenModal}
                        reserva={reserva}
                        habitaciones={hotel.habitaciones}
                      />
                    </section>
                    <section className="tw-col-span-5 md:tw-hidden">
                      <Listado_cajas
                        values={values}
                        setValues={setValues}
                        minMax={minMax}
                        setHabitacion={setHabitacion}
                        seleccion={"seleccionar"}
                        hotel={hotel}
                        setHotel={setHotel}
                        setOpenModal={setOpenModal}
                        reserva={reserva}
                        habitaciones={hotel.habitaciones}
                      />
                    </section>
                    <section className="tw-col-span-5">
                      <h4 className="tw-font-bold tw-text-lg tw-mb-3 dark:tw-text-white">
                        Imagenes
                      </h4>
                      <Imagenes imagenes={hotel.habitacionImgs} />
                    </section>
                  </article>
                </div>
                <div className="tw-bg-white dark:tw-bg-slate-900 tw-flex tw-justify-end tw-p-4">
                  <button
                    className="tw-w-full lg:tw-w-fit tw-p-3 tw-bg-secondary tw-text-white tw-font-semibold tw-rounded-xl tw-shadow"
                    onClick={() => setOpenModal(null)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </section>
  );
}

export default Resultado;
