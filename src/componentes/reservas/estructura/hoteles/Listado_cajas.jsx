import { useState } from "react";
import TipoHabitacion from "./TipoHabitacion";
import { FaBed } from "react-icons/fa";
import { Modal } from "flowbite-react";
import AnadirMasProductos from "../../../../helpers/visuales/masProductos/AnadirMasProductos";

function Listado({
  values,
  setValues,
  minMax,
  setActiveTab,
  tab,
  habitaciones,
  seleccion,
  hotel,
  setHotel,
  setOpenModal,
  setHabitacion,
  setHabitacionSeleccionada,
  modalMasProductos,
  setModalMasProductos,
  confirmacion,
  aniadirMas,
  sinProductosAdicionales,
}) {
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
    <div className="tw-space-y-5 tw-mt-12 tw-mb-16 lg:tw-mt-0">
      <TipoHabitacion values={values} setValues={setValues} minMax={minMax} />
      <div className="tw-grid tw-grid-cols-4 tw-gap-5">
        {habitaciones.map((habitacion) => (
          <div
            className="tw-col-span-4 md:tw-col-span-2 lg:tw-col-span-1 tw-relative tw-mt-5 tw-border-2 dark:tw-border-slate-800 tw-bg-slate-700 dark:tw-bg-slate-800 dark:hover:tw-bg-slate-900 hover:tw-bg-slate-800 tw-group tw-transition tw-rounded-lg tw-flex tw-flex-col tw-items-center tw-shadow-xl tw-p-3 tw-pb-10"
            key={habitacion.id}
          >
            <FaBed className="tw-text-4xl tw-text-white" />
            <h3 className="tw-text-center tw-font-semibold tw-text-white">
              {habitacion.nombre}
            </h3>
            <span className="tw-text-slate-400 tw-text-sm">
              {habitacion.regimen}
            </span>
            {habitacion.reembolso === "NO" ? (
              <span className="tw-bg-danger tw-text-white tw-text-xs tw-font-medium tw-me-2 tw-px-2.5 tw-py-0.5 tw-rounded tw-mt-1">
                No reembolsablee
              </span>
            ) : (
              <span className="tw-bg-green-700 tw-text-white tw-text-xs tw-font-medium tw-me-2 tw-px-2.5 tw-py-0.5 tw-rounded tw-mt-1">
                Reembolsable
              </span>
            )}
            {habitacion.reembolso === "NO" &&
              habitacion.reembolso_penalizacion && (
                <div className="tw-flex tw-flex-col tw-mt-2">
                  {Array.isArray(habitacion.reembolso_penalizacion) ? (
                    habitacion.reembolso_penalizacion
                      .slice(0, 2)
                      .map((penalizacion, index) => (
                        <span
                          key={index}
                          className="tw-text-danger_text tw-font-semibold tw-text-xs"
                        >
                          {penalizacion}
                        </span>
                      ))
                  ) : (
                    <span className="tw-text-danger_text tw-font-semibold tw-text-xs">
                      {habitacion.reembolso_penalizacion}
                    </span>
                  )}
                  {Array.isArray(habitacion.reembolso_penalizacion) &&
                    habitacion.reembolso_penalizacion.length > 2 && (
                      <button
                        className="tw-text-slate-400 tw-text-xs tw-mt-2"
                        onClick={() => openModal(habitacion)}
                      >
                        Ver más...
                      </button>
                    )}
                </div>
              )}
            {seleccion === "seleccionar" ? (
              <button
                className="tw-absolute -tw-bottom-6 tw-left-1/2 tw-transform -tw-translate-x-1/2  tw-btn_accesorios tw-btn_primario tw-font-semibold tw-border-2 tw-border-white tw-p-3 tw-px-7 tw-rounded-lg tw-transition group-hover:shadow-xl"
                onClick={() => {
                  tab && setActiveTab("actividades");
                  setHotel({ ...hotel, precio: habitacion.precio });
                  setHabitacion(habitacion);
                  setOpenModal(null);
                }}
              >
                {habitacion.precio}€
              </button>
            ) : (
              <button
                onClick={() => {
                  setHabitacionSeleccionada(habitacion);
                  confirmacion(habitacion);
                }}
                className="tw-absolute -tw-bottom-6 tw-left-1/2 tw-transform -tw-translate-x-1/2  tw-btn_accesorios tw-btn_primario tw-font-semibold tw-border-2 tw-border-white tw-p-3 tw-px-7 tw-rounded-lg tw-transition group-hover:shadow-xl"
              >
                {habitacion.precio}€
              </button>
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
                    className="tw-text-danger_text tw-font-semibold tw-text-sm"
                  >
                    {penalizacion}
                  </div>
                )
              )
            ) : (
              <div className="tw-text-danger_text tw-font-semibold tw-text-sm">
                {selectedHabitacion?.reembolso_penalizacion}
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="tw-text-gray-500 tw-bg-gray-200 hover:tw-bg-gray-300 tw-rounded-lg tw-py-2 tw-px-4"
            onClick={closeModal}
          >
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
      <AnadirMasProductos
        isOpen={modalMasProductos}
        setModalOpen={setModalMasProductos}
        masProductos={aniadirMas}
        onConfirm={sinProductosAdicionales}
      />
    </div>
  );
}

export default Listado;
