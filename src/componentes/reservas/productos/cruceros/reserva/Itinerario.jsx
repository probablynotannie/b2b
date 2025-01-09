import React from "react";

function Itinerario({ producto }) {
  return (
    <div>
      {producto.itinerario.map((itinerario, index) => (
        <div key={index}>{itinerario.destino}</div>
      ))}
    </div>
  );
}

export default Itinerario;
