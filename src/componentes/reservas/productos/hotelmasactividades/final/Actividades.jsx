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
    <article className="mt-10 shadow-lg hover:shadow-xl transition duration-300 border dark:bg-slate-800 bg-slate-50 p-5 border-slate-200 dark:border-slate-700  rounded-lg">
      <section className="flex justify-between items-center border-b-2 border-slate-100 dark:border-slate-700 pb-2 mb-5">
        <div>
          <h3 className="text-lg font-bold dark:text-white">
            {actividades.length} actividad{actividades.length > 1 ? "es" : ""}{" "}
            reservadas
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaUser className="text-xl text-secondary dark:text-secondaryDark" />

          <span className="text-secondary dark:text-secondaryDark font-bold">
            {calculateTotalPrice()}€
          </span>
        </div>
      </section>
      <div className="grid md:grid-cols-3 gap-5">
        {actividades.map((actividad, index) => (
          <section
            key={index}
            className="pb-20 bg-white duration-300 dark:bg-slate-900 h-auto max-w-full rounded-lg rounded-t-lg  shadow transition relative dark:border-2 dark:border-slate-700"
          >
            <Actividad actividad={actividad} />
          </section>
        ))}
      </div>
    </article>
  );
}

export default Actividades;
