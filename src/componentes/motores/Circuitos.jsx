import Buscador_Circuitos from "./buscadores/circuitos/Buscador_Circuitos";
import Destacados from "./buscadores/destacados/Destacados";
import destacados from "./buscadores/circuitos/destacados.json";
import Buscador from "./buscador/Buscador";

function Circuitos() {
  return (
    <Buscador
      destacados={
        <Destacados destacados={destacados} max={2} columnas={2} filas={2} />
      }
      buscador={<Buscador_Circuitos />}
      backgroundImage={"url(/banners/banner_circuitos.webp)"}
    />
  );
}

export default Circuitos;
