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
  isAfter,
  startOfDay,
} from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";
import { es } from "date-fns/locale";
import cesta from "../../estructura/cesta/Zustand";
import parseFecha from "../../../scripts/ParseFechas";

const InfiniteScrollCalendar = ({ name, setValue, deshabilitable }) => {
  const productos = cesta((state) => state.productos);
  const diasAntes = cesta((state) => state.diasAntes);
  const diasDespues = cesta((state) => state.diasDespues);
  const fechaInicio =
    deshabilitable && productos?.[0]?.fecha
      ? parseFecha(productos[0].fecha)
      : null;
  const fechaFin =
    deshabilitable && productos?.[0]?.fechaVuelta
      ? parseFecha(productos[0].fechaVuelta)
      : productos?.[0]?.fecha
      ? parseFecha(productos[0].fecha)
      : null;

  const minDate = fechaInicio
    ? new Date(
        fechaInicio.getFullYear(),
        fechaInicio.getMonth(),
        fechaInicio.getDate() - diasAntes
      )
    : null;
  const maxDate = fechaFin
    ? new Date(
        fechaFin.getFullYear(),
        fechaFin.getMonth(),
        fechaFin.getDate() + diasDespues
      )
    : null;

  const today = startOfDay(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [months, setMonths] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const startMonth = minDate
      ? startOfMonth(minDate)
      : startOfMonth(new Date());
    const initialMonths = [startMonth];
    for (let i = 1; i < 3; i++) {
      initialMonths.push(addMonths(startMonth, i));
    }
    setMonths(initialMonths);
  }, [minDate]); 
  const loadMoreMonths = useCallback(() => {
    const lastMonth = months[months.length - 1];
    const newMonths = [];
    for (let i = 1; i <= 3; i++) {
      newMonths.push(addMonths(lastMonth, i));
    }
    setMonths((prev) => [...prev, ...newMonths]);
  }, [months]);
  const isDateDisabled = (date) => {
    const d = startOfDay(date);
    if (minDate && maxDate) {
      if (isBefore(d, minDate) || isAfter(d, maxDate)) return true;
    } else {
      if (isBefore(d, today)) return true;
    }
    return false;
  };
  const handleDateClick = (date) => {
    if (isDateDisabled(date)) return;
    setSelectedDate(date);
    setIsModalOpen(false);
    setValue(name, date);
  };

  const renderWeekDays = () => {
    const weekDays = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
    return (
      <div className="tw-grid tw-grid-cols-7 tw-text-center tw-font-bold">
        {weekDays.map((day) => (
          <div
            key={day}
            className="tw-p-1 tw-text-black dark:tw-text-slate-200"
          >
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
    const emptySlots = (getDay(startOfMonth(month)) + 6) % 7;

    return (
      <div key={month.toISOString()} className="tw-mb-8">
        <h3 className="tw-text-lg tw-font-bold tw-text-center tw-mb-2 tw-text-secondary">
          {format(month, "MMMM yyyy", { locale: es })}
        </h3>
        {renderWeekDays()}
        <div className="tw-grid tw-grid-cols-7 tw-gap-1">
          {Array.from({ length: emptySlots }, (_, i) => (
            <div key={`empty-${i}`} className="tw-p-4"></div>
          ))}
          {daysInMonth.map((day) => {
            const disabled = isDateDisabled(day);
            const selected = isSameDay(day, selectedDate);

            return (
              <div
                key={day.toISOString()}
                className={`tw-p-2 tw-text-center tw-rounded-lg tw-text-sm ${
                  disabled
                    ? "tw-text-slate-400 dark:tw-text-slate-600 tw-cursor-not-allowed"
                    : selected
                    ? "tw-bg-blue-500 tw-text-white dark:tw-text-white tw-cursor-pointer"
                    : "tw-cursor-pointer tw-text-black dark:tw-text-slate-200"
                }`}
                onClick={() => !disabled && handleDateClick(day)}
              >
                {format(day, "d")}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollHeight - scrollTop <= clientHeight + 100) {
      loadMoreMonths();
    }
  };

  const formatSelectedDate = () => {
    return selectedDate
      ? format(selectedDate, "d 'de' MMMM 'de' yyyy", { locale: es })
      : "Selecciona una fecha";
  };

  return (
    <div>
      <div className="tw-relative">
        <div
          onClick={openModal}
          className="tw-border tw-flex tw-items-center tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") openModal();
          }}
        >
          {formatSelectedDate()}
          <div className="tw-absolute tw-left-0 tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
            <FaCalendarAlt />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center tw-z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="calendar-title"
        >
          <div className="tw-bg-white dark:tw-bg-slate-800 tw-w-full tw-h-full tw-mx-auto tw-relative">
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-slate-800 dark:tw-bg-slate-900 tw-p-5">
              <h2
                id="calendar-title"
                className="tw-text-xl tw-font-bold tw-text-white"
              >
                Selecciona fechas
              </h2>
              <button
                onClick={closeModal}
                className="tw-text-xl tw-text-white"
                aria-label="Cerrar calendario"
              >
                &times;
              </button>
            </div>
            <div
              className="tw-overflow-y-auto tw-h-[calc(100%-80px)] dark:tw-bg-slate-800"
              onScroll={handleScroll}
            >
              {months.map(renderMonth)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollCalendar;
