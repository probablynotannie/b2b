import React from "react";
import Seleccion from "./Seleccion";
function Resultado({ trenes, setTren, tipo }) {
  return (
    <section className="tw-pb-12 tw-px-4 lg:tw-px-0">
      <h3 className="tw-text-secondary tw-font-semibold tw-text-xl">
        Resultado {tipo} ({trenes.length})
      </h3>
      {trenes.map((tren, index) => (
        <React.Fragment key={index}>
          <Seleccion tren={tren} setTren={setTren} reservar={true}/>
        </React.Fragment>
      ))}
    </section>
  );
}

export default Resultado;