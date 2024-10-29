import React from "react";
import { FaClock } from "react-icons/fa";

function SelectorDias() {
  return (
    <div className="relative">
      <select
        id="habitaciones"
        className="pl-11 bg-white border border-gray-300 text-slate-950 text-sm rounded-lg focus:border-0 focus:ring-blue-500 focus:border-blue-500  w-full p-2.5"
      >
        <option value={0} selected>
          Cualquier duración
        </option>
        <option value={1}>1-6 días</option>
        <option value={2}>7-8 días</option>
        <option value={3}>9-12 días</option>
        <option value={3}>Más de 12 días</option>
      </select>

      <div className="absolute top-0 pointer-events-none  bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
        <FaClock />
      </div>
    </div>
  );
}

export default SelectorDias;
