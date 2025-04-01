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
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [conductor, setConductor] = useState({
    titulo: "",
    nombre: "",
    apellido: "",
    numVuelo: "",
  });

  return (
    <div className="tw-grid lg:tw-grid-cols-3 tw-gap-y-10 lg:tw-gap-16 tw-container tw-my-10 tw-min-h-[70vh] tw-overflow-visible tw-mt-10">
      <section className="tw-shadow-lg tw-h-fit hover:tw-shadow-xl tw-transition dark:tw-bg-slate-800 tw-rounded-xl tw-border-2 dark:tw-border-slate-700 tw-border-slate-100 tw-col-span-2 tw-p-3">
        <Detalles coche={producto} />
      </section>
      <aside className="tw-col-span-2 lg:tw-col-span-1 tw-flex tw-flex-col tw-gap-10">
        <section className="tw-p-3 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-rounded-xl tw-border-2 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-border-slate-100 tw-pb-3">
          <Conductor
            conductor={conductor}
            setConductor={setConductor}
            coche={producto}
          />
        </section>
        <section className="tw-p-3 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-rounded-xl tw-border-2 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-border-slate-100 tw-pb-3">
          <Reembolso
            contratar={contratar}
            setContratar={setContratar}
            reembolso={reembolso}
          />
        </section>
        <section className="tw-p-3 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-rounded-xl tw-border-2 dark:tw-border-slate-700 dark:tw-bg-slate-800 tw-border-slate-100 tw-pb-3">
          <Precio
            coche={producto}
            extras={totalExtras}
            selectedExtras={selectedExtras}
            setSelectedExtras={setSelectedExtras}
            setExtras={setTotalExtras}
          />
        </section>
        <Link
          to={"/datosCoche"}
          state={{
            producto,
            selectedExtras,
            precio,
            conductor,
            ...(contratar && { reembolso }),
          }}
        >
          <button className="tw-w-full tw-btn_accesorios tw-btn_primario tw-btn_accesorios-accesoriostw-w-full">
            Reservar {precio}€
          </button>
        </Link>
      </aside>
    </div>
  );
}

export default Producto;
