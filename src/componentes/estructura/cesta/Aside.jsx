import Iconos from "./Iconos";

function Aside({ producto }) {
  return (
    <div>
      <h3 className="tw-text-slate-700 dark:tw-text-slate-400">
        {producto.titulo}
      </h3>
      <div className="tw-flex tw-justify-between tw-items-center">
        <p className="tw-pl-2">
          <Iconos tipo={producto.type} />
        </p>
        <span className="tw-text-xs dark:tw-text-slate-200">{producto.pax}</span>
      </div>
    </div>
  );
}

export default Aside;
