import { FaSearch } from "react-icons/fa";

function Buscador() {
  return (
    <div className="relative">
      <div className="absolute top-3 flex items-center ps-3 pointer-events-none  ">
        <FaSearch className="text-slate-500 text-lg" />
      </div>
      <input
        type="search"
        id="search"
        className="block w-full p-3 ps-10 text-sm text-gray-900 rounded-lg bg-slate-50 focus:ring-blue-400 focus:border-blue-500"
        placeholder="Introduce tu destino"
        required
      />
    </div>
  );
}

export default Buscador;
