import Detalles from "../detalles/contenidoPrincipal/Coche";
import { FaCar, FaPlaneArrival } from "react-icons/fa";
import FormatearFecha from "../../../../../assets/scripts/formatearFecha";
function Coche({ producto, precio, conductor, extras }) {
  const extraInfo = (
    <div>
      <div className="tw-h-fit tw-gap-3 tw-my-5 white tw-w-fit tw-p-5 tw-rounded-lg">
        {extras && extras > 0 && (
          <>
            <h3 className="tw-font-bold dark:tw-text-secondaryDark">Extras:</h3>
            <ul className="dark:tw-text-slate-300 tw-flex tw-flex-wrap tw-gap-3 tw-ml-2">
              {extras.map((extra, index) => (
                <li
                  key={index}
                  className="tw-flex tw-justify-between tw-bg-slate-500 tw-p-1 tw-font-bold tw-text-white tw-rounded-lg"
                >
                  <span>
                    <span className="tw-font-semibold tw-mr-1 dark:tw-text-slate-100">
                      {extra.quantity}x
                    </span>
                    {extra.id === "GPS" && "GPS"}
                    {extra.id === "sillitabebe" && "Sillita bebé"}
                    {extra.id === "sillitaninio" && "Sillita niño"}
                    {extra.id === "elevador" && "Elevador"}
                  </span>
                </li>
              ))}
            </ul>{" "}
          </>
        )}
      </div>
      <div className="tw-h-fit tw-gap-3 white tw-w-fit tw-my-4 tw-rounded-lg dark:tw-text-slate-300">
        <h3 className="tw-font-bold dark:tw-text-secondaryDark">Conductor</h3>
        <div className="tw-flex tw-flex-wrap tw-gap-3 tw-border-l-2 tw-border-slate-500 dark:tw-border-secondaryDark tw-pl-4 tw-ml-3">
          <p className="tw-flex tw-items-center tw-gap-1">
            <span className="tw-text-sm">
              {conductor.nombre} {conductor.apellido}
            </span>
          </p>
          {conductor.numVuelo && (
            <p className="tw-flex tw-items-center tw-gap-1">
              <FaPlaneArrival className="tw-text-xl" />
              <span className="tw-text-sm">
                Núm vuelo: {conductor.numVuelo}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
  return (
    <>
      <section className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <FaCar className="tw-text-xl tw-text-secondary dark:tw-text-secondaryDark" />
          <span className="tw-text-secondary dark:tw-text-secondaryDark tw-font-bold">
            {precio.toFixed(2)}€
          </span>
        </div>
      </section>
      <Detalles coche={producto} extraInfo={extraInfo} />
    </>
  );
}

export default Coche;
