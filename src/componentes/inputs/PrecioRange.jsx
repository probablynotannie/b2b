import { useState, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";

const PriceRangeSlider = ({ values, setValues, minMax }) => {
  const [MAX] = useState(minMax[1]);
  const [MIN] = useState(minMax[0]);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center tw-mb-2">
        <div className="tw-grid tw-grid-cols-3 tw-items-center tw-w-1/3">
          <span className="tw-text-slate-700 dark:tw-text-slate-400 tw-font-semibold tw-text-sm tw-text-start">
            {values[0]}€
          </span>
        </div>
        <div className="tw-text-center tw-w-1/3 tw-text-xs dark:tw-text-white">
          Rango precio
        </div>
        <div className="tw-flex tw-flex-col tw-items-end tw-w-1/3">
          <span className="tw-text-slate-700 dark:tw-text-slate-400 tw-font-semibold tw-text-sm">
            {values[1]}€
          </span>
        </div>
      </div>
      <Range
        values={values}
        step={1}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="tw-w-full tw-h-1 tw-rounded-full"
            style={{
              background: getTrackBackground({
                values,
                colors: ["#ccc", "#ff8c4c", "#ccc"],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="tw-w-5 tw-h-5 tw-bg-slate-500 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-shadow-lg"
          >
            <div className="tw-w-2.5 tw-h-2.5 tw-bg-white tw-rounded-full" />
          </div>
        )}
      />
    </div>
  );
};

export default PriceRangeSlider;
