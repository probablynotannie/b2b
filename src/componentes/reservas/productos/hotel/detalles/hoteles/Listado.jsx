import { useState } from "react";
import { FaBed } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import AnadirMasProductos from "../../../../../../helpers/visuales/masProductos/AnadirMasProductos";
function Listado({
  neto,
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
  setActiveTab,
  tab,
}) {
  const [expandedPenaltyId, setExpandedPenaltyId] = useState(null);
  const handleTogglePenalties = (id) => {
    setExpandedPenaltyId(expandedPenaltyId === id ? null : id);
  };
  console.log(habitaciones);
  return (
    <div className="tw-space-y-10 tw-w-full">
      <table className="tw-w-full">
        <thead className="tw-bg-slate-700 dark:tw-bg-slate-900">
          <tr>
            <th className="tw-flex tw-items-center tw-text-start tw-py-3 tw-text-white tw-font-semibold tw-pl-4">
              <FaBed className="tw-mr-2 tw-text-xl" /> Tipo habitación
            </th>
            <th className="tw-text-start tw-py-3 tw-text-white tw-font-semibold tw-pl-4">
              Regimen
            </th>
            <th className="tw-text-center tw-py-3 tw-text-white tw-font-semibold tw-pl-4">
              Reembolso
            </th>
            <th className="tw-text-end tw-px-5 tw-py-3 tw-text-white tw-font-semibold tw-pl-4">
              Reservar
            </th>
          </tr>
        </thead>
        <tbody className="dark:tw-bg-slate-800 tw-bg-slate-50">
          {habitaciones.map((habitacion) => (
            <tr
              className="tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700"
              key={habitacion.id}
            >
              <td className="tw-p-3 tw-font-semibold dark:tw-text-secondaryDark">
                {habitacion.combinedName
                  ? habitacion.combinedName
                  : habitacion.Name}
              </td>
              <td className="tw-p-3 tw-text-sm tw-text-slate-500 dark:tw-text-slate-400">
                {habitacion.BoardName}
              </td>
              <td className="tw-p-3">
                {habitacion.NoReembolsable !== "true" ? (
                  <div className="tw-flex tw-flex-col tw-items-center tw-space-x-3">
                    <span className="tw-bg-green-50 dark:tw-bg-green-700 dark:tw-text-white tw-flex tw-items-center tw-text-slate-600 tw-rounded-lg tw-text-sm tw-gap-2 tw-p-2 tw-font-semibold tw-flex-row">
                      <FaCheck className="text-md" />
                      Reembolsable
                    </span>
                    <div
                      className="tw-text-sm tw-text-danger_text tw-mt-2 tw-font-semibold"
                      dangerouslySetInnerHTML={{
                        __html: habitacion.Cancelation,
                      }}
                    />
                  </div>
                ) : (
                  <div className="tw-flex tw-flex-col tw-items-center tw-space-x-3">
                    <span className="tw-bg-red-50 dark:tw-bg-danger dark:tw-text-white tw-flex tw-items-center tw-text-slate-600 tw-rounded-lg tw-text-sm tw-gap-2 tw-p-1 tw-font-semibold tw-flex-row">
                      <RxCross2 className="tw-text-2xl tw-text-red-600 dark:tw-text-red-300" />
                      No Reembolsable
                    </span>
                    {(() => {
                      const dummyPenalties = [
                        "Cancelación gratuita hasta 3 días antes de la llegada.",
                        "Penalización del 50% si se cancela 2 días antes.",
                        "Penalización del 100% si no se presenta (no show).",
                        "No se permite reembolso después del check-in.",
                      ];

                      return (
                        <>
                          {dummyPenalties
                            .slice(0, 2)
                            .map((penalizacion, index) => (
                              <span
                                key={index}
                                className="tw-block tw-text-sm tw-text-danger_text tw-mt-2 tw-font-semibold"
                              >
                                {penalizacion}
                              </span>
                            ))}

                          {expandedPenaltyId === habitacion.id &&
                            dummyPenalties
                              .slice(2)
                              .map((penalizacion, index) => (
                                <span
                                  key={`extra-${index}`}
                                  className="tw-text-sm tw-text-danger_text tw-mt-2 tw-font-semibold"
                                >
                                  {penalizacion}
                                </span>
                              ))}
                          {dummyPenalties.length > 2 && (
                            <button
                              onClick={() =>
                                handleTogglePenalties(habitacion.id)
                              }
                              className="tw-text-sm tw-text-slate-400 tw-mt-2"
                            >
                              {expandedPenaltyId === habitacion.id
                                ? "Ver menos"
                                : "Ver más..."}
                            </button>
                          )}
                        </>
                      );
                    })()}
                  </div>
                )}
              </td>
              <td className="tw-p-3 tw-flex tw-justify-end tw-space-x-2">
                <button className="tw-bg-slate-300 dark:tw-bg-slate-700 tw-btn_accesorios tw-shadow-md hover:tw-shadow-lg">
                  <FaFilePdf />
                </button>
                {seleccion === "seleccionar" ? (
                  <button
                    className="tw-p-3 tw-transition tw-font-semibold tw-min-w-[100px]  tw-btn_accesorios tw-btn_primario tw-shadow-md hover:tw-shadow-lg"
                    onClick={() => {
                      tab && setActiveTab(tab);
                      setHotel({ ...hotel, precio: habitacion.Price });
                      setHabitacion(habitacion);
                      setOpenModal(null);
                    }}
                  >
                    {neto === true ? habitacion.Pvp : habitacion.Price}
                    {habitacion.Currency === "EUR" ? "€" : habitacion.Currency}
                  </button>
                ) : (
                  <div className="tw-flex tw-flex-col">
                    <button
                      onClick={() => {
                        setHabitacionSeleccionada(habitacion);
                        confirmacion(habitacion);
                      }}
                      className={`tw-p-3 tw-flex tw-flex-col tw-transition tw-font-semibold tw-min-w-[100px] tw-btn_accesorios ${
                        neto === true
                          ? "tw-bg-sky-200 tw-text-sky-800 dark:tw-bg-sky-900 dark:tw-text-sky-300"
                          : "tw-btn_primario"
                      } tw-shadow-md hover:tw-shadow-lg`}
                    >
                      {neto === true ? habitacion.Pvp : habitacion.Price}
                      {habitacion.Currency === "EUR"
                        ? "€"
                        : habitacion.Currency}
                    </button>
                    {neto === true && (
                      <div className="tw-text-xs tw-text-center tw-mt-1 dark:tw-text-sky-300 tw-flex tw-flex-col">
                        <span>
                          agencia: {habitacion.Price}
                          {habitacion.Currency === "EUR"
                            ? "€"
                            : habitacion.Currency}
                        </span>
                        <span className="tw-text-sky-800 tw-font-semibold">
                          +
                          {parseFloat(
                            habitacion.Price - habitacion.Pvp
                          ).toFixed(2)}
                          {habitacion.Currency === "EUR"
                            ? "€"
                            : habitacion.Currency}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <AnadirMasProductos
          isOpen={modalMasProductos}
          setModalOpen={setModalMasProductos}
          masProductos={aniadirMas}
          onConfirm={sinProductosAdicionales}
        />
      </table>
    </div>
  );
}
export default Listado;
