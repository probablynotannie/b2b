import { useState, useCallback, useEffect } from "react";
import {
  format,
  addMonths,
  startOfMonth,
  isSameDay,
  getDay,
  eachDayOfInterval,
  endOfMonth,
  isBefore,
  startOfDay,
} from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";
import { es } from "date-fns/locale";
import { useController } from "react-hook-form";
const InfiniteScrollCalendar = ({ control, nameStartDate, nameEndDate }) => {
  const [months, setMonths] = useState([startOfMonth(new Date())]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { field: fieldStartDate } = useController({
    name: nameStartDate,
    control,
    defaultValue: null,
  });

  const { field: fieldEndDate } = useController({
    name: nameEndDate,
    control,
    defaultValue: null,
  });

  useEffect(() => {
    const initialMonths = [startOfMonth(new Date())];
    for (let i = 1; i < 3; i++) {
      initialMonths.push(addMonths(startOfMonth(new Date()), i));
    }
    setMonths(initialMonths);
  }, []);

  const loadMoreMonths = useCallback(() => {
    const lastMonth = months[months.length - 1];
    const newMonths = [];
    for (let i = 1; i <= 3; i++) {
      newMonths.push(addMonths(lastMonth, i));
    }
    setMonths((prevMonths) => [...prevMonths, ...newMonths]);
  }, [months]);

  const handleDateClick = (date) => {
    if (!fieldStartDate.value || (fieldStartDate.value && fieldEndDate.value)) {
      fieldStartDate.onChange(date);
      fieldEndDate.onChange(null);
    } else if (date < fieldStartDate.value) {
      fieldStartDate.onChange(date);
    } else {
      fieldEndDate.onChange(date);
      closeModal();
    }
  };

  const renderWeekDays = () => {
    const weekDays = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
    return (
      <div className="tw-grid tw-grid-cols-7 tw-text-center tw-font-bold">
        {weekDays.map((day) => (
          <div key={day} className="tw-p-1 tw-text-black tw-text-sm">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderMonth = (month) => {
    const daysInMonth = eachDayOfInterval({
      start: startOfMonth(month),
      end: endOfMonth(month),
    });

    return (
      <div key={month} className="tw-mb-8">
        <h3 className="tw-text-lg tw-font-bold tw-text-center tw-mb-2 tw-text-secondary">
          {format(month, "MMMM yyyy", { locale: es })}
          {renderWeekDays()}
        </h3>
        <div className="tw-grid tw-grid-cols-7 tw-gap-1 tw-mb-3">
          {Array.from({ length: getDay(startOfMonth(month)) }, (_, i) => (
            <div key={`empty-${i}`} className="tw-p-4"></div>
          ))}
          {daysInMonth.map((day) => (
            <div
              key={day}
              className={`tw-p-2 tw-text-center tw-rounded-lg tw-cursor-pointer tw-text-black tw-text-sm ${
                isBefore(startOfDay(day), startOfDay(new Date()))
                  ? " tw-text-slate-400 tw-cursor-not-allowed"
                  : isSameDay(day, fieldStartDate.value)
                  ? "tw-bg-secondary tw-text-white"
                  : isSameDay(day, fieldEndDate.value)
                  ? "tw-bg-secondary tw-text-white"
                  : fieldStartDate.value &&
                    fieldEndDate.value &&
                    day > fieldStartDate.value &&
                    day < fieldEndDate.value
                  ? "tw-bg-orange-100"
                  : ""
              }`}
              onClick={() =>
                !isBefore(startOfDay(day), startOfDay(new Date())) &&
                handleDateClick(day)
              }
            >
              {format(day, "d")}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollHeight - scrollTop <= clientHeight + 100) {
      loadMoreMonths();
    }
  };

  const formatDateRange = () => {
    if (fieldStartDate.value && fieldEndDate.value) {
      return `${format(fieldStartDate.value, "dd/MM/yyyy")} - ${format(
        fieldEndDate.value,
        "dd/MM/yyyy"
      )}`;
    }
    return "Selecciona Fechas";
  };

  return (
    <div>
      <div className="tw-relative">
        <div
          onClick={openModal}
          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
        >
          {formatDateRange()}
          <div className="tw-absolute tw-top-0 tw-left-0 tw-pointer-events-none dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
            <FaCalendarAlt />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center tw-z-50">
          <div className="tw-bg-white tw-w-full tw-h-full tw-mx-auto tw-relative">
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-slate-800 tw-p-5">
              <h2 className="tw-text-xl tw-font-bold tw-text-white">
                Selecciona el rango de fechas
              </h2>
              <button onClick={closeModal} className="tw-text-xl tw-text-white">
                &times;
              </button>
            </div>
            <div
              className="tw-overflow-y-auto tw-h-[calc(100%-80px)] tw-p-4"
              onScroll={handleScroll}
            >
              {months.map((month) => renderMonth(month))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollCalendar;
