import { useState } from "react";
import PrecioRange from "../../../../inputs/PrecioRange";
import Viajeros from "./Viajeros";
import Regimenes from "./Regimenes";
import Categoria from "./Categoria";
import Inspiracion from "./Inspiracion";
import Ciudades from "./Ciudades";
import Paises from "./Paises";
import Proveedores from "./Proveedores";
import AsideListado from "../../../../motores/buscador/AsideListado";
function Aside({ values, setValues, minMax }) {
  const [duracion, setDuracion] = useState("");

  return (
    <AsideListado
      contenido={
        <Filtrado
          values={values}
          setValues={setValues}
          minMax={minMax}
          duracion={duracion}
          setDuracion={setDuracion}
        />
      }
    />
  );
}

function Filtrado({ values, setValues, minMax }) {
  return (
    <div className="tw-p-6 lg:tw-p-3 lg:tw-pt-1">
      <div>
        <label
          htmlFor="first_name"
          className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-slate-400"
        >
          Nombre de programa
        </label>
        <input
          type="text"
          id="first_name"
          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full"
          required
        />
      </div>
      <div className="tw-mx-3 tw-mt-5 dark:tw-text-secondaryDark">
        <PrecioRange values={values} setValues={setValues} minMax={minMax} />
      </div>
      <div className="tw-mt-5 dark:tw-text-secondaryDark">
        <span className="tw-text-sm tw-font-semibold tw-block tw-mb-1">
          Régimen de alimentación
        </span>
        <Regimenes />
      </div>
      <div className="tw-mt-5 dark:tw-text-secondaryDark">
        <span className="tw-text-sm tw-font-semibold tw-block tw-mb-1">
          Viajeros
        </span>
        <Viajeros />
      </div>
      <div className="tw-mt-5 dark:tw-text-secondaryDark">
        <span className="tw-text-sm tw-font-semibold tw-block tw-mb-1">
          Categorias
        </span>
        <Categoria />
      </div>
      <div className="tw-mt-5 dark:tw-text-secondaryDark">
        <span className="tw-text-sm tw-font-semibold tw-block tw-mb-1">
          Inspiración
        </span>
        <Inspiracion />
      </div>
      <div className="tw-mt-5 dark:tw-text-secondaryDark">
        <span className="tw-text-sm tw-font-semibold tw-block tw-mb-1">
          Proveedores
        </span>
        <Proveedores />
      </div>
      <div className="tw-mt-5 dark:tw-text-secondaryDark">
        <span className="tw-text-sm tw-font-semibold tw-block tw-mb-1">
          Ciudades
        </span>
        <Ciudades />
      </div>
      <div className="tw-mt-5 dark:tw-text-secondaryDark">
        <span className="tw-text-sm tw-font-semibold tw-block tw-mb-1">
          Paises
        </span>
        <Paises />
      </div>
    </div>
  );
}

export default Aside;
