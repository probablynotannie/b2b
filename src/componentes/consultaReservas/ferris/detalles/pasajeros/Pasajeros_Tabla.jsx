import Pasajeros_Cajas from "./Pasajeros_Cajas";
function Pasajeros_Tabla({ pasajeros }) {
  return (
    <>
      <div className="tw-block lg:tw-hidden">
        <Pasajeros_Cajas pasajeros={pasajeros} />
      </div>
      <div className="tw-w-full tw-hidden lg:tw-flex tw-overflow-x-auto tw-pb-4">
        <table className="tw-min-w-[700px] tw-w-full tw-text-sm tw-text-left rtl:tw-text-right tw-text-gray-500 dark:tw-text-gray-400">
          <thead className="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400">
            <tr>
              <th className="tw-px-6 tw-py-3">Nombre</th>
              <th className="tw-px-6 tw-py-3">Apellido</th>
              <th className="tw-px-6 tw-py-3">Seco</th>
              <th className="tw-px-6 tw-py-3">Nacionalidad</th>
              <th className="tw-px-6 tw-py-3">Fecha nacimiento</th>
              <th className="tw-px-6 tw-py-3">Documento</th>
            </tr>
          </thead>
          <tbody>
            {pasajeros.map((pasajero, index) => (
              <tr
                key={index}
                className="tw-bg-white tw-border-b dark:tw-bg-gray-800 dark:tw-border-gray-700"
              >
                <th
                  scope="row"
                  className="tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white"
                >
                  {pasajero.nombre}
                </th>
                <td className="tw-px-6 tw-py-4">{pasajero.apellidos}</td>
                <td className="tw-px-6 tw-py-4">{pasajero.sexo?.charAt(0)}</td>
                <td className="tw-px-6 tw-py-4">{pasajero.nacionalidad}</td>
                <td className="tw-px-6 tw-py-4">
                  {pasajero.nacimiento}
                  <span className="tw-ml-1  tw-font-bold tw-text-slate-800">
                    ({pasajero.edad})
                  </span>
                </td>
                <td className="tw-px-6 tw-py-4">
                  <div className="tw-font-medium dark:tw-text-slate-100">
                    {pasajero.tipoDocumento}
                  </div>
                  <div className="tw-text-xs tw-text-slate-400 tw-flex tw-gap-1">
                    {pasajero.documento}
                  </div>
                  <div className="tw-text-xs tw-text-slate-400 tw-flex tw-gap-1">
                    {pasajero.caducidad}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Pasajeros_Tabla;
