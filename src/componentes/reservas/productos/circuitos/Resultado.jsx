import { useState } from "react";
import Buscador from "./filtros/Buscador";
import Circuitos from "./Circuitos";
import tickets from "./Circuitos.json";
import { useEffect } from "react";
import PlaceHolder from "../../estructura/skeleton_placeholders/Circuitos";
function Productos() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEntradas, setFilteredEntradas] = useState(tickets);
  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = tickets.filter((ticket) =>
      ticket.titulo.toLowerCase().includes(value)
    );
    setFilteredEntradas(filtered);
  };
  return (
    <main className="flex justify-center flex-col items-center mb-10 min-h-[0vh]">
      <div
        className="w-full bg-cover bg-center p-8 relative shadow-md"
        style={{
          backgroundImage: "url('/banner_actividades2.jpg')",
        }}
      >
        <div className="bg-indigo-200 dark:bg-black text-pink-600  tw-bg-opacity-50 dark:bg-opacity-45 absolute top-0 left-0 w-full h-full pointer-events-none"></div>
        <div className="container relative">
          <Buscador />
        </div>
      </div>
      <article className="grid grid-cols-1 lg:gap-10 xs:gap-28 w-full container mt-10 min-h-[40vh]">
        <div className="grid md:grid-cols-2 gap-5 md:gap-10 mb-5 md:mb-0 h-fit">
          {loading ? (
            <>
              <div className="h-10 w-full bg-slate-200 dark:bg-slate-800 rounded mb-3 animate-pulse"></div>

              <div className="h-10 w-full bg-slate-200 dark:bg-slate-800 rounded mb-3 animate-pulse"></div>
            </>
          ) : (
            <>
              <input
                type="text"
                id="first_name"
                value={searchTerm}
                onChange={handleSearchChange}
                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-slate-800 p.2.5 dark:tw-border-slate-600 dark:placeholder-gray-400 dark:tw-text-white dark:focus:ring-secondary dark:focus:border-secondary"
                placeholder="Buscar por nombre"
                required
              />
              <select
                id="tipos"
                className="bg-slate-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-slate-800 p.2.5 dark:tw-border-slate-600 dark:placeholder-gray-400 dark:tw-text-white dark:focus:ring-secondary dark:focus:border-secondary"
              >
                <option selected>Todos</option>
              </select>
            </>
          )}
        </div>
        {loading ? <PlaceHolder /> : <Circuitos entradas={filteredEntradas} />}
      </article>
    </main>
  );
}

export default Productos;
