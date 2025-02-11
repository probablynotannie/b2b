import Itinerario from "../crucero/Itinerario";
function Detalles({ cabinPhotos, producto }) {
  return (
    <div>
      <section className="tw-mt-5">
        <h3 className="tw-font-semibold dark:tw-text-slate-100">Incluidos</h3>

        <p className="tw-text-sm tw-bg-slate-50 tw-mt-5 dark:tw-bg-slate-700 dark:tw-text-slate-300 tw-p-3 tw-rounded">
          {producto.barco.descripcion}
        </p>
        <Itinerario producto={producto.itin_dias} />
      </section>
      {/*
      <section className="tw-p-3">
        <h3 className="tw-font-semibold dark:tw-text-slate-100">
          Fotos Camarote
        </h3>
         <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-4 tw-mt-4 tw-p-2">
          {cabinPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photo`}
              className="tw-rounded-lg tw-shadow-md hover:tw-shadow-lg tw-object-cover hover:tw-scale-110 tw-transition tw-duration-300"
            />
          ))}
        </div> 
      </section>
      */}
    </div>
  );
}

export default Detalles;
