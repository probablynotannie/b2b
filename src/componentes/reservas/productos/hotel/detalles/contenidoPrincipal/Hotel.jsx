import Info from "../Info";
import InfoHotel from "./Info";
import Map from "../hoteles/Map";
import Imagenes from "../hoteles/Imgs";
import Precios from "./Precios";
function Hotel({
  setNeto,
  neto,
  hotel,
  values,
  setValues,
  minMax,
  setMinMax,
  producto,
  habitaciones,
  habitacionSeleccionada,
  setHabitacionSeleccionada,
  modalMasProductos,
  setModalMasProductos,
  confirmacion,
  sinProductosAdicionales,
  aniadirMas,
  reservaFinal,
}) {
  return (
    <main className="tw-flex tw-flex-col tw-space-y-10">
      <section className="lg:tw-hidden tw-block">
        <InfoHotel hotel={hotel} />
      </section>
      <section>
        <div className="tw-h-[30vh] tw-w-full">
          <Map hotel={hotel} />
        </div>
      </section>
      {hotel.ShortDesc && (
        <Info titulo={"Descripción del hotel"} descripcion={hotel.ShortDesc} /> 
      )}
      {reservaFinal !== true && (
        <div>
          <Precios
            setNeto={setNeto}
            neto={neto}
            values={values}
            setValues={setValues}
            minMax={minMax}
            setMinMax={setMinMax}
            producto={producto}
            habitaciones={habitaciones}
            habitacionSeleccionada={habitacionSeleccionada}
            setHabitacionSeleccionada={setHabitacionSeleccionada}
            modalMasProductos={modalMasProductos}
            setModalMasProductos={setModalMasProductos}
            confirmacion={confirmacion}
            sinProductosAdicionales={sinProductosAdicionales}
            aniadirMas={aniadirMas}
          />
        </div>
      )}
      <Imagenes imagenes={hotel.ListFotos} />
    </main>
  );
}

export default Hotel;
