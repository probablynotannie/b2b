import ElegirEntradas from "./ElegirEntradas";
import { FaCheck } from "react-icons/fa";
function Detalles({ producto, tickets, setTickets, cesta }) {
  return (
    <>
      <section>
        <h1 className="font-semibold">{producto.titulo}</h1>
        <img
          src={producto.img}
          alt="imagen producto"
          className="w-full h-[30vh] object-top object-cover my-3 rounded "
        />
        <span className="text-sm">{producto.descripcion_corta}</span>
        <section className="grid grid-cols-2">
          <div>
            <span className="text-green-700 font-semibold">Incluido</span>
            <ul className="text-slate-600">
              {producto.incluido.map((incluido, index) => (
                <li key={index} className="flex items-center text-slate-400">
                  <FaCheck className="text-xs mr-1 text-green-500" />
                  {incluido}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-red-700 font-semibold">No Incluido</span>
            <ul className="text-slate-600">
              {producto.excluidas.map((excluidas, index) => (
                <li key={index} className="flex items-center text-slate-400">
                  <span className="text-sm mr-1 text-red-500">X</span>
                  {excluidas}
                </li>
              ))}
            </ul>
          </div>
        </section>
        {producto.importante && (
          <div className="bg-red-50 p-2 rounded mt-5">
            <h2 className="uppercase font-bold text-red-500">Importante</h2>
            <p>{producto.importante}</p>
          </div>
        )}
      </section>
      <section className="mt-5">
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
