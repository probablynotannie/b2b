import Reserva from "../../../../../../helpers/visuales/ReservaFinal/Resumen";
import Componente from "../../seleccion/contenidoSecundario/Aside";
import { Link } from "react-router-dom";

function Aside({ selectedHotel, ida, vuelta, data, habitacion }) {
  return (
    <div>
      <div className="tw-flex tw-flex-col tw-gap-3">
        <Reserva img={selectedHotel.img} txt={"Hotel + vuelo"} />
        <Componente ida={ida} vuelta={vuelta} hotel={selectedHotel} />
      </div>
      <Link
        to={"/resumenhotelmasvuelo"}
        state={{
          selectedHotel,
          ida,
          vuelta,
          data,
          habitacion,
        }}
      >
        <button className=" tw-btn_accesorios tw-btn_primario tw-w-full tw-mt-2">
          {(
            Number(selectedHotel.precio) +
            Number(ida.flight.precio) +
            (vuelta ? Number(vuelta.flight.precio) : 0)
          ).toFixed(2)}
          €
        </button>
      </Link>
    </div>
  );
}

export default Aside;
