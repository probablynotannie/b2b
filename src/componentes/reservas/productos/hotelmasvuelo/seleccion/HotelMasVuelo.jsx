import { useLocation } from "react-router-dom";
import Detalles from "./Detalles";
import Aside from "./Aside";
import { Link } from "react-router-dom";
function HotelMasVuelo() {
  const location = useLocation();
  const { ida, vuelta, selectedHotel, habitacion } = location.state;

  return (
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 tw-mb-20 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <h1 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
          Reservando Hotel + Vuelo
        </h1>
        <Detalles hotel={selectedHotel} ida={ida} vuelta={vuelta} />
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
          Resumen
        </h2>
        <Aside hotel={selectedHotel} ida={ida} vuelta={vuelta} />
        <Link to={"/datoshotelmasvuelo"} state={{ ida, vuelta, selectedHotel,habitacion }}>
          <button className=" tw-btn_accesorios tw-btn_primario tw-w-full">
            {(
              Number(selectedHotel.precio) +
              Number(ida.flight.precio) +
              (vuelta ? Number(vuelta.flight.precio) : 0)
            ).toFixed(2)}
            €
          </button>
        </Link>
      </article>
    </main>
  );
}

export default HotelMasVuelo;
