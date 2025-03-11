import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { FaCalendarAlt } from "react-icons/fa";
import InfiniteScrollCalendar from "./movil/InfiniteScrollCalendarMultiple";
import { useController } from "react-hook-form";
const DateRange = ({
  control,
  nameStartDate,
  nameEndDate,
  placeholder,
  required,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isSwiping = useRef(false);
  const {
    field: fieldStartDate,
    fieldState: { error: errorStart },
  } = useController({
    name: nameStartDate,
    control,
    defaultValue: null,
    rules:
      required === true
        ? { required: "La fecha de inicio es obligatoria" }
        : {},
  });
  const {
    field: fieldEndDate,
    fieldState: { error: errorEnd },
  } = useController({
    name: nameEndDate,
    control,
    defaultValue: null,
    rules:
      required === true ? { required: "La fecha de fin es obligatoria" } : {},
  });
  const handleChange = (dates) => {
    if (!isSwiping.current) {
      const [start, end] = dates;
      fieldStartDate.onChange(start);
      fieldEndDate.onChange(end);
      fieldStartDate.onBlur();
      fieldEndDate.onBlur();
      if (start && end) {
        setIsOpen(false);
      }
    }
  };
  const toggleDatePicker = () => {
    setIsOpen(!isOpen);
  };
  const highlightWeekends = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6 ? "weekend-day" : "";
  };
  return (
    <div>
      <div className="tw-relative tw-hidden lg:tw-block">
        <input
          type="text"
          readOnly
          onClick={toggleDatePicker}
          value={
            fieldStartDate.value && fieldEndDate.value
              ? `${format(fieldStartDate.value, "d 'de' MMMM", {
                  locale: es,
                })} - ${format(fieldEndDate.value, "d 'de' MMMM", {
                  locale: es,
                })}`
              : placeholder || "Fechas"
          }
          className="tw-border tw-bg-white tw-h-[40px] dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-pl-10 tw-w-full tw-cursor-pointer"
        />
        <div className="tw-absolute tw-h-[40px] tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
          <FaCalendarAlt />
        </div>
      </div>
      <div className="lg:tw-hidden">
        <InfiniteScrollCalendar
          control={control}
          nameStartDate={nameStartDate}
          nameEndDate={nameEndDate}
        />
      </div>
      <div>
        {isOpen && (
          <div className="tw-absolute tw-z-50">
            <DatePicker
              selected={fieldStartDate.value}
              onChange={handleChange}
              startDate={fieldStartDate.value}
              endDate={fieldEndDate.value}
              selectsRange
              inline
              dayClassName={highlightWeekends}
              locale={es}
              minDate={new Date()}
              className="custom-input"
              wrapperClassName="custom-wrapper"
              calendarClassName="my-custom-datepicker"
            />
            <div></div>
          </div>
        )}
        {errorStart && (
          <p className="tw-text-red-500 tw-text-sm">{errorStart.message}</p>
        )}
        {errorEnd && (
          <p className="tw-text-red-500 tw-text-sm">{errorEnd.message}</p>
        )}
      </div>
    </div>
  );
};

export default DateRange;
