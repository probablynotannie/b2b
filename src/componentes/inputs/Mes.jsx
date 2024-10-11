import { useState } from "react";
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
          <div className="absolute top-0 pointer-events-none  bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-2xl">
            <MdCalendarMonth />
          </div>
        </div>
      </DatesProvider>
    </div>
  );
}

export default Input_mes;
