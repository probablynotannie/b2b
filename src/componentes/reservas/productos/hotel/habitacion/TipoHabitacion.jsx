import Regimenes from "../../../../inputs/Regimenes";
import PriceRange from "../../../../inputs/PrecioRange";
import { useState } from "react";
const DropdownCheckboxSelector = ({ minPrice, maxPrice }) => {
  const [values, setValues] = useState([minPrice, maxPrice]);

  return (
    <div className="bg-gray-200 dark:bg-slate-800 dark:border-slate-800 shadow-lg p-5 border-2 py-5 relative">
      <h5 className="font-semibold text-lg dark:text-white">Filtrado</h5>
      <div className="grid lg:grid-cols-5 gap-10 mt-2">
        <Regimenes />
        <PriceRange values={values} setValues={setValues} />
      </div>
    </div>
  );
};

export default DropdownCheckboxSelector;
