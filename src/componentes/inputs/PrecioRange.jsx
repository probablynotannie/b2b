import React, { useState, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";

const PriceRangeSlider = ({ values, setValues }) => {
  const [MAX] = useState(values[1]);
  const [MIN] = useState(values[0]);
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="grid grid-cols-3 items-center w-1/3">
          <span className="text-slate-700 dark:text-slate-400 font-semibold text-sm text-start">
            {values[0]}€
          </span>
        </div>
        <div className="text-center w-1/3 text-xs dark:text-white">
          Rango precio
        </div>
        <div className="flex flex-col items-end w-1/3">
          <span className="text-slate-700 dark:text-slate-400 font-semibold text-sm">
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
        renderTrack={({ props: trackProps, children }) => (
          <div
            {...{
              ...trackProps,
              key: undefined,
            }}
            className="w-full h-1 rounded-full"
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
        renderThumb={({ props: thumbProps }) => (
          <div
            {...{
              ...thumbProps,
              key: undefined,
            }}
            className="w-5 h-5 bg-slate-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
          </div>
        )}
      />
    </div>
  );
};

export default PriceRangeSlider;
