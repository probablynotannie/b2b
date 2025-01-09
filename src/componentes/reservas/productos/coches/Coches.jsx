import { useState } from "react";
import Listado from "./Listado";
import Cajas from "./Cajas"; // Import the alternate component
import coches from "./Coches.json";

function Resultado() {
  const [mostrarEnCajas, setMostrarEnCajas] = useState(false); // State to track checkbox
  const [selectedCars, setSelectedCars] = useState([]);

  const handleCompareChange = (coche, isChecked) => {
    if (isChecked) {
      setSelectedCars((prev) => [...prev, coche]);
    } else {
      setSelectedCars((prev) => prev.filter((car) => car.id !== coche.id));
    }
  };

  const handleCheckboxChange = (event) => {
    setMostrarEnCajas(event.target.checked); 
  };

  return (
    <section className="pb-12">
      <div className="flex flex-col lg:flex-row lg:justify-between shadow-md lg:shadow-none p-3 rounded-xl  border-2 lg:border-0 border-slate-200 dark:bg-slate-800 dark:md:bg-inherit dark:md:border-0 dark:md:shadow-none dark:border-slate-600 lg:mt-0">
        <h3 className="text-secondary font-semibold text-lg ">
          Resultados ({coches.length})
        </h3>
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={mostrarEnCajas}
              onChange={handleCheckboxChange}
            />
            <div className="relative w-11 h-6 bg-gray-200 dark:bg-slate-700 dark:md:bg-slate-800 peer-focus:outline-none peer-focus:ring-4  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
            <span className="ms-3 text-sm font-medium text-slate-500 dark:text-slate-400">
              Comparar {selectedCars.length}
            </span>
          </label>
        </div>
      </div>
      {mostrarEnCajas ? (
        <Cajas coches={coches} selectedCars={selectedCars} />
      ) : (
        <Listado
          coches={coches}
          setSelectedCars={setSelectedCars}
          selectedCars={selectedCars}
          handleCompareChange={handleCompareChange}
        />
      )}
    </section>
  );
}

export default Resultado;
