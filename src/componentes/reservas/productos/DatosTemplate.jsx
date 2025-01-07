import Reserva from "../../../datos/Reserva";
import { useLocation } from "react-router-dom";
function Vuelo() {
  const location = useLocation();
  const { ida, vuelta } = location.state || {};
  function formatFecha(fechaISO) {
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const [year, month, day] = fechaISO.split("-");
    const mes = meses[parseInt(month, 10) - 1];
    return `${parseInt(day, 10)} de ${mes} de ${year}`;
  }
  const img = "/banner_avion.jpg";
  const itinerario = ida.flight.salida + " - " + ida.flight.llegada;
  const fechaIda = formatFecha(ida.flight.outboundDate);
  const fechaVuelta = vuelta?.flight?.returnDate
    ? formatFecha(vuelta.flight.returnDate)
    : null;
  return (
    <main className="my-10  flex justify-center container min-h-[68vh]">
      <article className="p-5 w-full border-2 border-slate-200 dark:border-slate-800 rounded-xl shadow-xl bg-white dark:bg-slate-800">
        <form>
          <h1 className="font-semibold text-xl">Datos Contacto</h1>
        </form>
        <Reserva
          img={img}
          position={"center"}
          tipo={"vuelo"}
          itinerario={itinerario}
          fechaIda={fechaIda}
          fechaVuelta={fechaVuelta}
        />
      </article>
    </main>
  );
}

export default Vuelo;
