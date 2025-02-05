import Buscador from "./filtros/Buscador";
import { GiCruiser } from "react-icons/gi";
import Tarifas from "./Tarifas";
import Head from "../../estructura/ProductoHeader";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Pasajeros from "./crucero/Pasajeros";
import { Link } from "react-router-dom";
import FormatearFecha from "../../estructura/FormatearFecha";
import Itinerario from "./crucero/Itinerario";
import { FaMapMarked } from "react-icons/fa";
function Producto() {
  const [precioSeleccionado, setPrecioSeleccionado] = useState(null);
  const location = useLocation();
  const producto = location.state;
  const [selectedTab, setSelectedTab] = useState("tarifas");
  const [pasajeros, setPasajeros] = useState([]);
  const getCruiseImage = (producto) => {
    if (producto.barco?.img_header_embarcacion) {
      return producto.barco.img_header_embarcacion;
    }
    const firstAvailablePortImage = producto.itin_dias
      .map((dia) => dia.puerto?.img_puerto_header)
      .find((img) => img && img.trim() !== "");
    return firstAvailablePortImage || "default-image.jpg";
  };
  const cruiseImage = getCruiseImage(producto);
  return (
    <main className="tw-flex tw-justify-center tw-flex-col  tw-px-5 md:tw-px-0">
      <div
        className="tw-w-full tw-bg-cover tw-bg-center tw-p-8 tw-relative tw-shadow-md"
        style={{
          backgroundImage: "url('/banner_cruise.jfif')",
        }}
      >
        <div className="tw-bg-indigo-200 dark:tw-bg-black tw-text-pink-600 tw-bg-opacity-50 dark:tw-bg-opacity-45 tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-pointer-events-none"></div>
        <div className="tw-flex">
          <div className="tw-container tw-relative">
            <Buscador />
          </div>
        </div>
      </div>

      <div className="tw-container">
        <Head
          nombre={producto.itinerario.name}
          descripcion={
            <p className="tw-flex tw-items-center">
              <GiCruiser className="tw-text-secondary tw-text-xl tw-mr-1" />
              {producto.num_noches} días a bordo de{" "}
              {producto.barco.nombre.texto}
            </p>
          }
          boton="Reservar"
        />
        <article className="tw-mt-5 dark:tw-bg-slate-800 tw-rounded-lg">
          <section className="tw-grid lg:tw-grid-cols-3 lg:tw-flex-row tw-gap-10 tw-p-5">
            <div className="tw-relative ">
              <img
                src={"//pic-2.vpackage.net/cruceros_img/" + cruiseImage}
                alt="imagen crucero"
                className="tw-h-[25vh] tw-w-full tw-shadow-md tw-rounded-xl tw-object-cover"
              />
              <div className=" tw-absolute tw-inset-0 tw-bg-indigo-700 tw-bg-opacity-30 tw-rounded-xl" />{" "}
            </div>
            <div className="lg:tw-col-span-2">
              <h2 className="tw-font-semibold tw-text-lg dark:tw-text-white">
                {producto.barco.nombre.texto}
              </h2>
              <p className="tw-mt-5 tw-text-slate-500 dark:tw-text-slate-300 tw-text-sm tw-pr-10">
                {producto.barco.descripcion}
              </p>
            </div>
          </section>
          <div className="tw-flex tw-gap-5 tw-border-b-2 tw-border-slate-200 dark:tw-border-slate-700 tw-mt-5">
            <button
              className={`tw-p-3 tw-font-semibold tw-text-lg tw-flex tw-gap-2 tw-items-center ${
                selectedTab === "tarifas"
                  ? "tw-border-b-4 tw-border-secondary tw-text-secondary"
                  : "tw-text-gray-500 hover:tw-text-gray-800 dark:tw-text-gray-400 dark:hover:tw-text-gray-200"
              }`}
              onClick={() => setSelectedTab("tarifas")}
            >
              <GiCruiser className="tw-text-2xl" />
              Tarifas
            </button>
            <button
              className={`tw-p-3 tw-font-semibold tw-text-lg tw-flex tw-gap-2 tw-items-center ${
                selectedTab === "itinerario"
                  ? "tw-border-b-4 tw-border-secondary tw-text-secondary"
                  : "tw-text-gray-500 hover:tw-text-gray-800 dark:tw-text-gray-400 dark:hover:tw-text-gray-200"
              }`}
              onClick={() => setSelectedTab("itinerario")}
            >
              <FaMapMarked className="tw-text-lg" />
              Itinerario
            </button>
          </div>
          <section className="tw-p-5">
            {selectedTab === "tarifas" ? (
              <>
                <Pasajeros pasajeros={pasajeros} setPasajeros={setPasajeros} />
                <Tarifas
                  tarifas={producto.tarifas}
                  precioSeleccionado={precioSeleccionado}
                  setPrecioSeleccionado={setPrecioSeleccionado}
                />
              </>
            ) : (
              <Itinerario producto={producto.itin_dias} />
            )}
          </section>
          {precioSeleccionado && pasajeros.length !== 0 ? (
            <div className="tw-mb-4 tw-text-center tw-mt-10 tw-bg-slate-50 dark:tw-bg-transparent tw-border-2 tw-border-slate-100 dark:tw-border-0 tw-shadow-lg tw-rounded-lg tw-p-5">
              <Link
                to="/datoscrucero"
                state={{
                  producto,
                  pasajeros,
                  precioSeleccionado,
                }}
              >
                <button className="tw-bg-secondary tw-p-3 tw-px-8 tw-rounded-xl tw-shadow-md tw-text-white tw-font-bold">
                  Total:{" "}
                  {pasajeros.length * precioSeleccionado.price.toFixed(2)} €
                </button>
              </Link>
              <p className="tw-text-sm tw-mt-3 tw-font-semibold tw-text-slate-500">
                Salida - {FormatearFecha(precioSeleccionado.date)}
              </p>
            </div>
          ) : (
            <div className="tw-mb-4 tw-text-red-400 tw-animate-pulse tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 tw-text-center tw-mt-10 tw-shadow-md hover:tw-shadow-lg tw-transition tw-duration-300 tw-rounded-lg tw-p-5">
              Selecciona la cabina y pasajeros a bordo
            </div>
          )}
        </article>
      </div>
    </main>
  );
}

export default Producto;
