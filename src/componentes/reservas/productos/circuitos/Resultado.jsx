import { useState } from "react";
import Buscador from "./filtros/Buscador";
import Circuitos from "./Circuitos";
import tickets from "./Circuitos.json";
import { useEffect } from "react";
import PlaceHolder from "../../estructura/skeleton_placeholders_listado/Circuitos";
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
    <main className="tw-flex tw-justify-center tw-flex-col tw-items-center tw-mb-20 tw-min-h-[70vh]">
      <div
        className="tw-w-full tw-bg-cover tw-bg-center tw-p-8 tw-relative tw-shadow-md"
        style={{
          backgroundImage: "url('/banners/banner_actividades2.webp')",
        }}
      >
        <div className="tw-bg-indigo-200 dark:tw-bg-black tw-text-pink-600 tw-bg-opacity-50 dark:tw-bg-opacity-45 tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-pointer-events-none"></div>
        <div className="tw-container tw-relative">
          <Buscador />
        </div>
      </div>
      <article className="tw-grid tw-grid-cols-1 lg:tw-gap-10 xs:gap-28 tw-w-full tw-container tw-mt-10 tw-min-h-[40vh] tw-px-10">
        <div className="tw-grid md:tw-grid-cols-2 tw-gap-5 md:tw-gap-10 tw-mb-5 md:tw-mb-0 tw-h-fit">
          {loading ? (
            <>
              <div className="tw-h-10 tw-w-full tw-bg-slate-200 dark:tw-bg-slate-800 tw-rounded tw-mb-3 tw-animate-pulse"></div>

              <div className="tw-h-10 tw-w-full tw-bg-slate-200 dark:tw-bg-slate-800 tw-rounded tw-mb-3 tw-animate-pulse"></div>
            </>
          ) : (
            <>
              <input
                type="text"
                id="first_name"
                value={searchTerm}
                onChange={handleSearchChange}
                className="tw-bg-slate-50 tw-border dark:tw-placeholder-slate-400 tw-border-slate-300 tw-text-slate-900 tw-text-sm tw-rounded-lg focus:tw-ring-secondary focus:tw-border-secondary tw-block tw-w-full tw-p-2.5 dark:tw-bg-slate-800 p.2.5 dark:tw-border-slate-600 dark:placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-secondary dark:focus:tw-border-secondary"
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
        {loading ? <PlaceHolder /> : <Circuitos entradas={filteredEntradas} />}
      </article>
    </main>
  );
}

export default Productos;
