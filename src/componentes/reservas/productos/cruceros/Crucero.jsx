import Buscador from "./filtros/Buscador";
import { GiCruiser } from "react-icons/gi";
import Tarifas from "./Tarifa_lista";
import Head from "../../estructura/ProductoHeader";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Pasajeros from "./crucero/Pasajeros";
import { Link } from "react-router-dom";

function Producto() {
  const location = useLocation();
  const producto = location.state;

  function getRandomTailwindColor() {
    const colors = ["bg-blue-400"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedCabinId, setSelectedCabinId] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [precio, setPrecio] = useState(0);
  const [pasajeros, setPasajeros] = useState([]);
  const [endDate, setEndDate] = useState("");

  const formatDate = (dateString) => {
    const [day, month, year] = dateString
      .split("/")
      .map((num) => parseInt(num, 10));

    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    return `${day} de ${months[month - 1]} de ${year}`;
  };

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
      setEndDate(""); // Reset endDate if no date is selected
    }
  }, [selectedDate, producto.dias]);

  const reserva = {
    type: "crucero",
    nombre: producto.titulo,
    fechaIda: selectedDate,
    fechaVuelta: endDate || "Fecha no seleccionada", // Fallback for no selected date
    precio: precio,
  };

  const selectedCabin = producto.precios.find(
    (row) => row.id === selectedCabinId
  );
  const cabinTitle = selectedCabin ? selectedCabin.title : "N/A";
  const cabinPhotos = selectedCabin ? selectedCabin.habitacionImgs : [];

  return (
    <main className="flex justify-center flex-col my-10 px-5 md:px-0">
      <div className="container">
        <Buscador />
        <Head
          nombre={producto.nombreCrucero}
          descripcion={
            <p className="flex items-center">
              <GiCruiser className="text-secondary text-lg" />
              {producto.titulo}
            </p>
          }
          boton="Reservar"
        />
        <article className="mt-5 dark:bg-slate-800 rounded-lg">
          <section className="flex flex-col md:flex-row gap-10 p-5 border-b-2 border-slate-100 dark:border-slate-700 ">
            <img
              src={producto.crucero}
              alt="imagen crucero"
              className="h-[25vh] shadow-md rounded-xl object-cover"
            />
            <div>
              <h2 className="font-semibold text-lg dark:text-white">
                {producto.recorrido}
              </h2>
              <p className="mt-5 text-slate-500 dark:text-slate-300 text-sm pr-10">
                {producto.descripcion}
              </p>
              <div className="flex flex-wrap gap-5 mt-5">
                {producto.incluidos.map((incluido, index) => (
                  <span
                    key={index}
                    className={`p-1 flex items-center justify-center text-center rounded-md text-sm lowercase text-white font-semibold ${getRandomTailwindColor()}`}
                  >
                    {incluido}
                  </span>
                ))}
              </div>
            </div>
          </section>
          <section>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {cabinPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={photo}
                  alt={`Photo ${index + 1} of ${cabinTitle}`}
                  className="rounded-lg shadow-md object-cover"
                />
              ))}
            </div>
            {selectedPrice &&
              selectedDate &&
              selectedCabinId &&
              pasajeros.length !== 0 && (
                <div className="mb-4 text-center mt-10 bg-slate-50 dark:bg-transparent dark:border-0 border-2 border-slate-100 shadow-lg rounded-lg p-5">
                  <p className="text-sm text-gray-700 dark:text-slate-300">
                    Ida: {formatDate(selectedDate)} | Vuelta:{" "}
                    {endDate ? formatDate(endDate) : "Fecha no seleccionada"}
                  </p>
                  <Link to="/datos" state={reserva}>
                    <button className="bg-secondary p-3 px-8 rounded-xl shadow-lg text-white font-bold">
                      Total: {selectedPrice * pasajeros.length}€
                    </button>
                  </Link>
                </div>
              )}
          </section>
        </article>
      </div>
    </main>
  );
}

export default Producto;
