import AsideListado from "../../../motores/buscador/AsideListado";
function Aside() {
  return <AsideListado contenido={<Filtrado />} />;
}

function Filtrado() {
  return (
    <div className="tw-p-6 lg:tw-p-3 lg:tw-pt-1">
      <span className="tw-font-semibold dark:tw-text-white">
        Número de escalas
      </span>
      <div className="tw-flex tw-items-center tw-mb-4">
        <input
          id="sin_escalas"
          type="checkbox"
          value=""
          className="tw-w-4 tw-h-4 tw-text-secondary tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-secondary dark:focus:tw-ring-secondary dark:tw-ring-offset-gray-800 focus:tw-ring-2 dark:tw-bg-gray-700 dark:tw-border-gray-600"
        />
        <label
          htmlFor="sin_escalas"
          className="tw-ms-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-gray-300"
        >
          Directo
        </label>
      </div>
    </div>
  );
}

export default Aside;
