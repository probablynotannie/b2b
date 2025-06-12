import { useState } from "react";
import SeleccionHoteles from "./SeleccionHoteles";
import hoteles from "./hoteles1.json";
function Hoteles() {
  const [activeTab, setActiveTab] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);
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
    opciones.map((opcion) => {
      let seleccionMasBarata = null;

      opcion.hoteles.forEach((hotel) => {
        hotel.tipo.forEach((regimen) => {
          const costo = regimen.extra;
          if (!seleccionMasBarata || costo < seleccionMasBarata.extra) {
            seleccionMasBarata = {
              hotelId: hotel.id,
              regimen: regimen.nombre,
              hotelNombre: hotel.nombre,
              extra: costo,
            };
          }
        });
      });

      return seleccionMasBarata
        ? {
            hotelId: seleccionMasBarata.hotelId,
            regimen: seleccionMasBarata.regimen,
            hotelNombre: seleccionMasBarata.hotelNombre,
          }
        : null;
    })
  );

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
          {opciones.map((opcion, index) => {
            return (
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
                  {opcion.dias} )
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <SeleccionHoteles
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
        hoteles={opciones[activeTab].hoteles}
        titulo={
          opciones[activeTab].ubicacion +
          " (días " +
          opciones[activeTab].dias +
          ")"
        }
        seleccion={selecciones[activeTab]}
        setSeleccion={(sel) => handleSeleccionChange(activeTab, sel)}
      />
    </div>
  );
}

export default Hoteles;
