import { useState, useEffect } from "react";
import PrecioRange from "../../../../inputs/PrecioRange";
import FiltradoEstrellas from "../../../../inputs/FiltroEstrellas";
import Regimenes from "./Filtro_Regimenes";
import Localidades from "./Filtro_Localidades";
import { FaEuroSign } from "react-icons/fa";
import hoteles from "../Hoteles.json";
import AsideListado from "../../../../motores/buscador/AsideListado";
function Aside({ values, setValues, minMax, setMinMax }) {
  const [regimenesUnicos, setRegimenesUnicos] = useState([]);
  const [estrellas, setEstrellas] = useState(0);
  const [reembolsable, setReembolsable] = useState(false);
  const [localidades, setLocalidades] = useState([]);
  const [selectedRegimenes, setRegimenes] = useState([]);

  useEffect(() => {
    const regimenesSet = new Set();
    hoteles.forEach((hotel) => {
      if (hotel?.regimen) {
        regimenesSet.add(hotel.regimen.toLowerCase());
      }

      if (Array.isArray(hotel.habitaciones)) {
        hotel.habitaciones.forEach((habitacion) => {
          if (habitacion?.regimen) {
            regimenesSet.add(habitacion.regimen.toLowerCase());
          }
        });
      }
    });

    const uniqueList = Array.from(regimenesSet).map(
      (regimen) => regimen.charAt(0).toUpperCase() + regimen.slice(1)
    );

    setRegimenesUnicos(uniqueList);
  }, []);

  useEffect(() => {
    setRegimenes((prev) =>
      prev.filter((regimen) => regimenesUnicos.includes(regimen))
    );
  }, [regimenesUnicos]);

  return (
    <AsideListado
      contenido={
        <Filtrado
          reembolsable={reembolsable}
          setReembolsable={setReembolsable}
          localidades={localidades}
          values={values}
          setValues={setValues}
          minMax={minMax}
          setMinMax={setMinMax}
          setLocalidades={setLocalidades}
          estrellas={estrellas}
          setEstrellas={setEstrellas}
          selectedRegimenes={selectedRegimenes}
          setRegimenes={setRegimenes}
          regimenesUnicos={regimenesUnicos}
        />
      }
    />
  );
}

function Filtrado({
  reembolsable,
  setReembolsable,
  localidades,
  setLocalidades,
  values,
  setValues,
  minMax,
  setMinMax,
  setEstrellas,
  estrellas,
  selectedRegimenes,
  setRegimenes,
  regimenesUnicos,
}) {
  return (
    <div>
      <div>
        <label
          htmlFor="first_name"
          className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-slate-400"
        >
          Nombre de hotel
        </label>
        <input
          type="text"
          id="first_name"
          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full"
          required
        />
      </div>

      <div className="tw-mx-3 tw-mt-5">
        <PrecioRange
          minMax={minMax}
          setMinMax={setMinMax}
          values={values}
          setValues={setValues}
        />
      </div>

      <div className="tw-mt-8 tw-border-y-2 tw-border-slate-200/50 dark:tw-border-slate-700 tw-p-5 tw-flex tw-justify-around">
        <FiltradoEstrellas estrellas={estrellas} setEstrellas={setEstrellas} />
      </div>

      <div className="tw-mt-5 tw-flex tw-items-center tw-col-span-1 tw-gap-2">
        <label
          onClick={() => setReembolsable(!reembolsable)}
          className={`tw-select-none tw-flex tw-items-center tw-justify-between tw-gap-2 tw-px-4 tw-py-2 tw-w-full tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all ${
            reembolsable
              ? "tw-bg-pink-100 dark:tw-bg-pink-900  tw-border-pink-500 tw-text-pink-700 dark:tw-text-pink-300"
              : "tw-bg-slate-200 dark:tw-bg-slate-800 tw-border-slate-300 dark:tw-border-slate-600 tw-text-slate-500"
          }`}
        >
          Reembolsable
          <FaEuroSign />
        </label>
      </div>

      <div className="tw-mt-5">
        <span className="tw-text-sm tw-font-semibold dark:tw-text-secondaryDark">
          Régimen
        </span>
        {regimenesUnicos.length > 0 ? (
          <Regimenes
            selected={selectedRegimenes}
            onChange={setRegimenes}
            regimenes={regimenesUnicos}
          />
        ) : (
          <p className="tw-text-sm tw-text-gray-400 tw-mt-2">
            No hay regímenes disponibles.
          </p>
        )}
      </div>

      <div className="tw-mt-5">
        <span className="tw-text-sm tw-font-semibold dark:tw-text-secondaryDark">
          Localidades
        </span>
        <div className="tw-mt-2">
          <Localidades selected={localidades} onChange={setLocalidades} />
        </div>
      </div>
    </div>
  );
}

export default Aside;
