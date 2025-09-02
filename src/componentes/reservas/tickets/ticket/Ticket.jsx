import { useState } from "react";
import Detalles from "./contenidoPrincipal/Detalles";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
import Aside from "./contenidoSecundario/Aside";
import { useQuery } from "@tanstack/react-query";
import Placeholder from "../../../../placeholders/Detalles";
import Error from "../filtrado/Error";
import getEntrada from "../hooks/getEntrada";
import { useParams } from "react-router-dom";
function Producto() {
  const { idTicket } = useParams();
  const { idOp } = useParams();

  const {
    data: ticket,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["ticket", idTicket, idOp],
    queryFn: () => getEntrada(idTicket, idOp),
    enabled: !!idTicket,
    retry: false,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });

  const [tickets, setTickets] = useState([]);

  if (isLoading) return <Placeholder />;

  if (isError) {
    return <Error tipo={2} error="No se ha encontrado este ticket" />;
  }

  return (
    <PaginaDetalles
      titulo={ticket.name}
      contenidoPrincipal={
        <Detalles ticket={ticket} tickets={tickets} setTickets={setTickets} />
      }
      contenidoSecundario={<Aside tickets={tickets} producto={ticket} />}
    />
  );
}

export default Producto;
