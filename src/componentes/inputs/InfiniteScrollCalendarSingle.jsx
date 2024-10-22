import React, { useState, useCallback, useEffect } from "react";
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
import { es } from "date-fns/locale"; // Spanish locale

const InfiniteScrollCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [months, setMonths] = useState([startOfMonth(new Date())]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Initial load of multiple months (e.g., load 3 months at once)
  useEffect(() => {
    const initialMonths = [startOfMonth(new Date())];
    for (let i = 1; i < 3; i++) {
      initialMonths.push(addMonths(startOfMonth(new Date()), i));
    }
    setMonths(initialMonths); // Load 3 months at start
  }, []);

  // Load more months dynamically when scrolling
  const loadMoreMonths = useCallback(() => {
    const lastMonth = months[months.length - 1]; // Get the last visible month
    const newMonths = [];
    for (let i = 1; i <= 3; i++) {
      newMonths.push(addMonths(lastMonth, i));
    }
    setMonths((prevMonths) => [...prevMonths, ...newMonths]); // Append new months
  }, [months]);

  // Handle date selection
  const handleDateClick = (date) => {
    setSelectedDate(date);
    closeModal(); // Optionally close the modal after selecting a date
  };

  // Render days of the week
  const renderWeekDays = () => {
    const weekDays = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
    return (
      <div className="grid grid-cols-7 text-center font-bold">
        {weekDays.map((day) => (
          <div key={day} className="p-1 text-black">
            {day}
          </div>
        ))}
      </div>
    );
  };

  // Render the calendar for each month
  const renderMonth = (month) => {
    const daysInMonth = eachDayOfInterval({
      start: startOfMonth(month),
      end: endOfMonth(month),
    });

    return (
      <div key={month} className="mb-8">
        {/* Month name above weekdays */}
        <h3 className="text-lg font-bold text-center mb-2 text-secondary">
          {format(month, "MMMM yyyy", { locale: es })}
        </h3>
        {renderWeekDays()} {/* Render weekdays for each month */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: getDay(startOfMonth(month)) }, (_, i) => (
            <div key={`empty-${i}`} className="p-4"></div> // empty cells before first day
          ))}
          {daysInMonth.map((day) => (
            <div
              key={day}
              className={`p-2 text-center rounded-lg cursor-pointer text-black ${
                isSameDay(day, selectedDate) ? "bg-blue-500 text-white" : ""
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

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Load more months on scroll
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollHeight - scrollTop <= clientHeight + 100) {
      loadMoreMonths();
    }
  };

  // Format selected date for display
  const formatSelectedDate = () => {
    if (selectedDate) {
      return format(selectedDate, "d 'de' MMMM 'de' yyyy", { locale: es });
    }
    return "Selecciona una fecha";
  };

  return (
    <div>
      <div
        onClick={openModal}
        className="relative bg-slate-50 mt-2 border border-gray-300 text-gray-500 text-sm rounded-md p-2.5 pl-10 w-full cursor-pointer overflow-hidden flex items-center"
      >
        {formatSelectedDate()}
        <div className="absolute top-0 left-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
          <FaCalendarAlt />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end z-50">
          <div className="bg-white w-full h-[80%] max-w-md mx-auto rounded-t-lg p-4 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-black">
                Selecciona una fecha
              </h2>
              <button onClick={closeModal} className="text-xl text-black">
                &times;
              </button>
            </div>

            {/* Scrollable calendar */}
            <div
              className="overflow-y-auto h-[calc(100%-80px)]"
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
