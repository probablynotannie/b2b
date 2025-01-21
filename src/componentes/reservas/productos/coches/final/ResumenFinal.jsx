import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import DatosContacto from "../../../estructura/DatosContacto";
import Resumen from "../../../estructura/reserva/Resumen";
import Coche from "./Coche";
function ResumenFinal() {
  const location = useLocation();
  const { producto, selectedExtras, precio, datosContacto, conductor } =
    location.state || {};
  const numReserva = "HGALIUHJ198AJK";
  return (
    <main className="container min-h-[55vh] my-10 p-5">
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
      <Coche
        producto={producto}
        extras={selectedExtras}
        conductor={conductor}
        precio={precio}
      />
      <div className="mt-10 p-5 border-2 border-slate-100 dark:bg-slate-800 dark:border-slate-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <DatosContacto
          nombre={datosContacto.nombre}
          apellidos={datosContacto.apellido}
          email={datosContacto.email}
          numero={datosContacto.numero}
        />
        <div className="mt-10 flex justify-end ">
          <Link to={"/"}>
            <button className="bg-slate-400 dark:bg-slate-700 p-3 font-bold text-white rounded-lg">
              Volver a la página principal
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ResumenFinal;
