import { Link, useLocation } from "react-router-dom";
import Aside from "./contenidoSecundario/Aside";
import Detalles from "./contenidoPrincipal/Detalles";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
function Seleccion() {
  const location = useLocation();
  const producto = location.state;
  const hotel = producto.hotel;
  const ferry = producto.ferry;
  const habitacion = producto.habitacion;
  const totalFerry = ferry.vuelta?.Pvp
    ? ferry?.ida?.Pvp + ferry.vuelta.Pvp
    : ferry?.ida?.Pvp;
  const totalPrice =
    hotel &&
    (hotel && habitacion ? parseFloat(habitacion.Pvp) : 0) +
      parseFloat(totalFerry);
  return (
    <PaginaDetalles
      titulo={"Hotel + Ferry"}
      contenidoPrincipal={
        <>
          <Detalles hotel={hotel} ferry={ferry} habitacion={habitacion} />
        </>
      }
      contenidoSecundario={
        <>
          <Aside hotel={hotel} ferry={ferry} habitacion={habitacion} />
          <Link to={"/datosHotelFerry"} state={{ hotel, ferry, habitacion }}>
            <button className="tw-w-full tw-mt-3 tw-btn_primario tw-btn_accesorios">
              {totalPrice.toFixed(2)}€
            </button>
          </Link>
        </>
      }
    />
  );
}
export default Seleccion;
