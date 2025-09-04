import Listado_cajas from "./detalles/hoteles/Listado_cajas";
import Listado from "./detalles/hoteles/Listado";
import formatearFecha from "../../../assets/scripts/formatearFecha";
import ModalWindow from "../../../helpers/visuales/ModalWindow";
function hotelMas({
  setOpenModalPrecios,
  openModalPrecios,
  neto,
  habitacion,
  index,
  reserva,
  fechaSalida,
  hotel,
  agrupados,
  habitacionSeleccionada,
  setHabitacion,
  confirmacion,
  botonMapa,
}) {
  return (
    <div>
      <button
        onClick={() => setOpenModalPrecios(index)}
        className={` tw-flex tw-gap-1
          ${
            botonMapa === true
              ? "tw-smooth tw-w-full group-hover:tw-text-secondary dark:group-hover:tw-text-secondaryDark tw-text-xl tw-font-mono"
              : "tw-btn_accesorios tw-btn_primario tw-flex tw-gap-1"
          }
          `}
      >
        desde
        {botonMapa === true ? (
          <span>
            {neto !== true ? habitacion.Price : habitacion.Pvp}
            {habitacion.Currency === "EUR" ? "€" : habitacion.Currency}
          </span>
        ) : (
          <span>
            {neto !== true
              ? habitacion[0]?.baseRoom?.Price
              : habitacion[0]?.baseRoom?.Pvp}
            {habitacion.length > 0 &&
              (habitacion[0].baseRoom.Currency === "EUR"
                ? "€"
                : habitacion[0].baseRoom.Currency)}
          </span>
        )}
      </button>
      <ModalWindow
        show={openModalPrecios === index}
        onClose={() => setOpenModalPrecios(null)}
        titulo={hotel.NombreHotel}
        /*   subTitulo={
          formatearFecha(reserva.fecini) + " - " + formatearFecha(fechaSalida)
        } */
        body={
          <div className="tw-space-y-6">
            <section className="tw-col-span-5 tw-hidden md:tw-flex">
              <Listado
                neto={neto}
                habitaciones={agrupados}
                habitacionSeleccionada={habitacionSeleccionada}
                setHabitacionSeleccionada={setHabitacion}
                confirmacion={confirmacion}
                hotel={hotel}
              />
            </section>
            <section className="tw-col-span-5 md:tw-hidden">
              <Listado_cajas
                neto={neto}
                habitaciones={agrupados}
                habitacionSeleccionada={habitacionSeleccionada}
                setHabitacionSeleccionada={setHabitacion}
                confirmacion={confirmacion}
                hotel={hotel}
              />
            </section>
          </div>
        }
      />
    </div>
  );
}

export default hotelMas;
