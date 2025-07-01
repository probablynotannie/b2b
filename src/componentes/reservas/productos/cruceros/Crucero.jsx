import { useParams, useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GiCruiser } from "react-icons/gi";
import { MdCancel, MdMeetingRoom } from "react-icons/md";
import { FaCalendar, FaMapMarked, FaInfoCircle } from "react-icons/fa";
import Reserva from "../../estructura/reserva/Resumen";
import Tarifas from "./crucero/Tarifas";
import Pasajeros from "./crucero/Pasajeros";
import Pasajeros_Display from "./crucero/Pasajeros_Display";
import Itinerario from "./crucero/Itinerario";
import FormatearFecha from "../../estructura/FormatearFecha";
import Placeholder from "../../../../helpers/placeholders/Detalles";
import { slugify } from "../../../../helpers/slugify";

const fetchCruceros = async (idCrucero) => {
  const baseUrl =
    "https://devxml-2.vpackage.net/FrontCruceros/cruceros/?destino=&puertos=&naviera=&fechSal=&duracion=&idv=207&json=1";

  const fetchPage = async (page) => {
    const res = await fetch(`${baseUrl}&p=${page}`);
    if (!res.ok) throw new Error("Error fetching page " + page);
    return res.json();
  };

  const firstPage = await fetchPage(1);
  const totalResults = Number(firstPage.totalresults);
  const pageSize = firstPage.items.length;
  const totalPages = Math.ceil(totalResults / pageSize);

  let found = firstPage.items.find(
    (item) => String(item.id_crucero) === String(idCrucero)
  );
  if (found) return found;

  for (let p = 2; p <= totalPages; p++) {
    const pageData = await fetchPage(p);
    found = pageData.items.find(
      (item) => String(item.id_crucero) === String(idCrucero)
    );
    if (found) return found;
  }

  throw new Error("Crucero no encontrado");
};

function Producto() {
  const { idCrucero } = useParams();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("tarifas");
  const [pasajeros, setPasajeros] = useState([]);
  const [precioSeleccionado, setPrecioSeleccionado] = useState(null);

  const {
    data: cruceroFetched,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["crucero", idCrucero],
    queryFn: () => fetchCruceros(idCrucero),
    enabled: !location.state && !!idCrucero,
  });

  const producto = location.state ?? cruceroFetched;

  const getCruiseImage = (producto) => {
    if (producto.barco?.img_header_embarcacion) {
      return producto.barco.img_header_embarcacion;
    }
    const firstAvailablePortImage = producto.itin_dias
      .map((dia) => dia.puerto?.img_puerto_header)
      .find((img) => img && img.trim() !== "");
    return firstAvailablePortImage;
  };

  if (isLoading) {
    return (
      <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 tw-mb-20 lg:tw-gap-12">
        <Placeholder />
      </main>
    );
  }

  if (isError) {
    return (
      <div className="tw-text-red-500 tw-text-center tw-mt-10">
        Ha habido un error: Error: {error.message}
      </div>
    );
  }

  if (!producto) {
    return (
      <div className="tw-w-full tw-h-full tw-flex tw-justify-start tw-items-center tw-flex-col">
        <MdCancel className="tw-text-4xl tw-text-danger tw-animate-bounce" />
        <p className="tw-text-xl tw-text-slate-400 tw-animate-pulse">
          No se ha encontrado este crucero
        </p>
      </div>
    );
  }

  const cruiseImage = getCruiseImage(producto);

  return (
    <main className="tw-container lg:tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-gap-y-10 tw-my-10 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 tw-bg-white dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <h1 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
          Reservando el crucero
        </h1>
        <p className="tw-text-slate-600 dark:tw-text-slate-400 tw-mt-3">
          {producto.barco?.descripcion}
        </p>

        <article className="tw-mt-5 tw-rounded-xl tw-shadow">
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
                <Pasajeros
                  pasajeros={pasajeros}
                  setPasajeros={setPasajeros}
                  restringido={producto.pax2ADRestrin}
                />
                <Tarifas
                  producto={producto}
                  cruiseImage={cruiseImage}
                  tarifas={producto.tarifas}
                  precioSeleccionado={precioSeleccionado}
                  setPrecioSeleccionado={setPrecioSeleccionado}
                />
              </>
            ) : (
              <Itinerario producto={producto.itin_dias} />
            )}
          </section>
        </article>
      </section>

      <article
        className={`tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-bg-white dark:tw-bg-slate-900 tw-p-5 ${
          !precioSeleccionado &&
          pasajeros.length !== 0 &&
          " tw-flex tw-justify-center tw-items-center"
        }`}
      >
        {precioSeleccionado && pasajeros.length !== 0 ? (
          <div>
            <h2 className="tw-font-semibold dark:tw-text-white tw-mb-2">
              {producto.barco.nombre.texto}
            </h2>
            <Reserva
              img={`//pic-2.vpackage.net/cruceros_img/${cruiseImage}`}
              txt={`${producto.num_dias} días a bordo de ${producto.barco.nombre.texto}`}
            />

            <p className="tw-flex tw-gap-2 tw-mt-3 dark:tw-text-slate-100">
              <span className="tw-flex tw-gap-1 tw-items-center">
                <FaCalendar className="tw-text-secondary" />
              </span>
              {FormatearFecha(precioSeleccionado.date)}
            </p>
            <p className="tw-flex tw-gap-2 tw-mt-3 dark:tw-text-slate-100">
              <span className="tw-flex tw-gap-1 tw-items-center">
                <MdMeetingRoom className="tw-text-secondary tw-text-xl" />
              </span>
              {precioSeleccionado.cabin.charAt(0).toUpperCase() +
                precioSeleccionado.cabin.slice(1).toLowerCase()}
            </p>

            <Pasajeros_Display
              pasajeros={pasajeros}
              precio={precioSeleccionado}
            />

            <Link
              to={`/crucero/datos/${producto.id_crucero}/${slugify(
                producto.itinerario.name
              )}`}
              state={{ producto, pasajeros, precioSeleccionado }}
            >
              <div className="tw-flex tw-justify-center">
                <button className="tw-bg-secondary tw-mt-5 tw-w-full tw-p-3 tw-px-8 tw-rounded-xl tw-shadow-md tw-text-white tw-font-bold">
                  Total:{" "}
                  {(pasajeros.length * precioSeleccionado.price).toFixed(2)} €
                </button>
              </div>
            </Link>
          </div>
        ) : (
          <div className="tw-w-full tw-h-full tw-mt-10 tw-flex tw-flex-col tw-items-center tw-justify-center">
            <FaInfoCircle className="tw-text-danger tw-text-4xl" />
            <p className="tw-text-center tw-text-danger dark:tw-text-red-400 tw-animate-pulse tw-font-semibold">
              Selecciona la cabina y pasajeros a bordo
            </p>
          </div>
        )}
      </article>
    </main>
  );
}

export default Producto;
