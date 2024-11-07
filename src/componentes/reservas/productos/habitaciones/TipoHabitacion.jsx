// src/DropdownCheckboxSelector.js
import Regimenes from "../../../inputs/Regimenes";
import PriceRange from "../../../inputs/PrecioRange";
const DropdownCheckboxSelector = ({ minPrice, maxPrice }) => {
  return (
    <div className="bg-white border-y-2 border-slate-100 py-5 relative">
     <h5 className="font-semibold text-lg">
      Filtrado
     </h5>
      <div className="grid lg:grid-cols-5 gap-10 mt-2">
        <Regimenes />
        <PriceRange min={minPrice} max={maxPrice} />
      </div>
    </div>
  );
};

export default DropdownCheckboxSelector;
