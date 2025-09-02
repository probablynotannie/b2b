import { FaEuroSign } from "react-icons/fa";
import PriceRange from "../../../../inputs/PrecioRange";
import Regimenes from "../../filtros/filtros/Filtro_Regimenes";
import NetoSwitch from "../../filtros/NetoSwitch";
const DropdownCheckboxSelector = ({
  setNeto,
  neto,
  values,
  setValues,
  minMax,
  regimenesUnicos,
  setRegimenes,
  selectedRegimenes,
  reembolsable,
  setReembolsable,
}) => {
  return (
    <div
      className={`tw-bg-slate-100 dark:tw-bg-slate-800 dark:tw-border-slate-800 tw-p-5 tw-border tw-border-slate-100 tw-py-5 tw-relative tw-rounded-lg`}
    >
      <div className="tw-flex tw-justify-between tw-items-center">
        <h5 className="tw-font-semibold tw-text-lg dark:tw-text-white">
          Filtrado
        </h5>
        <NetoSwitch neto={neto} setNeto={setNeto} />
      </div>
      <div className=" tw-gap-10 tw-mt-2">
        <PriceRange values={values} setValues={setValues} minMax={minMax} />
      </div>
      <div className="tw-mt-5">
        <span className="tw-text-sm tw-font-semibold dark:tw-text-secondaryDark">
          Régimen
        </span>
        {regimenesUnicos.length > 0 ? (
          <Regimenes
            row={true}
            selected={selectedRegimenes}
            onChange={setRegimenes}
            datos={regimenesUnicos}
          />
        ) : (
          <p className="tw-text-sm tw-text-gray-400 tw-mt-2">
            No hay regímenes disponibles.
          </p>
        )}
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
    </div>
  );
};
export default DropdownCheckboxSelector;
