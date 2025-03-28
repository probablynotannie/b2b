import { useState } from "react";
import { Modal } from "flowbite-react";
import formatearMinutos from "../../../../helpers/FormatearMinutos";
import Mapa from "./Mapa";
import {
  FaClock,
  FaEuroSign,
  FaSignInAlt,
  FaSignOutAlt,
  FaTrain,
  FaUsers,
} from "react-icons/fa";
function Seleccion({ tren, reservar, setTren }) {
  const [openModal, setOpenModal] = useState(null);

  return (
    <article className="lg:tw-flex tw-flex-row tw-bg-slate-100 dark:tw-bg-slate-800 tw-shadow-xl lg:tw-shadow-lg hover:tw-shadow-xl tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 tw-rounded-xl tw-transition tw-mt-10 tw-relative tw-min-h-[15vh]">
      <div className="tw-p-5 tw-w-full">
        <div className="tw-w-full tw-relative">
          <div className="tw-flex tw-gap-1 tw-h-fit md:tw-absolute tw-right-0">
            <div
              className={
                tren.stops === 0
                  ? "tw-text-sm tw-bg-green-700 dark:tw-bg-green-900 tw-rounded tw-text-white tw-p-1 "
                  : "tw-text-sm tw-bg-orange-400 dark:tw-bg-orange-600 tw-rounded tw-text-white tw-p-1"
              }
            >
              {tren.stops} parada{tren.stops < 1 && "s"}
            </div>
            <div className="tw-p-1 tw-text-sm tw-text-white tw-bg-red-400 tw-rounded dark:tw-bg-red-800">
              {tren.segments[0].companyName}
            </div>
            <div className="tw-p-1 tw-text-sm tw-text-white tw-bg-indigo-500 tw-rounded dark:tw-bg-indigo-700">
              {tren.price}€
            </div>
          </div>
        </div>
        <div className="tw-pl-2 tw-border-l-2 tw-mt-2 tw-border-slate-400 dark:tw-border-slate-700 dark:tw-text-slate-300">
          <div className="tw-text-sm">{tren.departureStationName}</div>
          <div className="tw-text-sm">{formatearMinutos(tren.duration)} </div>
          <div className="tw-text-sm">{tren.arrivalStationName}</div>
        </div>
        <div className="tw-flex tw-justify-between tw-items-center">
          <div className="tw-flex tw-justify-start tw-mt-3">
            <button
              className="tw-p-3 tw-w-full lg:tw-w-fit tw-btn_oscuro tw-btn_accesorios tw-mr-3"
              onClick={() => setOpenModal(tren.id)}
            >
              Detalles
            </button>
            {reservar === true && (
              <button
                className="tw-w-full lg:tw-w-fit  tw-btn_accesorios tw-btn_primario tw-btn_accesorios-accesorioshover:tw-bg-secondary-dark tw-transition tw-duration-200"
                onClick={() => setTren(tren)}
              >
                Reservar
              </button>
            )}
            <Modal
              dismissible
              show={openModal === tren.id}
              onClose={() => setOpenModal(null)}
            >
              <Modal.Header className="tw-bg-white dark:tw-bg-slate-900">
                <h2 className="text-md tw-lowercase">
                  {tren.departureStationName} - {tren.arrivalStationName}
                </h2>
              </Modal.Header>
              <Modal.Body className="tw-bg-white dark:tw-bg-slate-900 tw-p-4">
                <div className="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-3 tw-mt-2 tw-text-start dark:tw-text-white tw-mb-4">
                  {[
                    {
                      label: "Duración",
                      icono: <FaClock className="tw-text-blue-500" />,
                      value: formatearMinutos(tren.duration),
                    },
                    {
                      label: "Parada(s)",
                      icono: <FaTrain className="tw-text-green-500" />,
                      value: tren.stops,
                    },
                    {
                      label: "Pasajeros",
                      icono: <FaUsers className="tw-text-yellow-500" />,
                      value: tren.searchSummary.totalPassengers,
                    },
                    {
                      label: "Salida",
                      icono: <FaSignOutAlt className="tw-text-danger" />,
                      value: tren.departureTime,
                    },
                    {
                      label: "Llegada",
                      icono: <FaSignInAlt className="tw-text-purple-500" />,
                      value: tren.arrivalTime,
                    },
                    {
                      label: "Precio",
                      icono: <FaEuroSign className="tw-text-indigo-500" />,
                      value: `${tren.price.toFixed(2)}€`,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="tw-justify-center tw-flex tw-items-center tw-gap-2 tw-p-3 tw-bg-white dark:tw-bg-slate-800"
                    >
                      <div className="tw-text-lg">{item.icono}</div>
                      <p className="tw-text-xs tw-font-bold tw-uppercase tw-text-gray-600 dark:tw-text-gray-300">
                        {item.label}: {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <Mapa tren={tren} />
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
          </div>
          <div className="tw-flex tw-items-center tw-justify-center dark:tw-bg-slate-100 tw-p-1 tw-rounded-md">
            <img className="tw-h-5" src={tren.carrier[0].logo} alt="logo" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Seleccion;
