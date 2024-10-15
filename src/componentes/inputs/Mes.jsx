import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

import { DatesProvider, MonthPickerInput } from "@mantine/dates";

function Input_mes() {
  const [value, setValue] = useState(null);
  return (
    <div>
      <DatesProvider settings={{ locale: "es" }}>
        <div className="relative">
          <MonthPickerInput
            value={value}
            placeholder="Selecciona el mes"
            onChange={setValue}
            styles={{
              input: {
                padding: "0.6rem",
                paddingLeft: "2.6rem",
                borderRadius: "8px",
              },
            }}
          />
          <div className="absolute top-0 pointer-events-none  bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
            <FaCalendarAlt />
          </div>
        </div>
      </DatesProvider>
    </div>
  );
}

export default Input_mes;
