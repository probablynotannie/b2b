import { useState } from "react";
import { Modal } from "flowbite-react";
import formatearMinutos from "../../../../scripts/FormatearMinutos";
import Mapa from "./Mapa";
import {
  FaClock,
  FaEuroSign,
  FaSignInAlt,
  FaSignOutAlt,
  FaTrain,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
} from "react-icons/fa";

function Seleccion({ tren, reservar, setTren }) {
  const [openModal, setOpenModal] = useState(null);
  const [expandedSeats, setExpandedSeats] = useState({});

  const toggleSeatClass = (index) => {
    setExpandedSeats((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  function capitalizeFirstLetterOnly(text) {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
  return (
    <article
      className={`tw-border tw-border-slate-200 dark:tw-border-slate-700
        ${
          tren.stops === 0
            ? "tw-border-l-2  tw-border-l-green-500 dark:tw-border-l-green-400"
            : "tw-border-l-2 tw-border-l-blue-500 dark:tw-border-l-blue-500"
        }
        tw-bg-slate-50 dark:tw-bg-slate-900 tw-rounded-xl tw-shadow-md tw-mt-10 tw-p-5 tw-max-w-4xl tw-mx-auto tw-transition tw-duration-300 hover:tw-shadow-lg`}
    >
      <div className="tw-flex tw-justify-between tw-items-start tw-mb-4">
        <div>
          <h3 className="tw-text-xl tw-font-semibold   dark:tw-text-slate-300 tw-flex tw-items-center tw-gap-1">
            {capitalizeFirstLetterOnly(tren.departureStationName)}{" "}
            <FaArrowRight className="tw-text-sm" />
            {capitalizeFirstLetterOnly(tren.arrivalStationName)}
          </h3>
          <p className="tw-text-sm tw-text-gray-600 dark:tw-text-gray-300 tw-mt-1">
            {formatearMinutos(tren.duration)} &bull;{" "}
            {tren.stops === 0
              ? "Directo"
              : `${tren.stops} parada${tren.stops > 1 ? "s" : ""}`}
          </p>
        </div>
        <img
          src={tren.carrier[0].logo}
          alt={`${tren.carrier[0].name} logo`}
          className="tw-h-8  tw-object-contain dark:tw-bg-white tw-rounded-md tw-p-1"
        />
      </div>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-4 tw-mb-6 tw-text-gray-700 dark:tw-text-gray-300">
        <div className="tw-flex tw-items-center tw-gap-2">
          <FaClock className="tw-text-secondary" />
          <span className="tw-font-medium">Duración:</span>{" "}
          {formatearMinutos(tren.duration)}
        </div>
        <div className="tw-flex tw-items-center tw-gap-2">
          <FaTrain className="tw-text-secondary" />
          <span className="tw-font-medium">Paradas:</span> {tren.stops}
        </div>
        <div className="tw-flex tw-items-center tw-gap-2">
          <FaUsers className="tw-text-secondary" />
          <span className="tw-font-medium">Pasajeros:</span>{" "}
          {tren.searchSummary.totalPassengers}
        </div>
        <div className="tw-flex tw-items-center tw-gap-2">
          <FaEuroSign className="tw-text-secondary" />
          <span className="tw-font-medium">Precio:</span>{" "}
          {tren.price.toFixed(2)}€
        </div>
      </div>
      <div className="tw-flex tw-gap-4 tw-flex-wrap tw-border-t-2 tw-border-slate-100 dark:tw-border-slate-800 tw-pt-5">
        <button
          className="tw-bg-slate-600 dark:tw-bg-slate-700 tw-text-white tw-px-5 tw-py-2 tw-rounded-md tw-font-semibold tw-shadow tw-transition"
          onClick={() => setOpenModal(tren.id)}
        >
          Detalles
        </button>

        {reservar && (
          <button
            className="tw-border-2 tw-border-secondary tw-bg-secondary tw-text-white tw-px-5 tw-py-2 tw-rounded-md tw-font-semibold hover:tw-bg-secondary dark:tw-bg-secondaryDark dark:tw-text-white hover:tw-text-white tw-transition"
            onClick={() => setTren(tren)}
          >
            Reservar
          </button>
        )}
      </div>
      <Modal
        show={openModal === tren.id}
        onClose={() => setOpenModal(null)}
        className="tw-rounded-lg tw-bg-slate-950/70"
        dismissible
      >
        <Modal.Header className="dark:tw-bg-slate-900 dark:tw-border-slate-700">
          <span className="tw-flex tw-items-center tw-gap-1 dark:tw-text-slate-200">
            {capitalizeFirstLetterOnly(tren.departureStationName)}{" "}
            <FaArrowRight className="tw-text-sm" />
            {capitalizeFirstLetterOnly(tren.arrivalStationName)}
          </span>
        </Modal.Header>
        <Modal.Body className="tw-bg-white dark:tw-bg-slate-800 tw-p-6 tw-text-gray-900 dark:tw-text-gray-100 scrollbar-hidden tw-overflow-scroll tw-overflow-x-hidden tw-max-h-[74vh]">
          <div className="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-6 tw-mb-8">
            {[
              {
                label: "Duración",
                icon: <FaClock className="tw-text-secondary" />,
                value: formatearMinutos(tren.duration),
              },
              {
                label: "Parada(s)",
                icon: <FaTrain className="tw-text-secondary" />,
                value: tren.stops,
              },
              {
                label: "Pasajeros",
                icon: <FaUsers className="tw-text-secondary" />,
                value: tren.searchSummary.totalPassengers,
              },
              {
                label: "Salida",
                icon: <FaSignOutAlt className="tw-text-secondary" />,
                value: tren.departureTime,
              },
              {
                label: "Llegada",
                icon: <FaSignInAlt className="tw-text-secondary" />,
                value: tren.arrivalTime,
              },
              {
                label: "Precio",
                icon: <FaEuroSign className="tw-text-secondary" />,
                value: `${tren.price.toFixed(2)}€`,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="tw-flex tw-items-center tw-gap-3 dark:tw-bg-slate-900 tw-rounded-md tw-p-3 tw-shadow"
              >
                <div className="tw-text-xl">{item.icon}</div>
                <div>
                  <p className="tw-font-semibold  tw-text-xs">{item.label}</p>
                  <p className="tw-text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <Mapa tren={tren} />
          {tren.clasesDeAsiento ? (
            <section className="tw-mt-8">
              <h3 className="tw-text-2xl tw-font-semibold tw-text-secondary tw-mb-4">
                Clases de Asiento
              </h3>
              {tren.clasesDeAsiento?.map((clase, idx) => {
                const isExpanded = expandedSeats[idx];
                return (
                  <div
                    key={idx}
                    className="tw-mb-4 tw-p-4 tw-rounded-md tw-shadow dark:tw-bg-slate-700"
                  >
                    <button
                      className="tw-w-full tw-flex tw-justify-between tw-items-center tw-font-semibold  dark:tw-text-secondary-slate-200 tw-text-lg tw-select-none"
                      onClick={() => toggleSeatClass(idx)}
                    >
                      <span>
                        {clase.nombre} (+{clase.precioExtra}€)
                      </span>
                      {isExpanded ? (
                        <FaChevronUp className="tw-text-secondary dark:tw-text-slate-100" />
                      ) : (
                        <FaChevronDown className="tw-text-secondary dark:tw-text-slate-100" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="tw-mt-3 tw-text-gray-700 dark:tw-text-gray-300 tw-text-sm">
                        {clase.informacion?.map((info, i) => (
                          <div key={i} className="tw-mb-2">
                            <p className="tw-font-semibold  dark:tw-text-slate-400">
                              {info.titulo}
                            </p>
                            <p>{info.texto}</p>
                          </div>
                        ))}
                        {clase.subclases && (
                          <div className="tw-mt-3 tw-pl-4 tw-border-l-2 tw-border-slate-100 dark:tw-border-slate-700">
                            <h4 className="tw-font-semibold tw-text-secondary tw-mb-2">
                              Subclases:
                            </h4>
                            {clase.subclases.map((sub, si) => (
                              <div key={si} className="tw-mb-3">
                                <p className="tw-font-semibold">
                                  {sub.nombre} (+{sub.precioExtra}€)
                                </p>
                                {sub.informacion?.map((subinfo, subi) => (
                                  <div key={subi} className="tw-mb-1">
                                    <p className="tw-font-semibold  ">
                                      {subinfo.titulo}:
                                    </p>
                                    <p>{subinfo.texto}</p>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </section>
          ) : (
            <div></div>
          )}
        </Modal.Body>

        <Modal.Footer className="dark:tw-bg-slate-900 dark:tw-border-slate-700">
          <button
            className="tw-btn_accesorios tw-btn_primario"
            onClick={() => setOpenModal(null)}
          >
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </article>
  );
}

export default Seleccion;
