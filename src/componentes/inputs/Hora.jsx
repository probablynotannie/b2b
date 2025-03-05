import { useRef } from "react";
import { TimeInput } from "@mantine/dates";
import { FaRegClock } from "react-icons/fa";
import { useState } from "react";
import { Controller } from "react-hook-form";

const SelectorHora = ({ setValue, name, control }) => {
  const [hora, setHora] = useState();
  const ref = useRef(null);

  const handleTimeChange = (newTime) => {
    setHora(newTime.target.value);
    setValue(name, newTime.target.value);
  };

  return (
    <div className="tw-relative">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TimeInput
            {...field}
            ref={ref}
            value={hora}
            onChange={handleTimeChange}
            onClick={() => ref.current?.showPicker()}
            classNames={{
              input:
                "tw-border dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 tw-border-slate-300 text-slate-500 text-sm rounded-lg pl-10 w-full cursor-pointe tw-h-[40px]r",
            }}
            styles={(theme) => ({
              input: {
                padding: "1.2rem",
                paddingLeft: "2.5rem",
                borderRadius: theme.radius.md,
              },
            })}
          />
        )}
      />
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <FaRegClock />
      </div>
    </div>
  );
};

export default SelectorHora;
