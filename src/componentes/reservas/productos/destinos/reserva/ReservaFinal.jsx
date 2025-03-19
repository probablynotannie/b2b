import { useLocation } from "react-router-dom";
import Detalles from "./Detalles";
import Reserva from "../../../estructura/reserva/Resumen";
import Info from "./Info";
import { Link } from "react-router-dom";
function ReservaFinal() {
  const location = useLocation();
  const { data, reserva } = location.state || {};
  console.log(data);
  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <div className="tw-flex tw-justify-between tw-items-center">
          <h1 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
            Reservando destino
          </h1>
          <span className="tw-font-semibold tw-text-secondary dark:tw-text-secondary">
            Por: {reserva.agencia}
          </span>
        </div>
        <Detalles reserva={reserva} datosContacto={data} />
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Resumen
        </h2>
        <Reserva
          img={reserva.img}
          txt={reserva.dias + " Días en " + reserva.ubicacion}
        />
        <Info reserva={reserva} />
        <Link to={"/resumenDestino"} state={{ reserva, data }}>
          <button className="tw-w-full tw-bg-secondary dark:tw-bg-green-600 tw-rounded-lg hover:tw-shadow-lg tw-transition tw-duration-300 tw-text-white tw-p-3 tw-font-semibold tw-mt-2">
            {reserva.precio} €
          </button>
        </Link>
      </article>
    </main>
  );
}
export default ReservaFinal;
