import { useLocation } from "react-router-dom";
import DatosContacto from "../../../estructura/DatosContacto";
import { Link } from "react-router-dom";
import Resumen from "../../../estructura/reserva/Resumen";
import Vuelos from "./Vuelos";
function ResumenFinal() {
  const location = useLocation();
  const { ida, vuelta, data } = location.state || {};
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
      <Vuelos ida={ida} vuelta={vuelta} pasajeros={data.pasajeros} />
      <div className="tw-mt-10 tw-p-5 tw-border-2 tw-border-slate-100 dark:tw-bg-slate-800 dark:tw-border-slate-700 tw-rounded-lg tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-bg-white">
        <DatosContacto
          nombre={data.nombre}
          apellidos={data.apellido}
          email={data.email}
          numero={data.numero}
        />
        <div className="tw-mt-10 tw-flex tw-justify-end">
          <Link to={"/"}>
            <button className="tw-btn_muted tw-btn_accesorios dark:tw-btn_muted_dark">
              Volver a la página principal
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ResumenFinal;
