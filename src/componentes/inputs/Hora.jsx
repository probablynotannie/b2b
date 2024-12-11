import { useState, useRef } from "react";
import { TimeInput } from "@mantine/dates";
import { FaRegClock } from "react-icons/fa";

const SelectorHora = ({ hora, setHora }) => {
  const ref = useRef(null);
  const handleTimeChange = (newTime) => {
    setHora(newTime.target.value);
  };

  return (
    <div className="relative">
      <TimeInput
        ref={ref}
        value={hora}
        onChange={handleTimeChange}
        onClick={() => ref.current?.showPicker()}
        classNames={{
          input:
            "border dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer",
        }}
        styles={(theme) => ({
          input: {
            padding: "1.2rem",
            paddingLeft: "2.5rem",
            borderRadius: theme.radius.md,
          },
        })}
      />
      <div className="absolute top-0 pointer-events-none bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
        <FaRegClock />
      </div>
    </div>
  );
};

export default SelectorHora;
