import { FaCheck } from "react-icons/fa";

function Incluido({ producto }) {
  return (
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
        <span className="tw-text-red-700 tw-font-semibold">No Incluido</span>
        <ul className="tw-text-slate-600">
          {producto.excluidas.map((excluidas, index) => (
            <li
              key={index}
              className="tw-flex tw-items-center tw-text-slate-400"
            >
              <span className="tw-text-sm tw-mr-1 tw-text-danger">X</span>
              {excluidas}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Incluido;
