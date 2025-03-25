import { FaCalendarAlt } from "react-icons/fa";
import { DatesProvider, MonthPickerInput } from "@mantine/dates";
import { Controller } from "react-hook-form";
import "dayjs/locale/es";
import { useState } from "react";
function InputMes({ control, name }) {
  const [anioSel, setYear] = useState(new Date().getFullYear());

  return (
    <DatesProvider settings={{ locale: "es" }}>
      <div className="tw-relative">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <MonthPickerInput
              {...field}
              value={field.value ? new Date(anioSel, field.value - 1, 1) : null}
              placeholder="Mes"
              classNames={{
                input:
                  "tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer",
              }}
              onChange={(newDate) => {
                if (newDate) {
                  const updatedDate = new Date(newDate);
                  let month = updatedDate.getMonth() + 1;
                  let year = updatedDate.getFullYear();
                  setYear(year);
                  month = String(month).padStart(2, "0");
                  field.onChange(Number(month));
                } else {
                  field.onChange(null);
                }
              }}
            />
          )}
        />

        <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
          <FaCalendarAlt />
        </div>
      </div>
    </DatesProvider>
  );
}

export default InputMes;
