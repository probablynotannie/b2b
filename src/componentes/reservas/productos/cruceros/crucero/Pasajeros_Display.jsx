function Pasajeros_Display({ pasajeros, precio }) {
  return (
    <>
      {" "}
      {pasajeros.map((pasajero, index) => {
        const descuento = pasajero.descuento;
        const precioDescontado = (precio.price * (1 - descuento / 100)).toFixed(
          2
        );
        return (
          <div
            key={index}
            className="tw-border-b tw-flex tw-text-sm tw-justify-between tw-items-end dark:tw-border-slate-700 tw-py-2"
          >
            <div>
              <h4 className="dark:tw-text-white tw-font-semibold tw-text-base">
                Pasajero {index + 1}
              </h4>
              <span className="dark:tw-text-slate-300 tw-block tw-text-sm">
                Edad: {pasajero.age}
              </span>
              {pasajero.descuento > 0 && (
                <span className="dark:tw-text-slate-300 tw-block tw-text-sm">
                  descuento: {pasajero.descuento}%
                </span>
              )}
              <span className="dark:tw-text-slate-300 tw-block tw-text-sm">
                Tasas: {precio.datos.tasas}
              </span>
            </div>
            <span className="dark:tw-text-white tw-font-semibold">
              Total:{" "}
              {(Number(precioDescontado) + Number(precio.datos.tasas)).toFixed(
                2
              )}
              €
            </span>
          </div>
        );
      })}
    </>
  );
}

export default Pasajeros_Display;
