import Buscador_Tickets from "./buscadores/tickets/Buscador_Tickets";
import Destacados from "./buscadores/destacados/Destacados";
import destacados from "./buscadores/tickets/destacados.json";
import Buscador from "./buscador/Buscador";

function Tickets() {
  return (
    <Buscador
      backgroundImage={"url(/banners/banner_hoteles.webp)"}
      buscador={<Buscador_Tickets />}
      destacados={<Destacados destacados={destacados} columnas={3} filas={2} />}
    />
  );
}

export default Tickets;
