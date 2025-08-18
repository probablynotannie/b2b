import { useLocation } from "react-router-dom";
import Hotel from "./Hotel";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Reserva";
import { FaHotel, FaMapPin } from "react-icons/fa";
import useNetoStore from "../scripts/zustand/useNetoStore";

function ResumenFinal() {
  const location = useLocation();
  const { producto, habitacion, data } = location.state || {};
  const numReserva = "HGJLAIU26098A";
  const { neto, setNeto } = useNetoStore();

  return (
    <Reserva
      Icono={FaHotel}
      numReserva={numReserva}
      precio={parseFloat(
        neto === true ? habitacion.Pvp : habitacion.Price
      ).toFixed(2)}
      main={<Hotel hotel={producto} habitacion={habitacion} />}
      datosContacto={data}
      titulo={
        producto.NombreHotel +
        "(" +
        habitacion.combinedName +
        ") - " +
        habitacion.BoardName
      }
      descripcionTitulo={
        <p className="tw-text-slate-500 dark:tw-text-slate-300 tw-flex tw-gap-2 tw-items-center">
          <FaMapPin className="tw-text-secondary dark:tw-text-secondaryDark" />
          {producto.Dir}
        </p>
      }
      finalizada={true}
    />
  );
}

export default ResumenFinal;
