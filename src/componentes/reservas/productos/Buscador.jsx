import Input_Buscador from "../../inputs/Buscador2";
import Input_DateRange from "../../inputs/DateRange";
import { FaSearch } from "react-icons/fa";

import Input_Hab_Adulto_Ninio from "../../inputs/Hab_Adulto_Ninio2";
function Buscador() {
  return (
    <div className="border-2 min-h-28 rounded-lg shadow-lg p-5">
      <h2 className="mb-4 font-bold text-xl">Buscador</h2>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-4">
          <Input_Buscador />
        </div>
        <div className="col-span-4">
          <Input_DateRange />
        </div>
        <div className="col-span-3">
          <Input_Hab_Adulto_Ninio />
        </div>
        <div className="flex justify-center">
          <button className="bg-primary h-full px-10 rounded-lg shadow">
            <FaSearch className="text-white text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buscador;
