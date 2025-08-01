import Buscador_Coches from "./buscadores/coches/Buscador_Coches";
import Destacados from "./buscadores/destacados/Destacados";
import Buscador from "./buscador/Buscador";
function Coches() {
  const getAdjustedTime = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 30);
    return now.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };
  const destacados = [
    {
      id: 0,
      titulo: "Barcelona aeropuerto - Barcelona centro",
      img: "/transfers/barcelona.jpg",
      descripcion: `2x Adultos · ${getAdjustedTime()}`,
    },
    {
      id: 1,
      titulo: "Madrid aeropuerto - Madrid centro",
      img: "/transfers/madrid.jpg",
      descripcion: `2x Adultos · ${getAdjustedTime()}`,
    },
    {
      id: 2,
      titulo: "Sevilla aeropuerto - Sevilla centro",
      img: "/transfers/sevilla.jpg",
      descripcion: `2x Adultos · ${getAdjustedTime()}`,
    },
    {
      id: 3,
      titulo: "Valencia aeropuerto - Valencia centro",
      img: "/transfers/valencia.jpg",
      descripcion: `2x Adultos · ${getAdjustedTime()}`,
    },
    {
      id: 4,
      titulo: "Barcelona Centro - Barcelona Aeropuerto",
      img: "/transfers/barcelona.jpg",
      descripcion: `2x Adultos · ${getAdjustedTime()}`,
    },
    {
      id: 5,
      titulo: "Madrid Centro - Madrid Aeropuerto",
      img: "/transfers/madrid.jpg",
      descripcion: `2x Adultos · ${getAdjustedTime()}`,
    },
  ];
  return (
    <Buscador
      destacados={
        <Destacados destacados={destacados} max={2} columnas={2} filas={2} />
      }
      buscador={<Buscador_Coches />}
      backgroundImage={"url(/banners/banner_coches.webp"}
    />
  );
}

export default Coches;
