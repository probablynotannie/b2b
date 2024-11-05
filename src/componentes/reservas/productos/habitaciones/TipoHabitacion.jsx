// src/DropdownCheckboxSelector.js
import React, { useState } from "react";
import Regimenes from "../../../inputs/Regimenes";
import PriceRange from "../../../inputs/PrecioRange";
const DropdownCheckboxSelector = ({ minPrice, maxPrice }) => {
  return (
    <div className="bg-slate-100 px-10 py-10 rounded-lg shadow-lg border-2 border-slate-300 relative">
      <h6 className="font-bold text-lg text-secondary absolute -top-5 bg-white p-2 px-5 border-2 border-slate-300 rounded-lg shadow-xl">
        Filtrado
      </h6>
      <div className="grid grid-cols-5 gap-10 mt-2">
        <Regimenes />
        <PriceRange min={minPrice} max={maxPrice} />
      </div>
    </div>
  );
};

export default DropdownCheckboxSelector;
