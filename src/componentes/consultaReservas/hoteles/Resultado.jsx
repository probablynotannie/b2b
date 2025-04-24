import Sidebar from "../_sidebar/Sidebar";
import Filtrado_Hoteles from "./filtrado/Filtrado";
import { FaTable } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { useState, useEffect } from "react";
import { RiMenuFold4Line } from "react-icons/ri";
import Tabla from "./reservas/Tabla";
import Cajas from "./reservas/Cajas";
import datos from "./reservas.json";
import { useNavigate } from "react-router-dom";
function Coches() {
  const [open, setOpen] = useState(true);
  const [fechaEntradaDesde, setFechaEntradaDesde] = useState(null);
  const [fechaEntradaHasta, setFechaEntradaHasta] = useState(null);
  const [fechaCancelacionDesde, setFechaCancelacionDesde] = useState(null);
  const [fechaCancelacionHasta, setFechaCancelacionHasta] = useState(null);

  const [fechaGestionDesde, setFechaGestionDesde] = useState(null);
  const [fechaGestionHasta, setFechaGestionHasta] = useState(null);
  const [pagadas, setPagadas] = useState("Todas");
  const [activas, setActivas] = useState("Todas");
  const [tipo, setTipo] = useState("tabla");
  const [localizador, setLocalizador] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const navigate = useNavigate();
  const detalles = (coche) => {
    console.log(coche);
    navigate("/coche/detalles", {
      state: { coche },
    });
  };
  useEffect(() => {
    const filtered = datos.reservas.filter((reserva) => {
      const matchLocalizador =
        localizador === "" ||
        reserva.localizador.toLowerCase().includes(localizador.toLowerCase());

      return matchLocalizador;
    });
    setDatosFiltrados(filtered);
  }, [
    fechaEntradaDesde,
    fechaEntradaHasta,
    fechaGestionDesde,
    fechaGestionHasta,
    pagadas,
    activas,
    localizador,
  ]);

  const [datosFiltrados, setDatosFiltrados] = useState(datos.reservas);
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
        <div
          className="tw-relative tw-h-fit md:tw-h-[25vh] lg:tw-rounded-lg lg:tw-shadow tw-flex"
          style={{
            backgroundImage: `url(/banners/banner_hoteles.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="tw-relative tw-w-full tw-h-full tw-bg-green-500/40 dark:tw-bg-green-900/60 tw-rounded tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-p-5 tw-flex tw-items-center tw-justify-center">
            {open !== true && (
              <button
                onClick={() => setOpen(!open)}
                className="tw-absolute tw-left-0 tw-hidden -tw-top-10 lg:tw-flex tw-items-center tw-text-xl tw-p-3 tw-bg-green-600/80 tw-text-white tw-rounded-lg hover:tw-text-secondary dark:tw-text-slate-300 hover:dark:tw-text-secondaryDark tw-smooth tw-gap-1 tw-m-5"
              >
                <RiMenuFold4Line />
              </button>
            )}
            <Filtrado_Hoteles
              fechaEntradaDesde={fechaEntradaDesde}
              localizador={localizador}
              setLocalizador={setLocalizador}
              setFechaEntradaDesde={setFechaEntradaDesde}
              fechaEntradaHasta={fechaEntradaHasta}
              fechaCancelacionDesde={fechaCancelacionDesde}
              setFechaCancelacionDesde={setFechaCancelacionDesde}
              fechaCancelacionHasta={fechaCancelacionHasta}
              setFechaCancelacionHasta={setFechaCancelacionHasta}
              setFechaEntradaHasta={setFechaEntradaHasta}
              fechaGestionDesde={fechaGestionDesde}
              setFechaGestionDesde={setFechaGestionDesde}
              fechaGestionHasta={fechaGestionHasta}
              setFechaGestionHasta={setFechaGestionHasta}
              pagadas={pagadas}
              setPagadas={setPagadas}
              activas={activas}
              setActivas={setActivas}
            />
          </div>
        </div>
        <div className="tw-flex tw-items-center tw-mt-2 tw-px-10 tw-py-10 lg:tw-py-0 lg:tw-px-0">
          <section className="tw-w-full">
            <div className="tw-flex tw-items-center tw-justify-between tw-mt-2 tw-border-b-2 tw-pb-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-">
              <h2 className="tw-text-3xl tw-font-bold dark:tw-text-white">
                Listado
              </h2>
              <div className="tw-hidden md:tw-flex tw-gap-2 tw-items-center">
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
            <div className="tw-flex tw-justify-end tw-mt-3">
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
                  className="tw-block tw-h-[40px] tw-min-w-[300px] tw-ps-10 tw-text-sm tw-text-slate-900 dark:tw-rounded-lg tw-border dark:tw-border-0 tw-border-white dark:tw-border-slate-800 tw-border-b-2 tw-border-b-white focus:tw-border-secondary tw-bg-white focus:tw-ring-0 focus:tw-border-b-2 focus:tw-border-0 dark:tw-bg-slate-800 dark:tw-placeholder-slate-400 dark:tw-text-white"
                  placeholder="Buscar por localizador, orden, servicio.."
                  required
                />
              </div>
            </div>
            {tipo === "tabla" ? (
              <>
                <Tabla
                  datos={datosFiltrados}
                  detalles={detalles}
                  loading={loading}
                />
              </>
            ) : (
              <Cajas
                datos={datosFiltrados}
                detalles={detalles}
                loading={loading}
              />
            )}
          </section>
        </div>
      </div>
    </article>
  );
}
export default Coches;
