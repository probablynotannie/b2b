import { FaMapPin } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cesta from "../../../estructura/cesta/Zustand";
import groupAndMergeRooms from "./hook/mergeHabitaciones.js";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
import Detalles from "./detalles/contenidoPrincipal/Hotel.jsx";
import Aside from "./detalles/contenidoSecundario/Aside.jsx";
import useNetoStore from "../../../../assets/netoSwitcher/useNetoStore.js";

function Producto() {
  const vaciarCesta = cesta((state) => state.vaciarCesta);
  const location = useLocation();
  const producto = location.state;
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  const agrupados = groupAndMergeRooms(producto.ListaPrecios);
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState();
  const [modalMasProductos, setModalMasProductos] = useState(false);
  const confirmacion = () => {
    setModalMasProductos(true);
  };
  const navigate = useNavigate();
  const anadirProducto = cesta((state) => state.anadirProducto);
  const aniadirMas = () => {
    vaciarCesta();
    anadirProducto({
      hotel: producto,
      habitacion: habitacionSeleccionada,
      fecha: "producto.fecha",
      fechaVuelta: "producto.fechaSalida",
      titulo: producto.NombreHotel,
      ubicacion: producto.Dir,
      precio: Number(habitacionSeleccionada.Price),
      img: "/banners/banner_hoteles.webp",
      pax:
        habitacionSeleccionada.adultosTotal +
        habitacionSeleccionada.niniosTotal,
      type: 1,
    });
    setModalMasProductos(false);
  };

  const sinProductosAdicionales = () => {
    navigate("/datosHotel", {
      state: {
        producto,
        habitacion: habitacionSeleccionada,
      },
    });
  };
  const { neto, setNeto } = useNetoStore();
  return (
    <>
      <PaginaDetalles
        titulo={producto.NombreHotel}
        tituloDescripcion={
          <span className="tw-flex tw-gap-1">
            <FaMapPin className="tw-text-secondary tw-text-lg" />

            {producto.Dir}
          </span>
        }
        contenidoPrincipal={
          <>
            <Detalles
              setNeto={setNeto}
              neto={neto}
              hotel={producto}
              values={values}
              setValues={setValues}
              minMax={minMax}
              setMinMax={setMinMax}
              producto={producto}
              habitaciones={agrupados}
              habitacionSeleccionada={habitacionSeleccionada}
              setHabitacionSeleccionada={setHabitacionSeleccionada}
              modalMasProductos={modalMasProductos}
              setModalMasProductos={setModalMasProductos}
              confirmacion={confirmacion}
              sinProductosAdicionales={sinProductosAdicionales}
              aniadirMas={aniadirMas}
            />
          </>
        }
        extra={<Aside producto={producto} habitaciones={agrupados} />}
      />
    </>
  );
}

export default Producto;
