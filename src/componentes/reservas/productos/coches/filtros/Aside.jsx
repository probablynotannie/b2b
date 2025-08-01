import { useState } from "react";
import PrecioRange from "../../../../inputs/PrecioRange";
import Proveedores from "./Proveedores";
import TiposCoches from "./TiposCoches";
import AsideListado from "../../../../motores/buscador/AsideListado";
function Aside({ values, setValues, minMax }) {
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [tipos, setTipos] = useState([]);
  return (
    <AsideListado
      contenido={
        <Filtrado
          values={values}
          setValues={setValues}
          minMax={minMax}
          categoriasSeleccionadas={categoriasSeleccionadas}
          setCategoriasSeleccionadas={setCategoriasSeleccionadas}
          tipos={tipos}
          setTipos={setTipos}
        />
      }
    />
  );
}
function Filtrado({
  values,
  setValues,
  minMax,
  categoriasSeleccionadas,
  setCategoriasSeleccionadas,
  tipos,
  setTipos,
}) {
  return (
    <div>
      <div className="tw-p-6 lg:tw-p-3 lg:tw-pt-1">
        <div className="tw-mx-3 tw-mt-5">
          <PrecioRange values={values} setValues={setValues} minMax={minMax} />
        </div>
        <div className="tw-mx-3 tw-mt-5">
          <span className="tw-text-sm tw-font-bold tw-text-slate-900 dark:tw-text-secondaryDark">
            Proveedores
          </span>
          <Proveedores
            categoriasSeleccionadas={categoriasSeleccionadas}
            setCategoriasSeleccionadas={setCategoriasSeleccionadas}
          />
        </div>
        <div className="tw-mx-3 tw-mt-5">
          <span className="tw-text-sm tw-font-bold tw-text-slate-900 dark:tw-text-secondaryDark">
            Tipo coches
          </span>
          <TiposCoches tipos={tipos} setTipos={setTipos} />
        </div>
      </div>
    </div>
  );
}

export default Aside;
