import Buscador_Ferris from "./buscadores/ferris/Buscador_Ferris";
import Destacados from "./buscadores/destacados/Destacados";
import destacados from "./buscadores/ferris/destacados.json";
import Buscador from "./buscador/Buscador";

function Ferris() {
  return (
    <Buscador
      destacados={
        <Destacados destacados={destacados} max={2} columnas={2} filas={2} />
      }
      buscador={<Buscador_Ferris />}
      backgroundImage={"url(/banners/banner_ferry.webp"}
    />
  );
}
export default Ferris;
