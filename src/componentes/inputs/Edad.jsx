import React from "react";
import { MdPerson } from "react-icons/md";

function Edad() {
  const ages = Array.from({ length: 56 }, (_, i) => i + 25); // Generates an array of numbers from 25 to 80

  return (
    <div className="relative">
      <select
        id="age"
        name="age"
        className="border p-2.5 rounded-lg text-black appearance-none w-full pl-10"
      >
        {ages.map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>

      <div className="absolute top-0 pointer-events-none  bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
        <MdPerson />
      </div>
    </div>
  );
}

export default Edad;
