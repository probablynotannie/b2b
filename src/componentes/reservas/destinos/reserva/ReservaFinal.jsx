import { useLocation } from "react-router-dom";
import Detalles from "./Detalles";
import Reserva from "../../../../helpers/visuales/ReservaFinal/Resumen";
import Info from "./Info";
import { Link } from "react-router-dom";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
function ReservaFinal() {
  const location = useLocation();
  const { data, reserva } = location.state || {};
  return (
    <PaginaDetalles
      titulo={"Reserva de destino"}
      tituloDescripcion={"Por: " + reserva.agencia}
      contenidoPrincipal={
        <>
          <Detalles reserva={reserva} datosContacto={data} />
        </>
      }
      contenidoSecundario={
        <>
          <Reserva
            img={reserva.img}
            txt={reserva.dias + " Días en " + reserva.ubicacion}
          />
          <Info reserva={reserva} />
          <Link to={"/resumenDestino"} state={{ reserva, data }}>
            <button className="tw-w-full tw-btn_accesorios tw-btn_primario tw-mt-2">
              {reserva.precio} €
            </button>
          </Link>
        </>
      }
    />
  );
}

export default ReservaFinal;
