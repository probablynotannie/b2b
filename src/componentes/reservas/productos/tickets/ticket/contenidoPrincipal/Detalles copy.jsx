import ElegirEntradas from "./apartados/ElegirEntradas";
import Incluido from "./apartados/Incluido";
import Imagen_Descripcion from "./apartados/Descripcion";
import ExtraInfo from "./apartados/ExtraInfo";
function Detalles({ producto, tickets, setTickets, cesta }) {
  return (
    <main className="tw-flex tw-flex-col tw-gap-5">
      <section>
        {cesta === true ? "" : <Imagen_Descripcion producto={producto} />}
        <section className="tw-mt-5">
          <Incluido producto={producto} />
        </section>
        {producto.importante && (
          <section>
            <ExtraInfo producto={producto} />
          </section>
        )}
      </section>
      <section>
        <ElegirEntradas
          cesta={cesta}
          tickets={tickets}
          setTickets={setTickets}
          producto={producto}
        />
      </section>
    </main>
  );
}

export default Detalles;
