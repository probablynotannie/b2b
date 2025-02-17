import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { FaMapPin } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaChild } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";
import { Carousel } from "flowbite-react";
import { FaDoorOpen } from "react-icons/fa";
import { Modal } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Imagenes from "../../estructura/hoteles/Imgs";

function Resultado({ hoteles }) {
  const reserva = {
    pax: 2,
    pax_ninios: 1,
    habitaciones: 2,
    noches: 7,
  };
  console.log(hoteles[0]);
  const [openModal, setOpenModal] = useState(null);
  const [openInNewTab, setOpenInNewTab] = useState(false);
  return (
    <section className="pb-12">
      <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between tw-shadow-md lg:tw-shadow-none tw-p-3 tw-rounded-xl tw-border-2 lg:tw-border-0 tw-border-slate-200 dark:tw-bg-slate-800 dark:md:tw-bg-inherit dark:md:tw-border-0 dark:md:tw-shadow-none dark:tw-border-slate-600 lg:tw-mt-0">
        <h3 className="text-secondary tw-font-semibold tw-text-lg">
          Resultados ({hoteles.length})
        </h3>
      </div>
      {hoteles.map((hotel, index) => (
        <article
          key={index}
          className="lg:tw-flex tw-flex-row tw-bg-slate-100 dark:tw-bg-slate-800 tw-shadow-xl lg:tw-shadow-lg hover:tw-shadow-xl tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 tw-rounded-xl tw-transition tw-mt-10 tw-relative tw-min-h-[15vh]"
        >
          <div className="tw-w-full tw-h-[25vh] lg:tw-h-auto lg:tw-w-1/3 lg:tw-rounded-l-lg tw-rounded-t-lg tw-overflow-hidden">
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
          <div className="tw-p-5 lg:tw-w-2/3">
            <div className="tw-border-b-2 tw-border-slate-200 dark:tw-border-slate-700 tw-pb-2">
              <div className="tw-flex tw-justify-between tw-w-full">
                <h4 className="text-secondary tw-font-semibold">
                  {hotel.nombre}
                  <span className="tw-text-sm tw-ml-1 tw-text-slate-400 tw-font-normal">
                    - {hotel.regimen}
                  </span>
                </h4>
                <div className="tw-flex text-secondary">
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
                className="tw-px-3 tw-w-full lg:tw-w-fit tw-mr-2 tw-bg-slate-700 dark:tw-bg-slate-600 tw-text-white tw-font-semibold tw-rounded-xl tw-shadow"
                onClick={() => setOpenModal(index)}
              >
                Detalles
              </button>
              <Modal
                size="4xl"
                dismissible
                show={openModal === index}
                onClose={() => setOpenModal(null)}
              >
                <Modal.Header className="tw-bg-white dark:tw-bg-slate-900">
                  {hotel.nombre}
                  <p className="tw-text-sm tw-text-slate-400">
                    {hotel.fecha} - {hotel.fechaSalida}
                  </p>
                </Modal.Header>
                <Modal.Body className="tw-bg-white dark:tw-bg-slate-900">
                  <div className="tw-space-y-6 tw-mt-2">
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
                </Modal.Body>
                <Modal.Footer className="tw-bg-white dark:tw-bg-slate-900 tw-flex tw-justify-end">
                  <button
                    className="tw-p-3 tw-px-5 tw-bg-slate-700 dark:tw-tw-bg-secondary tw-font-bold tw-rounded-xl tw-text-white"
                    onClick={() => setOpenModal(null)}
                  >
                    Cerrar
                  </button>
                </Modal.Footer>
              </Modal>
              <Link to="/hotel" state={hotel}>
                <button className="tw-w-full lg:tw-w-fit tw-p-3 tw-bg-secondary tw-text-white tw-font-semibold tw-rounded-xl tw-shadow">
                  Reservar
                </button>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Resultado;
