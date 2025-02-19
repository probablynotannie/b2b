import { useRef } from "react";
import { TimeInput } from "@mantine/dates";
import { FaRegClock } from "react-icons/fa";

const SelectorHora = ({ hora, setHora }) => {
  const ref = useRef(null);
  const handleTimeChange = (newTime) => {

    setHora(newTime.target.value);
  };
  return (
    <div className="tw-relative">
      <TimeInput
        ref={ref}
        value={hora}
        onChange={handleTimeChange}
        onClick={() => ref.current?.showPicker()}
        classNames={{
          input:
            "tw-border  dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 tw-border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer",
        }}
        styles={(theme) => ({
          input: {
            padding: "1.2rem",
            paddingLeft: "2.5rem",
            borderRadius: theme.radius.md,
          },
        })}
      />
      <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
        <FaRegClock />
      </div>
    </div>
  );
};

export default SelectorHora;
