import { FaBirthdayCake, FaDoorOpen, FaGlobe, FaUser } from "react-icons/fa";

function Pasajeros_Cajas({ pasajeros }) {
  return (
    <div>
      <div className="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-2 xl:tw-grid-cols-4 tw-gap-6">
        {pasajeros.map((pasajero, index) => (
          <div
            key={index}
            className="tw-flex tw-flex-col tw-gap-2 tw-p-4 tw-rounded-2xl tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-shadow-sm hover:tw-shadow-lg tw-transition-shadow"
          >
            <div className="tw-flex tw-items-center tw-gap-3 tw-border-b tw-border-slate-100 dark:tw-border-slate-700">
              <FaUser className="tw-text-3xl tw-text-secondary dark:tw-text-indigo-400" />
              <div className="tw-flex-1">
                <h4 className="tw-font-semibold tw-text-lg dark:tw-text-white">
                  {pasajero.nombre}
                  {pasajero.apellidos}
                </h4>
                <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-400">
                  Edad: {pasajero.edad}
                </p>
              </div>
            </div>
            <ul className="tw-text-sm tw-space-y-1 tw-text-slate-500 dark:tw-text-slate-300 tw-ml-2">
              <li className="tw-flex tw-items-center tw-font-normal tw-text-xs tw-gap-2">
                <FaGlobe className="tw-text-base dark:tw-text-white" />
                {pasajero.nacionalidad}
              </li>
              <li className="tw-flex tw-items-center tw-font-normal tw-text-xs tw-gap-2">
                <FaBirthdayCake className="tw-text-base dark:tw-text-white" />
                {pasajero.nacimiento}
              </li>
              <li className="tw-flex tw-items-center tw-font-normal tw-text-xs tw-gap-2">
                <span className="tw-font-semibold">
                  {" "}
                  {pasajero.tipoDocumento}:
                </span>
                {pasajero.documento}
              </li>
              <li className="tw-flex tw-items-center tw-font-normal tw-text-xs tw-gap-2">
                <FaDoorOpen className="tw-text-base dark:tw-text-white" />
                Habitación {pasajero.habitacion}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pasajeros_Cajas;
