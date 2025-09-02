import { useState, useEffect } from "react";
import Input_Fecha from "../../../../inputs/DateRangePrice";
import Aside from "./contenidoSecundario/Aside";
import Info from "./contenidoPrincipal/Info";
import { useLocation } from "react-router-dom";
import Hoteles from "./contenidoPrincipal/hoteles/Hoteles";
import Hoteles2 from "./contenidoPrincipal/hoteles/Hoteles2";
import PaginaDetalles from "../../../../../helpers/visuales/PaginaDetalles";
function Destino() {
  const location = useLocation();
  const producto = location.state;
  const productoConHabitaciones = {
    ...producto,
  };
  const [localProducto, setLocalProducto] = useState(productoConHabitaciones);
  const [dates, setDates] = useState({
    startDate: null,
    endDate: null,
    startDatePrice: null,
  });
  useEffect(() => {
    const formatFecha = (date) => {
      if (!date) return "";
      const options = { day: "numeric", month: "long", year: "numeric" };
      return new Intl.DateTimeFormat("es-ES", options).format(date);
    };
    setLocalProducto((prevReserva) => ({
      ...prevReserva,
      fechaIda: dates.startDate ? formatFecha(dates.startDate) : "",
      fechaVuelta: dates.endDate ? formatFecha(dates.endDate) : "",
      adultos: localProducto.pax,
      precio: localProducto.pax * dates.startDatePrice,
    }));
  }, [dates, localProducto.pax]);
  return (
    <>
      <PaginaDetalles
        contenidoPrincipal={
          <>
            <img
              src={producto.img}
              className="md:tw-hidden tw-object-cover tw-w-full tw-h-[20vh] tw-shadow tw-rounded-md tw-mb-4"
              alt="imagen destino"
            />
            <Input_Fecha
              dates={dates}
              dias={localProducto.dias}
              prices={localProducto.prices}
              setDates={setDates}
            />
            <p className="tw-flex tw-justify-between tw-mt-2 tw-text-slate-500 dark:tw-text-slate-400">
              <span>
                {dates.startDate
                  ? dates.startDate.toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "Fecha ida"}{" "}
                -{" "}
                {dates.endDate
                  ? dates.endDate.toLocaleDateString("es-ES", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "Fecha vuelta"}
              </span>
              <span className="tw-font-semibold tw-text-secondary dark:tw-text-secondaryDark">
                {dates.startDatePrice ? `${dates.startDatePrice}€` : "Precio"}
              </span>
            </p>
            {dates.startDate && (
              <section>
                <Hoteles />
                <Hoteles2 />
                <Info />
              </section>
            )}
          </>
        }
        contenidoSecundario={
          <Aside
            dates={dates}
            producto={localProducto}
            reserva={localProducto}
          />
        }
      />
    </>
  );
}

export default Destino;
