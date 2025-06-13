import { FaCheck, FaFilePdf, FaTimes } from "react-icons/fa";
import Placeholder from "../../_skeleton_placeholders/Tabla";
import Cajas from "./Cajas";
function Tabla({ datos, detalles, loading }) {
  return (
    <>
      <div className="tw-block md:tw-hidden">
        <Cajas datos={datos} detalles={detalles} loading={loading} />
      </div>
      <div className="tw-hidden md:tw-flex tw-relative tw-overflow-x-auto tw-shadow-md sm:tw-rounded-lg tw-mt-5">
        <table className="tw-w-full tw-text-sm tw-text-left rtl:tw-text-right tw-text-slate-600 dark:tw-text-slate-300">
          <thead className="tw-text-xs tw-uppercase tw-bg-slate-100 dark:tw-bg-slate-900 dark:tw-text-slate-400">
            <tr>
              <th className="tw-px-6 tw-py-3">Orden</th>
              <th className="tw-px-6 tw-py-3">Localizador</th>
              <th className="tw-px-6 tw-py-3">Confirmación</th>
              <th className="tw-px-6 tw-py-3">Servicio</th>
              <th className="tw-px-6 tw-py-3">Proveedor</th>
              <th className="tw-px-6 tw-py-3">Bono</th>
              <th className="tw-py-3">Pago</th>
              <th className="tw-py-3 tw-text-center">Estado</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Placeholder columnas={8} />
            ) : datos.length === 0 ? (
              <tr>
                <td colSpan="8">
                 <div className="tw-bg-red-200 dark:tw-bg-red-950 dark:tw-text-red-300 tw-text-red-800 tw-font-semibold tw-p-4 tw-rounded-lg tw-text-center">
                    No se encontraron resultados.
                  </div>                </td>
              </tr>
            ) : (
              datos.map((dato) => {
                const colorBorde =
                  dato.estado === 1
                    ? "tw-border-green-500"
                    : dato.estado === 0
                    ? "tw-border-red-500"
                    : "tw-border-slate-500";
                const colorTexto =
                  dato.estado === 1
                    ? "tw-text-green-500 dark:tw-text-green-400"
                    : dato.estado === 0
                    ? "tw-text-red-400"
                    : "";
                return (
                  <tr
                    onClick={() => detalles(dato)}
                    key={dato.id}
                    className="tw-cursor-pointer odd:tw-bg-white odd:dark:tw-bg-slate-900 even:tw-bg-slate-50 even:dark:tw-bg-slate-800 tw-border-b dark:tw-border-slate-700 tw-border-slate-200 tw-transition hover:tw-bg-slate-100 dark:hover:tw-bg-slate-950"
                  >
                    <td className={`tw-px-6 tw-py-4 tw-font-bold`}>
                      {dato.orden}
                    </td>
                    <td className="tw-px-6 tw-py-4">{dato.localizador}</td>
                    <td className="tw-px-6 tw-py-4">{dato.confirmacion}</td>
                    <td className="tw-px-6 tw-py-4">
                      <div className="tw-font-medium dark:tw-text-slate-100">
                        {dato.reserva.recorrido}
                      </div>
                      <div className="tw-text-xs tw-text-slate-400 tw-flex tw-gap-1">
                        {dato.reserva.entrada}
                      </div>
                    </td>
                    <td className="tw-px-6 tw-py-4 tw-text-slate-400">
                      {dato.proveedores}
                    </td>
                    <td className="tw-px-6 tw-py-4 tw-text-slate-400 hover:tw-text-secondary tw-smooth">
                      {dato.bono === 1 && <FaFilePdf className="tw-text-xl" />}
                    </td>
                    <td className="tw-py-4 tw-px-1">
                      {dato.estadoPago === 1 ? (
                        <FaCheck className="tw-text-green-600 tw-text-lg" />
                      ) : dato.estadoPago === 0 ? (
                        <FaTimes className="tw-text-red-500 tw-text-lg" />
                      ) : (
                        "Sin datos"
                      )}
                    </td>
                    <td
                      className={`tw-font-bold tw-text-center tw-text-xs md:tw-text-sm tw-py-2 tw-px-2 tw-border-r-2 ${colorBorde} ${colorTexto}`}
                    >
                      {dato.estado === 1
                        ? "Disponible"
                        : dato.estado === 0
                        ? "Cancelada"
                        : "Sin datos"}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tabla;
