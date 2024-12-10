import { useLocation } from "react-router-dom";
import Conductor from "./Conductor";
import Detalles from "./Detalles";
import Precio from "./Extras";
import Reembolso from "./Reembolso";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Producto() {
  const location = useLocation();
  const producto = location.state;
  const [contratar, setContratar] = useState(false);
  const reembolso = 90;
  const [precio, setPrecio] = useState(producto.precio * producto.dias);
  const [totalExtras, setTotalExtras] = useState(0);

  useEffect(() => {
    let basePrice = producto.precio * producto.dias;
    if (contratar) {
      basePrice += reembolso;
    }
    basePrice += totalExtras;
    setPrecio(basePrice);
  }, [contratar, totalExtras, producto.precio, producto.dias, reembolso]);

  const reserva = {
    type: "hotel",
    nombre: producto.nombre,
    fechaIda: producto.recogida.fecha,
    fechaVuelta: producto.devolucion.fecha,
    precio: precio,
  };
  return (
    <div className="grid lg:grid-cols-3 gap-y-10 lg:gap-16 container my-10 min-h-[70vh] overflow-visible mt-10">
      <section className="shadow-lg hover:shadow-xl transition dark:bg-slate-800 rounded-xl border-2 dark:border-slate-700 border-slate-100 col-span-2 p-3">
        <Detalles coche={producto} />
      </section>
      <aside className="w-full flex flex-col gap-10">
        <section className="p-3 shadow-lg hover:shadow-xl transition rounded-xl border-2 dark:border-slate-700 dark:bg-slate-800 border-slate-100 pb-3">
          <Conductor coche={producto} />
        </section>
        <section className="p-3 shadow-lg hover:shadow-xl transition rounded-xl border-2 dark:border-slate-700 dark:bg-slate-800 border-slate-100 pb-3">
          <Reembolso
            contratar={contratar}
            setContratar={setContratar}
            reembolso={reembolso}
          />
        </section>
        <section className="p-3 shadow-lg hover:shadow-xl transition rounded-xl border-2 dark:border-slate-700 dark:bg-slate-800 border-slate-100 pb-3">
          <Precio
            coche={producto}
            extras={totalExtras}
            setExtras={setTotalExtras}
          />
        </section>
        <Link
          to={"/datos"}
          state={reserva}
          className="p-3 shadow-lg hover:shadow-xl dark:bg-slate-800 rounded-lg bg-secondary text-white  font-bold"
        >
          <button>Reservar {precio}€</button>
        </Link>
      </aside>
    </div>
  );
}

export default Producto;
