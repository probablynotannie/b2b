import { useState } from "react";
import { Controller } from "react-hook-form";
import { MdPeopleAlt } from "react-icons/md";

function Input_Bonificacion({ setValue, namePasajeros, control, errors }) {
  const [pasajeros, setPasajeros] = useState(1);
  const [ages, setAges] = useState({});

  const handleSelectChange = (e) => {
    const value = Number(e.target.value);
    setPasajeros(value);

    setAges((prevAges) => {
      const newAges = { ...prevAges };
      for (let i = 1; i <= value; i++) {
        if (!newAges[i]) {
          newAges[i] = "";
        }
      }
      for (let i = value + 1; i <= 4; i++) {
        delete newAges[i];
      }

      return newAges;
    });
  };

  const handleAgeChange = (index, value) => {
    setAges((prev) => ({ ...prev, [index]: value }));
    setValue(`ages.${index}`, value);
  };

  return (
    <div className="tw-space-y-3">
      <div>
        <div className="tw-relative">
          <Controller
            name={namePasajeros}
            control={control}
            rules={{ required: "Number of passengers is required" }}
            render={({ field }) => (
              <select
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  handleSelectChange(e);
                }}
                value={pasajeros}
                className="tw-border tw-pl-10 dark:tw-placeholder-slate-400 tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            )}
          />
          {/* Display error message if "pasajeros" is not selected */}
          {errors[namePasajeros] && (
            <p className="text-red-500 text-sm">
              {errors[namePasajeros]?.message}
            </p>
          )}
          <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
            <MdPeopleAlt />
          </div>
        </div>
      </div>

      <div className="tw-grid tw-grid-cols-4 tw-gap-2">
        {/* Render dynamic age inputs */}
        {Array.from({ length: pasajeros }).map((_, index) => (
          <div key={index} className="tw-relative">
            <Controller
              name={`ages.${index + 1}`}
              control={control}
              defaultValue={ages[index + 1] || ""}
              rules={{ required: `Age ${index + 1} is required` }}
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  placeholder={`Edad ${index + 1}`}
                  value={ages[index + 1] || ""}
                  onChange={(e) => handleAgeChange(index + 1, e.target.value)}
                  className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-w-full tw-cursor-pointer"
                />
              )}
            />
            {errors.ages && errors.ages[index + 1] && (
              <p className="text-red-500 text-sm">
                {errors.ages[index + 1]?.message}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Input_Bonificacion;
