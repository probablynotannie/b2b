import { FaCheck } from "react-icons/fa";

function Incluye({ incluido, no_incluido, final }) {
  return (
    <div
      className={`${
        final === true && "md:flex justify-between"
      } dark:tw-text-slate-300`}
    >
      <div>
        <h3 className="tw-text-lg tw-font-bold tw-text-green-600 dark:tw-text-green-400 tw-mb-2 tw-flex tw-items-center tw-gap-2">
          <FaCheck className="tw-text-sm" />
          Incluidos en el precio
        </h3>
        <ul>
          {incluido.map((incluido, index) => (
            <li key={index}>{incluido}</li>
          ))}
        </ul>
      </div>
      <div className="tw-mt-2">
        <h3 className="tw-text-lg tw-font-bold tw-text-red-600 dark:tw-text-red-400 tw-mb-2 tw-flex tw-items-center tw-gap-2">
          <span className="tw-text-danger">X</span>
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
