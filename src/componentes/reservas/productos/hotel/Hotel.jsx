import Buscador from "./filtros/Buscador";
import { FaPerson } from "react-icons/fa6";
import Listado_cajas from "../../estructura/hoteles/Listado_cajas";
import Listado_Tablas from "../../estructura/hoteles/Listado";
import Imagenes from "../../estructura/hoteles/Imgs";
import Info from "../../estructura/hoteles/Info";
import Map from "../../estructura/hoteles/Map";
import { FaMapPin, FaRegCalendarAlt, FaChild } from "react-icons/fa";
import Head from "../../estructura/ProductoHeader";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cesta from "../../../estructura/cesta/Zustand";
function Producto() {
  const location = useLocation();
  const producto = location.state;
  const [values, setValues] = useState([0, 5000]);
  const [minMax, setMinMax] = useState([0, 5000]);
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
      fecha: producto.fecha + " " + producto.fechaSalida,
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
    console.log(habitacionSeleccionada.regimen);
    navigate("/datosHotel", {
      state: {
        producto,
        habitacion: habitacionSeleccionada,
      },
    });
  };
  return (
    <main className="tw-flex tw-justify-center tw-flex-col tw-my-10  tw-px-5 md:tw-px-0">
      <div className="tw-container">
        <Buscador />
        <Head
          nombre={producto.nombre}
          descripcion={
            <p className="tw-flex tw-items-center">
              <FaMapPin className="tw-text-secondary tw-text-lg" />
              {producto.ubicacion}
            </p>
          }
        />
        <article className="tw-grid tw-grid-cols-5 lg:tw-gap-10 tw-my-5 tw-mt-10 ">
          <section className="tw-col-span-5 lg:tw-col-span-1 tw-flex tw-flex-col tw-justify-between tw-border-2 tw-border-gray-200 dark:tw-border-slate-800 tw-rounded-xl tw-p-3 tw-text-slate-700 tw-bg-slate-500 dark:tw-bg-slate-800 tw-shadow-xl">
            <h4 className="tw-p-3 tw-font-bold text-cen tw-rounded-t-xl tw-text-secondary">
              Resumen
            </h4>
            <div className="tw-flex tw-justify-between tw-pb-2 tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700">
              <div className="tw-flex tw-items-center tw-space-x-1 tw-text-sm tw-font-semibold dark:tw-text-slate-100">
                <FaPerson className="tw-text-xl tw-text-secondary" />
                <span className="tw-text-white">
                  {producto.pax}x adulto{producto.pax !== 1 && "s"}
                </span>
              </div>
              {producto.pax_ninios > 0 && (
                <div className="tw-flex tw-items-center tw-space-x-1 tw-text-sm tw-font-semibold dark:tw-text-slate-100">
                  <FaChild className="tw-text-lg tw-text-secondary" />
                  <span className="tw-text-white">
                    {producto.pax_ninios}x niño{producto.pax_ninios > 1 && "s"}
                  </span>
                </div>
              )}
            </div>
            <div className="text-slateo-700 tw-mx-2 tw-mt-3 tw-text-sm">
              <span className="tw-font-semibold dark:tw-text-slate-400 tw-text-white">
                Entrada
              </span>
              <div className="tw-relative">
                <input
                  className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                  type="text"
                  disabled
                  value={producto.fecha}
                />
                <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                  <FaRegCalendarAlt />
                </div>
              </div>
              <span className="tw-block tw-mt-2 tw-font-semibold tw-text-white dark:tw-text-slate-400">
                Salida
              </span>
              <div className="tw-relative">
                <input
                  className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
                  type="text"
                  disabled
                  value={producto.fechaSalida}
                />
                <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                  <FaRegCalendarAlt />
                </div>
              </div>
            </div>
          </section>
          <aside className="tw-h-full lg:tw-col-span-4 tw-col-span-5 tw-mt-5 tw-lg:mt-0">
            <Map location={producto.ubicacion} />
          </aside>
          <section className="tw-col-span-5 tw-mt-10 tw-mb-5 lg:tw-my-5">
            <Info
              titulo={"Descripción del hotel"}
              descripcion={producto.descripcion}
            />
          </section>
          <section className="tw-col-span-5 tw-hidden md:tw-block">
            <Listado_Tablas
              values={values}
              setValues={setValues}
              minMax={minMax}
              producto={producto}
              habitaciones={producto.habitaciones}
              /* cositas de zustand */
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
              habitaciones={producto.habitaciones}
              /* cositas de zustand */
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
            <Imagenes imagenes={producto.habitacionImgs} />
          </section>
        </article>
      </div>
    </main>
  );
}

export default Producto;
