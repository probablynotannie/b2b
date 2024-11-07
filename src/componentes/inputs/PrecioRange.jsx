import React, { useState, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";

const PriceRangeSlider = ({ min, max }) => {
  const [values, setValues] = useState([min ? min : 0, max ? max : 100]);
  const MAX = max;
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <div className="grid grid-cols-3 items-center w-1/3">
          <span className="text-slate-700 font-semibold text-sm text-start">
            {values[0]}€
          </span>
        </div>
        <div className="text-center w-1/3 text-xs">Rango precio</div>
        <div className="flex flex-col items-end w-1/3">
          <span className="text-slate-700 font-semibold text-sm">
            {values[1]}€
          </span>
        </div>
      </div>
      <Range
        values={values}
        step={1}
        min={min}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props: trackProps, children }) => (
          <div
            {...{
              ...trackProps,
              key: undefined, // Remove the key property
            }}
            className="w-full h-1 rounded-full"
            style={{
              background: getTrackBackground({
                values,
                colors: ["#ccc", "#ff8c4c", "#ccc"],
                min: min,
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
              key: undefined, // Remove the key property
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
