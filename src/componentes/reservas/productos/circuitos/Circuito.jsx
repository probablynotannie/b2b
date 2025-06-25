import { useState } from "react";
import { useLocation } from "react-router-dom";
import Detalles from "./detalles/Detalles";
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
    <main className="tw-grid lg:tw-grid-cols-3 tw-min-h-[55vh] tw-items-start tw-container tw-gap-y-10 tw-my-10 tw-mb-20 lg:tw-gap-12">
      <section className="tw-col-span-2 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-200 
tw-bg-white dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-p-5">
        <h1 className="tw-font-bold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-800 tw-pb-2">
          {actividad.titulo}
        </h1>
        <Detalles actividad={actividad} />
      </section>
      <article className="tw-sticky tw-top-10 tw-col-span-2 lg:tw-col-span-1 tw-shadow-lg hover:tw-shadow-xl tw-smooth tw-rounded-lg tw-min-h-[15vh] tw-border tw-border-slate-100 dark:tw-border-slate-800 tw-bg-white dark:tw-bg-slate-900 tw-p-5">
        <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
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
      </article>
    </main>
  );
}

export default Producto;
