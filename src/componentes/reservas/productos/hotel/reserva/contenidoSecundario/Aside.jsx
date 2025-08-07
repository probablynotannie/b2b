import Reserva from "../../../../../../helpers/visuales/ReservaFinal/Resumen";
import { FaPerson } from "react-icons/fa6";
import { FaCalendar, FaChild, FaDoorOpen, FaHotel } from "react-icons/fa";
import TituloIcono from "../../../../../../helpers/visuales/DatoTituloIcono";
import { Link } from "react-router-dom";
function Aside({ producto, habitacion, data }) {
  return (
    <div>
      <Reserva img={producto.ListFotos[0]} txt={producto.NombreHotel} />
      <h2 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 dark:tw-text-slate-200 tw-my-3">
        Resumen
      </h2>
      <TituloIcono
        icon={<FaPerson className="tw-text-lg tw-text-secondary" />}
        title="Adultos"
        value={`${habitacion.adultosTotal} adulto${
          habitacion.adultosTotal !== 1 ? "s" : ""
        }`}
      />
      {habitacion.niniosTotal > 0 && (
        <TituloIcono
          icon={<FaChild className="tw-text-lg tw-text-secondary" />}
          title="Niños"
          value={`${habitacion.niniosTotal} niño${
            habitacion.niniosTotal !== 1 ? "s" : ""
          }`}
        />
      )}
      <TituloIcono
        icon={<FaCalendar className="tw-text-lg tw-text-secondary" />}
        title="Fechas"
        value={"producto.fecha" + " – " + "producto.fechaSalida"}
      />
      <TituloIcono
        icon={<FaDoorOpen className="tw-text-lg tw-text-secondary" />}
        title="Habitación"
        value={habitacion.combinedName}
      />
      <TituloIcono
        icon={<FaHotel className="tw-text-lg tw-text-secondary" />}
        title="Resgimen"
        value={habitacion.BoardName}
      />
      <Link to={"/resumenHotel"} state={{ producto, habitacion, data }}>
        <button className="tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-3">
          {Number(habitacion.Price).toFixed(2)}
          {habitacion.Currency === "EUR" ? "€" : habitacion.Currency}
        </button>
      </Link>
    </div>
  );
}

export default Aside;
