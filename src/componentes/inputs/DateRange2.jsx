import { useState } from "react";
import { DateInput } from "@mantine/dates";
import { FaCalendarAlt } from "react-icons/fa";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat"; // Import the customParseFormat plugin
import "dayjs/locale/es"; // Import the Spanish locale
import { DatesProvider } from "@mantine/dates";

// Extend dayjs with the custom parse format plugin
dayjs.extend(customParseFormat);

// Set the global locale to Spanish
dayjs.locale("es");

const DateRange = () => {
  const [value, setValue] = useState(null);

  // Custom format function

  return (
    <DatesProvider settings={{ locale: "es" }}>
      <div className="relative">
        <DateInput
          value={value}
          valueFormat="DD/MM/YYYY"
          onChange={setValue}
          minDate={new Date()}
          placeholder="Selecciona una fecha"
          styles={{
            input: {
              padding: "1.4rem",
              paddingLeft: "2.8rem",
              borderRadius: "8px",
            },
          }}
        />
        <div className="absolute top-0 pointer-events-none  bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
          <FaCalendarAlt />
        </div>
      </div>
    </DatesProvider>
  );
};

export default DateRange;
