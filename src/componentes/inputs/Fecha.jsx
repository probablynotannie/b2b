import { useEffect } from "react";
import { DatePickerInput } from "@mantine/dates";
import { FaCalendarAlt } from "react-icons/fa";
import { DatesProvider } from "@mantine/dates";
import "dayjs/locale/es";
import InfiniteScrollCalendarSingle from "./movil/InfiniteScrollCalendarSingle";
import { Controller } from "react-hook-form"; // Import Controller

function Fecha({ fecha, name, setValue, edadSelector, control, required }) {
  useEffect(() => {
    if (fecha) {
      setValue(name, fecha);
    }
  }, [fecha, name, setValue]);

  const handleDateChange = (date) => {
    if (date) {
      setValue(name, date, { shouldValidate: true });
    }
  };

  return (
    <div>
      <div
        className={`${edadSelector === true ? "tw-hidden" : "md:tw-hidden"}`}
      >
        <InfiniteScrollCalendarSingle name={name} setValue={setValue} />
      </div>
      <div className={`${edadSelector !== true && "tw-hidden md:tw-block"}`}>
        <DatesProvider settings={{ locale: "es" }}>
          <div className="tw-relative">
            <Controller
              control={control}
              name={name}
              rules={{
                required: required || "Fecha es requerida",
              }}
              render={({ field }) => (
                <DatePickerInput
                  {...field}
                  placeholder="Selecciona fecha"
                  value={fecha}
                  onChange={(date) => handleDateChange(date)}
                  classNames={{
                    input:
                      "tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 dark:tw-text-slate-300 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer",
                  }}
                  styles={(theme) => ({
                    input: {
                      padding: "0.62rem",
                      paddingLeft: "2.6rem",
                      borderRadius: theme.radius.md,
                    },
                  })}
                />
              )}
            />
            <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
              <FaCalendarAlt />
            </div>
          </div>
        </DatesProvider>
      </div>
    </div>
  );
}

export default Fecha;
