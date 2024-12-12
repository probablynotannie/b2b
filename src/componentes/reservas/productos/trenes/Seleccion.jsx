import { useState } from "react";
import { Modal } from "flowbite-react";
import Mapa from "./Mapa";
function Seleccion({ tren }) {
  const [openModal, setOpenModal] = useState(null);
  function duration(e) {
    let hours = Math.floor(e / 60);
    let minutes = e % 60;
    return hours + "h " + minutes + "min";
  }
  return (
    <article className="lg:flex flex-row bg-slate-100 dark:bg-slate-800 shadow-xl lg:shadow-lg hover:shadow-xl border-2 border-slate-100 dark:border-slate-800 rounded-xl transition mt-10 relative min-h-[15vh]">
      <div className="p-5 w-full ">
        <div className=" w-full relative">
          <div className="flex gap-1 h-fit md:absolute  right-0 ">
            <div
              className={
                tren.stops === 0
                  ? " text-sm  bg-green-700 dark:bg-green-900 rounded text-white p-1 "
                  : " text-sm  bg-orange-400 dark:bg-orange-600 rounded text-white p-1"
              }
            >
              {tren.stops} parada{tren.stops < 1 && "s"}
            </div>
            <div className="p-1 text-sm text-white bg-red-400 rounded dark:bg-red-800">
              {tren.segments[0].companyName}
            </div>
            <div className="p-1 text-sm text-white bg-indigo-500 rounded dark:bg-indigo-700">
              {tren.price}€
            </div>
          </div>
        </div>
        <div className="pl-2 border-l-2 mt-2 border-slate-400 dark:border-slate-700 dark:text-slate-300">
          <div className="text-sm">{tren.departureStationName}</div>
          <div className="text-sm">{duration(tren.duration)} </div>
          <div className="text-sm">{tren.arrivalStationName}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-start mt-3">
            <button
              className="p-3 w-full lg:w-fit mr-2 bg-slate-700 dark:bg-slate-600 text-white font-semibold rounded-xl shadow"
              onClick={() => setOpenModal(tren.id)}
            >
              Detalles
            </button>
            <Modal
              dismissible
              show={openModal === tren.id}
              onClose={() => setOpenModal(null)}
            >
              <Modal.Header className="bg-white dark:bg-slate-900">
                <h2 className="text-md lowercase ">
                  {tren.departureStationName} - {tren.arrivalStationName}
                </h2>
              </Modal.Header>
              <Modal.Body className="bg-white dark:bg-slate-900">
                <div className="grid grid-cols-3 gap-3 mt-3 text-start dark:text-white mb-5">
                  <div className="p-3 shadow-md rounded-lg bg-blue-100 dark:text-slate-100 dark:bg-slate-800 text-sm text-center">
                    <b>Duracion:</b> {duration(tren.duration)}
                  </div>
                  <div className="p-3 shadow-md rounded-lg bg-blue-100 dark:text-slate-100 dark:bg-slate-800 text-sm text-center">
                    <b>Parada(s):</b> {tren.stops}
                  </div>
                  <div className="p-3 shadow-md rounded-lg bg-blue-100 dark:text-slate-100 dark:bg-slate-800 text-sm text-center">
                    <b>Pasajeros:</b> {tren.searchSummary.totalPassengers}
                  </div>
                  <div className="p-3 shadow-md rounded-lg bg-blue-100 dark:text-slate-100 dark:bg-slate-800 text-sm text-center">
                    <b>Salida:</b> {tren.departureTime}
                  </div>
                  <div className="p-3 shadow-md rounded-lg bg-blue-100 dark:text-slate-100 dark:bg-slate-800 text-sm text-center">
                    <b>llegada:</b> {tren.arrivalTime}
                  </div>
                  <div className="p-3 shadow-md rounded-lg bg-blue-100 dark:text-slate-100 dark:bg-slate-800 text-sm text-center">
                    <b>Precio:</b> {tren.price}€
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
          </div>
          <div className="flex items-center justify-center dark:bg-slate-100 p-1 rounded-md">
            <img className="h-5" src={tren.carrier[0].logo} alt="logo" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Seleccion;
