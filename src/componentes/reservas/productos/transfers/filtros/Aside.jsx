import PrecioRange from "../../../../inputs/PrecioRange";
import AsideListado from "../../../../motores/buscador/AsideListado";
function Aside({ values, setValues, minMax }) {
  return (
    <AsideListado
      contenido={
        <SidebarContent minMax={minMax} values={values} setValues={setValues} />
      }
    />
  );
}

function SidebarContent({ values, setValues, minMax }) {
  return (
    <div className="tw-p-6 lg:tw-p-3 lg:tw-pt-1">
      <div className="tw-mx-3 tw-mt-5">
        <PrecioRange values={values} setValues={setValues} minMax={minMax} />
      </div>
    </div>
  );
}

export default Aside;
