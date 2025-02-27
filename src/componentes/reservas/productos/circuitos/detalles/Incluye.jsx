import { FaCheck } from "react-icons/fa";

function Incluye({ incluido, no_incluido, final }) {
  return (
    <div
      className={`${
        final === true && "md:flex justify-between"
      } dark:tw-text-slate-300`}
    >
      <div>
        <h3 className="text-lg font-bold text-green-600 dark:tw-text-green-400 mb-2 flex items-center gap-2">
          <FaCheck className="text-sm" />
          Incluidos en el precio
        </h3>
        <ul>
          {incluido.map((incluido, index) => (
            <li key={index}>{incluido}</li>
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <h3 className="text-lg font-bold text-red-600 dark:tw-text-red-400 mb-2  flex items-center gap-2">
          <span className="text-red-500">X</span>
          No incluidos en el precio
        </h3>
        <ul>
          {no_incluido.map((incluido, index) => (
            <li key={index}>{incluido}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Incluye;
