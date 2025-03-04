import Detalles from "../detalles/Detalles";
import { FaCar, FaPlaneArrival } from "react-icons/fa";
import FormatearFecha from "../../../../../helpers/FormatearFecha";


function Coche({ producto, precio, conductor, extras }) {
  const extraInfo = (
    <div>
      <div className="h-fit gap-3 my-5 white w-fit p-5 rounded-lg">
        <h3 className="font-bold dark:tw-text-secondary">Extras:</h3>
        <ul className="dark:tw-text-slate-300 flex flex-wrap gap-3 ml-2">
          {extras.map((extra, index) => (
            <li
              key={index}
              className="flex justify-between bg-slate-500 p-1 font-bold text-white rounded-lg"
            >
              <span>
                <span className="font-semibold mr-1 dark:tw-text-slate-100">
                  {extra.quantity}x
                </span>
                {extra.id === "GPS" && "GPS"}
                {extra.id === "sillitabebe" && "Sillita bebé"}
                {extra.id === "sillitaninio" && "Sillita niño"}
                {extra.id === "elevador" && "Elevador"}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-fit gap-3 my-5 white w-fit p-5 rounded-lg dark:tw-text-slate-300">
        <h3 className="font-bold dark:tw-text-secondary">Conductor</h3>
        <div className="flex flex-wrap gap-3  border-l-2 border-slate-500 dark:tw-border-secondaryDark pl-4 ml-3">
          <p className="flex items-center gap-1">
            <span className="text-sm">
              {conductor.nombre} {conductor.apellido}
            </span>
          </p>
          {conductor.numVuelo && (
            <p className="flex items-center gap-1">
              <FaPlaneArrival className="text-xl" />
              <span className="text-sm">Núm vuelo: {conductor.numVuelo}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
  return (
    <section className="mt-10 shadow-lg hover:shadow-xl transition duration-300 border dark:bg-slate-800 bg-slate-50 p-5 border-slate-200 dark:tw-border-slate-700  rounded-lg">
      <section className="flex justify-between items-center border-b-2 border-slate-100 dark:tw-border-slate-700 pb-2 mb-5">
        <div>
          <h3 className="text-lg font-bold dark:tw-text-white">
            {producto.nombre}
          </h3>
          <p className="text-slate-500 dark:tw-text-slate-300 flex gap-2 items-center">
            {formatearFecha(producto.recogida.fecha)} -{" "}
            {formatearFecha(producto.devolucion.fecha)}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaCar className="text-xl tw-text-secondary dark:tw-text-secondary" />
          <span className="tw-text-secondary dark:tw-text-secondary font-bold">
            {precio.toFixed(2)}€
          </span>
        </div>
      </section>

      <Detalles coche={producto} extraInfo={extraInfo} />
    </section>
  );
}

export default Coche;
