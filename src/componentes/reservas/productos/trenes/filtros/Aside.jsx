import PrecioRange from "../../../../inputs/PrecioRange";
import AsideListado from "../../../../motores/buscador/AsideListado";
function Aside({ values, setValues, minMax, setSoloDirectos, soloDirectos }) {
  return (
    <AsideListado
      contenido={
        <SidebarContent
          values={values}
          setValues={setValues}
          minMax={minMax}
          setSoloDirectos={setSoloDirectos}
          soloDirectos={soloDirectos}
        />
      }
    />
  );
}

function SidebarContent({
  values,
  setValues,
  minMax,
  setSoloDirectos,
  soloDirectos,
}) {
  return (
    <div className="tw-p-6 lg:tw-p-3 lg:tw-pt-1">
      <div className="tw-mx-3 tw-mt-5">
        <PrecioRange values={values} setValues={setValues} minMax={minMax} />
      </div>
      <div className="tw-mt-6">
        <button
          onClick={() => setSoloDirectos((prev) => !prev)}
          className={`tw-w-full tw-text-sm tw-py-2 tw-rounded-lg tw-transition-colors tw-duration-300 ${
            soloDirectos
              ? "tw-border tw-border-secondary tw-bg-secondary/10 tw-text-secondary dark:tw-bg-secondaryDark/20 dark:tw-text-secondaryDark"
              : "tw-border dark:tw-border-slate-700 dark:tw-bg-slate-700 dark:tw-text-slate-200 tw-bg-slate-200/50 tw-text-slate-700 hover:tw-bg-slate-300"
          }`}
        >
          {soloDirectos
            ? "Mostrando solo trenes sin paradas"
            : "Mostrar solo trenes sin paradas"}
        </button>
      </div>
    </div>
  );
}

export default Aside;
