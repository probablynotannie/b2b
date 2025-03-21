import { useState, useCallback, useEffect, useRef } from "react";
import {
  format,
  addMonths,
  startOfMonth,
  isSameDay,
  getDay,
  eachDayOfInterval,
  endOfMonth,
  addDays,
  isBefore,
  isToday,
} from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";
import { es } from "date-fns/locale";

const InfiniteScrollCalendar = ({ dates, dias, prices, setDates }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [months, setMonths] = useState([startOfMonth(new Date())]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lockedIdaPrice, setLockedIdaPrice] = useState(null);

  const modalRef = useRef(null);

  const TRIP_DAYS = dias;
  const today = new Date();

  useEffect(() => {
    const initialMonths = [startOfMonth(today)];
    for (let i = 1; i < 3; i++) {
      initialMonths.push(addMonths(startOfMonth(today), i));
    }
    setMonths(initialMonths);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const loadMoreMonths = useCallback(() => {
    const lastMonth = months[months.length - 1];
    const newMonths = [];
    for (let i = 1; i <= 3; i++) {
      newMonths.push(addMonths(lastMonth, i));
    }
    setMonths((prevMonths) => [...prevMonths, ...newMonths]);
  }, [months]);

  const handleDateClick = (date) => {
    const formattedDate = format(date, "yyyy-MM-dd");

    if (!prices[formattedDate]) {
      return;
    }

    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      const newEndDate = addDays(date, TRIP_DAYS - 1);
      setEndDate(newEndDate);
      setLockedIdaPrice(prices[formattedDate]);
    } else if (date < startDate) {
      setStartDate(date);
      setEndDate(addDays(date, TRIP_DAYS - 1));
    } else {
      setEndDate(date);
    }
  };

  useEffect(() => {
    if (startDate && endDate) {
      const startDateFormatted = format(startDate, "yyyy-MM-dd");
      const startDatePrice = prices[startDateFormatted] || null;

      if (
        dates.startDate !== startDate ||
        dates.endDate !== endDate ||
        dates.startDatePrice !== startDatePrice
      ) {
        setDates({
          startDate,
          endDate,
          startDatePrice,
        });
      }
    }
  }, [startDate, endDate, prices]);

  const renderWeekDays = () => {
    const weekDays = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
    return (
      <div className="tw-grid tw-grid-cols-7 tw-text-center tw-font-bold">
        {weekDays.map((day) => (
          <div
            key={day}
            className="tw-p-1 tw-text-black dark:tw-text-white tw-text-sm"
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

    return (
      <div key={month} className="tw-mb-8">
        <h3 className="tw-text-lg tw-font-bold tw-text-center tw-mb-2 tw-text-secondary">
          {format(month, "MMMM yyyy", { locale: es })}
        </h3>
        {renderWeekDays()}
        <div className="tw-grid tw-grid-cols-7 tw-gap-1 tw-mb-3">
          {Array.from({ length: getDay(startOfMonth(month)) }, (_, i) => (
            <div key={`empty-${i}`} className="tw-p-4"></div>
          ))}
          {daysInMonth.map((day) => {
            const formattedDate = format(day, "yyyy-MM-dd");
            let price = null;
            if (isBefore(day, today)) {
              price = null;
            } else if (isSameDay(day, startDate)) {
              price = prices[formattedDate];
            } else if (
              !startDate ||
              (startDate && !endDate) ||
              (startDate && endDate && (day < startDate || day > endDate))
            ) {
              price = prices[formattedDate];
            }

            const isDateDisabled =
              !prices[formattedDate] || isBefore(day, today);
            const isTodayDay = isToday(day);

            return (
              <div
                key={day}
                className={`tw-p-4 tw-text-center tw-rounded-lg tw-cursor-pointer tw-text-black tw-text-sm tw-relative ${
                  isTodayDay
                    ? "bg-blue-500 dark:tw-bg-secondaryDark text-white"
                    : ""
                } ${
                  isSameDay(day, startDate)
                    ? "tw-bg-secondary dark:bg-slate-900 text-white "
                    : isSameDay(day, endDate)
                    ? "tw-bg-secondary dark:bg-slate-900 text-white"
                    : startDate && endDate && day > startDate && day < endDate
                    ? "bg-orange-100 dark:bg-slate-600 dark:tw-text-white"
                    : "dark:tw-text-slate-100 "
                } ${isDateDisabled ? "text-slate-400  cursor-no-drop" : ""}`}
                onClick={() => !isDateDisabled && handleDateClick(day)}
              >
                <div>{format(day, "d")}</div>
                {price && (
                  <div className="tw-absolute tw-bottom-1 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-text-xs tw-text-center">
                    <span
                      className={`tw-text-slate-900 dark:tw-text-secondaryDark ${
                        isSameDay(day, startDate) || isSameDay(day, endDate)
                          ? "text-white font-bold"
                          : ""
                      }`}
                    >
                      {price}€
                    </span>
                  </div>
                )}
              </div>
            );
          })}
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
    if (startDate && endDate) {
      return `${format(startDate, "dd/MM/yyyy")} - ${format(
        endDate,
        "dd/MM/yyyy"
      )}`;
    }
    return "Selecciona un rango de fechas";
  };

  const resetSelection = () => {
    setStartDate(null);
    setEndDate(null);
    setLockedIdaPrice(null);
    setDates({
      startDate: null,
      endDate: null,
      startDatePrice: null,
    });
  };
  return (
    <div>
      <div className="tw-relative">
        <div
          onClick={openModal}
          className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white dark:focus:tw-ring-slate-600 dark:focus:tw-border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
        >
          {formatDateRange()}
          <div className="tw-absolute tw-top-0 tw-left-0 tw-pointer-events-none dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
            <FaCalendarAlt />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center tw-z-50">
          <div
            ref={modalRef} // Attach the ref to the modal container
            className="tw-bg-white dark:tw-bg-slate-700 tw-w-full md:tw-w-[90vw] md:tw-h-[90vh] lg:tw-w-[60vw] lg:tw-h-[90vh] xl:tw-w-[60vw] xl:tw-h-[90vh] tw-h-full tw-mx-auto tw-relative"
          >
            <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-primary tw-p-5">
              <h2 className="tw-text-xl tw-font-bold tw-text-white">
                Selecciona fechas
              </h2>
              <button onClick={closeModal} className="tw-text-xl tw-text-white">
                &times;
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSelection}
              className="tw-absolute tw-top-5 tw-right-10 tw-bg-red-500 tw-text-white tw-py-1 tw-px-3 tw-rounded-lg"
            >
              Borrar
            </button>
            <div
              className="custom-scrollbar tw-overflow-y-auto tw-h-[calc(100%-85px)] tw-p-4"
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
