import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import DatosContacto from "../../../../../helpers/visuales/ReservaFinal/DatosContacto";
import Resumen from "../../../../../helpers/visuales/ReservaFinal/Resumen";
import Detalles from "./Entradas";
function ResumenFinal() {
  const location = useLocation();
  const { producto, tickets, data } = location.state || {};
  const numReserva = "HGALIUHJ198AJK";
  return (
    <main className="tw-container tw-min-h-[55vh] tw-my-10 tw-p-5">
      <section>
        <Resumen
          img={"/banners/completado.webp"}
          txt={
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center">
              <h1 className="tw-text-7xl">Reserva Finalizada</h1>
              <h2 className="tw-text-6xl">ID: {numReserva}</h2>
            </div>
          }
          finalizada={true}
        />
      </section>
      <Detalles producto={producto} tickets={tickets} cesta={true} />
      <div className="tw-mt-10 tw-p-5 tw-border-2 tw-border-slate-100 dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-rounded-lg tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300">
        <DatosContacto
          nombre={data.nombre}
          apellidos={data.apellido}
          email={data.email}
          numero={data.numero}
        />
        <div className="tw-mt-10 tw-flex tw-justify-end">
          <Link to={"/"}>
            <button className="tw-bg-slate-400 dark:tw-bg-slate-700 tw-p-3 tw-font-bold tw-text-white tw-rounded-lg">
              Volver a la página principal
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ResumenFinal;
