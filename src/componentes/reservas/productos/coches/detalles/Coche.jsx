import { useLocation } from "react-router-dom";
import Conductor from "./Conductor";
import Detalles from "./Detalles";
import Precio from "./Extras";
import Reembolso from "./Reembolso";
import { useState, useEffect } from "react";
import AnadirMasProductos from "../../../../../helpers/visuales/masProductos/AnadirMasProductos";
import { useNavigate } from "react-router-dom";
import cesta from "../../../../estructura/cesta/Zustand";
import formatearFecha from "../../../../../helpers/FormatearFecha";

function Producto() {
  const location = useLocation();
  const producto = location.state;
  const navigate = useNavigate();
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
  const [modalMasProductos, setModalMasProductos] = useState(false);
  const confirmacion = () => {
    setModalMasProductos(true);
  };
  const sinProductosAdicionales = () => {
    navigate("/datosCoche", {
      state: {
        producto,
        selectedExtras,
        precio,
        conductor,
        ...(contratar && { reembolso }),
      },
    });
  };
  const anadirProducto = cesta((state) => state.anadirProducto);

  const aniadirMas = () => {
    anadirProducto({
      producto,
      selectedExtras,
      conductor,
      ...(contratar && { reembolso }),
      fecha:
        formatearFecha(producto.recogida.fecha) +
        " - " +
        formatearFecha(producto.devolucion.fecha),
      titulo: producto.nombre,
      ubicacion: [
        producto.recogida?.lugar && `Recogida: ${producto.recogida.lugar}`,
        producto.recogida?.hora && `a las ${producto.recogida.hora}`,
        producto.devolucion?.lugar &&
          `Devolución: ${producto.devolucion.lugar}`,
      ],
      precio: precio,
      img: producto.img,
      type: 5,
    });
    setModalMasProductos(false);
  };
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

        <button
          onClick={confirmacion}
          className="tw-w-full tw-btn_accesorios tw-btn_primario"
        >
          Reservar {precio}€
        </button>
      </aside>
      <AnadirMasProductos
        isOpen={modalMasProductos}
        setModalMasProductos={setModalMasProductos}
        masProductos={aniadirMas}
        onConfirm={sinProductosAdicionales}
      />
    </div>
  );
}

export default Producto;
