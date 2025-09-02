import { useLocation } from "react-router-dom";
import Coche from "./contenidoPrincipal/Coche";
import { useState, useEffect } from "react";
import AnadirMasProductos from "../../../../helpers/visuales/masProductos/AnadirMasProductos";
import { useNavigate } from "react-router-dom";
import cesta from "../../../estructura/cesta/Zustand";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
import Aside from "./contenidoSecundario/Aside";
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
      fecha: producto.recogida.fecha,
      fechaVuelta: producto.devolucion.fecha,
      titulo: producto.nombre,
      ubicacion: [
        producto.recogida?.lugar && `Recogida: ${producto.recogida.lugar}`,
        producto.recogida?.hora && `a las ${producto.recogida.hora}`,
        producto.devolucion?.lugar &&
          ` Devolución: ${producto.devolucion.lugar}`,
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
    <PaginaDetalles
      titulo={producto.nombre}
      contenidoPrincipal={
        <>
          <Coche coche={producto} />
        </>
      }
      contenidoSecundario={
        <>
          <Aside
            conductor={conductor}
            setConductor={setConductor}
            producto={producto}
            contratar={contratar}
            setContratar={setContratar}
            reembolso={reembolso}
            totalExtras={totalExtras}
            setTotalExtras={setTotalExtras}
            precio={precio}
            selectedExtras={selectedExtras}
            setSelectedExtras={setSelectedExtras}
            confirmacion={confirmacion}
          />
          <AnadirMasProductos
            isOpen={modalMasProductos}
            setModalOpen={setModalMasProductos}
            masProductos={aniadirMas}
            onConfirm={sinProductosAdicionales}
          />
        </>
      }
    />
  );
}

export default Producto;
