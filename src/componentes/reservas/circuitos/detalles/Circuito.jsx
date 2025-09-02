import { useState } from "react";
import { useLocation } from "react-router-dom";
import Detalles from "./contenidoPrincipal/Detalles";
import Eleccion from "./contenidoSecundario/Eleccion";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
function Producto() {
  const location = useLocation();
  const actividad = location.state;
  const [fecha, setFecha] = useState();
  const [habitacion, setHabitacion] = useState(1);
  const [roomData, setRoomData] = useState([
    { id: Date.now(), adultos: 1, ninios: 0, ninioAges: [] },
  ]);

  return (
    <PaginaDetalles
      titulo={actividad.titulo}
      contenidoPrincipal={<Detalles actividad={actividad} />}
      contenidoSecundario={
        <Eleccion
          actividad={actividad}
          fecha={fecha}
          setFecha={setFecha}
          habitacion={habitacion}
          setHabitacion={setHabitacion}
          roomData={roomData}
          setRoomData={setRoomData}
        />
      }
    />
  );
}

export default Producto;
