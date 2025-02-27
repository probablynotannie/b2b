import { FaFerry } from "react-icons/fa6";
import DetalleFerry from "../reserva/Ferry";
function Ferry({ ida, vuelta }) {
  console.log(ida);
  return (
    <section className="mt-10 shadow-lg hover:shadow-xl transition duration-300 border dark:bg-slate-800 bg-slate-50 p-5 border-slate-200 dark:tw-border-slate-700  rounded-lg">
      <section className="flex justify-between items-center border-b-2 border-slate-100 dark:tw-border-slate-700 pb-2 mb-5">
        <div>
          <h3 className="text-lg font-bold dark:tw-text-white">
            Ferry de ida {vuelta && " y vuelta"}
          </h3>
          <p className="text-slate-500 dark:tw-text-slate-300 flex gap-2 items-center">
            {ida.ruta}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaFerry className="text-xl tw-text-secondary dark:tw-text-secondary" />

          <span className="tw-text-secondary dark:tw-text-secondary font-bold">
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
