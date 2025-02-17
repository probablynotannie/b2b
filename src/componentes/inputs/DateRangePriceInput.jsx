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

  const modalRef = useRef(null); // Create a reference for the modal container

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
                className={`p-4 text-center rounded-lg cursor-pointer text-black text-sm relative ${
                  isTodayDay
                    ? "bg-blue-500 dark:tw-tw-bg-secondary text-white"
                    : ""
                } ${
                  isSameDay(day, startDate)
                    ? "tw-bg-secondary dark:bg-slate-900 text-white "
                    : isSameDay(day, endDate)
                    ? "tw-bg-secondary dark:bg-slate-900 text-white"
                    : startDate && endDate && day > startDate && day < endDate
                    ? "bg-orange-100 dark:bg-slate-600 dark:text-white"
                    : "dark:text-slate-100 "
                } ${isDateDisabled ? "text-slate-400  cursor-no-drop" : ""}`}
                onClick={() => !isDateDisabled && handleDateClick(day)}
              >
                <div>{format(day, "d")}</div>
                {price && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-center">
                    <span
                      className={`text-slate-900 dark:tw-text-secondary ${
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
      <div className="relative">
        <div
          onClick={openModal}
          className="border bg-white  dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
        >
          {formatDateRange()}
          <div className="absolute top-0 left-0 pointer-events-none dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 tw-bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
            <FaCalendarAlt />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={modalRef} // Attach the ref to the modal container
            className="bg-white dark:bg-slate-700 w-full md:w-[90vw] md:h-[90vh] lg:w-[60vw] lg:h-[90vh] xl:w-[60vw] xl:h-[90vh] h-full mx-auto relative"
          >
            <div className="flex justify-between items-center mb-4 bg-primary p-5">
              <h2 className="text-xl font-bold text-white">
                Selecciona fechas
              </h2>
              <button onClick={closeModal} className="text-xl text-white">
                &times;
              </button>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetSelection}
              className="absolute top-5 right-10 bg-red-500 text-white py-1 px-3 rounded-lg"
            >
              Borrar
            </button>
            <div
              className="custom-scrollbar overflow-y-auto h-[calc(100%-85px)] p-4"
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
