import Buscador from "./filtros/Buscador";
import { GiCruiser } from "react-icons/gi";
import Tarifas from "./Tarifa_lista";
import Head from "../../estructura/ProductoHeader";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Pasajeros from "./crucero/Pasajeros";
import { Link } from "react-router-dom";
import FormatearFecha from "../../estructura/FormatearFecha";
import Itinerario from "./crucero/Itinerario";
function Producto() {
  const location = useLocation();
  const producto = location.state;

  function getRandomTailwindColor() {
    const colors = ["tw-bg-blue-400"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedCabinId, setSelectedCabinId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [precio, setPrecio] = useState(0);
  const [pasajeros, setPasajeros] = useState([]);
  const [endDate, setEndDate] = useState("");
  const calculateEndDate = (startDate, days) => {
    const [day, month, year] = startDate.split("/").map(Number);
    const start = new Date(year, month - 1, day);
    start.setDate(start.getDate() + days);
    return `${start.getDate()}/${start.getMonth() + 1}/${start.getFullYear()}`;
  };

  useEffect(() => {
    if (selectedDate) {
      const newEndDate = calculateEndDate(selectedDate, producto.dias);
      setEndDate(newEndDate);
    } else {
      setEndDate("");
    }
  }, [selectedDate, producto.dias]);

  const selectedCabin = producto.precios.find(
    (row) => row.id === selectedCabinId
  );
  const cabinTitle = selectedCabin ? selectedCabin.title : "N/A";
  const cabinPhotos = selectedCabin ? selectedCabin.habitacionImgs : [];

  return (
    <main className="tw-flex tw-justify-center tw-flex-col tw-my-10 tw-px-5 md:tw-px-0">
      <div className="tw-container">
        <Buscador />
        <Head
          nombre={producto.nombreCrucero}
          descripcion={
            <p className="tw-flex tw-items-center">
              <GiCruiser className="tw-text-secondary tw-text-xl tw-mr-1" />
              {producto.titulo}
            </p>
          }
          boton="Reservar"
        />
        <article className="tw-mt-5 dark:tw-bg-slate-800 tw-rounded-lg">
          <section className="tw-flex tw-flex-col md:tw-flex-row tw-gap-10 tw-p-5 tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700">
            <img
              src={producto.crucero}
              alt="imagen crucero"
              className="tw-h-[25vh] tw-shadow-md tw-rounded-xl tw-object-cover"
            />
            <div>
              <h2 className="tw-font-semibold tw-text-lg dark:tw-text-white">
                {producto.recorrido}
              </h2>
              <p className="tw-mt-5 tw-text-slate-500 dark:tw-text-slate-300 tw-text-sm tw-pr-10">
                {producto.descripcion}
              </p>
              <div className="tw-flex tw-flex-wrap tw-gap-5 tw-mt-5">
                {producto.incluidos.map((incluido, index) => (
                  <span
                    key={index}
                    className={`tw-p-1 tw-flex tw-items-center tw-justify-center tw-text-center tw-rounded-md tw-text-sm tw-lowercase tw-bg-blue-400 tw-text-white tw-font-semibold ${getRandomTailwindColor()}`}
                  >
                    {incluido}
                  </span>
                ))}
              </div>
            </div>
          </section>
          <section className="xl:tw-px-20">
            <Itinerario producto={producto} />
          </section>
          <Pasajeros pasajeros={pasajeros} setPasajeros={setPasajeros} />
          <section>
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
            {selectedPrice &&
            selectedDate &&
            selectedCabinId &&
            pasajeros.length !== 0 ? (
              <div className="tw-mb-4 tw-text-center tw-mt-10 tw-bg-slate-50 dark:tw-bg-transparent dark:tw-border-0 tw-border-2 tw-border-slate-100 tw-shadow-lg tw-rounded-lg tw-p-5">
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
                        const discountedPrice =
                          selectedPrice * (1 - discount / 100);
                        return total + discountedPrice;
                      }, 0)
                      .toFixed(2)}
                    €
                  </button>
                </Link>
                <p className="tw-text-sm dark:tw-text-slate-300 tw-mt-3 tw-font-semibold tw-text-slate-500">
                  Ida: {FormatearFecha(selectedDate)} | Vuelta:{" "}
                  {endDate ? FormatearFecha(endDate) : "Fecha no seleccionada"}
                </p>
              </div>
            ) : (
              <div className="tw-mb-4 tw-font-bold tw-text-red-400 tw-animate-pulse tw-text-center tw-mt-10 tw-bg-slate-50 dark:tw-bg-transparent dark:tw-border-0 tw-border-2 tw-border-slate-100 tw-shadow-lg tw-rounded-lg tw-p-5">
                Selecciona la cabina y personas a bordo
              </div>
            )}
          </section>
        </article>
      </div>
    </main>
  );
}

export default Producto;
