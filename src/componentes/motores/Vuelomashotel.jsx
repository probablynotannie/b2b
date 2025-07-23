import Buscador_HotVuelo from "./buscadores/hotelmasvuelo/Buscador_HotVuelo";
import Destacados from "./buscadores/destacados/Destacados";
import destacados from "./buscadores/hotelmasvuelo/destacados.json";
import Buscador from "./buscador/Buscador";

function HotelMasVuelo() {
  return (
    <Buscador
      backgroundImage={"url(/banners/banner_avion.webp)"}
      buscador={<Buscador_HotVuelo />}
      destacados={<Destacados destacados={destacados} columnas={3} filas={2} />}
    />
  );
}

export default HotelMasVuelo;
