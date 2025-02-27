import Regimenes from "../../../inputs/Regimenes";
import PriceRange from "../../../inputs/PrecioRange";
const DropdownCheckboxSelector = ({ values, setValues, minMax }) => {
  return (
    <div className="tw-bg-gray-200 dark:tw-bg-slate-800 dark:tw-border-slate-800 tw-shadow-lg tw-p-5 tw-border-2 tw-py-5 tw-relative">
      <h5 className="tw-font-semibold tw-text-lg dark:tw-text-white">
        Filtrado
      </h5>
      <div className="tw-grid lg:tw-grid-cols-5 tw-gap-10 tw-mt-2">
        <Regimenes />
        <PriceRange values={values} setValues={setValues} minMax={minMax} />
      </div>
    </div>
  );
};
export default DropdownCheckboxSelector;
