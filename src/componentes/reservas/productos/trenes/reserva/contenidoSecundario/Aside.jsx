import Reserva from "../../../../../../helpers/visuales/ReservaFinal/Resumen";
import { Link } from "react-router-dom";
import DatosTren from "../../detalles/contenidoSecundario/DatosTren";

function Aside({ ida, vuelta, tren, data }) {
  return (
    <div>
      <Reserva
        img={"/banners/banner_trenes.webp"}
        txt={"tren de ida " + (vuelta && " y vuelta")}
      />
      <DatosTren tren={ida} tipo="ida" />
      {vuelta && <DatosTren tren={vuelta} tipo="vuelta" />}
      <Link to={"/resumenTren"} state={{ tren, data }}>
        <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
          {(
            ida.price +
            ida.claseElegida.precioExtra +
            (vuelta && vuelta.price + vuelta.claseElegida.precioExtra)
          ).toFixed(2)}
          €
        </button>
      </Link>
    </div>
  );
}

export default Aside;
