import React from "react";
import { MdCarRental } from "react-icons/md";

function Condiciones_alquiler() {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          Condiciones de alquiler
        </h3>
        <MdCarRental className="text-2xl text-secondary" />
      </div>
    </div>
  );
}

export default Condiciones_alquiler;
