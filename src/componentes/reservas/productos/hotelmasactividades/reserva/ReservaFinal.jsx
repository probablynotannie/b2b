import { useLocation } from "react-router-dom";
import Detalles from "../seleccion/Detalles";
import DatosContacto from "../../../../../helpers/visuales/ReservaFinal/DatosContacto";
import Aside from "../seleccion/contenidoSecundario/Aside";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Resumen";
import { Link } from "react-router-dom";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
function ReservaFinal() {
  const location = useLocation();
  const { data, hotel, actividades, habitacion } = location.state || {};
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
      titulo={
        "Hotel + " +
        " " +
        actividades.length +
        " actividad" +
        (actividades.length > 1 ? "es" : "")
      }
      contenidoPrincipal={
        <>
          <DatosContacto
            nombre={data.nombre}
            apellidos={data.apellido}
            email={data.email}
            numero={data.numero}
          />
          <section className="tw-mt-8">
            <Detalles hotel={hotel} actividades={actividades} />
          </section>
        </>
      }
      contenidoSecundario={
        <>
          <Reserva
            img={hotel.img}
            txt={
              "Hotel + " +
              " " +
              actividades.length +
              " actividad" +
              (actividades.length > 1 ? "es" : "")
            }
          />
          <section className="tw-my-2">
            <Aside hotel={hotel} actividades={actividades} />
          </section>
          <Link
            to={"/resumenHotelMasActividades"}
            state={{ data, hotel, actividades, habitacion }}
          >
            <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
              {calculateTotalPrice()}€
            </button>
          </Link>
        </>
      }
    />
  );
}

export default ReservaFinal;
