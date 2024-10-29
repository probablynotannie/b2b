import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import { FaCalendarAlt } from "react-icons/fa";
import { DatesProvider } from "@mantine/dates";
import "dayjs/locale/es";
import InfiniteScrollCalendarSingle from "./movil/InfiniteScrollCalendarSingle";
function Fecha() {
  const [value, setValue] = useState(null);

  return (
    <div>
      <div className="md:hidden">
        <InfiniteScrollCalendarSingle />
      </div>
      <div className="hidden md:block">
        <DatesProvider settings={{ locale: "es" }}>
          <div className="relative">
            <DatePickerInput
              placeholder="Selecciona fecha"
              value={value}
              onChange={setValue}
              styles={(theme) => ({
                input: {
                  padding: "0.57rem",
                  borderColor: "lightgray",
                  paddingLeft: "2.6rem",
                  borderRadius: theme.radius.md,
                },
              })}
            />
            <div className="absolute top-0 pointer-events-none  bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
              <FaCalendarAlt />
            </div>
          </div>
        </DatesProvider>
      </div>
    </div>
  );
}

export default Fecha;
