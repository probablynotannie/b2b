import { useLocation } from "react-router-dom";
import Trenes from "./Trenes";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Reserva";
import { FaTrain } from "react-icons/fa";
import FormatearFecha from "../../../../../assets/scripts/formatearFecha";
function ResumenFinal() {
  const location = useLocation();
  const { tren, data } = location.state || {};
  const numReserva = "HGALIUHJ198AJK";
  return (
    <Reserva
      finalizada={true}
      datosContacto={data}
      numReserva={numReserva}
      Icono={FaTrain}
      titulo={"Tren de ida " + (tren.vuelta ? "y vuelta" : "")}
      descripcionTitulo={
        <span>
          {FormatearFecha(tren.ida.searchSummary.depDate)} -
          {FormatearFecha(tren.ida.searchSummary.retDate)}
        </span>
      }
      precio={parseFloat(
        tren.ida.price + (tren.vuelta ? tren.vuelta.price : 0)
      ).toFixed(2)}
      main={<Trenes tren={tren} />}
    />
  );
}

export default ResumenFinal;
