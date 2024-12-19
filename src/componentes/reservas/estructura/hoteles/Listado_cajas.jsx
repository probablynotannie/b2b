import React, { useState } from "react";
import TipoHabitacion from "./TipoHabitacion";
import { FaBed } from "react-icons/fa";
import { Modal } from "flowbite-react";
import { Link } from "react-router-dom";
function Listado({ reserva, habitaciones }) {
  const [selectedHabitacion, setSelectedHabitacion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (habitacion) => {
    setSelectedHabitacion(habitacion);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-5 mt-12 mb-16 lg:mt-0">
      <TipoHabitacion
        minPrice={Math.min(...habitaciones.map((h) => parseFloat(h.precio)))}
        maxPrice={Math.max(...habitaciones.map((h) => parseFloat(h.precio)))}
      />
      <div className="grid grid-cols-4 gap-5">
        {habitaciones.map((habitacion) => (
          <div
            className="col-span-4 md:col-span-2 lg:col-span-1 relative mt-5 border-2 dark:border-slate-800 bg-slate-700 dark:bg-slate-800 dark:hover:bg-slate-900 hover:bg-slate-800 group transition rounded-lg flex flex-col items-center shadow-xl p-3 pb-10"
            key={habitacion.id}
          >
            <Link to={"/datos"} state={reserva}>
              <button className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-secondary text-white font-semibold border-2 border-white  p-3 px-7 rounded-lg transition group-hover:shadow-xl">
                {habitacion.precio}€
              </button>
            </Link>
            <FaBed className="text-4xl text-white" />
            <h3 className="text-center font-semibold text-white">
              {habitacion.nombre}
            </h3>
            <span className="text-slate-400 text-sm">{habitacion.regimen}</span>

            {habitacion.reembolso === "NO" ? (
              <span className="bg-danger text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded mt-1">
                No reembolsablee
              </span>
            ) : (
              <span className="bg-green-700 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded mt-1">
                Reembolsable
              </span>
            )}

            {habitacion.reembolso === "NO" &&
              habitacion.reembolso_penalizacion && (
                <div className="flex flex-col mt-2">
                  {Array.isArray(habitacion.reembolso_penalizacion) ? (
                    habitacion.reembolso_penalizacion
                      .slice(0, 2)
                      .map((penalizacion, index) => (
                        <span
                          key={index}
                          className="text-danger_text font-semibold text-xs"
                        >
                          {penalizacion}
                        </span>
                      ))
                  ) : (
                    <span className="text-danger_text font-semibold text-xs">
                      {habitacion.reembolso_penalizacion}
                    </span>
                  )}
                  {Array.isArray(habitacion.reembolso_penalizacion) &&
                    habitacion.reembolso_penalizacion.length > 2 && (
                      <button
                        className="text-slate-400 text-xs mt-2"
                        onClick={() => openModal(habitacion)}
                      >
                        Ver más...
                      </button>
                    )}
                </div>
              )}
          </div>
        ))}
      </div>
      <Modal show={isModalOpen} onClose={closeModal}>
        <Modal.Header>Penalizaciones de Reembolso</Modal.Header>
        <Modal.Body>
          <div>
            {Array.isArray(selectedHabitacion?.reembolso_penalizacion) ? (
              selectedHabitacion.reembolso_penalizacion.map(
                (penalizacion, index) => (
                  <div
                    key={index}
                    className="text-danger_text font-semibold text-sm"
                  >
                    {penalizacion}
                  </div>
                )
              )
            ) : (
              <div className="text-danger_text font-semibold text-sm">
                {selectedHabitacion?.reembolso_penalizacion}
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="text-gray-500 bg-gray-200 hover:bg-gray-300 rounded-lg py-2 px-4"
            onClick={closeModal}
          >
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Listado;
