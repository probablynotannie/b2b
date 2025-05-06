import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
import { FaTable } from "react-icons/fa";
import { RiMenuFold4Line } from "react-icons/ri";
import { FaBox } from "react-icons/fa";
import Tabla from "./Tabla";
import datos from "./reservas.json";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Resultado() {
  const [open, setOpen] = useState(true);
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
    navigate("/ticket/detalles", {
      state: { destino },
    });
  };

  return (
    <article className="lg:tw-grid tw-grid-cols-10  tw-gap-10 lg:tw-px-20 lg:tw-py-10 tw-min-h-[76vh]">
      <Sidebar open={open} setOpen={setOpen} />
      <div
        className={`${
          open
            ? "tw-col-span-10 lg:tw-col-span-7 xl:tw-col-span-8"
            : "tw-col-span-10"
        } tw-flex-col-10`}
      >
        <div className="tw-flex tw-mt-2 tw-px-10 tw-py-10 lg:tw-py-0 lg:tw-px-0">
          <section className="tw-w-full">
            <div
              className="tw-relative tw-h-fit md:tw-h-[13vh] lg:tw-rounded-lg lg:tw-shadow tw-flex"
              style={{
                backgroundImage: `url(/banners/banner_hoteles.webp)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="tw-w-full tw-h-full tw-relative tw-bg-pink-500/40 dark:tw-bg-pink-900/60 tw-rounded tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-p-5 tw-flex tw-items-center tw-justify-center">
                {open !== true && (
                  <button
                    onClick={() => setOpen(!open)}
                    className="tw-absolute tw-left-0 tw-hidden lg:tw-flex tw-items-center tw-text-xl tw-p-3 tw-bg-pink-600/80 tw-text-white tw-rounded-lg hover:tw-text-pink-200 dark:tw-text-slate-300 hover:dark:tw-text-pink-200 tw-smooth tw-gap-1 tw-m-5"
                  >
                    <RiMenuFold4Line />
                  </button>
                )}
                <h1 className="tw-text-4xl xl:tw-text-7xl tw-text-white tw-font-bold tw-font-sans">
                  Lista de presupuestos enviados
                </h1>
              </div>
            </div>
            <div className="tw-flex tw-items-center tw-justify-between tw-mt-5 tw-border-b tw-border-slate-100 dark:tw-border-slate-700 tw-pb-5">
              <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
                Listado
              </h2>
              <div className="tw-hidden md:tw-flex tw-gap-2 tw-items-center">
                <button className="tw-bg-slate-500/80 dark:tw-bg-slate-800 hover:tw-bg-pink-600 dark:hover:tw-bg-pink-600 tw-smooth tw-p-2 tw-rounded-lg tw-text-white tw-font-bold">
                  Reenviar
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
                  className="tw-block tw-h-[40px] tw-min-w-[300px] tw-ps-10 tw-text-sm tw-text-slate-900 dark:tw-rounded-lg tw-border dark:tw-border-0 tw-border-white dark:tw-border-slate-800 tw-border-b-2 tw-border-b-slate-100 focus:tw-border-secondary tw-bg-white focus:tw-ring-0 focus:tw-border-b-2 focus:tw-border-0 dark:tw-bg-slate-800 dark:tw-placeholder-slate-400 dark:tw-text-white"
                  placeholder="Buscar en los campos"
                  required
                />
              </div>
              <select
                id="filtrar"
                className="tw-block tw-h-[40px] tw-min-w-[150px] tw-ps-10 tw-text-sm tw-text-slate-900 dark:tw-rounded-lg tw-border dark:tw-border-0 tw-border-white dark:tw-border-slate-800 tw-border-b-2 tw-border-b-slate-100 focus:tw-border-secondary tw-bg-white focus:tw-ring-0 focus:tw-border-b-2 focus:tw-border-0 dark:tw-bg-slate-800 dark:tw-placeholder-slate-400 dark:tw-text-white"
              >
                <option defaultValue>Ordenar por</option>
                <option value="estado">Estado</option>
                <option value="pagado">Pago</option>
                <option value="confirmacion">Confirmación</option>
              </select>
            </div>

            <Tabla datos={filtrados} detalles={detalles} loading={loading} />
          </section>
        </div>
      </div>
    </article>
  );
}
export default Resultado;
