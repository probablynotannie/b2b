import React from "react";
import Actividad from "../seleccion/Actividad";
import { FaUser } from "react-icons/fa6";
function Actividades({ actividades }) {
  const calculateTotalPrice = () => {
    const actividadesTotal = actividades.reduce((sum, actividad) => {
      const precioActividad = Number(actividad.precioTotal);
      return sum + precioActividad;
    }, 0);
    return actividadesTotal;
  };
  return (
    <article className="tw-mt-10 tw-shadow-lg hover:tw-shadow-xl tw-transition tw-duration-300 tw-border dark:tw-bg-slate-800 tw-bg-slate-50 tw-p-5 tw-border-slate-200 dark:tw-border-slate-700 tw-rounded-lg">
      <section className="tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-pb-2 tw-mb-5">
        <div>
          <h3 className="tw-text-lg tw-font-bold dark:tw-text-white">
            {actividades.length} actividad{actividades.length > 1 ? "es" : ""}{" "}
            reservadas
          </h3>
        </div>
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
          <FaUser className="tw-text-xl tw-text-secondary dark:tw-text-secondaryDark" />

          <span className="tw-text-secondary dark:tw-text-secondaryDark tw-font-bold">
            {calculateTotalPrice()}€
          </span>
        </div>
      </section>
      <div className="tw-grid md:tw-grid-cols-3 tw-gap-5">
        {actividades.map((actividad, index) => (
          <section
            key={index}
            className="tw-pb-20 tw-bg-white tw-duration-300 dark:tw-bg-slate-900 tw-h-auto tw-max-w-full tw-rounded-lg tw-rounded-t-lg tw-shadow tw-transition tw-relative dark:tw-border-2 dark:tw-border-slate-700"
          >
            <Actividad actividad={actividad} />
          </section>
        ))}
      </div>
    </article>
  );
}

export default Actividades;
