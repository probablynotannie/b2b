import DatosContacto from "../../../../../helpers/visuales/ReservaFinal/DatosContacto";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Resumen";
import { Link } from "react-router-dom";
function Aside({ ida, data, vuelta }) {
  return (
    <div>
      <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
        Reservando vuelo
      </h2>
      <Reserva
        img={"/banners/banner_avion.webp"}
        txt={ida.flight.salida + " - " + ida.flight.llegada}
      />
      <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
        Datos de contacto
      </h2>
      <DatosContacto
        nombre={data.nombre}
        apellidos={data.apellidos}
        email={data.email}
        numero={data.numero}
      />
      <Link to={"/resumenVuelo"} state={{ ida, vuelta, data }}>
        <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
          {(ida.flight.precio + (vuelta?.flight.precio || 0)).toFixed(2)}€
        </button>
      </Link>
    </div>
  );
}

export default Aside;
