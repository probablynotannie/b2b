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
    <main className="tw-container min-h-[55vh] my-10 p-5">
      <section>
        <Resumen
          img={"/completado.jpg"}
          txt={
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-7xl">Reserva Finalizada</h1>
              <h2 className="text-6xl">ID: {numReserva}</h2>
            </div>
          }
          finalizada={true}
        />
      </section>
      <Vuelos ida={ida} vuelta={vuelta} pasajeros={data.pasajeros} />
      <div className="mt-10 p-5 border-2 border-slate-100 dark:tw-bg-slate-800 dark:tw-border-slate-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <DatosContacto
          nombre={data.nombre}
          apellidos={data.apellido}
          email={data.email}
          numero={data.numero}
        />
        <div className="mt-10 flex justify-end ">
          <Link to={"/"}>
            <button className="bg-slate-400 dark:tw-bg-slate-700 p-3 font-bold text-white rounded-lg">
              Volver a la página principal
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ResumenFinal;
