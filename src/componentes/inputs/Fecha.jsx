import { useEffect } from "react";
import { DatePickerInput } from "@mantine/dates";
import { FaCalendarAlt } from "react-icons/fa";
import { DatesProvider } from "@mantine/dates";
import { Controller } from "react-hook-form";
import "dayjs/locale/es";
import InfiniteScrollCalendarSingle from "./movil/InfiniteScrollCalendarSingle";

function Fecha({ fecha, name, setValue, edadSelector, control, required }) {
  useEffect(() => {
    if (fecha) {
      setValue(name, fecha);
    }
  }, [fecha, name, setValue]);

  const handleDateChange = (date) => {
    if (date) {
      setValue(name, date, { shouldValidate: true, shouldTouch: true });
    } else {
      setValue(name, null, { shouldValidate: true, shouldTouch: true });
    }
  };

  return (
    <div>
      <div
        className={`${edadSelector === true ? "tw-hidden" : "md:tw-hidden"}`}
      >
        <InfiniteScrollCalendarSingle name={name} setValue={setValue} />
      </div>
      <div className={` ${edadSelector !== true && "tw-hidden md:tw-block"}`}>
        <DatesProvider settings={{ locale: "es" }}>
          <Controller
            name={name}
            control={control}
            rules={required ? { required: "La fecha es obligatoria" } : {}}
            render={({ field, fieldState: { error } }) => (
              <>
                <div className="tw-relative">
                  <DatePickerInput
                    placeholder="Selecciona fecha"
                    value={fecha}
                    onChange={handleDateChange}
                    required={required === true ? true : false}
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
                  <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                    <FaCalendarAlt />
                  </div>
                </div>
                {error && (
                  <p className="tw-text-red-500 tw-text-sm">{error.message}</p>
                )}
              </>
            )}
          />
        </DatesProvider>
      </div>
    </div>
  );
}

export default Fecha;
