import Itinerario from "../crucero/Itinerario";
function Detalles({ producto }) {
  return (
    <div>
      <section className="tw-mt-5">
        <div className="tw-bg-slate-50 tw-mt-5 dark:tw-bg-slate-800 dark:tw-text-slate-300 tw-p-3 tw-my-5 tw-rounded">
          <h3 className="tw-font-semibold tw-text-lg">
            {producto.barco.nombre.texto}
          </h3>
          <p className="tw-text-sm  tw-rounded">{producto.barco.descripcion}</p>
        </div>
        <Itinerario producto={producto.itin_dias} />
      </section>
    </div>
  );
}

export default Detalles;
