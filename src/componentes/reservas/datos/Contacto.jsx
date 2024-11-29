import Datos from "./Datos";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Contacto() {
  const location = useLocation();
  const reserva = location.state;
  console.log("reserva", reserva);

  const typeToBackground = {
    destino: {
      image: "/banner_hoteles.jpg",
      position: "50% 30%",
    },
    hotel: {
      image: "/banner_destinos.jpg",
      position: "50% 80%",
    },
    vuelo: {
      image: "/banner_avion.jpg",
      position: "50% 45%",
    },
    hotelmasvuelo: {
      image: "/banner_avion.jpg",
      position: "50% 45%",
    },
    entradas: {
      image: "/banner_entradas.jpg",
      position: "50% 45%",
    },
    coche: {
      image: "/banner_coches.jpg",
      position: "50% 45%",
    },
    ferri: {
      image: "/banner_trenes.jpg",
      position: "50% 45%",
    },
    crucero: {
      image: "/banner_cruise.jfif",
      position: "50% 45%",
    },
  };

  const defaultBackground = {
    image: "/banner_destinos.jpg",
    position: "center center",
  };

  const { image: backgroundImageUrl, position: backgroundPosition } =
    typeToBackground[reserva.type] || defaultBackground;

  return (
    <main className="my-10 flex justify-center container min-h-[68vh]">
      <article className="w-full border-2 border-slate-200 dark:border-slate-800 rounded-xl shadow-xl bg-white dark:bg-slate-800">
        <section>
          <Datos />
        </section>
        <section className="pt-10 mb-10 border-t-2 border-slate-100 dark:border-slate-700 mx-5">
          <h3 className="text-lg font-semibold ml-4 dark:text-white">
            Tus productos
          </h3>
          <div className="px-3 min-h-48">
            <div
              className="bg-cover border-2 dark:border-slate-800 dark:shadow-md dark:shadow-slate-700 shadow-md rounded-xl w-full h-full"
              style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: backgroundPosition,
              }}
            >
              <div className="bg-black rounded-xl w-full h-[30vh] bg-opacity-45 flex justify-center items-center flex-col">
                <h4 className="text-white font-bold text-4xl">
                  {reserva.producto}
                </h4>
                <div className="flex flex-col justify-center items-center text-white">
                  <span className="font-semibold text-4xl text-center">
                    {reserva.nombre}
                  </span>
                  <p className="text-slate-300 text-center px-4">
                    <span className="block">{reserva.fechaIda}</span>
                    {reserva.fechaVuelta && (
                      <span> - {reserva.fechaVuelta}</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="my-10 mx-8 flex justify-end">
          <Link to="/cesta">
            <button className="bg-secondary dark:bg-slate-900 lg:w-fit w-full p-3 px-10 rounded-xl shadow-lg hover:shadow-xl dark:shadow-slate-800 transition text-white font-bold">
              Siguiente
            </button>
          </Link>
        </div>
      </article>
    </main>
  );
}

export default Contacto;
