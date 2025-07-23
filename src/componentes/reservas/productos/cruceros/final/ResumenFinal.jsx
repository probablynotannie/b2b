import { useLocation } from "react-router-dom";
import Crucero from "./Crucero";
import Reserva from "../../../../../helpers/visuales/ReservaFinal/Reserva";
import { FaShip } from "react-icons/fa";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
import { useQuery } from "@tanstack/react-query";
import fetchReserva from "../hook/reserva";
import ReservaLocalizada from "./Reserva";
import Placeholder from "../../../../../helpers/visuales/ReservaFinal/Placeholder";
function ResumenFinal() {
  const location = useLocation();
  const accessedViaLink = !!location.state;
  const {
    data,
    producto,
    precioSeleccionado,
    numReserva: stateNumReserva,
  } = location.state || {};
  const numReserva = stateNumReserva || "597230-279";

  const { data: reserva, isLoading } = useQuery({
    queryKey: ["reserva", numReserva],
    queryFn: () => fetchReserva(numReserva),
    enabled: !accessedViaLink,
    refetchOnWindowFocus: false,
  });
  if (isLoading) {
    return <Placeholder />;
  }
  if (accessedViaLink) {
    return (
      <Reserva
        titulo={producto.barco.nombre.texto}
        descripcionTitulo={FormatearFecha(precioSeleccionado.date)}
        Icono={FaShip}
        precio={precioSeleccionado.price.toFixed(2)}
        numReserva={stateNumReserva}
        datosContacto={data}
        main={
          <Crucero
            producto={producto}
            pasajeros={data.pasajeros}
            selectedPrice={precioSeleccionado}
          />
        }
        finalizada={true}
      />
    );
  }
  if (!reserva) {
    return <div>Loading reserva...</div>;
  }
  return (
    <>
      <Reserva
        titulo={<span> Núm Reserva: {reserva.orden} </span>}
        Icono={FaShip}
        precio={parseFloat(reserva.importe || "0").toFixed(2)}
        numReserva={numReserva}
        datosContacto={{
          nombre: reserva.titular?.split(" ")[0] || "",
          apellido: reserva.titular?.split(" ")[1] || "",
          email: reserva.email,
          numero: reserva.tfno,
        }}
        main={
          <ReservaLocalizada reserva={reserva} pasajeros={reserva.pasajeros} />
        }
        finalizada={true}
      />
    </>
  );
}

export default ResumenFinal;
