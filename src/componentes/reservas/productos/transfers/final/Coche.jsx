import Detalles from "../reserva/Detalles";
import { FaCar } from "react-icons/fa";
import formatearMinutos from "../../../../../assets/scripts/formatearMinutos";
function Coche({ transfer }) {
  const extraInfo = (
    <div>
      <div className="tw-h-fit tw-gap-3 tw-my-5 white tw-w-fit tw-p-5 tw-rounded-lg">
        <h3 className="tw-font-bold dark:tw-text-secondaryDark">Extras:</h3>
      </div>
      <div className="tw-h-fit tw-gap-3 tw-my-5 white tw-w-fit tw-p-5 tw-rounded-lg dark:tw-text-slate-300">
        <h3 className="tw-font-bold dark:tw-text-secondaryDark">Conductor</h3>
      </div>
    </div>
  );
  return (
    <section className="tw-mt-10 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-border dark:tw-bg-slate-800 tw-bg-slate-50 tw-p-5 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
      <section className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
        <div>
          <h3 className="tw-text-lg tw-font-bold dark:tw-text-white">
            {transfer.name}
          </h3>
          <ul className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-gap-2 tw-items-center">
            <li>
              Duración del trayecto: {formatearMinutos(transfer.route.duration)}
            </li>
            <li>-</li>
            <li>
              Distancia del trayecto:
              {transfer.route.distance}KM
            </li>
          </ul>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <FaCar className="tw-text-xl tw-text-secondary dark:tw-text-secondaryDark" />
          <span className="tw-text-secondary dark:tw-text-secondaryDark tw-font-bold">
            {Number(transfer.price).toFixed(2)}
            {transfer.currency === "EUR" ? "€" : "$"}
          </span>
        </div>
      </section>

      <Detalles coche={transfer} extraInfo={extraInfo} />
    </section>
  );
}

export default Coche;
