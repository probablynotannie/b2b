import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { FaCalendarAlt } from "react-icons/fa";
import { Modal } from "flowbite-react"; // Importing Flowbite modal
import InfiniteScrollCalendar from "./InfiniteScrollCalendar";
const DateRange = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const isSwiping = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  // Utility function to check if the device is mobile
  const checkMobile = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  };

  useEffect(() => {
    setIsMobile(checkMobile());
  }, []);

  const handleChange = (dates) => {
    if (!isSwiping.current) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
      if (start && end) {
        setIsOpen(false);
      }
    }
  };

  const toggleDatePicker = () => {
    setIsOpen(!isOpen);
  };

  const highlightWeekends = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6 ? "weekend-day" : "";
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
              : "Selecciona un rango de fechas"
          }
          className="border border-gray-300 text-gray-500 text-sm rounded-lg p-2.5 pl-10 w-full cursor-pointer"
        />
        <div className="absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
          <FaCalendarAlt />
        </div>
      </div>
      <InfiniteScrollCalendar />

      {isOpen && (
        <div className="absolute z-50">
          efefef
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            dayClassName={highlightWeekends}
            locale={es}
            minDate={new Date()}
            className="custom-input"
            wrapperClassName="custom-wrapper"
          />
        </div>
      )}
    </div>
  );
};

export default DateRange;
