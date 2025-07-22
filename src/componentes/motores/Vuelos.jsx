import Sidebar from "./sidebar/Sidebar";
import Buscador_Vuelos from "./buscadores/vuelos/Buscador_Vuelos";
import Destacados from "./buscadores/destacados/Destacados";
import destacados from "./buscadores/vuelos/destacados.json";
import Buscador from "./buscador/Buscador";

function Vuelos() {
  return (
    <Buscador
      backgroundImage={"url(/banners/banner_avion.webp)"}
      buscador={<Buscador_Vuelos />}
      destacados={<Destacados destacados={destacados} columnas={3} filas={2} />}
    />
  );
}
export default Vuelos;
