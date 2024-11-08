import { useRef } from "react";
import { TimeInput } from "@mantine/dates";
import { FaRegClock } from "react-icons/fa";

const SelectorHora = () => {
  const ref = useRef(null);

  return (
    <div className="relative">
      <TimeInput
        onClick={() => ref.current?.showPicker()}
        ref={ref}
        classNames={{
          input: "border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer",
        }}
        styles={(theme) => ({
          input: {
            padding: "1.2rem",

            paddingLeft: "3.4rem",
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
