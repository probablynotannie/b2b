import Listado_Tablas from "../../estructura/hoteles/Listado";
import Listado_cajas from "../../estructura/hoteles/Listado_cajas";
import Imagenes from "../../estructura/hoteles/Imgs";
import Info from "../../estructura/hoteles/Info";
import Map from "../../estructura/hoteles/Map";
import { FaMapPin, FaRegCalendarAlt, FaChild } from "react-icons/fa";
import Head from "../../estructura/ProductoHeader";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cesta from "../../../estructura/cesta/Zustand";
import groupAndMergeRooms from "./scripts/mergeHabitaciones.js";

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
  console.log(agrupados);
  return (
    <main className="tw-flex tw-justify-center tw-flex-col tw-my-10 tw-px-5 md:tw-px-10  tw-container">
      <Head
        nombre={producto.NombreHotel}
        descripcion={
          <p className="tw-flex tw-items-center">
            <FaMapPin className="tw-text-secondary tw-text-lg" />
            {producto.Dir}
          </p>
        }
      />
      <article className="tw-grid tw-grid-cols-5 lg:tw-gap-10 tw-my-5 tw-mt-10 ">
        <aside className="tw-h-[25vh] tw-col-span-5 tw-mt-5 tw-lg:mt-0">
          <Map hotel={producto} />
        </aside>
        <section className="tw-col-span-5 tw-mt-10 tw-mb-5 lg:tw-my-5">
          <Info
            titulo={"Descripción del hotel"}
            descripcion={producto.ShortDesc}
          />
        </section>
        <section className="tw-col-span-5 tw-hidden md:tw-block">
          <Listado_Tablas
            values={values}
            setValues={setValues}
            minMax={minMax}
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
        </section>
        <section className="tw-col-span-5 tw-block md:tw-hidden">
          <Listado_cajas
            values={values}
            setValues={setValues}
            minMax={minMax}
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
        </section>
        <section className="tw-col-span-5">
          <h4 className="tw-font-bold tw-text-lg tw-mb-3 dark:tw-text-white">
            Imagenes
          </h4>
          <Imagenes imagenes={producto.ListFotos} />
        </section>
      </article>
    </main>
  );
}

export default Producto;
