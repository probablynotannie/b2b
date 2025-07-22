import Buscador_Hoteles from "./buscadores/hoteles/Buscador_Hoteles";
import destacados from "./buscadores/hoteles/destacados.json";
import Destacados from "./buscadores/destacados/Destacados";
import Buscador from "./buscador/Buscador";
function Hoteles() {
  return (
    <Buscador
      backgroundImage={"url(/banners/banner_hoteles.webp)"}
      buscador={<Buscador_Hoteles />}
      destacados={<Destacados destacados={destacados} columnas={3} filas={2} />}
    />
  );
}

export default Hoteles;
