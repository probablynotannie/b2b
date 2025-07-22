import Buscador_Seguros from "./buscadores/seguros/Buscador_Seguros";
import Destacados from "./buscadores/destacados/Destacados";
import destacados from "./buscadores/seguros/destacados";
import Buscador from "./buscador/Buscador";

function Seguros() {
  return (
    <Buscador
      backgroundImage={"url(/banners/banner_seguros.webp)"}
      buscador={<Buscador_Seguros />}
      destacados={<Destacados destacados={destacados} columnas={3} filas={2} />}
    />
  );
}
export default Seguros;
