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
          className="border border-gray-300 text-gray-500 text-sm rounded-lg p-3  pl-10 w-full cursor-pointer" // Add padding to the left for the icon
        />
        <FaCalendarAlt className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />{" "}
        {/* Icon for the left */}
        {isOpen && (
          <div className="absolute z-50">
            <div
              onTouchStart={handleTouchStart} // Add touch start handler
              onTouchEnd={handleTouchEnd} // Add touch end handler
            >
              <DatePicker
              
                selected={startDate} // Pass current start date
                onChange={handleChange} // Handle date changes
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                locale={es} // Set the locale to Spanish
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateRange;
