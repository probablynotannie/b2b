import { FaCar } from "react-icons/fa";
import { MdSevereCold } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";

function Cajas({ selectedCars }) {
  const prices = selectedCars.map((car) => car.precio);
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);

  return (
    <div>
      <div className="tw-relative tw-overflow-x-auto tw-mt-5">
        <table className="tw-w-full tw-text-sm tw-text-left rtl:tw-text-right tw-text-slate-500  dark:tw-text-slate-200">
          <thead className="tw-text-xs tw-text-slate-700 tw-uppercase tw-bg-slate-50 dark:tw-bg-slate-900 dark:tw-text-slate-400">
            <tr>
              <th scope="col" className="tw-px-6 tw-py-3">
                Coche
              </th>
              <th scope="col" className="tw-px-6 tw-py-3">
                Puertas
              </th>
              <th scope="col" className="tw-px-6 tw-py-3">
                Pasajeros
              </th>
              <th scope="col" className="tw-px-6 tw-py-3">
                AC
              </th>
              <th scope="col" className="tw-px-6 tw-py-3">
                Cambio
              </th>
              <th scope="col" className="tw-px-6 tw-py-3">
                Precio
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedCars.map((coche, index) => {
              const isHighestPrice = coche.precio === highestPrice;
              const isLowestPrice = coche.precio === lowestPrice;

              return (
                <tr
                  key={index}
                  className="tw-bg-white tw-border-b dark:tw-bg-slate-800 dark:tw-border-slate-700"
                >
                  <Link to={"/coche"} state={coche}>
                    <th
                      scope="row"
                      className="tw-px-6 tw-py-4 tw-font-medium tw-text-slate-900 tw-whitespace-nowrap dark:tw-text-white"
                    >
                      {coche.nombre}
                    </th>
                  </Link>
                  <td className="tw-px-6 tw-py-4">{coche.puertas}</td>
                  <td className="tw-px-6 tw-py-4">{coche.capacidad}</td>
                  <td className="tw-px-6 tw-py-4">
                    {coche.AC === true ? "Sí" : "No"}
                  </td>
                  <td className="tw-px-6 tw-py-4">{coche.cambio}</td>
                  <td
                    className={`tw-px-6 tw-py-4 ${
                      isHighestPrice
                        ? "bg-red-400 dark:bg-red-800 text-white"
                        : isLowestPrice
                        ? "bg-green-400 dark:bg-green-800 text-white"
                        : ""
                    }`}
                  >
                    {coche.precio}/€día
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cajas;
