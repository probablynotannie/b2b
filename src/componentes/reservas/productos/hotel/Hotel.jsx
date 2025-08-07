import { FaMapPin } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cesta from "../../../estructura/cesta/Zustand";
import groupAndMergeRooms from "./scripts/mergeHabitaciones.js";
import PaginaDetalles from "../../../../helpers/visuales/PaginaDetalles";
import Detalles from "./detalles/contenidoPrincipal/Hotel.jsx";
import Aside from "./detalles/contenidoSecundario/Aside.jsx";
import useNetoStore from "./scripts/zustand/useNetoStore.js";

function Producto() {
  const reserva = {
    pax: 2,
    pax_ninios: 1,
    habitaciones: 2,
    noches: 7,
    fecha: "10/12/2025",
    fechaSalida: "19/12/2025",
  };
  const location = useLocation();
  const producto = location.state;
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
  const agrupados = groupAndMergeRooms(producto.ListaPrecios);
  const pax = producto.pax + producto.pax_ninios;
  const [habitacionSeleccionada, setHabitacionSeleccionada] = useState();
  const [modalMasProductos, setModalMasProductos] = useState(false);
  const confirmacion = () => {
    setModalMasProductos(true);
  };
  const navigate = useNavigate();
  const anadirProducto = cesta((state) => state.anadirProducto);
  const aniadirMas = () => {
    anadirProducto({
      hotel: producto,
      habitacion: habitacionSeleccionada,
      fecha: producto.fecha,
      fechaVuelta: producto.fechaSalida,
      titulo: producto.nombre,
      ubicacion: producto.direccion,
      precio: habitacionSeleccionada.precio,
      img: "/banners/banner_hoteles.webp",
      pax: pax,
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
