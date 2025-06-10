import { FaArrowRight, FaDoorOpen, FaHotel, FaMapPin } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";
import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Imagenes from "../../estructura/hoteles/Imgs";
import Estrellas from "../../../../helpers/visuales/Estrellas";
function Resultado({ hoteles }) {
  const reserva = {
    pax: 2,
    pax_ninios: 1,
    habitaciones: 2,
    noches: 7,
  };
  const [expandedHotel, setExpandedHotel] = useState(null);
  const [openModal, setOpenModal] = useState(null);
  useEffect(() => {
    if (openModal !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);
  return (
    <section className="tw-pb-12">
      {hoteles.map((hotel, index) => (
        <>
          <article
            key={index}
            className="md:tw-flex tw-flex-row tw-bg-slate-100 dark:tw-bg-slate-800 tw-shadow-xl lg:tw-shadow-lg hover:tw-shadow-xl tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 tw-rounded-xl tw-transition tw-mt-10 tw-relative tw-min-h-[15vh]"
          >
            <div className="tw-w-full tw-min-h-[25vh] lg:tw-h-auto lg:tw-w-1/3 lg:tw-rounded-l-lg tw-rounded-t-lg tw-overflow-hidden">
              <Carousel slide={false} indicators={true}>
                {hotel.fotos.map((foto, idx) => (
                  <img
                    key={idx}
                    src={foto}
                    alt={`Imagen ${idx + 1} de ${hotel.nombre}`}
                    className="h-full tw-bg-t w-full object-cover"
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
                  <Estrellas estrellas={hotel.estrellas} />
                </div>
                <span className="tw-text-slate-400 dark:tw-text-slate-400 tw-text-sm tw-flex tw-items-center tw-mb-2">
                  <FaMapPin className="tw-text-slate-600 dark:tw-text-slate-500 tw-mr-2" />
                  {hotel.direccion}
                </span>
                <div className="tw-flex tw-flex-wrap tw-gap-2 tw-justify-between tw-mt-2 tw-text-slate-900 dark:tw-text-slate-400 tw-font-semibold tw-text-sm">
                  <span className="tw-flex tw-items-center tw-gap-1">
                    <FaHotel className="tw-text-lg" /> {hotel.regimen}
                  </span>
                  <span className="tw-flex tw-items-center">
                    <FaPerson className="tw-text-lg" /> {reserva.pax} adulto
                    {reserva.pax !== 1 && "s"}
                  </span>
                  <span className="tw-flex tw-items-center">
                    <FaChild className="tw-text-lg" /> {reserva.pax_ninios} niño
                  </span>
                  <span className="tw-flex tw-items-center">
                    <FaDoorOpen className="tw-text-lg tw-mr-1" />{" "}
                    {reserva.habitaciones} Habitación/es
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
              <div className="tw-grid tw-grid-cols-2 md:tw-flex tw-justify-end  tw-mt-3 tw-gap-3">
                <button
                  className="tw-bg-slate-400 tw-btn_accesorios"
                  onClick={() =>
                    setExpandedHotel(expandedHotel === index ? null : index)
                  }
                >
                  {expandedHotel === index ? "Ocultar precios" : "Más precios"}
                </button>
                <button
                  className="tw-w-full lg:tw-w-fit tw-btn_oscuro tw-btn_accesorios"
                  onClick={() => setOpenModal(index)}
                >
                  Detalles
                </button>
                {openModal === index && (
                  <div className="fixed inset-0 tw-bg-black tw-bg-opacity-65 z-50 flex items-center justify-center">
                    <div className="tw-bg-white dark:tw-bg-slate-900 tw-border-2 tw-border-secondary tw-rounded-xl tw-shadow-xl tw-w-full tw-max-w-4xl tw-max-h-[90vh] tw-overflow-hidden">
                      {/* Inner scrollable content */}
                      <div className="tw-overflow-y-auto tw-max-h-[90vh]">
                        <div className="tw-border-b tw-border-slate-200 dark:tw-border-slate-700 tw-p-5 tw-flex tw-justify-between tw-items-center">
                          <div>
                            <h4 className="tw-text-secondary tw-font-semibold tw-text-xl">
                              {hotel.nombre}
                            </h4>
                            <p className="tw-text-sm tw-text-slate-400">
                              {hotel.fecha} - {hotel.fechaSalida}
                            </p>
                          </div>
                          <button
                            onClick={() => setOpenModal(false)}
                            className="tw-text-xl tw-text-slate-700 dark:tw-text-white"
                          >
                            &times;
                          </button>
                        </div>

                        <div className="tw-p-5">
                          <div className="tw-space-y-6">
                            <p className="tw-leading-relaxed tw-text-slate-500 dark:tw-text-slate-400">
                              {hotel.descripcion}
                            </p>
                            <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-400">
                              <span className="tw-font-semibold">
                                Precio por noche:
                              </span>{" "}
                              ${hotel.precio}
                            </p>
                            <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-400">
                              <span className="tw-font-semibold">Extras:</span>{" "}
                              {hotel.extras.join(", ")}
                            </p>
                            <Imagenes imagenes={hotel.habitacionImgs} />
                          </div>
                        </div>

                        <div className="tw-border-t tw-border-slate-200 dark:tw-border-slate-700 tw-p-5 tw-flex tw-justify-end">
                          <button
                            className="tw-p-3 tw-px-5 tw-bg-slate-700 dark:tw-bg-secondaryDark tw-font-bold tw-rounded-xl tw-text-white"
                            onClick={() => setOpenModal(null)}
                          >
                            Cerrar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <Link className="tw-col-span-2" to="/hotel" state={hotel}>
                  <button className="tw-w-full lg:tw-w-fit tw-p-3 tw-px-8 tw-btn_primario tw-btn_accesorios">
                    Desde{" "}
                    {Math.min(
                      ...hotel.habitaciones.map((h) => parseFloat(h.precio))
                    )}
                    €
                  </button>
                </Link>
              </div>
            </div>
          </article>
          {expandedHotel === index && (
            <div className="tw-relative tw-bg-slate-100 tw-rounded-lg tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-p-3 tw-mt-4 tw-mb-6 tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-3">
              {hotel.habitaciones
                .sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio))
                .slice(0, 12)
                .map((habitacion, index) => (
                  <div
                    key={index}
                    className="tw-cursor-pointer tw-flex tw-flex-col tw-justify-between tw-bg-white dark:tw-bg-slate-700 tw-rounded-lg tw-shadow-sm tw-p-3 tw-text-sm tw-border tw-border-slate-200 dark:tw-border-slate-600 hover:tw-shadow-lg tw-smooth dark:hover:tw-bg-slate-800 hover:tw-border-secondary"
                  >
                    <div>
                      <p className="tw-font-medium tw-text-slate-800 dark:tw-text-white tw-truncate tw-flex tw-gap-1">
                        <FaArrowRight className="tw-text-md tw-mr-1" />{" "}
                        {habitacion.nombre}
                      </p>
                      <p className="tw-text-xs tw-text-slate-500 dark:tw-text-slate-400 tw-mt-1">
                        {habitacion.regimen}
                      </p>
                    </div>
                    <div className="tw-flex tw-items-center tw-justify-between tw-mt-2">
                      <span className="tw-font-semibold tw-text-slate-700 dark:tw-text-white">
                        {parseFloat(habitacion.precio).toFixed(2)} €
                      </span>
                      <button className="tw-text-xs tw-font-medium tw-text-secondary hover:tw-underline">
                        Seleccionar
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </>
      ))}
    </section>
  );
}

export default Resultado;
