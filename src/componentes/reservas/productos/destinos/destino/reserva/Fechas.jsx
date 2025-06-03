import { useState, useEffect } from "react";
import Input_Fecha from "../../../../../inputs/DateRangePrice";
import Aside from "./Aside";
import Info from "./Info";
import { useLocation } from "react-router-dom";
import SeleccionHoteles from "./SeleccionHoteles";
function Fechas() {
  const location = useLocation();
  const producto = location.state;
  const productoConHabitaciones = {
    ...producto,
    habitaciones: producto.habitaciones || [],
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
  const addRoom = (tipo = "Habitación Doble") => {
    setLocalProducto((prevState) => {
      const updatedHabitaciones = [
        ...prevState.habitaciones,
        { id: Date.now(), pax: 2, tipo },
      ];

      const totalPax = updatedHabitaciones.reduce(
        (sum, hab) => sum + hab.pax,
        2
      );
      const totalPrice = totalPax * 100;
      return {
        ...prevState,
        habitaciones: updatedHabitaciones,
        pax: totalPax,
        precio: totalPrice,
      };
    });
  };

  const deleteRoom = (id) => {
    setLocalProducto((prevState) => {
      const updatedHabitaciones = prevState.habitaciones.filter(
        (habitacion) => habitacion.id !== id
      );
      const totalPax = updatedHabitaciones.reduce(
        (sum, hab) => sum + hab.pax,
        2
      );
      return {
        ...prevState,
        habitaciones: updatedHabitaciones,
        pax: totalPax,
      };
    });
  };

  const handleRoomTypeChange = (id, pax) => {
    setLocalProducto((prevState) => {
      const updatedHabitaciones = prevState.habitaciones.map((habitacion) =>
        habitacion.id === id ? { ...habitacion, pax } : habitacion
      );
      const totalPax = updatedHabitaciones.reduce(
        (sum, hab) => sum + hab.pax,
        2
      );
      return {
        ...prevState,
        habitaciones: updatedHabitaciones,
        pax: totalPax,
      };
    });
  };

  const hoteles = [
    {
      dias: "1-3",
      hoteles: [
        {
          id: 1,
          nombre: "Hotel Barceló Raval",
          descripcion:
            "Un hotel moderno en el corazón de Barcelona con vistas panorámicas.",
          imagenes: ["/hotel1.jpg", "/hotel1b.jpg"],
          imagenMiniatura: "/hotel1.jpg",
          regimenes: [{ nombre: "Desayuno", extra: 15 }],
        },
        {
          id: 2,
          nombre: "Meliá Madrid Princesa",
          descripcion:
            "Hotel de lujo con habitaciones amplias y servicios exclusivos.",
          imagenes: ["/hotel2.jpg", "/hotel2b.jpg"],
          imagenMiniatura: "/hotel2.jpg",
          regimenes: [
            { nombre: "Desayuno", extra: 18 },
            { nombre: "Media pensión", extra: 35 },
            { nombre: "Todo incluido", extra: 50 },
            { nombre: "Regimen Especial", extra: 102 },
            { nombre: "Segun programa", extra: 86 },
            { nombre: "Pension completa", extra: 70 },
            { nombre: "HM", extra: 20 },
            { nombre: "Regimen raro", extra: 60 },
            { nombre: "Especial verano", extra: 85 },
            { nombre: "Especial Invierno", extra: 75 },
          ],
        },
        {
          id: 3,
          nombre: "NH Collection Sevilla",
          descripcion: "Perfecto para negocios o escapadas urbanas en Sevilla.",
          imagenes: ["/hotel3.jpg", "/hotel3b.jpg"],
          imagenMiniatura: "/hotel3.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 40 },
            { nombre: "Media pensión", extra: 25 },
            { nombre: "Desayuno", extra: 12 },
          ],
        },
        {
          id: 4,
          nombre: "Hotel Eurostars Málaga",
          descripcion: "Ubicación estratégica y diseño vanguardista.",
          imagenes: ["/hotel4.jpg", "/hotel4b.jpg"],
          imagenMiniatura: "/hotel4.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 38 },
            { nombre: "Desayuno", extra: 10 },
          ],
        },
        {
          id: 5,
          nombre: "Hotel Ilunion Valencia",
          descripcion: "Cercano a la Ciudad de las Artes y las Ciencias.",
          imagenes: ["/hote3.jpg", "/hotel3.jpg"],
          imagenMiniatura: "/hotel1.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 35 },
            { nombre: "Media pensión", extra: 20 },
            { nombre: "Desayuno", extra: 8 },
          ],
        },
        {
          id: 6,
          nombre: "Hotel Hesperia Bilbao",
          descripcion: "Colores vibrantes frente al museo Guggenheim.",
          imagenes: ["/hotel1.jpg", "/hotel1.jpg"],
          imagenMiniatura: "/hotel3.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 48 },
            { nombre: "Media pensión", extra: 28 },
            { nombre: "Desayuno", extra: 14 },
          ],
        },
        {
          id: 7,
          nombre: "Silken Puerta América",
          descripcion: "Hotel de diseño único en Madrid.",
          imagenes: ["/hotel2.jpg", "/hotel2.jpg"],
          imagenMiniatura: "/hotel2.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 55 },
            { nombre: "Media pensión", extra: 36 },
            { nombre: "Desayuno", extra: 20 },
          ],
        },
        {
          id: 8,
          nombre: "Catalonia Santa Justa",
          descripcion: "Con piscina en la azotea y fácil acceso al AVE.",
          imagenes: ["/hotel1.jpg", "/hotel2.jpg"],
          imagenMiniatura: "/hotel4.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 42 },
            { nombre: "Media pensión", extra: 26 },
            { nombre: "Desayuno", extra: 13 },
          ],
        },
        {
          id: 9,
          nombre: "Hotel Las Arenas Valencia",
          descripcion: "Lujo frente a la playa de la Malvarrosa.",
          imagenes: ["/hotel2.jpg", "/hotel3.jpg"],
          imagenMiniatura: "/hotel1.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 60 },
            { nombre: "Media pensión", extra: 40 },
            { nombre: "Desayuno", extra: 25 },
          ],
        },
        {
          id: 10,
          nombre: "Hotel Donostia San Sebastián",
          descripcion: "Elegancia en la costa norte.",
          imagenes: ["/hotel1.jpg", "/hotel2.jpg"],
          imagenMiniatura: "/hotel2.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 52 },
            { nombre: "Media pensión", extra: 32 },
            { nombre: "Desayuno", extra: 18 },
          ],
        },
      ],
    },
    {
      dias: "3-5",
      hoteles: [
        {
          id: 1,
          nombre: "Hotel Barceló Raval",
          descripcion:
            "Un hotel moderno en el corazón de Barcelona con vistas panorámicas.",
          imagenes: ["/hotel1.jpg", "/hotel1b.jpg"],
          imagenMiniatura: "/hotel1.jpg",
          regimenes: [{ nombre: "Desayuno", extra: 15 }],
        },
        {
          id: 2,
          nombre: "Meliá Madrid Princesa",
          descripcion:
            "Hotel de lujo con habitaciones amplias y servicios exclusivos.",
          imagenes: ["/hotel2.jpg", "/hotel2b.jpg"],
          imagenMiniatura: "/hotel2.jpg",
          regimenes: [
            { nombre: "Desayuno", extra: 18 },
            { nombre: "Media pensión", extra: 35 },
            { nombre: "Todo incluido", extra: 50 },
            { nombre: "Regimen Especial", extra: 102 },
            { nombre: "Segun programa", extra: 86 },
            { nombre: "Pension completa", extra: 70 },
            { nombre: "HM", extra: 20 },
            { nombre: "Regimen raro", extra: 60 },
            { nombre: "Especial verano", extra: 85 },
            { nombre: "Especial Invierno", extra: 75 },
          ],
        },
        {
          id: 3,
          nombre: "NH Collection Sevilla",
          descripcion: "Perfecto para negocios o escapadas urbanas en Sevilla.",
          imagenes: ["/hotel3.jpg", "/hotel3b.jpg"],
          imagenMiniatura: "/hotel3.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 40 },
            { nombre: "Media pensión", extra: 25 },
            { nombre: "Desayuno", extra: 12 },
          ],
        },
        {
          id: 4,
          nombre: "Hotel Eurostars Málaga",
          descripcion: "Ubicación estratégica y diseño vanguardista.",
          imagenes: ["/hotel4.jpg", "/hotel4b.jpg"],
          imagenMiniatura: "/hotel4.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 38 },
            { nombre: "Desayuno", extra: 10 },
          ],
        },
        {
          id: 5,
          nombre: "Hotel Ilunion Valencia",
          descripcion: "Cercano a la Ciudad de las Artes y las Ciencias.",
          imagenes: ["/hote3.jpg", "/hotel3.jpg"],
          imagenMiniatura: "/hotel1.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 35 },
            { nombre: "Media pensión", extra: 20 },
            { nombre: "Desayuno", extra: 8 },
          ],
        },
        {
          id: 6,
          nombre: "Hotel Hesperia Bilbao",
          descripcion: "Colores vibrantes frente al museo Guggenheim.",
          imagenes: ["/hotel1.jpg", "/hotel1.jpg"],
          imagenMiniatura: "/hotel3.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 48 },
            { nombre: "Media pensión", extra: 28 },
            { nombre: "Desayuno", extra: 14 },
          ],
        },
        {
          id: 7,
          nombre: "Silken Puerta América",
          descripcion: "Hotel de diseño único en Madrid.",
          imagenes: ["/hotel2.jpg", "/hotel2.jpg"],
          imagenMiniatura: "/hotel2.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 55 },
            { nombre: "Media pensión", extra: 36 },
            { nombre: "Desayuno", extra: 20 },
          ],
        },
        {
          id: 8,
          nombre: "Catalonia Santa Justa",
          descripcion: "Con piscina en la azotea y fácil acceso al AVE.",
          imagenes: ["/hotel1.jpg", "/hotel2.jpg"],
          imagenMiniatura: "/hotel4.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 42 },
            { nombre: "Media pensión", extra: 26 },
            { nombre: "Desayuno", extra: 13 },
          ],
        },
        {
          id: 9,
          nombre: "Hotel Las Arenas Valencia",
          descripcion: "Lujo frente a la playa de la Malvarrosa.",
          imagenes: ["/hotel2.jpg", "/hotel3.jpg"],
          imagenMiniatura: "/hotel1.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 60 },
            { nombre: "Media pensión", extra: 40 },
            { nombre: "Desayuno", extra: 25 },
          ],
        },
        {
          id: 10,
          nombre: "Hotel Donostia San Sebastián",
          descripcion: "Elegancia en la costa norte.",
          imagenes: ["/hotel1.jpg", "/hotel2.jpg"],
          imagenMiniatura: "/hotel2.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 52 },
            { nombre: "Media pensión", extra: 32 },
            { nombre: "Desayuno", extra: 18 },
          ],
        },
      ],
    },
    {
      dias: "5-7",
      hoteles: [
        {
          id: 1,
          nombre: "Hotel Barceló Raval",
          descripcion:
            "Un hotel moderno en el corazón de Barcelona con vistas panorámicas.",
          imagenes: ["/hotel1.jpg", "/hotel1b.jpg"],
          imagenMiniatura: "/hotel1.jpg",
          regimenes: [{ nombre: "Desayuno", extra: 15 }],
        },
        {
          id: 2,
          nombre: "Meliá Madrid Princesa",
          descripcion:
            "Hotel de lujo con habitaciones amplias y servicios exclusivos.",
          imagenes: ["/hotel2.jpg", "/hotel2b.jpg"],
          imagenMiniatura: "/hotel2.jpg",
          regimenes: [
            { nombre: "Desayuno", extra: 18 },
            { nombre: "Media pensión", extra: 35 },
            { nombre: "Todo incluido", extra: 50 },
            { nombre: "Regimen Especial", extra: 102 },
            { nombre: "Segun programa", extra: 86 },
            { nombre: "Pension completa", extra: 70 },
            { nombre: "HM", extra: 20 },
            { nombre: "Regimen raro", extra: 60 },
            { nombre: "Especial verano", extra: 85 },
            { nombre: "Especial Invierno", extra: 75 },
          ],
        },
        {
          id: 3,
          nombre: "NH Collection Sevilla",
          descripcion: "Perfecto para negocios o escapadas urbanas en Sevilla.",
          imagenes: ["/hotel3.jpg", "/hotel3b.jpg"],
          imagenMiniatura: "/hotel3.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 40 },
            { nombre: "Media pensión", extra: 25 },
            { nombre: "Desayuno", extra: 12 },
          ],
        },
        {
          id: 4,
          nombre: "Hotel Eurostars Málaga",
          descripcion: "Ubicación estratégica y diseño vanguardista.",
          imagenes: ["/hotel4.jpg", "/hotel4b.jpg"],
          imagenMiniatura: "/hotel4.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 38 },
            { nombre: "Desayuno", extra: 10 },
          ],
        },
        {
          id: 5,
          nombre: "Hotel Ilunion Valencia",
          descripcion: "Cercano a la Ciudad de las Artes y las Ciencias.",
          imagenes: ["/hote3.jpg", "/hotel3.jpg"],
          imagenMiniatura: "/hotel1.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 35 },
            { nombre: "Media pensión", extra: 20 },
            { nombre: "Desayuno", extra: 8 },
          ],
        },
        {
          id: 6,
          nombre: "Hotel Hesperia Bilbao",
          descripcion: "Colores vibrantes frente al museo Guggenheim.",
          imagenes: ["/hotel1.jpg", "/hotel1.jpg"],
          imagenMiniatura: "/hotel3.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 48 },
            { nombre: "Media pensión", extra: 28 },
            { nombre: "Desayuno", extra: 14 },
          ],
        },
        {
          id: 7,
          nombre: "Silken Puerta América",
          descripcion: "Hotel de diseño único en Madrid.",
          imagenes: ["/hotel2.jpg", "/hotel2.jpg"],
          imagenMiniatura: "/hotel2.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 55 },
            { nombre: "Media pensión", extra: 36 },
            { nombre: "Desayuno", extra: 20 },
          ],
        },
        {
          id: 8,
          nombre: "Catalonia Santa Justa",
          descripcion: "Con piscina en la azotea y fácil acceso al AVE.",
          imagenes: ["/hotel1.jpg", "/hotel2.jpg"],
          imagenMiniatura: "/hotel4.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 42 },
            { nombre: "Media pensión", extra: 26 },
            { nombre: "Desayuno", extra: 13 },
          ],
        },
        {
          id: 9,
          nombre: "Hotel Las Arenas Valencia",
          descripcion: "Lujo frente a la playa de la Malvarrosa.",
          imagenes: ["/hotel2.jpg", "/hotel3.jpg"],
          imagenMiniatura: "/hotel1.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 60 },
            { nombre: "Media pensión", extra: 40 },
            { nombre: "Desayuno", extra: 25 },
          ],
        },
        {
          id: 10,
          nombre: "Hotel Donostia San Sebastián",
          descripcion: "Elegancia en la costa norte.",
          imagenes: ["/hotel1.jpg", "/hotel2.jpg"],
          imagenMiniatura: "/hotel2.jpg",
          regimenes: [
            { nombre: "Todo incluido", extra: 52 },
            { nombre: "Media pensión", extra: 32 },
            { nombre: "Desayuno", extra: 18 },
          ],
        },
      ],
    },
  ];

  return (
    <article className="tw-container tw-my-10 tw-grid tw-grid-cols-3 tw-gap-10">
      <main className="tw-col-span-3 lg:tw-col-span-2 tw-shadow-xl tw-rounded-lg tw-p-5 tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-min-h-[70vh] dark:tw-bg-slate-800">
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
            <SeleccionHoteles  />
            <Info />
          </section>
        )}
      </main>
      <aside className="tw-col-span-3 lg:tw-col-span-1 tw-sticky tw-top-5 tw-shadow-xl tw-rounded-lg tw-p-5 tw-border-2 tw-border-slate-100 dark:tw-border-slate-700 tw-h-fit dark:tw-bg-slate-800">
        <Aside
          dates={dates}
          handleRoomTypeChange={handleRoomTypeChange}
          addRoom={addRoom}
          producto={localProducto}
          deleteRoom={deleteRoom}
          reserva={localProducto}
        />
      </aside>
    </article>
  );
}

export default Fechas;
