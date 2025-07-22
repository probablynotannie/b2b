import Buscador_Trenes from "./buscadores/trenes/Buscador_Trenes";
import destacados from "./buscadores/trenes/destacados.json";
import Destacados from "./buscadores/destacados/Destacados";
import Buscador from "./buscador/Buscador";

function Trenes() {
  return (
    <Buscador
      backgroundImage={"url(/banners/banner_trenes.webp)"}
      buscador={<Buscador_Trenes />}
      destacados={<Destacados destacados={destacados} columnas={3} filas={2} />}
    />
  );
}

export default Trenes;
