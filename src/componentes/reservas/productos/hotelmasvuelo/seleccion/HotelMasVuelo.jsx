import { useLocation } from "react-router-dom";
import Detalles from "./Detalles";
import Aside from "./Aside";
import { Link } from "react-router-dom";
function HotelMasVuelo() {
  const location = useLocation();
  const { ida, vuelta, selectedHotel, habitacion } = location.state;

  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:border-slate-700 dark:bg-slate-900 p-5">
        <h1 className="font-bold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-800 pb-2">
          Reservando Hotel + Vuelo
        </h1>
        <Detalles hotel={selectedHotel} ida={ida} vuelta={vuelta} />
      </section>
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:text-slate-200 dark:border-slate-700 pb-2">
          Resumen
        </h2>
        <Aside hotel={selectedHotel} ida={ida} vuelta={vuelta} />
        <Link to={"/datoshotelmasvuelo"} state={{ ida, vuelta, selectedHotel,habitacion }}>
          <button className="w-full bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
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
