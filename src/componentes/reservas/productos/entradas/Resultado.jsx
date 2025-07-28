import { useState, useEffect } from "react";
import Buscador from "../../../motores/buscadores/entradas/Buscador_Entradas";
import Tickets from "./Entradas";
import tickets from "./Entradas.json";
import Entradas from "../../estructura/skeleton_placeholders_listado/Entradas";
import Resultado from "../../Resultado";
import { Result } from "postcss";
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
    <Resultado
      background={"url('/banners/banner_actividades2.webp')"}
      position={"center"}
      color={"tw-bg-indigo-200/50"}
      buscador={<Buscador listado={true} />}
      aside={false}
      extraInfo={
        <div className="tw-grid md:tw-grid-cols-2 tw-gap-5 md:tw-gap-10 tw-mb-5 md:tw-mb-0 tw-h-fit tw-mt-10 tw-w-full tw-container">
          {loading ? (
            <div className="tw-grid tw-grid-cols-2 tw-gap-5">
              <div className="tw-h-10 tw-w-full tw-bg-slate-200 dark:tw-bg-slate-800 tw-rounded tw-mb-3 tw-animate-pulse"></div>

              <div className="tw-h-10 tw-w-full tw-bg-slate-200 dark:tw-bg-slate-800 tw-rounded tw-mb-3 tw-animate-pulse"></div>
            </div>
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
      }
      listado={
        <>{loading ? <Entradas /> : <Tickets entradas={filteredEntradas} />}</>
      }
    />
  );
}

export default Productos;
