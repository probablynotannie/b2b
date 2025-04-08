import { FaCheck, FaTimes } from "react-icons/fa";

function Tabla({ datos, detalles }) {
  return (
    <div className="tw-relative tw-overflow-x-auto tw-shadow-md sm:tw-rounded-lg tw-mt-5">
      <table className="tw-w-full tw-text-sm tw-text-left rtl:tw-text-right tw-text-slate-600 dark:tw-text-slate-300">
        <thead className="tw-text-xs tw-uppercase tw-bg-slate-100 dark:tw-bg-slate-900 dark:tw-text-slate-400">
          <tr>
            <th className="tw-px-6 tw-py-3">Orden</th>
            <th className="tw-px-6 tw-py-3">Localizador</th>
            <th className="tw-px-6 tw-py-3">Confirmación</th>
            <th className="tw-px-6 tw-py-3">Servicio</th>
            <th className="tw-px-6 tw-py-3">Bono</th>
            <th className="tw-px-6 tw-py-3">Profor.</th>
            <th className="tw-py-3">Pago</th>
            <th className="tw-py-3 tw-text-center">Estado</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato) => {
            const estadoColor =
              dato.estado === "cancelada"
                ? "tw-bg-red-500 dark:tw-bg-red-800"
                : dato.estado === "pendiente"
                ? "tw-bg-orange-400 dark:tw-bg-yellow-600"
                : "tw-bg-green-500 dark:tw-bg-green-800";

            return (
              <tr
                onClick={() => detalles(dato)}
                key={dato.id}
                className="tw-cursor-pointer odd:tw-bg-white odd:dark:tw-bg-slate-900 even:tw-bg-slate-50 even:dark:tw-bg-slate-800 tw-border-b dark:tw-border-slate-700 tw-border-slate-200 tw-transition hover:tw-bg-slate-100 dark:hover:tw-bg-slate-700"
              >
                <td className="tw-px-6 tw-py-4">{dato.orden}</td>
                <td className="tw-px-6 tw-py-4 ">{dato.localizador}</td>
                <td className="tw-px-6 tw-py-4">{dato.confirmacion}</td>
                <td className="tw-px-6 tw-py-4">
                  <div className="tw-font-medium dark:tw-text-slate-100">
                    {dato.reserva.recorrido}
                  </div>
                  <div className="tw-text-xs tw-text-slate-400  tw-flex tw-gap-1">
                    {dato.reserva.recogida} → {dato.reserva.devolucion}
                  </div>
                </td>
                <td className="tw-px-6 tw-py-4 tw-text-center tw-text-slate-400">
                  —
                </td>
                <td className="tw-px-6 tw-py-4 tw-text-center tw-text-slate-400">
                  —
                </td>
                <td className="tw-py-4 tw-px-1">
                  {dato.estadoPago === "Si" ? (
                    <FaCheck className="tw-text-green-600 tw-text-lg" />
                  ) : (
                    <FaTimes className="tw-text-red-500 tw-text-lg" />
                  )}
                </td>
                <td
                  className={`tw-text-white tw-font-bold tw-text-center tw-text-xs md:tw-text-sm tw-py-2 ${estadoColor}`}
                >
                  {dato.estado}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
