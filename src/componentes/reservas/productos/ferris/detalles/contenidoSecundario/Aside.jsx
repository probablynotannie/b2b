import Reserva from "../../../../../../helpers/visuales/ReservaFinal/Resumen";
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
      <Link to="/ferry" state={{ ida, vuelta, ferry }}>
        <button className="tw-btn_primario tw-btn_accesorios">
          {((ida?.Pvp || 0) + (vuelta?.Pvp || 0)).toFixed(2)}€
        </button>
      </Link>
    </div>
  );
}

export default Aside;
