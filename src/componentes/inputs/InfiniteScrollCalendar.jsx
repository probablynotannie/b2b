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
import { es } from "date-fns/locale"; // Spanish locale

const InfiniteScrollCalendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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

  // Handle date selection for range
  const handleDateClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date < startDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
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
                startDate && endDate && isSameDay(day, startDate)
                  ? "bg-blue-500 text-white"
                  : startDate && endDate && isSameDay(day, endDate)
                  ? "bg-blue-500 text-white"
                  : startDate && day > startDate && day < endDate
                  ? "bg-blue-200"
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

  return (
    <div>
      <div onClick={openModal} className="bg-blue-500 text-white p-2 rounded">
        Open Calendar
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full h-4/5 max-w-md mx-auto rounded-lg p-4 overflow-auto relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Select Date Range</h2>
              <button onClick={closeModal} className="text-xl text-black">
                &times;
              </button>
            </div>

            {/* Scrollable calendar */}
            <div className="overflow-y-auto h-full" onScroll={handleScroll}>
              {months.map((month) => renderMonth(month))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollCalendar;
