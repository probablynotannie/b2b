import { useState } from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";

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
                padding: "0.7rem",
                paddingLeft: "2.6rem",
                borderRadius: "8px",
              },
            }}
          />
          <MdCalendarMonth className="absolute top-2 left-2 text-gray-500 text-2xl" />
        </div>
      </DatesProvider>
    </div>
  );
}

export default Input_mes;
