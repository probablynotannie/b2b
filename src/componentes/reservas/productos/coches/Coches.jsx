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
  const handleCheckboxChange = (event) => {
    setComparar(event.target.checked);
  };
  return (
    <section className="tw-pb-12 tw-min-h-[50.2vh]">
      <div className="tw-flex tw-justify-between tw-items-center">
        <h3 className="tw-text-secondary tw-font-semibold tw-text-lg">
          Resultados ({coches.length})
        </h3>
        {selectedCars.length > 0 && (
          <div className="tw-flex tw-flex-col tw-gap-5 md:tw-flex-row md:tw-justify-between">
            <label className="tw-inline-flex tw-items-center tw-cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="tw-sr-only tw-peer"
                checked={comparar}
                onChange={handleCheckboxChange}
              />
              <div className="tw-relative tw-w-11 tw-h-6 tw-bg-gray-200 dark:tw-bg-slate-800 dark:md:tw-bg-slate-800 peer-focus:outline-none peer-focus:ring-4 tw-rounded-full tw-peer peer-checked:tw-after:translate-x-full rtl:peer-checked:tw-after:-translate-x-full peer-checked:tw-after:border-white after:tw-content-[''] after:tw-absolute after:tw-top-[2px] after:tw-start-[2px] after:tw-bg-white after:tw-border-gray-300 after:tw-border after:tw-rounded-full after:tw-h-5 after:tw-w-5 after:tw-transition-all peer-checked:tw-bg-secondary"></div>
              <span className="tw-ms-3 tw-text-sm tw-font-medium tw-text-slate-500 dark:tw-text-slate-400">
                Comparar {selectedCars.length}
              </span>
            </label>
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
