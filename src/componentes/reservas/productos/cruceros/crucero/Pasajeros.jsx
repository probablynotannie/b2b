import { useState } from "react";

function Reserva({ pasajeros, setPasajeros }) {
  const [pasajerosInput, setPasajerosInput] = useState(0);
  function handlePasajeros(e) {
    const numberOfPassengers = parseInt(e.target.value);
    setPasajerosInput(numberOfPassengers);

    const newPasajeros = Array.from({ length: numberOfPassengers }).map(
      (_, index) => ({
        id: index + 1,
        age: 30,
        discount: 0,
      })
    );
    setPasajeros(newPasajeros);
  }
  function calcularDescuento(age) {
    if (age < 6) {
      return 100; // 50% descuento
    } else if (age >= 6 && age <= 16) {
      return 25; // 25% descuento
    } else if (age >= 16 && age <= 60) {
      return 0;
    } else if (age > 60) {
      return 60;
    }
  }

  function handleAgeChange(index, age) {
    const updatedPasajeros = [...pasajeros];
    updatedPasajeros[index].age = age;
    updatedPasajeros[index].discount = calcularDescuento(age);

    setPasajeros(updatedPasajeros);
  }

  return (
    <div className="tw-min-h-[10vh] tw-my-10 tw-p-4 tw-rounded-lg tw-border-y-2 tw-border-slate-100 dark:tw-border-slate-700">
      <span className="tw-font-semibold dark:tw-text-secondary">Pasajeros</span>
      <div>
        <select
          onChange={handlePasajeros}
          value={pasajerosInput}
          id="countries"
          className="tw-bg-slate-50 tw-border tw-w-full md:tw-w-fit tw-my-3 tw-border-slate-300 tw-text-slate-900 tw-text-sm tw-rounded-lg tw-block tw-p-2.5 dark:tw-bg-slate-900 dark:tw-border-slate-700 dark:placeholder-slate-400 dark:tw-text-white"
        >
          <option value="" defaultChecked>
            Número pasajeros
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <span className="tw-font-semibold dark:tw-text-secondary">
          Edad de los pasajeros
        </span>

        <div className="tw-flex tw-flex-row tw-flex-wrap tw-gap-3">
          {pasajeros.map((pasajero, index) => (
            <select
              key={index}
              value={pasajero.age}
              onChange={(e) => handleAgeChange(index, parseInt(e.target.value))}
              className="tw-w-full md:tw-w-fit tw-bg-slate-50 tw-border tw-border-slate-300 tw-text-slate-900 tw-text-sm tw-rounded-lg tw-block tw-p-2.5 dark:tw-bg-slate-900 dark:tw-border-slate-700 dark:placeholder-slate-400 dark:tw-text-white"
            >
              <option disabled>Edad pasajero {index + 1}</option>
              {Array.from({ length: 100 }).map((_, age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reserva;
