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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [lockedIdaPrice, setLockedIdaPrice] = useState(null);

  const todayRef = useRef(null);
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
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  const scrollToToday = () => {
    if (todayRef.current) {
      todayRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const renderWeekDays = () => {
    const weekDays = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
    return (
      <div className="grid grid-cols-7 text-center font-bold">
        {weekDays.map((day) => (
          <div key={day} className="p-1 text-black dark:text-white text-sm">
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
      <div key={month} className="mb-8">
        <h3 className="text-lg font-bold text-center mb-2 text-secondary">
          {format(month, "MMMM yyyy", { locale: es })}
        </h3>
        {renderWeekDays()}
        <div className="grid grid-cols-7 gap-1 mb-3">
          {Array.from({ length: getDay(startOfMonth(month)) }, (_, i) => (
            <div key={`empty-${i}`} className="p-4"></div>
          ))}
          {daysInMonth.map((day) => {
            const formattedDate = format(day, "yyyy-MM-dd");
            const isDateDisabled =
              !prices[formattedDate] || isBefore(day, today);
            const isTodayDay = isToday(day);
  
            return (
              <div
                key={day}
                ref={isTodayDay ? todayRef : null}
                className={`p-4 text-center rounded-lg cursor-pointer text-black text-sm relative ${
                  isTodayDay
                    ? "bg-blue-500 dark:tw-tw-bg-secondary text-white"
                    : ""
                } ${
                  isSameDay(day, startDate)
                    ? "tw-bg-secondary dark:bg-slate-900 text-white"
                    : isSameDay(day, endDate)
                    ? "tw-bg-secondary dark:bg-slate-900 text-white"
                    : startDate && endDate && day > startDate && day < endDate
                    ? "bg-orange-100 dark:bg-slate-600 dark:text-white"
                    : "dark:text-slate-100"
                } ${isDateDisabled ? "text-slate-400 cursor-no-drop" : ""}`}
                onClick={() => !isDateDisabled && handleDateClick(day)}
              >
                <div>{format(day, "d")}</div>
                {!isBefore(day, today) && prices[formattedDate] && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-center">
                    <span
                      className={`text-slate-900 dark:text-secondaryDark ${
                        isSameDay(day, startDate) || isSameDay(day, endDate)
                          ? "text-white font-bold"
                          : ""
                      }`}
                    >
                      {prices[formattedDate]}€
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
      {isMobile ? (
        <>
          <div className="relative">
            <div
              onClick={() => setIsModalOpen(true)}
              className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
            >
              {startDate && endDate
                ? `${format(startDate, "dd/MM/yyyy")} - ${format(
                    endDate,
                    "dd/MM/yyyy"
                  )}`
                : "Selecciona un rango de fechas"}
              <div className="absolute top-0 left-0 bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
                <FaCalendarAlt />
              </div>
            </div>
          </div>
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div
                ref={modalRef}
                className="bg-white dark:bg-slate-700 w-full h-full mx-auto relative"
              >
                <div className="flex justify-between items-center mb-4 bg-primary p-5">
                  <h2 className="text-xl font-bold text-white">
                    Selecciona fechas
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-xl text-white"
                  >
                    &times;
                  </button>
                </div>
                <button
                  onClick={resetSelection}
                  className="absolute top-5 right-10 bg-red-500 text-white py-1 px-3 rounded-lg"
                >
                  Borrar
                </button>
                <div
                  className="custom-scrollbar overflow-y-auto h-[calc(100%-85px)] p-4"
                  onScroll={(e) => {
                    const { scrollTop, scrollHeight, clientHeight } = e.target;
                    if (scrollHeight - scrollTop <= clientHeight + 100) {
                      loadMoreMonths();
                    }
                  }}
                >
                  {months.map((month) => renderMonth(month))}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="p-4 bg-gray-100 dark:bg-slate-700 rounded-lg shadow">
          <div className="flex justify-end items-center mb-4">
            <div className="flex space-x-4">
              <button
                onClick={scrollToToday}
                className="bg-blue-500 text-white py-1 px-3 rounded-lg"
              >
                Hoy
              </button>
              <button
                onClick={resetSelection}
                className="bg-red-500 text-white py-1 px-3 rounded-lg"
              >
                Borrar
              </button>
            </div>
          </div>
          <div
            className="custom-scrollbar overflow-y-auto h-[360px]"
            onScroll={(e) => {
              const { scrollTop, scrollHeight, clientHeight } = e.target;
              if (scrollHeight - scrollTop <= clientHeight + 100) {
                loadMoreMonths();
              }
            }}
          >
            {months.map((month) => renderMonth(month))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollCalendar;
