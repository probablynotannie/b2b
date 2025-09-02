import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Seleccion from "../seleccion/contenidoPrincipal/Detalles";

import DatosContacto from "../../../../helpers/visuales/ReservaFinal/DatosContacto";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
import Aside from "./contenidoSecundario/Aside";
function ReservaFinal() {
  const location = useLocation();
  const { hotel, ferry, data, habitacion } = location.state || {};
  const precioFerry = Number(
    ferry.ida.precio + (ferry.vuelta?.precio || 0)
  ).toFixed(2);
  const calcularPrecio =
    Number(hotel.precio) +
    Number(ferry.ida.precio.toFixed(2)) +
    Number(ferry.vuelta?.precio || 0);
  return (
    <PaginaDetalles
      titulo={"Hotel + Ferry"}
      contenidoPrincipal={
        <>
          <DatosContacto
            nombre={data.nombre}
            apellidos={data.apellido}
            email={data.email}
            numero={data.numero}
          />
          <Seleccion hotel={hotel} ferry={ferry} />
        </>
      }
      contenidoSecundario={
        <>
          <Aside hotel={hotel} ferry={ferry} precioFerry={precioFerry} />
          <Link
            to={"/resumenHotelmasFerry"}
            state={{ hotel, ferry, data, habitacion }}
          >
            <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
              {calcularPrecio.toFixed(2)}€
            </button>
          </Link>
        </>
      }
    />
  );
}

export default ReservaFinal;
