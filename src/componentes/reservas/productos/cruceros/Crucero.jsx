import Buscador from "./filtros/Buscador";
import { GiCruiser } from "react-icons/gi";
import Tarifas from "./Tarifa_lista";
import Tarifas2 from "./Tarifas";
import Head from "../../estructura/ProductoHeader";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Pasajeros from "./crucero/Pasajeros";
import { Link } from "react-router-dom";
import FormatearFecha from "../../estructura/FormatearFecha";
import Itinerario from "./crucero/Itinerario";
import { FaMapMarked } from "react-icons/fa";

function Producto() {
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
    <main className="tw-flex tw-justify-center tw-flex-col tw-my-10 tw-px-5 md:tw-px-0">
      <div className="tw-container">
        <Buscador />
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

          <>
            <Tarifas2 tarifas={producto.tarifas} />
          </>

          <>
            <Pasajeros pasajeros={pasajeros} setPasajeros={setPasajeros} />
            <Itinerario producto={producto.itin_dias} />
          </>

          {/* <section className="tw-p-5">
            {selectedTab === "tarifas" ? (
              <>
                <Pasajeros pasajeros={pasajeros} setPasajeros={setPasajeros} />
                <Tarifas
                  tasas={producto.tasas}
                  selectedPrice={selectedPrice}
                  setSelectedPrice={setSelectedPrice}
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  selectedCabinId={selectedCabinId}
                  setSelectedCabinId={setSelectedCabinId}
                  setPrecio={setPrecio}
                  precios={producto.precios}
                />
                <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-4 tw-mt-4 tw-p-5">
                  {cabinPhotos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Photo ${index + 1} of ${cabinTitle}`}
                      className="tw-rounded-lg tw-shadow-md hover:tw-shadow-lg tw-object-cover hover:tw-scale-105 tw-transition tw-duration-300"
                    />
                  ))}
                </div>
              </>
            ) : (
              <Itinerario producto={producto} />
            )}
          </section>
          {selectedPrice &&
          selectedDate &&
          selectedCabinId &&
          pasajeros.length !== 0 ? (
            <div className="tw-mb-4 tw-text-center tw-mt-10 tw-bg-slate-50 dark:tw-bg-transparent tw-border-2 tw-border-slate-100 tw-shadow-lg tw-rounded-lg tw-p-5">
              <Link
                to="/datoscrucero"
                state={{
                  producto,
                  cabinPhotos,
                  pasajeros,
                  selectedDate,
                  endDate,
                  selectedPrice,
                }}
              >
                <button className="tw-bg-secondary tw-p-3 tw-px-8 tw-rounded-xl tw-shadow-md tw-text-white tw-font-bold">
                  Total:{" "}
                  {pasajeros
                    .reduce((total, pasajero) => {
                      const discount = pasajero.discount || 0;
                      return total + selectedPrice * (1 - discount / 100);
                    }, 0)
                    .toFixed(2)}
                  €
                </button>
              </Link>
              <p className="tw-text-sm tw-mt-3 tw-font-semibold tw-text-slate-500">
                Ida: {FormatearFecha(selectedDate)} | Vuelta:{" "}
                {endDate ? FormatearFecha(endDate) : "Fecha no seleccionada"}
              </p>
            </div>
          ) : (
            <div className="tw-mb-4 tw-text-red-400 tw-animate-pulse tw-text-center tw-mt-10 tw-shadow-lg tw-rounded-lg tw-p-5">
              Selecciona la cabina y personas a bordo
            </div>
          )}
    */}
        </article>
      </div>
    </main>
  );
}

export default Producto;
