import Buscador_Destinos from "./buscadores/destinos/Buscador_Destinos";
import destacados from "./buscadores/destinos/destacados.json";
import Destacados from "./buscadores/destacados/Destacados";
import Buscador from "./buscador/Buscador";

function Destinos() {
  return (
    <Buscador
      destacados={<Destacados destacados={destacados} max={5} columnas={3} />}
      buscador={<Buscador_Destinos />}
      backgroundImage={"url(/banners/banner_hoteles.webp)"}
    />
  );
}

export default Destinos;
