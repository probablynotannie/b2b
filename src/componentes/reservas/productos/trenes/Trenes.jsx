import { Modal } from "flowbite-react";
import { useState } from "react";
import Mapa from "./Mapa";
function Resultado({ trenes, setTren, tipo }) {
  const [openModal, setOpenModal] = useState(null);
  function duration(e) {
    let hours = Math.floor(e / 60);
    let minutes = e % 60;
    return `${hours}h ${minutes}min`;
  }
  return (
    <section className="pb-12 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:justify-between shadow-lg lg:shadow-none p-6 rounded-xl border-2 lg:border-0 border-slate-200">
        <h3 className="text-secondary font-semibold text-xl">
          Resultado {tipo} ({trenes.length})
        </h3>
      </div>

      {trenes.map((tren, index) => (
        <article
          key={index}
          className="lg:flex flex-row bg-slate-100 dark:bg-slate-800 shadow-lg lg:shadow-md hover:shadow-xl border-2 border-slate-100 dark:border-slate-800 rounded-xl mt-8 relative transition-all hover:scale-[102%] duration-300"
        >
          <div className="p-6 w-full">
            <div className="w-full relative">
              <div className="flex gap-2 h-fit md:absolute right-0">
                <div
                  className={`text-sm ${
                    tren.stops === 0
                      ? "bg-green-700 dark:bg-green-900"
                      : "bg-orange-400 dark:bg-orange-600"
                  } rounded text-white p-2`}
                >
                  {tren.stops} parada{tren.stops < 1 && "s"}
                </div>
                <div className="p-2 text-sm text-white bg-red-400 rounded dark:bg-red-800">
                  {tren.segments[0].companyName}
                </div>
                <div className="p-2 text-sm text-white bg-indigo-500 rounded dark:bg-indigo-700">
                  {tren.price.toFixed(2)}€
                </div>
              </div>
            </div>

            <div className="pl-4 border-l-2 mt-4 border-slate-400 dark:border-slate-700 dark:text-slate-300">
              <div className="text-sm">{tren.departureStationName}</div>
              <div className="text-sm">{duration(tren.duration)}</div>
              <div className="text-sm">{tren.arrivalStationName}</div>
            </div>

            <div className="flex justify-between items-center mt-5">
              <div className="flex justify-start gap-4">
                <button
                  className="px-4 py-2 lg:px-6 lg:py-3 w-full lg:w-fit bg-slate-700 dark:bg-slate-600 text-white font-semibold rounded-xl shadow hover:bg-slate-600 transition duration-200"
                  onClick={() => setOpenModal(index)}
                >
                  Detalles
                </button>

                <Modal
                  dismissible
                  show={openModal === index}
                  onClose={() => setOpenModal(null)}
                >
                  <Modal.Header className="bg-white dark:bg-slate-900">
                    <h2 className="text-lg text-slate-800 dark:text-white">
                      {tren.departureStationName} - {tren.arrivalStationName}
                    </h2>
                  </Modal.Header>
                  <Modal.Body className="bg-white dark:bg-slate-900">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-start dark:text-white mb-5">
                      <div className="p-3 shadow-md rounded-lg bg-blue-100 dark:bg-slate-800 text-sm text-center">
                        <b>Duracion:</b> {duration(tren.duration)}
                      </div>
                      <div className="p-3 shadow-md rounded-lg bg-blue-100 dark:bg-slate-800 text-sm text-center">
                        <b>Parada(s):</b> {tren.stops}
                      </div>
                      <div className="p-3 shadow-md rounded-lg bg-blue-100 dark:bg-slate-800 text-sm text-center">
                        <b>Pasajeros:</b> {tren.searchSummary.totalPassengers}
                      </div>
                      <div className="p-3 shadow-md rounded-lg bg-blue-100 dark:bg-slate-800 text-sm text-center">
                        <b>Salida:</b> {tren.departureTime}
                      </div>
                      <div className="p-3 shadow-md rounded-lg bg-blue-100 dark:bg-slate-800 text-sm text-center">
                        <b>Llegada:</b> {tren.arrivalTime}
                      </div>
                      <div className="p-3 shadow-md rounded-lg bg-blue-100 dark:bg-slate-800 text-sm text-center">
                        <b>Precio:</b> {tren.price.toFixed(2)}€
                      </div>
                    </div>
                    <Mapa tren={tren} />
                  </Modal.Body>
                  <Modal.Footer className="bg-white dark:bg-slate-900 flex justify-end">
                    <button
                      className="p-3 px-5 bg-slate-700 dark:bg-secondaryDark font-bold rounded-xl text-white"
                      onClick={() => setOpenModal(null)}
                    >
                      Cerrar
                    </button>
                  </Modal.Footer>
                </Modal>
                <button
                  className="w-full lg:w-fit p-3 bg-secondary text-white font-semibold rounded-xl shadow hover:bg-secondary-dark transition duration-200"
                  onClick={() => setTren(tren)}
                >
                  Reservar
                </button>
              </div>
              <div className="flex items-center justify-center dark:bg-slate-100 p-2 rounded-md">
                <img className="h-6" src={tren.carrier[0].logo} alt="logo" />
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default Resultado;
