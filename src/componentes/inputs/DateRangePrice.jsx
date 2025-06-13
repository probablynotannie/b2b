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

  const loadMoreMonths = useCallback(() => {
    const lastMonth = months[months.length - 1];
    const newMonths = [];
    for (let i = 1; i <= 3; i++) {
      newMonths.push(addMonths(lastMonth, i));
    }
    setMonths((prevMonths) => [...prevMonths, ...newMonths]);
  }, [months]);

  const [tipo, setTipo] = useState();
  const handleDateClick = (date, tipo) => {
    setTipo(tipo);
    const formattedDate = format(date, "yyyy-MM-dd");
    const priceData = prices[formattedDate];
    if (!priceData) return;
    setStartDate(date);
    const newEndDate = addDays(date, TRIP_DAYS - 1);
    setEndDate(newEndDate);
  };
  useEffect(() => {
    if (startDate && endDate) {
      const startDateFormatted = format(startDate, "yyyy-MM-dd");
      const startDatePrice = prices[startDateFormatted]?.price || null;

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
  const colores = {
    1: "pink",
    2: "purple",
    3: "orange",
    4: "green",
  };
  const tipoPrecios = [
    {
      id: 1,
      texto: "Raro",
    },
    {
      id: 2,
      texto: "Favorito",
    },
    {
      id: 3,
      texto: "No tanto especial",
    },
    {
      id: 4,
      texto: "Especial",
    },
  ];
  const renderMonth = (month) => {
    const daysInMonth = eachDayOfInterval({
      start: startOfMonth(month),
      end: endOfMonth(month),
    });
    return (
      <div key={month} className="tw-mb-8 tw-relative">
        <div className="md:tw-sticky tw-top-0 tw-bg-gray-100 dark:tw-bg-slate-700 tw-z-10 tw-py-2">
          <h3 className="tw-text-lg tw-font-bold tw-text-center tw-text-secondary">
            {format(month, "MMMM yyyy", { locale: es })}
          </h3>
        </div>
        {renderWeekDays()}
        <div className="tw-grid tw-grid-cols-7 tw-gap-1 tw-mb-3">
          {Array.from({ length: getDay(startOfMonth(month)) }, (_, i) => (
            <div key={`empty-${i}`} className="tw-p-4"></div>
          ))}
          {daysInMonth.map((day) => {
            const formattedDate = format(day, "yyyy-MM-dd");
            const priceData = prices[formattedDate];
            const price = priceData ? priceData.price : null;
            const isDateDisabled = !priceData || isBefore(day, today);
            const isTodayDay = isToday(day);
            return (
              <div
                key={day}
                ref={isTodayDay ? todayRef : null}
                className={`tw-p-4 tw-text-center tw-rounded-lg tw-cursor-pointer tw-text-black tw-text-sm tw-relative ${
                  isTodayDay
                    ? "tw-bg-blue-500 dark:tw-bg-secondaryDark tw-text-white"
                    : ""
                } ${
                  isSameDay(day, startDate)
                    ? `${
                        tipo
                          ? `tw-bg-${colores[tipo]}-500`
                          : "tw-bg-secondary dark:tw-bg-slate-900"
                      }  tw-text-white`
                    : isSameDay(day, endDate)
                    ? `${
                        tipo
                          ? `tw-bg-${colores[tipo]}-500`
                          : "tw-bg-secondary dark:tw-bg-slate-900"
                      }  tw-text-white`
                    : startDate && endDate && day > startDate && day < endDate
                    ? `${
                        tipo
                          ? `tw-bg-${colores[tipo]}-300`
                          : "tw-bg-orange-100 dark:tw-bg-slate-600"
                      }  tw-text-white`
                    : "dark:tw-text-slate-100"
                } ${
                  isDateDisabled
                    ? "tw-text-slate-400  tw-cursor-no-drop"
                    : "tw-smooth hover:tw-bg-slate-700 hover:tw-text-white"
                }`}
                onClick={() =>
                  !isDateDisabled && handleDateClick(day, priceData.type)
                }
              >
                <div>
                  {format(day, "d")}
                  {priceData?.type && (
                    <div
                      className={`tw-w-1.5 tw-h-1.5 tw-rounded-full tw-absolute tw-top-3 tw-animate-pulse
                       tw-bg-${colores[priceData?.type]}-500
                      }`}
                    ></div>
                  )}
                </div>
                {!isBefore(day, today) && priceData && (
                  <div className="tw-absolute tw-bottom-1 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-text-xs tw-text-center">
                    <span
                      className={` ${
                        priceData?.type &&
                        `tw-text-${
                          colores[priceData.type]
                        }-500 tw-font-bold tw-text-md`
                      }  ${
                        isSameDay(day, startDate) || isSameDay(day, endDate)
                          ? "tw-text-white tw-font-bold dark:tw-text-white"
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

  const resetSelection = () => {
    setStartDate(null);
    setEndDate(null);
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
          <div className="tw-relative">
            <div
              onClick={() => setIsModalOpen(true)}
              className="tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:placeholder-slate-400 dark:tw-text-white tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer"
            >
              {startDate && endDate
                ? `${format(startDate, "dd/MM/yyyy")} - ${format(
                    endDate,
                    "dd/MM/yyyy"
                  )}`
                : "Selecciona un rango de fechas"}
              <div className="tw-absolute tw-top-0 tw-left-0 tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                <FaCalendarAlt />
              </div>
            </div>
          </div>
          {isModalOpen && (
            <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-justify-center tw-items-center tw-z-50">
              <div
                ref={modalRef}
                className="tw-bg-white dark:tw-bg-slate-700 tw-w-full tw-h-full tw-mx-auto tw-relative"
              >
                <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-slate-800 tw-p-5">
                  <h2 className="tw-text-xl tw-font-bold tw-text-white">
                    Selecciona fechas
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="tw-text-xl tw-text-white"
                  >
                    &times;
                  </button>
                </div>
                <button
                  onClick={resetSelection}
                  className="tw-absolute tw-top-5 tw-right-10 tw-bg-red-500 tw-text-white tw-py-1 tw-px-3 tw-rounded-lg"
                >
                  Borrar
                </button>
                <div
                  className="custom-scrollbar tw-overflow-y-auto tw-h-full tw-p-4"
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
        <>
          <h1 className="tw-font-semibold dark:tw-text-white tw-text-2xl">
            Selecciona el rango de fechas
          </h1>
          <div className="tw-flex tw-flex-wrap tw-gap-2">
            {tipoPrecios.map((tipo) => (
              <div
                className="tw-flex tw-gap-1 tw-items-center tw-text-slate-600 dark:tw-text-slate-300 tw-text-sm"
                key={tipo.id}
              >
                <div
                  className={`tw-w-[7px] tw-h-[7px] tw-rounded-full tw-bg-${
                    colores[tipo.id]
                  }-500`}
                ></div>
                <span> {tipo.texto}</span>
              </div>
            ))}
          </div>
          <div className="tw-p-4 tw-bg-gray-100 dark:tw-bg-slate-700 tw-rounded-lg tw-shadow">
            <div className="tw-flex tw-justify-end tw-items-center tw-mb-4">
              <div className="tw-flex tw-space-x-4">
                <button
                  onClick={scrollToToday}
                  className="tw-bg-blue-500 tw-text-white tw-py-1 tw-px-3 tw-rounded-lg"
                >
                  Hoy
                </button>
                <button
                  onClick={resetSelection}
                  className="tw-bg-red-500 tw-text-white tw-py-1 tw-px-3 tw-rounded-lg"
                >
                  Borrar
                </button>
              </div>
            </div>
            <div
              className="custom-scrollbar tw-overflow-y-auto tw-h-[400px]"
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
        </>
      )}
    </div>
  );
};

export default InfiniteScrollCalendar;
