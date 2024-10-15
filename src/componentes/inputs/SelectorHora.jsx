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
        styles={(theme) => ({
          input: {
            padding: "1.4rem",
            borderColor: "lightgray",
            paddingLeft: "3.4rem",
            borderRadius: theme.radius.md,
          },
        })}
      />

      <div className="absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-lg">
        <FaRegClock />
      </div>
    </div>
  );
};

export default SelectorHora;
