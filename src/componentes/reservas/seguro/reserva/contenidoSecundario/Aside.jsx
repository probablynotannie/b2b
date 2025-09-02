import { FaCalendar } from "react-icons/fa";
import Resumen from "../../../../../helpers/visuales/ReservaFinal/Resumen";
import FormatearFecha from "../../../../../assets/scripts/formatearFecha";
import { Link } from "react-router-dom";
function Aside({ seguro, data }) {
  return (
    <div>
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
    </div>
  );
}

export default Aside;
