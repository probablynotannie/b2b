import { useLocation } from "react-router-dom";
import { useState } from "react";
import Detalles from "./contenidoPrincipal/Detalles";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
import Aside from "./contenidoSecundario/Aside";
import ticket from "./ticket.json";
function Producto() {
  /*   const location = useLocation();
  const producto = location.state;
  const [tickets, setTickets] = useState([]); */
  const [tickets, setTickets] = useState([]);

  return (
    <PaginaDetalles
      titulo={ticket.name}
      contenidoPrincipal={
        <>
          <Detalles ticket={ticket} tickets={tickets} setTickets={setTickets} />
        </>
      }
      contenidoSecundario={
        <>
        
          <Aside tickets={tickets} producto={ticket} />
        </>
      }
    />
  );
}
export default Producto;
