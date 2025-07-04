import { FaCalendarAlt } from "react-icons/fa";
import { DatesProvider, MonthPickerInput } from "@mantine/dates";
import { Controller } from "react-hook-form";
import "dayjs/locale/es";
function InputMes({ control, name }) {
  return (
    <DatesProvider settings={{ locale: "es" }}>
      <div className="tw-relative">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <MonthPickerInput
              clearable
              {...field}
              value={
                field.value && /^\d{4}-\d{2}$/.test(field.value)
                  ? new Date(field.value + "-01")
                  : null
              }
              placeholder="Mes"
              classNames={{
                input:
                  "tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer",
                clear: "tw-text-white",
              }}
              onChange={(newDate) => {
                if (newDate) {
                  const updatedDate = new Date(newDate);
                  const month = String(updatedDate.getMonth() + 1).padStart(
                    2,
                    "0"
                  );
                  const year = updatedDate.getFullYear();
                  field.onChange(`${year}-${month}`);
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
