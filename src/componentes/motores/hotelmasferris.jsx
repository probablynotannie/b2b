import Buscador_HotelMasFerry from "./buscadores/hotelmasferri/Buscador_hotelferry";
import Destacados from "./buscadores/destacados/Destacados";
import destacados from "./buscadores/hotelmasferri/destacados.json";
import Buscador from "./buscador/Buscador";

function HotelMasFerris() {
  return (
    <Buscador
      backgroundImage={"url(/banners/banner_hoteles.webp)"}
      buscador={<Buscador_HotelMasFerry />}
      destacados={<Destacados destacados={destacados} columnas={3} filas={2} />}
    />
  );
}

export default HotelMasFerris;
