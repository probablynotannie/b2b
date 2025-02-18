import { useState, useCallback, useEffect } from "react";

import {
  format,
  addMonths,
  startOfMonth,
  isSameDay,
  getDay,
  eachDayOfInterval,
  endOfMonth,
} from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";
import { es } from "date-fns/locale";

const InfiniteScrollCalendar = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const [months, setMonths] = useState([startOfMonth(new Date())]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setMonths((prevMonths) => [...prevMonths, ...newMonths]); // Nuevos meses
  }, [months]);

  const handleDateClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date < startDate) {
      // Si la fecha seleccionada es antes de la fecha ya seleccionada, será nuevo día de inicio
      setStartDate(date);
    } else {
      setEndDate(date);
      closeModal();
    }
  };

  // Render days of the week
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

  // Calendario por mes
  const renderMonth = (month) => {
    const daysInMonth = eachDayOfInterval({
      start: startOfMonth(month),
      end: endOfMonth(month),
    });

    return (
      <div key={month} className="tw-mb-8">
        {/* Month name above weekdays */}
        <h3 className="tw-text-lg tw-font-bold tw-text-center tw-mb-2 tw-text-secondary">
          {format(month, "MMMM yyyy", { locale: es })}
          {renderWeekDays()} {/* Días de semana */}
        </h3>
        <div className="tw-grid tw-grid-cols-7 tw-gap-1 tw-mb-3">
          {Array.from({ length: getDay(startOfMonth(month)) }, (_, i) => (
            <div key={`empty-${i}`} className="tw-p-4"></div> // Espacio blanco si no hay días lun-mar...
          ))}
          {daysInMonth.map((day) => (
            <div
              key={day}
              className={`tw-p-2 tw-text-center tw-rounded-lg tw-cursor-pointer tw-text-black tw-text-sm ${
                isSameDay(day, startDate)
                  ? "bg-secondary tw-text-white" // Fecha inicio
                  : isSameDay(day, endDate)
                  ? "bg-secondary tw-text-white" // Fecha fin
                  : startDate && endDate && day > startDate && day < endDate
                  ? "tw-bg-orange-100" // Fechas en medio
                  : ""
              }`}
              onClick={() => handleDateClick(day)}
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

  // Carga más meses cuando el usuario se desplaza
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollHeight - scrollTop <= clientHeight + 100) {
      loadMoreMonths();
    }
  };

  // Formato fechas
  const formatDateRange = () => {
    if (startDate && endDate) {
      return `${format(startDate, "dd/MM/yyyy")} - ${format(
        endDate,
        "dd/MM/yyyy"
      )}`;
    }
    return "Selecciona un rango de fechas";
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
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-primary tw-p-5">
              <h2 className="tw-text-xl tw-font-bold tw-text-white">
                Selecciona el rango de fechas
              </h2>
              <button onClick={closeModal} className="tw-text-xl tw-text-white">
                &times;
              </button>
            </div>

            {/* CalendarioF */}
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
