import Seleccion from "./Seleccion";

function Resultado({ trenes, setTren, tipo }) {
  return (
    <section className="tw-pb-12 tw-px-4 lg:tw-px-0">
      <div>
        <h3 className="tw-text-secondary tw-font-semibold tw-text-xl">
          Resultado {tipo} ({trenes.length})
        </h3>
        <div className="tw-flex tw-items-center tw-gap-2">
          <div className="tw-flex tw-items-center tw-gap-1 tw-text-xs tw-text-green-700 dark:tw-text-green-500 tw-font-semibold">
            <span className="tw-w-1 tw-h-3 tw-block tw-rounded-full tw-bg-green-500"></span>
            directo
          </div>
          <div className="tw-flex tw-items-center tw-gap-1 tw-text-xs tw-text-blue-500 dark:tw-text-blue-500 tw-font-semibold">
            <span className="tw-w-1 tw-h-3 tw-block tw-rounded-full tw-bg-blue-500"></span>
            con parada/s
          </div>
        </div>
      </div>
      {trenes.length === 0 ? (
        <p className="tw-text-slate-500 dark:tw-text-slate-400 tw-mt-4">
          No hay resultados con los filtros aplicados.
        </p>
      ) : (
        trenes.map((tren, index) => (
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
