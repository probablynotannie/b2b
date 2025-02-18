import { FaUser, FaPassport, FaGlobe } from "react-icons/fa";
function Pasajeros({ pasajeros }) {
  return (
    <div>
      <h2 className="font-semibold dark:text-slate-100 ">
        {pasajeros.length === 1 ? "Pasajero" : "Pasajeros"}
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {pasajeros.map((pasajero, index) => (
          <div
            key={index}
            className="border rounded-xl shadow bg-white border-slate-200 dark:border-slate-700 dark:bg-slate-800 mt-5 flex"
          >
            <div className="w-1/5 tw-bg-secondary rounded-l-lg dark:bg-slate-900 text-3xl text-white flex items-center justify-center h-full">
              <FaUser />
            </div>
            <div className="p-3">
              <h3 className="text-slate-700 dark:text-slate-100 font-semibold">
                {pasajero.nombre} {pasajero.apellido}
              </h3>
              <ul className="dark:text-slate-300">
                <li className="flex items-center text-sm gap-1">
                  <FaPassport className="tw-text-secondary dark:text-slate-400" />
                  {pasajero.pasaporte}
                </li>
                <li className="flex items-center text-sm gap-1">
                  <FaGlobe className="tw-text-secondary dark:text-slate-400" />
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
