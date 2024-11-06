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

const InfiniteScrollCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [months, setMonths] = useState([startOfMonth(new Date())]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //Cargas meses iniciales
  useEffect(() => {
    const initialMonths = [startOfMonth(new Date())];
    for (let i = 1; i < 3; i++) {
      initialMonths.push(addMonths(startOfMonth(new Date()), i));
    }
    setMonths(initialMonths);
  }, []);

  // Cargas meses en scroll
  const loadMoreMonths = useCallback(() => {
    const lastMonth = months[months.length - 1]; // El ultimo mes visible
    const newMonths = [];
    for (let i = 1; i <= 3; i++) {
      newMonths.push(addMonths(lastMonth, i));
    }
    setMonths((prevMonths) => [...prevMonths, ...newMonths]); // Nuevos meses
  }, [months]);

  // Handle date selection
  const handleDateClick = (date) => {
    setSelectedDate(date);
    closeModal(); // Cerrar al seleccionar
  };

  // Renderizar dias de mes
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

  // Renderizar calendario por cada mes
  const renderMonth = (month) => {
    const daysInMonth = eachDayOfInterval({
      start: startOfMonth(month),
      end: endOfMonth(month),
    });

    return (
      <div key={month} className="mb-8">
        {/* Nombre de mes */}
        <h3 className="text-lg font-bold text-center mb-2 text-secondary">
          {format(month, "MMMM yyyy", { locale: es })}
        </h3>
        {renderWeekDays()} {/* Renderizar las semanas por mes  */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: getDay(startOfMonth(month)) }, (_, i) => (
            <div key={`empty-${i}`} className="p-4"></div> // Div vacio para primeros dias
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Cargas mas meses
  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollHeight - scrollTop <= clientHeight + 100) {
      loadMoreMonths();
    }
  };

  // Froamtear fecha
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
        className="relative bg-slate-50  text-gray-500 text-sm rounded-md p-2.5 pl-10 w-full cursor-pointer overflow-hidden flex items-center"
      >
        {formatSelectedDate()}
        <div className="absolute top-0 left-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
          <FaCalendarAlt />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full h-full mx-auto  relative">
            <div className="flex justify-between items-center mb-4 bg-primary  p-5 ">
              <h2 className="text-xl font-bold text-white">
                Selecciona el rango de fechas
              </h2>
              <button onClick={closeModal} className="text-xl text-white">
                &times;
                
              </button>
            </div>
            {/* Scroll de calendario */}
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
