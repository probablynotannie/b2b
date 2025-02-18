import { useState, useEffect } from "react";
import Buscador from "./filtros/Buscador";
import Tickets from "./Entradas";
import tickets from "./Entradas.json";
import Entradas from "../../estructura/skeleton_placeholders/Entradas";
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
        <div className="bg-indigo-200 dark:bg-black text-pink-600 tw-bg-opacity-50 dark:tw-bg-opacity-45 absolute top-0 left-0 w-full h-full pointer-events-none"></div>
        <div className="tw-container tw-relative">
          <Buscador />
        </div>
      </div>
      <article className="grid grid-cols-1 lg:gap-10 xs:gap-28 w-full container mt-10 min-h-[35vh]">
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
                className="tw-bg-slate-50 tw-border tw-border-slate-300 tw-text-slate-900 tw-text-sm tw-rounded-lg focus:tw-ring-secondary focus:tw-border-secondary tw-block tw-w-full tw-p-2.5 dark:tw-bg-slate-800 p.2.5 dark:tw-border-slate-600 dark:placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-secondary dark:focus:tw-border-secondary"
                placeholder="Buscar por nombre"
                required
              />
              <select
                id="tipos"
                className="tw-bg-slate-50 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-secondary focus:tw-border-secondary tw-block tw-w-full tw-p-2.5 dark:tw-bg-slate-800 p.2.5 dark:tw-border-slate-600 dark:placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-secondary dark:focus:tw-border-secondary"
              >
                <option selected>Todos</option>
              </select>
            </>
          )}
        </div>
        {loading ? <Entradas /> : <Tickets entradas={filteredEntradas} />}
      </article>
    </main>
  );
}

export default Productos;
