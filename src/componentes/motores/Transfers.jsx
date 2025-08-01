import Buscador_Transfers from "./buscadores/transfers/Buscador_Transfers";
import Destacados from "./buscadores/destacados/Destacados";
import Buscador from "./buscador/Buscador";

function Transfers() {
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
      backgroundImage={"url(/banners/banner_coches.webp)"}
      buscador={<Buscador_Transfers />}
      destacados={<Destacados destacados={destacados} columnas={3} filas={2} />}
    />
  );
}

export default Transfers;
