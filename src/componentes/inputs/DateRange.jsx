// src/components/DateRange.jsx
import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS
import { format } from "date-fns";
import { es } from "date-fns/locale"; // Import Spanish locale
import { FaCalendarAlt } from "react-icons/fa";

const DateRange = () => {
  const [startDate, setStartDate] = useState(null); // Initialize to null
  const [endDate, setEndDate] = useState(null); // Initialize to null
  const [isOpen, setIsOpen] = useState(false); // State to manage the visibility of the DatePicker
  const touchStartRef = useRef(null); // Ref to store touch start position
  const isSwiping = useRef(false); // Ref to track if the user is swiping

  // Handle date selection
  const handleChange = (dates) => {
    if (!isSwiping.current) {
      console.log("aeafaef");
      // Only allow date selection if not swiping
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    }
  };

  // Toggle the date picker visibility
  const toggleDatePicker = () => {
    setIsOpen(!isOpen);
  };

  // Handle touch start
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX; // Store the initial touch position
    isSwiping.current = true; // Set swiping flag to true
  };

  // Handle touch end
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX; // Get the final touch position
    const touchStart = touchStartRef.current;

    // Calculate swipe direction
    if (touchStart - touchEnd > 50) {
      // Swiped left - move to next month
      setStartDate((prev) => {
        if (prev) {
          const nextMonth = new Date(prev);
          nextMonth.setMonth(prev.getMonth() + 1);
          nextMonth.setDate(1); // Set to the first day of the next month
          return nextMonth;
        }
        return prev; // Return previous if prev is null
      });

      setEndDate((prev) => {
        if (prev) {
          const nextMonth = new Date(prev);
          nextMonth.setMonth(prev.getMonth() + 1);
          nextMonth.setDate(0); // Set to the last day of the next month
          return nextMonth;
        }
        return prev; // Return previous if prev is null
      });
    } else if (touchEnd - touchStart > 50) {
      // Swiped right - move to previous month
      setStartDate((prev) => {
        if (prev) {
          const prevMonth = new Date(prev);
          prevMonth.setMonth(prev.getMonth() - 1);
          prevMonth.setDate(1); // Set to the first day of the previous month
          return prevMonth;
        }
        return prev; // Return previous if prev is null
      });

      setEndDate((prev) => {
        if (prev) {
          const prevMonth = new Date(prev);
          prevMonth.setMonth(prev.getMonth() - 1);
          prevMonth.setDate(0); // Set to the last day of the previous month
          return prevMonth;
        }
        return prev; // Return previous if prev is null
      });
    }

    // Reset the swiping state
    isSwiping.current = false;
  };
  const highlightWeekends = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6 ? "weekend-day" : ""; // Sunday (0) and Saturday (6)
  };

  return (
    <div>
      <div className="relative">
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
              : "Selecciona un rango de fechas" // Spanish placeholder
          }
          className="border border-gray-300 text-gray-500 text-sm rounded-lg p-2.5  pl-10 w-full cursor-pointer" // Add padding to the left for the icon
        />
        <div className="absolute top-0 pointer-events-none  bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
          <FaCalendarAlt />
        </div>
        {isOpen && (
          <div className="absolute z-50">
            <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <DatePicker
                selected={startDate}
                onChange={handleChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                dayClassName={highlightWeekends} // Apply red text to weekends
                locale={es}
                minDate={new Date()}
                className="custom-input"
                wrapperClassName="custom-wrapper"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateRange;
