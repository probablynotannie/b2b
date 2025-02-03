import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { FaCalendarAlt } from "react-icons/fa";
import InfiniteScrollCalendar from "./movil/InfiniteScrollCalendarMultiple";
const DateRange = ({ startDate, setStartDate, endDate, setEndDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isSwiping = useRef(false);

  const handleChange = (dates) => {
    if (!isSwiping.current) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
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
            startDate && endDate
              ? `${format(startDate, "d 'de' MMMM 'de' yyyy", {
                  locale: es,
                })} - ${format(endDate, "d 'de' MMMM 'de' yyyy", {
                  locale: es,
                })}`
              : "Selecciona un rango de fechas"
          }
          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
        />
        <div className="tw-absolute tw-top-0 tw-pointer-events-none bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
          <FaCalendarAlt />
        </div>
      </div>
      <div className="lg:tw-hidden">
        <InfiniteScrollCalendar
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </div>
      <div>
        {isOpen && (
          <div className="tw-absolute tw-z-50">
            <DatePicker
              selected={startDate}
              onChange={handleChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              dayClassName={highlightWeekends}
              locale={es}
              minDate={new Date()}
              className="custom-input"
              wrapperClassName="custom-wrapper"
              calendarClassName="my-custom-datepicker"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DateRange;
