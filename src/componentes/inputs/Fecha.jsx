import { useEffect } from "react";
import { DatePickerInput } from "@mantine/dates";
import { FaCalendarAlt } from "react-icons/fa";
import { DatesProvider } from "@mantine/dates";
import "dayjs/locale/es";
import InfiniteScrollCalendarSingle from "./movil/InfiniteScrollCalendarSingle";

function Fecha({ fecha, name, setValue }) {
  useEffect(() => {
    if (fecha) {
      const formattedDate = formatDate(fecha);
      setValue(name, formattedDate);
    }
  }, [fecha, name, setValue]);

  const handleDateChange = (date) => {
    const formattedDate = formatDate(date);
    console.log(name, formattedDate);
    setValue(name, formattedDate);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <div className="md:tw-hidden">
        <InfiniteScrollCalendarSingle
          name={name}
          setValue={setValue}
          formatDate={formatDate}
        />
      </div>
      <div className="tw-hidden md:tw-block">
        <DatesProvider settings={{ locale: "es" }}>
          <div className="tw-relative">
            <DatePickerInput
              placeholder="Selecciona fecha"
              value={fecha}
              onChange={handleDateChange}
              classNames={{
                input:
                  "border bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer",
              }}
              styles={(theme) => ({
                input: {
                  padding: "0.57rem",
                  paddingLeft: "2.6rem",
                  borderRadius: theme.radius.md,
                },
              })}
            />

            <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
              <FaCalendarAlt />
            </div>
          </div>
        </DatesProvider>
      </div>
    </div>
  );
}

export default Fecha;
