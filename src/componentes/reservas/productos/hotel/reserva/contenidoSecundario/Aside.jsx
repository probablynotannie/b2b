import Reserva from "../../../../../../helpers/visuales/ReservaFinal/Resumen";
import { FaPerson } from "react-icons/fa6";
import { FaCalendar, FaChild, FaDoorOpen, FaHotel } from "react-icons/fa";
import TituloIcono from "../../../../../../helpers/visuales/DatoTituloIcono";
import { Link } from "react-router-dom";
function Aside({ producto, habitacion, data }) {
  return (
    <div>
      <Reserva img={producto.img} txt={producto.nombre} />
      <h2 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 dark:tw-text-slate-200 tw-my-3">
        Resumen
      </h2>
      <div className="tw-grid tw-grid-cols-2">
        <TituloIcono
          icon={<FaPerson className="tw-text-lg tw-text-secondary" />}
          title="Adultos"
          value={`${producto.pax} adulto${producto.pax !== 1 ? "s" : ""}`}
        />
        {producto.pax_ninios > 0 && (
          <TituloIcono
            icon={<FaChild className="tw-text-lg tw-text-secondary" />}
            title="Niños"
            value={`${producto.pax_ninios} niño${
              producto.pax_ninios !== 1 ? "s" : ""
            }`}
          />
        )}
      </div>

      <TituloIcono
        icon={<FaCalendar className="tw-text-lg tw-text-secondary" />}
        title="Fechas"
        value={producto.fecha + " – " + producto.fechaSalida}
      />

      <TituloIcono
        icon={<FaDoorOpen className="tw-text-lg tw-text-secondary" />}
        title="Habitación"
        value={habitacion.nombre}
      />
      <TituloIcono
        icon={<FaHotel className="tw-text-lg tw-text-secondary" />}
        title="Resgimen"
        value={habitacion.regimen}
      />
      <Link to={"/resumenHotel"} state={{ producto, habitacion, data }}>
        <button className="tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-3">
          {Number(habitacion.precio).toFixed(2)}€
        </button>
      </Link>
    </div>
  );
}

export default Aside;
