import Reserva from "../../../../../../helpers/visuales/ReservaFinal/Resumen";
import { Link } from "react-router-dom";
import InfoHotel from "../../detalles/contenidoPrincipal/Info";
function Aside({ producto, habitacion, data }) {
  return (
    <div className="tw-flex tw-flex-col tw-gap-4">
      <Reserva img={producto.ListFotos[0]} txt={producto.NombreHotel} />
      <InfoHotel aside={true} hotel={producto} habitacion={habitacion} />
      <Link to={"/resumenHotel"} state={{ producto, habitacion, data }}>
        <button className="tw-btn_accesorios tw-btn_primario tw-w-full">
          {Number(habitacion.Price).toFixed(2)}
          {habitacion.Currency === "EUR" ? "€" : habitacion.Currency}
        </button>
      </Link>
    </div>
  );
}

export default Aside;
