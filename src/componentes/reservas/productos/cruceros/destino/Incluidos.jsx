import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Incluidos({ destino }) {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <h3 className="font-semibold pl-3 bg-green-100 dark:bg-green-800 dark:text-white rounded p-1 mb-2">
            Incluido:
          </h3>
          {destino.incluidos.map((incluido, index) => (
            <p
              className="flex items-center gap-2 pl-5 dark:text-slate-400"
              key={index}
            >
              <FaCheck className="text-green-700" />
              {incluido}
            </p>
          ))}
        </div>
        <div>
          <h3 className="font-semibold pl-3 bg-red-100 dark:bg-red-800 dark:text-white rounded p-1 mb-2">
            No Incluido:
          </h3>
          {destino.no_incluidos.map((incluido, index) => (
            <p
              className="flex items-center gap-2 pl-5 dark:text-slate-400"
              key={index}
            >
              <ImCross className="text-red-500" />
              {incluido}
            </p>
          ))}
        </div>
      </div>
   
    </div>
  );
}

export default Incluidos;
