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
              classNames={{
                input: "border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer",
              }}
              styles={(theme) => ({
                input: {
                  padding: "0.57rem",
             
                  paddingLeft: "2.6rem",
                  borderRadius: theme.radius.md,
                },
              })}
            />
            <div className="absolute top-0 pointer-events-none bg-inputIcon dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
              <FaCalendarAlt />{" "}
            </div>
          </div>
        </DatesProvider>
      </div>
    </div>
  );
}

export default Fecha;
