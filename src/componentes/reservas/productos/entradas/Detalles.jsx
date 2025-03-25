import ElegirEntradas from "./ElegirEntradas";
import { FaCheck } from "react-icons/fa";
function Detalles({ producto, tickets, setTickets, cesta, data }) {
  return (
    <>
      <section>
        {cesta === true ? (
          ""
        ) : (
          <>
            <h1 className="tw-font-semibold">{producto.titulo}</h1>
            <img
              src={producto.img}
              alt="imagen producto"
              className="tw-w-full tw-h-[30vh] tw-object-cover tw-object-top tw-my-3 tw-rounded"
            />
            <p className="tw-text-sm dark:tw-text-slate-200">
              {producto.descripcion_corta}
            </p>
          </>
        )}

        <section className="tw-grid md:tw-grid-cols-2">
          <div>
            <span className="tw-text-green-700 tw-font-semibold">Incluido</span>
            <ul className="tw-text-slate-600">
              {producto.incluido.map((incluido, index) => (
                <li
                  key={index}
                  className="tw-flex tw-items-center tw-text-slate-400"
                >
                  <FaCheck className="tw-text-xs tw-mr-1 tw-text-green-500" />
                  {incluido}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="tw-text-red-700 tw-font-semibold">
              No Incluido
            </span>
            <ul className="tw-text-slate-600">
              {producto.excluidas.map((excluidas, index) => (
                <li
                  key={index}
                  className="tw-flex tw-items-center tw-text-slate-400"
                >
                  <span className="tw-text-sm tw-mr-1 tw-text-red-500">X</span>
                  {excluidas}
                </li>
              ))}
            </ul>
          </div>
        </section>
        {producto.importante && (
          <div className="tw-bg-red-50 tw-p-2 dark:tw-bg-red-500 tw-rounded tw-mt-5">
            <h2 className="tw-uppercase tw-font-bold tw-text-red-500 dark:tw-text-white">
              Importante
            </h2>
            <p>{producto.importante}</p>
          </div>
        )}
      </section>
      <section className="tw-mt-5">
        <ElegirEntradas
          cesta={cesta}
          tickets={tickets}
          setTickets={setTickets}
          producto={producto}
        />
      </section>
    </>
  );
}

export default Detalles;
