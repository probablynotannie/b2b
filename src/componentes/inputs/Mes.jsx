import { FaCalendarAlt } from "react-icons/fa";
import { DatesProvider, MonthPickerInput } from "@mantine/dates";
import "dayjs/locale/es";
function InputMes({ mes, setMes }) {
  const handleMonthChange = (newDate) => {
    if (newDate) {
      const updatedDate = new Date(newDate);
      const month = updatedDate.getMonth();
      setMes(month);
    }
  };
  return (
    <div>
      <DatesProvider settings={{ locale: "es" }}>
        <div className="relative">
          <MonthPickerInput
            value={mes ? new Date(2023, mes, 1) : null}
            placeholder="Mes"
            classNames={{
              input:
                "border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer",
            }}
            onChange={handleMonthChange}
          />
          <div className="absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2">
            <FaCalendarAlt />
          </div>
        </div>
      </DatesProvider>
    </div>
  );
}

export default InputMes;
