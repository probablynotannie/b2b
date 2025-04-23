import Sidebar from "../_sidebar/Sidebar";
import Filtrado_Coches from "./filtrado/Filtrado";
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
            backgroundImage: `url(/banners/banner_coches.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="tw-relative tw-w-full tw-h-full tw-bg-green-500/40 dark:tw-bg-green-900/60 tw-rounded tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-p-5 tw-flex tw-items-center tw-justify-center">
            {open !== true && (
              <button
                onClick={() => setOpen(!open)}
                className="tw-absolute tw-left-0 -tw-top-10 tw-flex tw-items-center tw-text-xl tw-p-3 tw-bg-green-600/80 tw-text-white tw-rounded-lg hover:tw-text-secondary dark:tw-text-slate-300 hover:dark:tw-text-secondaryDark tw-smooth tw-gap-1 tw-m-5"
              >
                <RiMenuFold4Line />
              </button>
            )}
            <Filtrado_Coches
              fechaEntradaDesde={fechaEntradaDesde}
              localizador={localizador}
              setLocalizador={setLocalizador}
              setFechaEntradaDesde={setFechaEntradaDesde}
              fechaEntradaHasta={fechaEntradaHasta}
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
