import { useLocation } from "react-router-dom";
import Detalles from "./Detalles";
import { Link } from "react-router-dom";
import Aside from "./contenidoSecundario/Aside";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
function Seleccion() {
  const location = useLocation();
  const producto = location.state;
  const hotel = producto.hotel;
  const habitacion = producto.habitacion;
  const actividades = producto.actividades;
  const totalPrice =
    (hotel && habitacion ? parseFloat(habitacion.Pvp) : 0) +
    producto.actividades.reduce(
      (sum, actividad) => sum + parseFloat(actividad.precioTotal),
      0
    );
    
  return (
    <PaginaDetalles
      titulo={<span>Hotel + actividad{actividades.length > 1 && "es"}</span>}
      contenidoPrincipal={
        <>
          <Detalles
            hotel={hotel}
            habitacion={habitacion}
            actividades={actividades}
          />
        </>
      }
      contenidoSecundario={
        <>
          <Aside hotel={hotel} actividades={actividades} />

          <Link
            to={"/datosHotelMasActividades"}
            state={{ hotel, actividades, habitacion }}
          >
            <button className="tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-3">
              {totalPrice.toFixed(2)}€
            </button>
          </Link>
        </>
      }
    />
  );
}
export default Seleccion;
