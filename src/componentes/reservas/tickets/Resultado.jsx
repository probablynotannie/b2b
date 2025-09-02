import { useState, useEffect } from "react";
import Buscador from "../../motores/buscadores/entradas/Buscador_Entradas";
import Entradas from "./Tickets";
import tickets from "./Tickets.json";
import Placeholder from "../../../placeholders/listados/Entradas";
import Resultado from "../../../helpers/Resultado";
import { useParams } from "react-router-dom";
import getEntradas from "./hooks/getEntradas";
import { useQuery } from "@tanstack/react-query";
import PaginacionFooter from "../../../helpers/visuales/pagination/PaginacionFooter";
import Paginacion from "../../../helpers/visuales/pagination/Corto";
function Productos() {
  const { codearea, codcity, fecini, noc, numper } = useParams();
  const reserva = {
    codearea: codearea ? Number(codearea) : null,
    codcity: codcity ? Number(codcity) : null,
    fecini: fecini || null,
    noc: noc ? Number(noc) : null,
    numper: numper || null,
  };

  const isReservaIncomplete = Object.values(reserva).some(
    (val) => val === null || val === ""
  );
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["entradas", reserva],
    queryFn: getEntradas,
    enabled: !isReservaIncomplete,
    keepPreviousData: true,
  });
  const entradasPorPagina = 9;
  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    if (data) {
      setEntradas(data);
    }
  }, [data]);
  const [page, setPage] = useState(1);
  const indexUltimaEntrada = page * entradasPorPagina;
  const indexPrimeraEntrada = indexUltimaEntrada - entradasPorPagina;
  const entradasAMostrar = entradas?.slice(
    indexPrimeraEntrada,
    indexUltimaEntrada
  );

  const paginasTotales = Math.ceil(entradas?.length / entradasPorPagina);
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
        <>
          {isLoading ? (
            <Placeholder />
          ) : (
            <div>
              <div>
                {entradasAMostrar && (
                  <>
                    <div className="tw-flex tw-justify-between tw-items-center">
                      <h3
                        className={`tw-text-secondary
                 tw-font-semibold tw-text-lg tw-flex tw-items-center`}
                      >
                        Resultados ({entradas.length})
                      </h3>
                      <Paginacion
                        totalPages={paginasTotales}
                        page={page}
                        setPage={setPage}
                      />
                    </div>
                    <Entradas entradas={entradasAMostrar} />
                    <div className="tw-flex tw-justify-center tw-mt-4">
                      <PaginacionFooter
                        totalPages={paginasTotales}
                        page={page}
                        setPage={setPage}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </>
      }
    />
  );
}

export default Productos;
