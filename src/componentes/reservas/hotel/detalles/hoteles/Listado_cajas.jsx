import { FaBed } from "react-icons/fa";
import AnadirMasProductos from "../../../../../helpers/visuales/masProductos/AnadirMasProductos";

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
  habitacionSeleccionada,
}) {
  return (
    <div className="tw-mb-16">
      <div className="tw-grid tw-grid-cols-4 tw-gap-9">
        {habitaciones.map((habitacion) => (
          <div
            className={`
            
             ${
               habitacion.Code === habitacionSeleccionada?.Code
                 ? "tw-bg-elegido/50 hover:tw-bg-elegido/70"
                 : " tw-bg-slate-100 dark:tw-bg-slate-800"
             }
            tw-col-span-4 md:tw-col-span-2 lg:tw-col-span-1 tw-relative tw-border dark:tw-border-slate-800 dark:hover:tw-bg-slate-900 hover:tw-bg-slate-200 tw-group tw-smooth tw-rounded-lg tw-flex tw-flex-col tw-items-center tw-shadow-xl tw-p-3 tw-pb-10`}
            key={habitacion.Code}
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
            {habitacion.NoReembolsable === true ||
            habitacion.NoReembolsable === 1 ? (
              <span className="tw-bg-danger tw-text-white tw-text-xs tw-font-medium tw-me-2 tw-px-2.5 tw-py-0.5 tw-rounded tw-mt-1">
                No reembolsable
              </span>
            ) : (
              <span className="tw-bg-green-700 tw-text-white tw-text-xs tw-font-medium tw-me-2 tw-px-2.5 tw-py-0.5 tw-rounded tw-mt-1">
                Reembolsable
              </span>
            )}
            {habitacion.NoReembolsable === true ||
              (habitacion.NoReembolsable === 1 && (
                <div
                  className="tw-text-sm tw-text-danger_text tw-mt-2 tw-font-semibold tw-text-center"
                  dangerouslySetInnerHTML={{
                    __html: habitacion.Cancelation,
                  }}
                />
              ))}
            {seleccion === "seleccionar" ? (
              <button
                className="tw-absolute -tw-bottom-6 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-btn_accesorios tw-btn_primario tw-font-semibold tw-border-2 tw-border-white tw-p-3 tw-px-7 tw-rounded-lg tw-transition group-hover:shadow-xl"
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
                  confirmacion(habitacion, hotel);
                }}
                className={`tw-absolute -tw-bottom-6 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-btn_accesorios ${
                  neto === true
                    ? "tw-bg-sky-200 dark:tw-bg-sky-800 dark:tw-text-sky-300 dark:tw-border-sky-700 tw-text-sky-800 tw-border-sky-300/60"
                    : "tw-bg-secondary dark:tw-bg-secondaryDark tw-border-secondary"
                } tw-font-semibold tw-border-2  tw-p-3 tw-px-7 tw-rounded-lg tw-transition group-hover:shadow-xl`}
              >
                {neto === true ? habitacion.Pvp : habitacion.Price}
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
