import { useState } from "react";
import { DateTimePicker } from "@mantine/dates";
import { FaCalendarAlt } from "react-icons/fa";

const DateWithTime = ({ setHora, setDate, placeholder }) => {
  const [arrivalDateTime, setArrivalDateTime] = useState(new Date());
  const handleDateTimeChange = (newDateTime) => {
    setArrivalDateTime(newDateTime);
    setHora(getArrivalTime());
    setDate(newDateTime);
  };

  const getArrivalTime = () => {
    return arrivalDateTime.toLocaleTimeString("en-GB");
  };

  return (
    <div className="tw-space-y-3 lg:tw-space-y-0 lg:tw-flex tw-gap-2">
      <div className="tw-relative tw-w-full">
        <DateTimePicker
          onChange={handleDateTimeChange}
          placeholder={placeholder}
          withTime
          clearable
          minDate={new Date()}
          ampm={false}
          timeInputProps={{ type: "select" }}
          styles={{
            input: {
              paddingLeft: "2.5rem",
              borderRadius: "0.5rem",
            },
            day: {
              backgroundColor: "transparent",
              color: "inherit",
            },
            daySelected: {
              backgroundColor: "red",
              color: "white",
            },
            daySelectedHovered: {
              backgroundColor: "green",
              color: "yellow",
            },
          }}
          classNames={{
            input:
              "tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-700 dark:tw-text-slate-300 tw-text-sm tw-rounded-lg tw-p-2.5 tw-pl-10 tw-w-full tw-cursor-pointer",
          }}
        />
        <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
          <FaCalendarAlt />
        </div>
      </div>
    </div>
  );
};

export default DateWithTime;
