import { FaCheck, FaTimes } from "react-icons/fa";
import Placeholder from "../placeholder/Tabla";
function Tabla({ datos, detalles, loading }) {
  return (
    <>
      <div className="tw-hidden md:tw-flex tw-relative tw-overflow-x-auto tw-shadow-md sm:tw-rounded-lg tw-mt-5">
        <table className="tw-w-full tw-text-sm tw-text-left rtl:tw-text-right tw-text-slate-600 dark:tw-text-slate-300">
          <thead className="tw-text-xs tw-uppercase tw-bg-slate-100 dark:tw-bg-slate-900 dark:tw-text-slate-400">
            <tr>
              <th className="tw-px-6 tw-py-3">Motor</th>
              <th className="tw-px-6 tw-py-3">Nombre</th>
              <th className="tw-px-6 tw-py-3">Creado</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Placeholder columnas={3} />
            ) : datos.length === 0 ? (
              <tr>
                <td colSpan="8">
                 <div className="tw-bg-red-200 dark:tw-bg-red-950 dark:tw-text-red-300 tw-text-red-800 tw-font-semibold tw-p-4 tw-rounded-lg tw-text-center">
                    No se encontraron resultados.
                  </div>                </td>
              </tr>
            ) : (
              datos.map((dato) => {
                return (
                  <tr
                    onClick={() => detalles(dato)}
                    key={dato.id}
                    className="tw-cursor-pointer odd:tw-bg-white odd:dark:tw-bg-slate-900 even:tw-bg-slate-50 even:dark:tw-bg-slate-800 tw-border-b dark:tw-border-slate-700 tw-border-slate-200 tw-transition hover:tw-bg-slate-100 dark:hover:tw-bg-slate-950"
                  >
                    <td className={`tw-px-6 tw-py-4 tw-font-bold`}>
                      {dato.nombre}
                    </td>
                    <td className="tw-px-6 tw-py-4">{dato.apellidos}</td>
                    <td className="tw-px-6 tw-py-4">{dato.email}</td>
                    <td className="tw-px-6 tw-py-4">{dato.telefono}</td>
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
