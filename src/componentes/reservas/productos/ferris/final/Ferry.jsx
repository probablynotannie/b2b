import { FaFerry } from "react-icons/fa6";
import DetalleFerry from "../reserva/Ferry";
function Ferry({ ida, vuelta }) {
  return (
    <section className="tw-mt-10 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-border dark:tw-bg-slate-800 tw-bg-slate-50 tw-p-5 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
      <section className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
        <div>
          <h3 className="tw-text-lg tw-font-bold dark:tw-text-white">
            Ferry de ida {vuelta && " y vuelta"}
          </h3>
          <p className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-gap-2 tw-items-center">
            {ida.ruta}
          </p>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <FaFerry className="tw-text-xl tw-text-secondary dark:tw-text-secondary" />
          <span className="tw-text-secondary dark:tw-text-secondary tw-font-bold">
            {(
              parseFloat(ida.precio) + parseFloat(vuelta ? vuelta.precio : 0)
            ).toFixed(2)}
            €
          </span>
        </div>
      </section>
      <section>
        <DetalleFerry producto={ida} tipo={"Ida"} />
        {vuelta && <DetalleFerry producto={vuelta} tipo={"Vuelta"} />}
      </section>
    </section>
  );
}
export default Ferry;
