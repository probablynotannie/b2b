import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import { FaCalendarAlt } from "react-icons/fa";
import { DatesProvider } from "@mantine/dates";
import "dayjs/locale/es"; 
function Fecha() {
  const [value, setValue] = useState(null);

  return (
    <DatesProvider settings={{ locale: "es" }}>
      <div className="relative">
        <DatePickerInput
          placeholder="Selecciona fecha"
          value={value}
          onChange={setValue}
          styles={(theme) => ({
            input: {
              padding: "0.57rem",
              borderColor: "lightgray",
              paddingLeft: "2.6rem",
              borderRadius: theme.radius.md,
            },
          })}
        />
        <div className="absolute top-0 pointer-events-none  bg-inputIcon text-white h-full rounded-tl-md rounded-bl-md flex items-center justify-center w-8 text-xl">
          <FaCalendarAlt />
        </div>
      </div>
    </DatesProvider>
  );
}

export default Fecha;
