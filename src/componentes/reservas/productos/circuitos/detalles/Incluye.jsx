import { FaCheck } from "react-icons/fa";

function Incluye({ incluido, no_incluido }) {
  return (
    <>
      <h3 className="text-lg font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2">
        <FaCheck className="text-sm" />
        Incluidos en el precio
      </h3>
      <ul>
        {incluido.map((incluido, index) => (
          <li key={index}>{incluido}</li>
        ))}
      </ul>
      <div className="mt-2">
        <h3 className="text-lg font-bold text-red-600 dark:text-red-400 mb-2  flex items-center gap-2">
          <span className="text-red-500">X</span>
          No incluidos en el precio
        </h3>
        <ul>
          {no_incluido.map((incluido, index) => (
            <li key={index}>{incluido}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Incluye;
