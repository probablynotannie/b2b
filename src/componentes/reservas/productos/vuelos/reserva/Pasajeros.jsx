import { FaUser, FaPassport, FaGlobe } from "react-icons/fa";
function Pasajeros({ pasajeros }) {
  return (
    <div>
      <h2 className="tw-font-semibold dark:tw-text-slate-100">
        {pasajeros.length === 1 ? "Pasajero" : "Pasajeros"}
      </h2>
      <div className="tw-grid md:tw-grid-cols-2 tw-gap-10">
        {pasajeros.map((pasajero, index) => (
          <div
            key={index}
            className="tw-border tw-rounded-lg tw-shadow tw-bg-white tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-mt-5 tw-flex"
          >
            <div className="tw-w-1/5 tw-bg-secondary tw-rounded-l-lg dark:tw-bg-slate-900 tw-text-3xl tw-text-white tw-flex tw-items-center tw-justify-center tw-h-full">
              <FaUser />
            </div>
            <div className="tw-p-3">
              <h3 className="tw-text-slate-700 dark:tw-text-slate-100 tw-font-semibold">
                {pasajero.nombre} {pasajero.apellido}
              </h3>
              <ul className="dark:tw-text-slate-300">
                <li className="tw-flex tw-items-center tw-text-sm tw-gap-1">
                  <FaPassport className="tw-text-secondary dark:tw-text-slate-400" />
                  {pasajero.pasaporte}
                </li>
                <li className="tw-flex tw-items-center tw-text-sm tw-gap-1">
                  <FaGlobe className="tw-text-secondary dark:tw-text-slate-400" />
                  {pasajero.nacionalidad}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Pasajeros;
