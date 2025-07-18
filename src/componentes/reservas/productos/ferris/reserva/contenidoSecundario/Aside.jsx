import { Link } from "react-router-dom";

function Aside({ data, ida, vuelta }) {
  return (
    <div>
      <h2 className="tw-font-semibold tw-border-b-2 tw-border-slate-100 dark:tw-text-slate-200 dark:tw-border-slate-700 tw-pb-2">
        Resumen
      </h2>
      <img
        src={ida.barco}
        className="tw-opacity-90 tw-rounded tw-shadow tw-mb-4 tw-h-[20vh] tw-w-full tw-object-cover"
        alt="Reserva ferry"
      />
      {ida && vuelta ? (
        <h3 className="tw-font-semibold dark:tw-text-slate-100">
          Ida y vuelta
        </h3>
      ) : (
        <h3 className="tw-font-semibold dark:tw-text-slate-100">Solo ida</h3>
      )}
      <ul>
        <li className="tw-flex tw-justify-between tw-items-center dark:tw-text-slate-300">
          <span>Tipo</span>
          <span>{ida.tipo}</span>
        </li>
      </ul>
      <Link to={"/resumenFerry"} state={{ ida, vuelta, data }}>
        <button className="tw-mt-3 tw-btn_accesorios tw-btn_primario tw-w-full">
          {Number(ida.precio + (vuelta ? vuelta.precio : 0)).toFixed(2)}€
        </button>
      </Link>
    </div>
  );
}

export default Aside;
