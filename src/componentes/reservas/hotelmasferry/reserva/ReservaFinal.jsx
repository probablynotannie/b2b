import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Seleccion from "../seleccion/contenidoPrincipal/Detalles";

import DatosContacto from "../../../../helpers/visuales/ReservaFinal/DatosContacto";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
import Aside from "../seleccion/contenidoSecundario/Aside";
function ReservaFinal() {
  const location = useLocation();
  const { hotel, ferry, data, habitacion } = location.state || {};
  const calcularPrecio =
    Number(habitacion.Pvp) +
    Number(ferry.ida.Pvp.toFixed(2)) +
    Number(ferry.vuelta?.Pvp || 0);
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
          <Aside hotel={hotel} ferry={ferry} habitacion={habitacion} />

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
