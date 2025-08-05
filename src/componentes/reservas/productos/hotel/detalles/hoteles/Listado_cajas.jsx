import { FaBed } from "react-icons/fa";
import AnadirMasProductos from "../../../../../../helpers/visuales/masProductos/AnadirMasProductos";

function Listado({
  neto,
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
  return (
    <div className="tw-mb-16">
      <div className="tw-grid tw-grid-cols-4 tw-gap-5">
        {habitaciones.map((habitacion) => (
          <div
            className="tw-col-span-4 md:tw-col-span-2 lg:tw-col-span-1 tw-relative tw-border dark:tw-border-slate-800 tw-bg-slate-100 dark:tw-bg-slate-800 dark:hover:tw-bg-slate-900 hover:tw-bg-slate-200 tw-group tw-smooth tw-rounded-lg tw-flex tw-flex-col tw-items-center tw-shadow-xl tw-p-3 tw-pb-10"
            key={habitacion.id}
          >
            <FaBed className="tw-text-4xl dark:tw-text-white tw-text-secondary" />
            <h3 className="tw-text-center tw-font-semibold dark:tw-text-white">
              {habitacion.combinedName
                ? habitacion.combinedName
                : habitacion.Name}
            </h3>
            <span className="tw-text-slate-400 tw-text-sm">
              {habitacion.regimen}
            </span>
            {habitacion.NoReembolsable === true ? (
              <span className="tw-bg-danger tw-text-white tw-text-xs tw-font-medium tw-me-2 tw-px-2.5 tw-py-0.5 tw-rounded tw-mt-1">
                No reembolsablee
              </span>
            ) : (
              <span className="tw-bg-green-700 tw-text-white tw-text-xs tw-font-medium tw-me-2 tw-px-2.5 tw-py-0.5 tw-rounded tw-mt-1">
                Reembolsable
              </span>
            )}
            {habitacion.NoReembolsable === true && (
              <div
                className="tw-text-sm tw-text-danger_text tw-mt-2 tw-font-semibold"
                dangerouslySetInnerHTML={{
                  __html: habitacion.Cancelation,
                }}
              />
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
                {habitacion.Price}€
              </button>
            ) : (
              <button
                onClick={() => {
                  setHabitacionSeleccionada(habitacion);
                  confirmacion(habitacion);
                }}
                className="tw-absolute -tw-bottom-6 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-btn_accesorios tw-bg-slate-500 dark:tw-bg-secondaryDark tw-font-semibold tw-border-2 tw-border-white tw-p-3 tw-px-7 tw-rounded-lg tw-transition group-hover:shadow-xl"
              >
                {neto !== true ? habitacion.Price : habitacion.Pvp}
                {habitacion.Currency === "EUR" ? "€" : habitacion.Currency}
              </button>
            )}
          </div>
        ))}
      </div>

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
