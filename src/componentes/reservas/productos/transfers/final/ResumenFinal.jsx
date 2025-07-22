import { useLocation } from "react-router-dom";
import Coche from "./Coche";
import formatearMinutos from "../../../../../helpers/FormatearMinutos";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Reserva";
import { FaCar } from "react-icons/fa6";
function ResumenFinal() {
  const location = useLocation();
  const { coche, data } = location.state || {};
  const numReserva = "HGALIUHJ198AJK";
  return (
    <>
      <Reserva
        Icono={FaCar}
        datosContacto={data}
        numReserva={numReserva}
        main={<Coche transfer={coche} />}
        titulo={coche.name}
        descripcionTitulo={
          <ul className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-gap-2 tw-items-center">
            <li>
              Duración del trayecto: {formatearMinutos(coche.route.duration)}
            </li>
            <li>-</li>
            <li>
              Distancia del trayecto:
              {coche.route.distance}KM
            </li>
          </ul>
        }
        precio={
          <span className="tw-text-secondary dark:tw-text-secondaryDark tw-font-bold">
            {Number(coche.price).toFixed(2)}
          </span>
        }
        currency={coche.currency === "EUR" ? "€" : "$"}
      />
    </>
  );
}

export default ResumenFinal;
