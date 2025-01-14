import { useLocation } from "react-router-dom";
import Tren from "../detalles/Tren";
import Map from "../Mapa";
import DatosTren from "../detalles/DatosTren";
import DatosContacto from "../../../estructura/DatosContacto";
function Reserva() {
  const location = useLocation();
  const { ida, vuelta, datosContacto } = location.state || {};
  console.log(ida);
  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <h1 className="font-bold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-800 pb-2">
          Reservando tren de ida {vuelta && " y vuelta"}
        </h1>
        <DatosContacto
          nombre={datosContacto.nombre}
          apellidos={datosContacto.apellidos}
          email={datosContacto.email}
          numero={datosContacto.numero}
        />
        <section className="flex flex-col gap-4">
          <Tren tren={ida} tipo="ida" cesta={true} />
          <Map tren={ida} />
        </section>
        <section className="mt-5">
          {vuelta && (
            <section className="flex flex-col gap-4">
              <Tren tren={vuelta} tipo="vuelta" cesta={true} />
              <Map tren={vuelta} />
            </section>
          )}
        </section>
      </section>
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Resumen
        </h2>
        <DatosTren tren={ida} tipo="ida" />
        {vuelta && <DatosTren tren={vuelta} tipo="vuelta" />}
        <button className="w-full bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
          {(
            ida.price +
            ida.claseElegida.precioExtra +
            (vuelta && vuelta.price + vuelta.claseElegida.precioExtra)
          ).toFixed(2)}
          €
        </button>
      </article>
    </main>
  );
}

export default Reserva;
