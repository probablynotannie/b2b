import { useState, useEffect } from "react";
import SeleccionHoteles2 from "./SeleccionHoteles2";
import SeleccionHoteles3 from "./SeleccionHoteles2"; // typo? Probably should be SeleccionHoteles3?
import hoteles from "./hoteles1.json";

function Hoteles() {
  const [activeTab, setActiveTab] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);
  const pax = 7;

  const opciones = [
    {
      id: 1,
      dias: "1-3",
      ubicacion: "Egipto",
      hoteles: hoteles,
    },
    {
      id: 2,
      dias: "4-6",
      ubicacion: "Turquía",
      hoteles: hoteles.slice(3, 6),
    },
    {
      id: 3,
      dias: "7-9",
      ubicacion: "Grecia",
      hoteles: hoteles.slice(6),
    },
  ];

  const [selecciones, setSelecciones] = useState(() =>
    opciones.map(() => null)
  );
  useEffect(() => {
    const preselecciones = opciones.map((opcion) => {
      let mejorOpcion = null;

      opcion.hoteles.forEach((hotel) => {
        // Get all room types sorted by cost efficiency (cheapest per pax)
        const tiposOrdenados = [...hotel.tipo]
          .filter((tipo) => tipo.disponible > 0)
          .sort((a, b) => a.extra / a.capacidad - b.extra / b.capacidad);

        let paxRestantes = pax;
        let habitaciones = [];

        for (let tipo of tiposOrdenados) {
          if (paxRestantes <= 0) break;

          const maxHabitaciones = tipo.disponible;
          const personasPorHabitacion = tipo.capacidad;

          const necesarias = Math.ceil(paxRestantes / personasPorHabitacion);
          const usar = Math.min(necesarias, maxHabitaciones);

          if (usar > 0) {
            habitaciones.push({
              tipo: tipo.nombre,
              cantidad: usar,
              capacidad: tipo.capacidad,
              extra: tipo.extra,
            });
            paxRestantes -= usar * personasPorHabitacion;
          }
        }

        if (paxRestantes <= 0) {
          const costoTotal = habitaciones.reduce(
            (total, h) => total + h.extra * h.cantidad,
            0
          );

          if (!mejorOpcion || costoTotal < mejorOpcion.costo) {
            mejorOpcion = {
              hotelId: hotel.id,
              hotelNombre: hotel.nombre,
              habitaciones,
              costo: costoTotal,
            };
          }
        }
      });

      return mejorOpcion
        ? {
            hotelId: mejorOpcion.hotelId,
            hotelNombre: mejorOpcion.hotelNombre,
            habitaciones: mejorOpcion.habitaciones,
          }
        : null;
    });

    setSelecciones(preselecciones);
  }, []); // Only run once on mount

  const handleTabClick = (index) => {
    setActiveTab(index);
    setPaginaActual(1);
  };

  const handleSeleccionChange = (tabIndex, seleccion) => {
    const nuevasSelecciones = [...selecciones];
    nuevasSelecciones[tabIndex] = seleccion;
    setSelecciones(nuevasSelecciones);
  };

  return (
    <div className="tw-my-5">
      <div className="tw-text-sm tw-font-medium tw-text-center tw-text-slate-500 tw-border-b tw-border-slate-200 dark:tw-text-slate-300 dark:tw-border-slate-700">
        <ul className="tw-flex tw-flex-wrap -tw-mb-px">
          {opciones.map((opcion, index) => (
            <li key={opcion.id} className="tw-me-2">
              <button
                onClick={() => handleTabClick(index)}
                className={`tw-relative tw-inline-block tw-p-4 tw-rounded-t-lg ${
                  activeTab === index
                    ? "tw-text-secondary tw-border-b-2 tw-border-secondary dark:tw-text-secondaryDark dark:tw-border-secondaryDark"
                    : "tw-border-b-2 tw-border-transparent hover:tw-text-slate-600 hover:tw-border-slate-300 dark:hover:tw-text-slate-300"
                }`}
              >
                <span className="tw-block">{opcion.ubicacion}</span> (días{" "}
                {opcion.dias})
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="tw-flex tw-flex-col tw-space-y-16">
        <SeleccionHoteles2
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
          hoteles={opciones[activeTab].hoteles}
          titulo={`${opciones[activeTab].ubicacion} (días ${opciones[activeTab].dias})`}
          seleccion={selecciones[activeTab]}
          setSeleccion={(sel) => handleSeleccionChange(activeTab, sel)}
          pax={pax}
        />
   {/*      <SeleccionHoteles3
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
          hoteles={opciones[activeTab].hoteles}
          titulo={`${opciones[activeTab].ubicacion} (días ${opciones[activeTab].dias})`}
          seleccion={selecciones[activeTab]}
          setSeleccion={(sel) => handleSeleccionChange(activeTab, sel)}
          pax={pax}
        /> */}
      </div>
    </div>
  );
}

export default Hoteles;
