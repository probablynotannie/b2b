import { useState } from "react";
import { useLocation } from "react-router-dom";
import Detalles from "./detalles/Detalles";
import { Link } from "react-router-dom";
import Eleccion from "./detalles/Eleccion";
function Producto() {
  const location = useLocation();
  const actividad = location.state;
  const [fecha, setFecha] = useState();
  const [habitacion, setHabitacion] = useState(1);
  const [roomData, setRoomData] = useState([
    { id: Date.now(), adultos: 1, ninios: 0, ninioAges: [] },
  ]);

  return (
    <main className="grid lg:grid-cols-3 min-h-[55vh] items-start container gap-y-10 my-10 lg:gap-12">
      <section className="col-span-2 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-200 dark:tw-border-slate-700 dark:bg-slate-900 p-5">
        <h1 className="font-bold border-b-2 border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 pb-2">
          {actividad.titulo}
        </h1>
        <Detalles actividad={actividad} />
      </section>
      <article className="sticky top-24 col-span-2 lg:col-span-1 shadow-lg hover:shadow-xl transition duration-300 rounded-lg min-h-[15vh] border border-slate-100  dark:tw-border-slate-800 dark:bg-slate-900 p-5">
        <h2 className="font-semibold border-b-2 border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 pb-2">
          Elegir cuando
        </h2>
        <Eleccion
          actividad={actividad}
          fecha={fecha}
          setFecha={setFecha}
          habitacion={habitacion}
          setHabitacion={setHabitacion}
          roomData={roomData}
          setRoomData={setRoomData}
        />

        <Link
          to={"/datosCircuito"}
          state={{ actividad, fecha, habitacion, roomData }}
        >
          <button className="w-full tw-bg-secondary dark:bg-green-600 rounded-lg  hover:shadow-lg transition duration-300 text-white p-3 font-semibold mt-2">
            {actividad.precio.toFixed(2)}€
          </button>
        </Link>
      </article>
    </main>
  );
}

export default Producto;
