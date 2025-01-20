import { useLocation } from "react-router-dom";
import DatosContacto from "../../../estructura/DatosContacto";
import Reserva from "../../../estructura/reserva/Resumen";
import Aside from "../seleccion/Aside";
import Detalles from "../seleccion/Detalles";
function ReservaFinal() {
  const location = useLocation();
  const { selectedHotel, ida, vuelta, datosContacto } = location.state || {};
  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <h1 className="font-bold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-800 pb-2">
          Reservando coche
        </h1>
        <DatosContacto
          nombre={datosContacto.nombre}
          apellidos={datosContacto.apellido}
          email={datosContacto.email}
          numero={datosContacto.numero}
        />
        <Detalles ida={ida} vuelta={vuelta} hotel={selectedHotel} />
      </section>
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Resumen
        </h2>
        <div className="flex flex-col gap-3">
          <Reserva img={selectedHotel.img} txt={"Hotel + vuelo"} />
          <Aside ida={ida} vuelta={vuelta} hotel={selectedHotel} />
        </div>
        <button className="w-full bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
          {(
            Number(selectedHotel.precio) +
            Number(ida.flight.precio) +
            (vuelta ? Number(vuelta.flight.precio) : 0)
          ).toFixed(2)}
          €
        </button>
      </article>
    </main>
  );
}

export default ReservaFinal;
