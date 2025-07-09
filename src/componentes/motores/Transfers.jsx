import Sidebar from "./sidebar/Sidebar";
import Buscador_Transfers from "./buscadores/transfers/Buscador_Transfers";
import Destacados from "./buscadores/destacados/Destacados";
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
    <article className="lg:tw-grid tw-grid-cols-10  tw-gap-10 lg:tw-px-20 lg:tw-py-10 tw-min-h-[76vh]">
      <Sidebar />
      <div className="tw-col-span-10 lg:tw-col-span-7 xl:tw-col-span-8 tw-flex-col">
        <div
          className="tw-relative tw-h-fit md:tw-min-h-[25vh] lg:tw-rounded-lg lg:tw-shadow tw-flex"
          style={{
            backgroundImage: `url(/banners/banner_coches.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="tw-w-full tw-bg-indigo-500 dark:tw-bg-indigo-900 dark:tw-bg-opacity-60 tw-rounded tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-bg-opacity-40 tw-p-5 tw-flex tw-items-center tw-justify-center">
            <Buscador_Transfers />
          </div>
        </div>
        <Destacados destacados={destacados} columnas={4} filas={2} />
      </div>
    </article>
  );
}

export default Transfers;
