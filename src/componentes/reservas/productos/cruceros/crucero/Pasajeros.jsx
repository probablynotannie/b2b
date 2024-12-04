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
  // Handle age change for each passenger
  function handleAgeChange(index, age) {
    const updatedPasajeros = [...pasajeros];
    updatedPasajeros[index].age = age;
    updatedPasajeros[index].discount = calcularDescuento(age);

    setPasajeros(updatedPasajeros);
  }

  return (
    <div className="min-h-[10vh] my-10 p-4 rounded-lg">
      <span className="font-semibold dark:text-secondary">Pasajeros</span>
      <div>
        <select
          onChange={handlePasajeros}
          value={pasajerosInput}
          id="countries"
          className="bg-slate-50 border w-full md:w-fit my-3 border-slate-300 text-slate-900 text-sm rounded-lg block p-2.5 dark:bg-slate-900 dark:border-slate-700 dark:placeholder-slate-400 dark:text-white"
        >
          <option value="" defaultChecked>
            Número pasajeros
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <span className="font-semibold dark:text-secondary">
          Edad de los pasajeros
        </span>

        <div className="flex flex-row flex-wrap gap-3">
          {pasajeros.map((pasajero, index) => (
            <select
              key={index}
              value={pasajero.age}
              onChange={(e) => handleAgeChange(index, parseInt(e.target.value))}
              className="w-full md:w-fit bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg block p-2.5 dark:bg-slate-900 dark:border-slate-700 dark:placeholder-slate-400 dark:text-white "
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
