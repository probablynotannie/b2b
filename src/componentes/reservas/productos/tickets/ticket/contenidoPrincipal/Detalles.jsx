import ElegirEntradas from "./apartados/ElegirEntradas";
import Descripcion from "./apartados/Descripcion";
function Detalles({ tickets, setTickets, cesta, ticket }) {
  return (
    <main className="tw-flex tw-flex-col tw-gap-5">
      <section>
        {cesta === true ? (
          ""
        ) : (
          <Descripcion img={ticket.img[0].L} ticket={ticket} />
        )}
      </section>
      <section className="tw-border-t-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pt-4">
        <ElegirEntradas
          cesta={cesta}
          tickets={tickets}
          setTickets={setTickets}
          producto={ticket}
        />
      </section>
    </main>
  );
}

export default Detalles;
