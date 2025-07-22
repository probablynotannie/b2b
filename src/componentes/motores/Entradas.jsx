import Buscador_Entradas from "./buscadores/entradas/Buscador_Entradas";
import destacados from "./buscadores/entradas/destacados.json";
import Destacados from "./buscadores/destacados/Destacados";
import Buscador from "./buscador/Buscador";

function Entradas() {
  return (
    <Buscador
      destacados={
        <Destacados destacados={destacados} max={2} columnas={2} filas={2} />
      }
      buscador={<Buscador_Entradas />}
      backgroundImage={"url(/banners/banner_entradas.webp)"}
    />
  );
}

export default Entradas;
