import Buscador_Hotel_Mas_Actividades from "./buscadores/hotelmasactividades/Buscador_Hotel_Mas_Actividades";
import Destacados from "./buscadores/destacados/Destacados";
import destacados from "./buscadores/hotelmasactividades/destacados.json";
import Buscador from "./buscador/Buscador";

function Entradas() {
  return (
    <Buscador
      backgroundImage={"url(/banners/banner_entradas.webp)"}
      buscador={<Buscador_Hotel_Mas_Actividades />}
      destacados={<Destacados destacados={destacados} columnas={3} filas={2} />}
    />
  );
}

export default Entradas;
