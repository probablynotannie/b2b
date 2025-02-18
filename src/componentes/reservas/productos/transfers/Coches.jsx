import { useState } from "react";
import Listado from "./Listado";
import coches from "./Coches.json";

function Resultado() {
  const [selectedCars, setSelectedCars] = useState([]);

  const handleCompareChange = (coche, isChecked) => {
    if (isChecked) {
      setSelectedCars((prev) => [...prev, coche]);
    } else {
      setSelectedCars((prev) => prev.filter((car) => car.id !== coche.id));
    }
  };

  return (
    <section className="tw-pb-12">
      <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between tw-shadow-md lg:tw-shadow-none tw-p-3 tw-rounded-xl tw-border-2 lg:tw-border-0 tw-border-slate-200 dark:tw-bg-slate-800 dark:md:tw-bg-inherit dark:md:tw-border-0 dark:md:tw-shadow-none dark:tw-border-slate-600 lg:tw-mt-0">
        <h3 className="tw-text-secondary tw-font-semibold tw-text-lg dark:tw-text-slate-100">
          Resultados ({coches.length})
        </h3>
      </div>
      <Listado
        coches={coches}
        setSelectedCars={setSelectedCars}
        selectedCars={selectedCars}
        handleCompareChange={handleCompareChange}
      />
    </section>
  );
}

export default Resultado;
