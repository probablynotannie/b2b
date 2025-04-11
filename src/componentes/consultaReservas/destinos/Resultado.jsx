import Sidebar from "../_sidebar/Sidebar";
import { useState } from "react";
import { FaTable } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import Tabla from "./reservas/Tabla";
import Cajas from "./reservas/Cajas";
import datos from "./reservas.json";
import { useNavigate } from "react-router-dom";
import Skeleton_Cajas from "../_skeleton_placeholders/Cajas";
import { useEffect } from "react";
function Resultado() {
  const [tipo, setTipo] = useState("tabla");
  const [filtrados, setFiltrados] = useState(datos);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const filtrados = datos.reservas.filter((reserva) => {
      const allValues = JSON.stringify(reserva).toLowerCase();
      return allValues.includes(lowerSearch);
    });

    setFiltrados(filtrados);
  }, [search]);
  const navigate = useNavigate();
  const detalles = (destino) => {
    navigate("/destino/detalles", {
      state: { destino },
    });
  };
  return (
    <article className="lg:tw-grid tw-grid-cols-10  tw-gap-10 lg:tw-px-20 lg:tw-py-10 tw-min-h-[76vh]">
      <Sidebar />
      <div className="tw-col-span-10 lg:tw-col-span-7 xl:tw-col-span-8 tw-flex-col">
        <div className="tw-flex tw-items-center tw-mt-2 tw-px-10 tw-py-10 lg:tw-py-0 lg:tw-px-0">
          <section className="tw-w-full">
            <div className="tw-flex tw-items-center tw-justify-between tw-mt-2 tw-border-b tw-border-slate-100 dark:tw-border-slate-700  tw-pb-5">
              <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
                Reservas
              </h2>
              <div className="tw-flex tw-gap-2 tw-items-center">
                <button
                  onClick={() => setTipo("tabla")}
                  className={`hover:tw-scale-105 tw-smooth ${
                    tipo === "tabla" ? "tw-text-secondary" : "tw-text-slate-300"
                  }`}
                >
                  <FaTable />
                </button>
                <button
                  onClick={() => setTipo("cajas")}
                  className={`hover:tw-scale-105 tw-smooth ${
                    tipo === "cajas" ? "tw-text-secondary" : "tw-text-slate-300"
                  }`}
                >
                  <FaBox />
                </button>
              </div>
            </div>
            <div className="tw-flex tw-justify-between tw-mt-3">
              <div className="tw-relative">
                <div className="tw-absolute tw-inset-y-0 tw-start-0 tw-flex tw-items-center tw-ps-3 tw-pointer-events-none">
                  <svg
                    className="tw-w-4 tw-h-4 tw-text-slate-500 dark:tw-text-slate-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="tw-block tw-h-[40px] tw-min-w-[300px] tw-ps-10 tw-text-sm tw-text-slate-900 tw-border tw-border-slate-300 tw-rounded-lg tw-bg-slate-50 focus:tw-ring-secondary focus:tw-border-secondary dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-secondaryDark dark:focus:tw-border-secondaryDark"
                  placeholder="Buscar por localizador, orden, servicio.."
                  required
                />
              </div>
              <select
                id="filtrar"
                className="tw-bg-slate-50 tw-border tw-min-w-[150px] tw-border-slate-300 tw-text-slate-900 tw-text-sm tw-rounded-lg focus:tw-ring-secondary focus:tw-border-secondary tw-block  tw-h-[40px] dark:tw-bg-slate-800 dark:tw-border-slate-700 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-secondaryDark dark:focus:tw-border-secondaryDark"
              >
                <option selected>Ordenar por</option>
                <option value="estado">Estado</option>
                <option value="pagado">Pago</option>
                <option value="confirmacion">Confirmación</option>
              </select>
            </div>
            {tipo === "tabla" ? (
              <>
                <Tabla
                  datos={filtrados}
                  detalles={detalles}
                  loading={loading}
                />
              </>
            ) : (
              <>
                {loading ? (
                  <Skeleton_Cajas />
                ) : (
                  <Cajas
                    datos={filtrados}
                    detalles={detalles}
                    loading={loading}
                  />
                )}
              </>
            )}
          </section>
        </div>
      </div>
    </article>
  );
}
export default Resultado;
