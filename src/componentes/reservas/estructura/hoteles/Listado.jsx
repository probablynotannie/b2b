import { useState } from "react";
import TipoHabitacion from "./TipoHabitacion";
import { FaBed } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import AnadirMasProductos from "../../../../helpers/visuales/masProductos/AnadirMasProductos";

function Listado({
  values,
  setValues,
  minMax,
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
  sinProductosAdicionales
}) {
 
  const [expandedPenaltyId, setExpandedPenaltyId] = useState(null);
  const handleTogglePenalties = (id) => {
    setExpandedPenaltyId(expandedPenaltyId === id ? null : id);
  };
  return (
    <div className="tw-space-y-10 tw-w-full">
      <TipoHabitacion values={values} setValues={setValues} minMax={minMax} />
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
        <tbody className="dark:tw-bg-slate-800">
          {habitaciones.map((habitacion) => (
            <tr
              className="tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700"
              key={habitacion.id}
            >
              <td className="tw-p-3 tw-font-semibold dark:tw-text-secondaryDark">
                {habitacion.nombre}
              </td>
              <td className="tw-p-3 tw-text-sm tw-text-slate-500 dark:tw-text-slate-400">
                {habitacion.regimen}
              </td>
              <td className="tw-p-3">
                {habitacion.reembolso === "SI" ? (
                  <div className="tw-flex tw-flex-col tw-items-center tw-space-x-3">
                    <span className="tw-bg-green-50 dark:tw-bg-green-700 dark:tw-text-white tw-flex tw-items-center tw-text-slate-600 tw-rounded-lg tw-text-sm tw-gap-2 tw-p-2 tw-font-semibold tw-flex-row">
                      <FaCheck className="text-md" />
                      Reembolsable
                    </span>
                    <span className="tw-text-sm tw-text-danger_text tw-mt-2 tw-font-semibold">
                      {habitacion.reembolso_penalizacion}
                    </span>
                  </div>
                ) : (
                  <div className="tw-flex tw-flex-col tw-items-center tw-space-x-3">
                    <span className="tw-bg-red-50 dark:tw-bg-danger dark:tw-text-white tw-flex tw-items-center tw-text-slate-600 tw-rounded-lg tw-text-sm tw-gap-2 tw-p-1 tw-font-semibold tw-flex-row">
                      <RxCross2 className="tw-text-2xl tw-text-red-600 dark:tw-text-red-300" />
                      No Reembolsable
                    </span>
                    {Array.isArray(habitacion.reembolso_penalizacion) ? (
                      <>
                        {habitacion.reembolso_penalizacion
                          .slice(0, 2)
                          .map((penalizacion, index) => (
                            <span
                              key={index}
                              className="tw-text-sm tw-text-danger_text tw-mt-2 tw-font-semibold"
                            >
                              {penalizacion}
                            </span>
                          ))}
                        {expandedPenaltyId === habitacion.id &&
                          habitacion.reembolso_penalizacion
                            .slice(2)
                            .map((penalizacion, index) => (
                              <span
                                key={index}
                                className="tw-text-sm tw-text-danger_text tw-mt-2 tw-font-semibold"
                              >
                                {penalizacion}
                              </span>
                            ))}
                        {habitacion.reembolso_penalizacion.length > 2 && (
                          <button
                            onClick={() => handleTogglePenalties(habitacion.id)}
                            className="tw-text-sm tw-text-slate-400 tw-mt-2"
                          >
                            {expandedPenaltyId === habitacion.id
                              ? "Ver menos"
                              : "Ver más..."}
                          </button>
                        )}
                      </>
                    ) : (
                      <span className="tw-text-sm tw-text-danger_text tw-mt-2 tw-font-semibold">
                        {habitacion.reembolso_penalizacion}
                      </span>
                    )}
                  </div>
                )}
              </td>
              <td className="tw-p-3 tw-flex tw-justify-end tw-space-x-2">
                <button className="tw-btn_muted dark:tw-btn_muted_dark tw-btn_accesorios tw-shadow-md hover:tw-shadow-lg">
                  <FaFilePdf />
                </button>
                {seleccion === "seleccionar" ? (
                  <button
                    className="tw-p-3 tw-transition tw-font-semibold tw-min-w-[100px]  tw-btn_accesorios tw-btn_primario tw-shadow-md hover:tw-shadow-lg"
                    onClick={() => {
                      setHotel({ ...hotel, precio: habitacion.precio });
                      setHabitacion(habitacion);
                      setOpenModal(null);
                    }}
                  >
                    {habitacion.precio}€
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setHabitacionSeleccionada(habitacion);
                        confirmacion(habitacion);
                      }}
                      className="tw-p-3 tw-transition tw-font-semibold tw-min-w-[100px]  tw-btn_accesorios tw-btn_primario tw-shadow-md hover:tw-shadow-lg"
                    >
                      {habitacion.precio.toFixed(2)}€
                    </button>
                  </>
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
