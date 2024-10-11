import { FaSearch } from "react-icons/fa";

function Buscador() {
  const dark = true;
  return (
    <div className="relative">
      <div className="absolute pointer-events-none  bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-lg">
        <FaSearch />
      </div>
      <input
        type="search"
        id="search"
        className="block w-full p-3 ps-10 text-sm text-gray-900 rounded-lg bg-white border rounded-tl-xl rounded-bl-xl border-gray-300 focus:border-0"
        placeholder="Destino"
        required
      />
    </div>
  );
}
export default Buscador;
