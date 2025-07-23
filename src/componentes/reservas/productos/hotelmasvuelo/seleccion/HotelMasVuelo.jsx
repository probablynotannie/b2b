import { useLocation } from "react-router-dom";
import Detalles from "./contenidoPrincipal/Detalles";
import Aside from "./contenidoSecundario/Aside";
import { Link } from "react-router-dom";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
function HotelMasVuelo() {
  const location = useLocation();
  const { ida, vuelta, selectedHotel, habitacion } = location.state;

  return (
    <PaginaDetalles
      titulo="Reservando Hotel + Vuelo"
      contenidoPrincipal={
        <Detalles hotel={selectedHotel} ida={ida} vuelta={vuelta} />
      }
      contenidoSecundario={
        <>
          <Aside hotel={selectedHotel} ida={ida} vuelta={vuelta} />
          <Link
            to={"/datoshotelmasvuelo"}
            state={{ ida, vuelta, selectedHotel, habitacion }}
          >
            <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
              {(
                Number(selectedHotel.precio) +
                Number(ida.flight.precio) +
                (vuelta ? Number(vuelta.flight.precio) : 0)
              ).toFixed(2)}
              €
            </button>
          </Link>
        </>
      }
    />
  );
}

export default HotelMasVuelo;
