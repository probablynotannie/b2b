import { useLocation } from "react-router-dom";
import Detalles from "./Detalles";
import { Link } from "react-router-dom";
import Aside from "./contenidoSecundario/Aside";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
function Seleccion() {
  const location = useLocation();
  const { hotel, actividades, habitacion } = location.state;
  const calculateTotalPrice = () => {
    const actividadesTotal = actividades.reduce((sum, actividad) => {
      const precioActividad = Number(actividad.precioTotal);
      return sum + precioActividad;
    }, 0);
    const precioHotel = Number(hotel.precio);
    return precioHotel + actividadesTotal;
  };

  return (
    <PaginaDetalles
      titulo={""}
      contenidoPrincipal={<Detalles hotel={hotel} actividades={actividades} />}
      contenidoSecundario={
        <>
          <Aside hotel={hotel} actividades={actividades} />
          <Link
            to={"/datosHotelMasActividades"}
            state={{ hotel, actividades, habitacion }}
          >
            <button className="tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-3">
              {calculateTotalPrice().toFixed(2)}€
            </button>
          </Link>
        </>
      }
    />
  );
}
export default Seleccion;
