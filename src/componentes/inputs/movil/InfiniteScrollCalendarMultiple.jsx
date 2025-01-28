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
      // Si la fecha seleccionada es antes de la fecha ya seleccionada, será nuevo dia de inicio
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
      <div className="grid grid-cols-7 text-center font-bold">
        {weekDays.map((day) => (
          <div key={day} className="p-1 text-black text-sm">
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
      <div key={month} className="mb-8">
        {/* Month name above weekdays */}aef
        <h3 className="text-lg font-bold text-center mb-2 text-secondary">
          {format(month, "MMMM yyyy", { locale: es })}
          {renderWeekDays()} {/* Dias de semana */}
        </h3>
        <div className="grid grid-cols-7 gap-1 mb-3">
          {Array.from({ length: getDay(startOfMonth(month)) }, (_, i) => (
            <div key={`empty-${i}`} className="p-4"></div> // Espacio blanco si no hay dias lun-mar...
          ))}
          {daysInMonth.map((day) => (
            <div
              key={day}
              className={`p-2 text-center rounded-lg cursor-pointer text-black text-sm ${
                isSameDay(day, startDate)
                  ? "tw-bg-secondary text-white" // Fecha inicio
                  : isSameDay(day, endDate)
                  ? "tw-bg-secondary text-white" // Fecha fin
                  : startDate && endDate && day > startDate && day < endDate
                  ? "bg-orange-100" // Fechas en medio
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

  // Cargas más meses
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
      <div className="relative">
        <div
          onClick={openModal}
          className="border bg-white dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-slate-600 dark:focus:border-slate-600 border-slate-300 text-slate-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
        >
          {formatDateRange()}

          <div className="absolute top-0 left-0 pointer-events-none dark:bg-slate-800 dark:border-slate-600 dark:border-y-2 dark:border-l-2 bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
            <FaCalendarAlt />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full h-full mx-auto  relative">
            <div className="flex justify-between items-center mb-4 bg-primary p-5 ">
              <h2 className="text-xl font-bold text-white">
                Selecciona el rango de fechas
              </h2>
              <button onClick={closeModal} className="text-xl text-white">
                &times;
              </button>
            </div>

            {/* Scrollable calendar */}
            <div
              className="overflow-y-auto h-[calc(100%-80px)] p-4"
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
