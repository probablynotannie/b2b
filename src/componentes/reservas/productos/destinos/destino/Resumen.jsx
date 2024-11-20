import React from "react";

function Resumen({ producto }) {
  return (
    <>
      <h2 className="text-lg font-bold">{producto.nombre}</h2>

      <div>
        <button className="bg-secondary w-full p-3 rounded-lg font-bold text-white text-lg shadow-lg">
          Descargar carteleria AAVV
        </button>
      </div>
    </>
  );
}

export default Resumen;
