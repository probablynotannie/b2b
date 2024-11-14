// src/DropdownCheckboxSelector.js
import Regimenes from "../../../../inputs/Regimenes";
import PriceRange from "../../../../inputs/PrecioRange";
const DropdownCheckboxSelector = ({ minPrice, maxPrice }) => {
  return (
    <div className="bg-gray-200 dark:bg-slate-800 dark:border-slate-800 shadow-lg p-5 border-2 py-5 relative">
      <h5 className="font-semibold text-lg dark:text-white">Filtrado</h5>
      <div className="grid lg:grid-cols-5 gap-10 mt-2">
        <Regimenes />
        <PriceRange min={minPrice} max={maxPrice} />
      </div>
    </div>
  );
};

export default DropdownCheckboxSelector;
