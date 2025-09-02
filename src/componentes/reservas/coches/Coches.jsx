import { useState } from "react";
import Listado from "./Listado";
import Cajas from "./Cajas";
import coches from "./Coches.json";

function Resultado() {
  const [comparar, setComparar] = useState(false);
  const [selectedCars, setSelectedCars] = useState([]);
  const handleCompareChange = (coche, isChecked) => {
    if (isChecked) {
      setSelectedCars((prev) => [...prev, coche]);
    } else {
      setSelectedCars((prev) => prev.filter((car) => car.id !== coche.id));
    }
  };

  return (
    <section className="tw-pb-12 tw-min-h-[50.2vh]">
      <div className="tw-flex tw-justify-between tw-items-center">
        <h3 className="tw-text-secondary tw-font-semibold tw-text-lg">
          Resultados ({coches.length})
        </h3>
        {selectedCars.length > 0 && (
          <div className="tw-flex tw-flex-col tw-gap-5 md:tw-flex-row md:tw-justify-between">
            <button
              type="button"
              onClick={() => setComparar(!comparar)}
              className={`tw-inline-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-text-sm tw-font-medium tw-rounded tw-transition tw-shadow-sm ${
                comparar
                  ? "tw-bg-secondary tw-text-white hover:tw-bg-secondary/90"
                  : "tw-bg-gray-200 tw-text-slate-700 hover:tw-bg-gray-300 dark:tw-bg-slate-800 dark:tw-text-slate-300"
              }`}
            >
              {comparar ? "Listado" : "Comparar"}
              <span className="tw-font-bold">({selectedCars.length})</span>
            </button>
          </div>
        )}
      </div>
      {comparar ? (
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
