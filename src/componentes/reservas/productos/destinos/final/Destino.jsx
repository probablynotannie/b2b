import { FaGlobe } from "react-icons/fa";
import Detalles from "../destino/contenidoPrincipal/Destino";
import Desglose from "../destino/reserva/contenidoSecundario/Desglose";

function Destino({ reserva }) {
  return (
    <section>
      <Desglose precio={reserva.precio} />
      <Detalles producto={reserva} cesta={true} />
    </section>
  );
}

export default Destino;
