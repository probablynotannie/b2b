function Imagen_Descripcion({ producto }) {
  return (
    <>
      <img
        src={producto.img}
        alt="imagen producto"
        className="tw-w-full tw-h-[30vh] tw-object-cover tw-object-top tw-my-3 tw-rounded"
      />
      <p className="tw-text-sm dark:tw-text-slate-200">
        {producto.descripcion_corta}
      </p>
    </>
  );
}

export default Imagen_Descripcion;
