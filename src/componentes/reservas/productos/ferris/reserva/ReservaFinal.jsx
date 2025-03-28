import { useLocation } from "react-router-dom";
import Detalles from "./Detalles";
import { Link } from "react-router-dom";
function Reserva() {
  const location = useLocation();
  const { ida, vuelta, data } = location.state || {};
  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <h1 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
          Reservando Ferry
        </h1>
        <Detalles ida={ida} vuelta={vuelta} datosContacto={data} />
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Resumen
        </h2>
        <img
          src={ida.barco}
          className="tw-opacity-90 tw-rounded tw-shadow tw-mb-4 tw-h-[20vh] tw-w-full tw-object-cover"
          alt="Reserva ferry"
        />
        {ida && vuelta ? (
          <h3 className="tw-font-semibold dark:tw-text-slate-100">
            Ida y vuelta
          </h3>
        ) : (
          <h3 className="tw-font-semibold dark:tw-text-slate-100">Solo ida</h3>
        )}
        <ul>
          <li className="tw-flex tw-justify-between tw-items-center dark:tw-text-slate-300">
            <span>Tipo</span>
            <span>{ida.tipo}</span>
          </li>
        </ul>
        <Link to={"/resumenFerry"} state={{ ida, vuelta, data }}>
          <button className="tw-btn tw-w-full">
            {Number(ida.precio + (vuelta ? vuelta.precio : 0)).toFixed(2)}€
          </button>
        </Link>
      </article>
    </main>
  );
}

export default Reserva;
