import { FaFilePdf } from "react-icons/fa";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Resumen";
import Info from "./Info";
import { Link } from "react-router-dom";
function Aside({ ferry, ida, vuelta }) {
  return (
    <div className="tw-flex tw-flex-col tw-gap-5">
      <Reserva
        img={"/banners/banner_ferry.webp"}
        txt={<span>Ferry de ida {vuelta && " y vuelta"}</span>}
      />
      <div className="tw-flex tw-flex-col tw-gap-4 tw-divide-y-2 tw-divide-slate-100 dark:tw-divide-slate-700">
        <Info />
      </div>
      <div className="tw-flex tw-justify-center tw-items-center">
        {ferry.operador.url_condiciones && (
          <button
            className="tw-text-slate-400 dark:tw-text-slate-300 tw-font-normal tw-text-sm tw-flex tw-gap-1 tw-items-center"
            onClick={() =>
              window.open(ferry.operador.url_condiciones, "_blank")
            }
          >
            <FaFilePdf className="tw-text-xl" />
            condiciones de compra
          </button>
        )}
      </div>
      <Link to="/ferry" state={{ ida, vuelta, ferry }}>
        <button className="tw-btn_primario tw-btn_accesorios tw-w-full">
          {((ida?.Pvp || 0) + (vuelta?.Pvp || 0)).toFixed(2)}€
        </button>
      </Link>
    </div>
  );
}

export default Aside;
