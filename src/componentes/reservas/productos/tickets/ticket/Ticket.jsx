import { useLocation } from "react-router-dom";
import { useState } from "react";
import Detalles from "./contenidoPrincipal/Detalles";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
import Aside from "./contenidoSecundario/Aside";
function Producto() {
  const location = useLocation();
  const producto = location.state;
  const [tickets, setTickets] = useState([]);

  return (
    <PaginaDetalles
      titulo={producto.titulo}
      contenidoPrincipal={
        <Detalles
          tickets={tickets}
          setTickets={setTickets}
          producto={producto}
        />
      }
      contenidoSecundario={<Aside tickets={tickets} producto={producto} />}
    />
  );
}
export default Producto;
