import { FaPerson, FaClock } from "react-icons/fa6";
function Destacados() {
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
      origen: "Barcelona aeropuerto",
      destino: "Barcelona centro",
      personas: 2,
      img: "/transfers/barcelona.jpg",
      salida: getAdjustedTime(),
    },
    {
      id: 1,
      origen: "Madrid aeropuerto",
      destino: "Madrid centro",
      personas: 2,
      img: "/transfers/madrid.jpg",
      salida: getAdjustedTime(),
    },
    {
      id: 2,
      origen: "Sevilla aeropuerto",
      destino: "Sevilla centro",
      personas: 2,
      img: "/transfers/sevilla.jpg",
      salida: getAdjustedTime(),
    },
    {
      id: 3,
      origen: "Valencia aeropuerto",
      destino: "Valencia centro",
      personas: 2,
      img: "/transfers/valencia.jpg",
      salida: getAdjustedTime(),
    },
    {
      id: 4,
      origen: "Barcelona Centro",
      destino: "Barcelona Aeropuerto",
      personas: 2,
      img: "/transfers/barcelona.jpg",
      salida: getAdjustedTime(),
    },
    {
      id: 5,
      origen: "Madrid Centro",
      destino: "Madrid Aeropuerto",
      personas: 2,
      img: "/transfers/madrid.jpg",
      salida: getAdjustedTime(),
    },
  ];
  return (
    <div className="tw-p-5 tw-mt-5">
      <h2 className="tw-text-2xl tw-font-semibold dark:tw-text-white">Búsqueda rápida</h2>
      <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-5 tw-mt-4">
        {destacados.map((destacado) => (
          <div
            key={destacado.id}
            className="tw-relative tw-group tw-rounded-lg tw-overflow-hidden tw-shadow-md tw-transition tw-duration-300 tw-cursor-pointer"
            role="button"
          >
            <img
              src={destacado.img}
              className="tw-w-full tw-h-[15vh] md:tw-h-[20vh] tw-object-cover tw-transition-transform tw-duration-300 group-hover:tw-scale-105"
              alt={`Reserva de ${destacado.origen} a ${destacado.destino}`}
            />
            <div className="tw-absolute tw-inset-0 tw-bg-indigo-900 tw-bg-opacity-60 group-hover:tw-bg-opacity-70 tw-transition tw-duration-300 tw-flex tw-items-center tw-justify-center">
              <div className="tw-text-white tw-text-center tw-px-3">
                <h3 className="tw-text-2xl tw-font-semibold">
                  {destacado.origen} - {destacado.destino}
                </h3>
                <ul className="tw-flex tw-gap-3 tw-justify-center tw-mt-2 tw-text-sm">
                  <li className="tw-flex tw-items-center tw-gap-1">
                    <FaPerson /> {destacado.personas}x Adultos
                  </li>
                  <li className="tw-flex tw-items-center tw-gap-1">
                    <FaClock /> {destacado.salida}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destacados;
