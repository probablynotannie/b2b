import { FaCalendarAlt } from "react-icons/fa";
import { DatesProvider, MonthPickerInput } from "@mantine/dates";
import "dayjs/locale/es";

function InputMes({ mes, setMes }) {
  const handleMonthChange = (newDate) => {
    if (newDate) {
      const updatedDate = new Date(newDate);
      let month = updatedDate.getMonth() + 1;
      month = String(month).padStart(2, "0");
      setMes(Number(month));
    }
  };

  return (
    <div>
      <DatesProvider settings={{ locale: "es" }}>
        <div className="tw-relative">
          <MonthPickerInput
            value={mes ? new Date(2023, mes, 1) : null}
            placeholder="Mes"
            classNames={{
              input:
                "tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer",
            }}
            onChange={handleMonthChange}
          />
          <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2">
            <FaCalendarAlt />
          </div>
        </div>
      </DatesProvider>
    </div>
  );
}

export default InputMes;
