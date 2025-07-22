import { useLocation, Link } from "react-router-dom";
import DatosContacto from "../../../../../helpers/visuales/ReservaFinal/DatosContacto";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Resumen";
import Detalles from "./Detalles";
import { FaArrowRight } from "react-icons/fa";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
function ReservaFinal() {
  const location = useLocation();
  const { coche, data } = location.state || {};
  return (
    <PaginaDetalles
      titulo={coche.name}
      contenidoPrincipal={
        <>
          <DatosContacto
            nombre={data.nombre}
            apellidos={data.apellido}
            numero={data.numero}
            email={data.email}
          />
          <Detalles coche={coche} />
        </>
      }
      contenidoSecundario={
        <>
          <Reserva img={coche.img} txt={coche.name} />
          <div className="tw-flex tw-border-2 tw-border-dashed dark:tw-border-slate-700 tw-text-slate-600 dark:tw-text-slate-400 tw-text-md tw-items-center tw-gap-2 tw-flex-wrap tw-justify-center tw-p-3 tw-my-3">
            {coche.route.origin.name}
            <FaArrowRight className="tw-animate-pulse tw-animate-delay-500 tw-text-black dark:tw-text-secondaryDark" />
            {coche.route.distance} km
            <FaArrowRight className="tw-animate-pulse tw-text-black dark:tw-text-secondaryDark" />
            {coche.route.destination.name}
          </div>
          <p className="tw-text-center dark:tw-text-slate-300">
            Por favor, confirma todos los datos antes de hacer el pago.
          </p>
          <Link to={"/resumenTransfer"} state={{ coche, data }}>
            <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
              {coche.price.toFixed(2)}€
            </button>
          </Link>
        </>
      }
    />
  );
}

export default ReservaFinal;
