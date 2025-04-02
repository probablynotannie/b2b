import { useLocation } from "react-router-dom";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
import { FaCalendar } from "react-icons/fa6";
import DatosContacto from "../../../estructura/DatosContacto";
import Detalles from "./Detalles";
import Resumen from "../../../estructura/reserva/Resumen";
import { Link } from "react-router-dom";

function Reserva() {
  const location = useLocation();
  const { seguro, data } = location.state || {};
  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <h1 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
          {seguro.titulo}
        </h1>
        <DatosContacto
          nombre={data.nombre}
          apellidos={data.apellidos}
          email={data.email}
          numero={data.numero}
        />
        <Detalles seguro={seguro} />
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Resumen
        </h2>
        <Resumen img={"/banners/banner_seguros.webp"} txt={seguro.titulo} />
        <ul className="tw-text-slate-500 dark:tw-text-slate-400 tw-mt-3">
          <li className="tw-flex tw-items-center tw-gap-1">
            Destino: {seguro.destino}
          </li>
          <li className="tw-flex tw-items-center tw-gap-1">
            <FaCalendar className="tw-text-secondary dark:tw-text-secondaryDark" />
            {FormatearFecha(seguro.inicio)}
          </li>
          <li className="tw-flex tw-items-center tw-gap-1">
            <FaCalendar className="tw-text-secondary dark:tw-text-secondaryDark" />
            {FormatearFecha(seguro.fin)}
          </li>
        </ul>
        <p className="tw-text-danger dark:tw-text-red-400 tw-my-3 tw-text-sm tw-border-y-2 tw-border-slate-100 dark:tw-border-slate-700 tw-py-4">
          {seguro.importante}
        </p>
        <Link to={"/resumenSeguro"} state={{ seguro, data }}>
          <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
            {seguro.precio.toFixed(2)}€
          </button>
        </Link>
      </article>
    </main>
  );
}

export default Reserva;
