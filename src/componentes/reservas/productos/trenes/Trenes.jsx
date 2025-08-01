import Seleccion from "./Seleccion";

function Resultado({ trenes, setTren, tipo, values }) {
  const trenesFiltrados = trenes.filter((tren) => {
    if (!values || values.length < 2) return true;
    return tren.price >= values[0] && tren.price <= values[1];
  });

  return (
    <section className="tw-pb-12 tw-px-4 lg:tw-px-0">
      <h3 className="tw-text-secondary tw-font-semibold tw-text-xl">
        Resultado {tipo} ({trenesFiltrados.length})
      </h3>

      {trenesFiltrados.length === 0 ? (
        <p className="tw-text-slate-500 dark:tw-text-slate-400 tw-mt-4">
          No hay resultados dentro del rango seleccionado.
        </p>
      ) : (
        trenesFiltrados.map((tren, index) => (
          <Seleccion
            tren={tren}
            setTren={setTren}
            reservar={true}
            key={index}
          />
        ))
      )}
    </section>
  );
}

export default Resultado;
