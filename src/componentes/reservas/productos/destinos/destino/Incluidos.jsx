import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Incluidos({ destino }) {
  return (
    <div>
      <div className="tw-grid md:tw-grid-cols-2 tw-gap-5">
        <div>
          <h3 className="tw-font-semibold tw-pl-3 tw-bg-green-100 dark:tw-bg-green-800 dark:tw-text-white tw-rounded tw-p-1 tw-mb-2">
            Incluido:
          </h3>
          {destino.incluidos.map((incluido, index) => (
            <p
              className="tw-flex tw-items-center tw-gap-2 tw-pl-5 dark:tw-text-slate-400"
              key={index}
            >
              <FaCheck className="tw-text-green-700" />
              {incluido}
            </p>
          ))}
        </div>
        <div>
          <h3 className="tw-font-semibold tw-pl-3 tw-bg-red-100 dark:tw-bg-red-800 dark:tw-text-white tw-rounded tw-p-1 tw-mb-2">
            No Incluido:
          </h3>
          {destino.no_incluidos.map((incluido, index) => (
            <p
              className="tw-flex tw-items-center tw-gap-2 tw-pl-5 dark:tw-text-slate-400"
              key={index}
            >
              <ImCross className="tw-text-red-500" />
              {incluido}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Incluidos;
