import { useLocation, useNavigate } from "react-router-dom";
import Aside from "../Aside";
import Detalles from "./Detalles";
import Reserva from "../../../estructura/reserva/Resumen";
import DatosContacto from "../../../estructura/DatosContacto";

function ReservaFinal() {
  const location = useLocation();
  const { productos, total, data } = location.state;
  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-grid tw-gird-cols-1 tw-gap-y-5">
        <section className="tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
          <h1 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
            Reservando combinado de {productos.length} productos
          </h1>
          <DatosContacto
            nombre={data.nombre}
            apellidos={data.apellido}
            numero={data.numero}
            email={data.email}
          />
        </section>
        <Detalles datosContacto={data} productos={productos} />
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Datos de pasajero
        </h2>
        <Reserva
          img={"/banners/banner_combinado.jpg"}
          txt={"Combinado de " + productos.length + " productos"}
        />
        <div className="tw-divide-y tw-divide-slate-100 dark:tw-divide-slate-700 tw-space-y-4 tw-my-4">
          {productos.map((producto, index) => (
            <Aside key={index} producto={producto} />
          ))}
        </div>
        <button className="tw-w-full tw-bg-secondary dark:tw-bg-green-600 tw-rounded-lg hover:tw-shadow-lg tw-transition tw-duration-300 tw-text-white tw-p-3 tw-font-semibold tw-mt-2">
          {total}€
        </button>
      </article>
    </main>
  );
}

export default ReservaFinal;
