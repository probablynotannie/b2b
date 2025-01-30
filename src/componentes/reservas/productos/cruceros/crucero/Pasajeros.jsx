import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Reserva({ pasajeros, setPasajeros }) {
  const [pasajerosInput, setPasajerosInput] = useState(0);

  function handlePasajeros(count) {
    setPasajerosInput(count);

    const newPasajeros = Array.from({ length: count }).map((_, index) => ({
      id: index + 1,
      age: 30,
      discount: 0,
    }));

    setPasajeros(newPasajeros);
  }

  function calcularDescuento(age) {
    if (age < 6) return 100;
    if (age >= 6 && age <= 16) return 25;
    if (age >= 16 && age <= 60) return 0;
    if (age > 60) return 60;
  }

  function handleAgeChange(index, age) {
    const updatedPasajeros = [...pasajeros];
    updatedPasajeros[index].age = age;
    updatedPasajeros[index].discount = calcularDescuento(age);
    setPasajeros(updatedPasajeros);
  }

  return (
    <div className="tw-min-h-[10vh] tw-my-10 tw-p-6 tw-rounded-lg tw-border tw-border-slate-200 dark:tw-border-slate-700 tw-shadow hover:tw-shadow-lg tw-transition tw-duration-300">
      <div className="tw-mb-5">
        <span className="tw-font-semibold dark:tw-text-secondary tw-text-lg">
          Seleccionar Pasajeros
        </span>
        <div className="tw-flex tw-gap-2 tw-mt-3">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              onClick={() => handlePasajeros(num)}
              className={`tw-p-2 tw-rounded-lg tw-font-semibold tw-w-12 tw-text-sm ${
                pasajerosInput === num
                  ? "tw-bg-secondary tw-text-white"
                  : "tw-bg-slate-200 dark:tw-bg-slate-800 tw-text-slate-700 dark:tw-text-white hover:tw-bg-slate-300 dark:hover:tw-bg-slate-700"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
      {pasajeros.length > 0 && (
        <div>
          <span className="tw-font-semibold dark:tw-text-secondary tw-text-lg">
            Edad de los pasajeros
          </span>
          <div className="tw-flex tw-gap-4 tw-mt-3">
            {pasajeros.map((pasajero, index) => (
              <div key={index} className="tw-flex tw-flex-col tw-items-center">
                <label className="tw-text-sm tw-font-semibold tw-text-slate-600 dark:tw-text-slate-300">
                  Pasajero {index + 1}
                </label>
                <div className="tw-relative tw-w-full md:tw-w-fit">
                  <select
                    value={pasajero.age}
                    onChange={(e) =>
                      handleAgeChange(index, parseInt(e.target.value))
                    }
                    className="tw-bg-white tw-border tw-border-slate-300 tw-text-slate-900 tw-text-sm tw-rounded-lg tw-block tw-p-3 dark:tw-bg-slate-900 dark:tw-border-slate-700 dark:tw-text-white tw-w-full md:tw-w-28 tw-pr-8 tw-shadow-sm focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-blue-500"
                  >
                    {Array.from({ length: 100 }).map((_, age) => (
                      <option key={age} value={age}>
                        {age}
                      </option>
                    ))}
                  </select>
                  <span className="tw-absolute tw-inset-y-0 tw-right-2 tw-flex tw-text-lg  tw-items-center  tw-pointer-events-none">
                    <FaChevronDown className="tw-bg-white dark:tw-bg-slate-900 dark:tw-text-white" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Reserva;
