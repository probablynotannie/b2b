import { FaCar } from "react-icons/fa";
import { MdSevereCold } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";

function Cajas({ selectedCars }) {
  // Find the highest and lowest price in selectedCars
  const prices = selectedCars.map((car) => car.precio);
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-slate-500 dark:text-slate-400">
          <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-900 dark:text-slate-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Coche
              </th>
              <th scope="col" className="px-6 py-3">
                Puertas
              </th>
              <th scope="col" className="px-6 py-3">
                Pasajeros
              </th>
              <th scope="col" className="px-6 py-3">
                AC
              </th>
              <th scope="col" className="px-6 py-3">
                Cambio
              </th>
              <th scope="col" className="px-6 py-3">
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
                  className="bg-white border-b dark:bg-slate-800 dark:border-slate-700"
                >
                  <Link to={"/coche"} state={coche}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white"
                    >
                      {coche.nombre}
                    </th>
                  </Link>
                  <td className="px-6 py-4">{coche.puertas}</td>
                  <td className="px-6 py-4">{coche.capacidad}</td>
                  <td className="px-6 py-4">
                    {coche.AC === true ? "Sí" : "No"}
                  </td>
                  <td className="px-6 py-4">{coche.cambio}</td>
                  <td
                    className={`px-6 py-4 ${
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
