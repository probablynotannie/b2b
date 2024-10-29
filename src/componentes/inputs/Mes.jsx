import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { DatesProvider, MonthPickerInput } from "@mantine/dates";
import "dayjs/locale/es"; // Import Spanish locale from dayjs

function InputMes() {
  const [valor, setValor] = useState(null);

  return (
    <div>
      <DatesProvider settings={{ locale: "es" }}>
        <div className="relative">
          <MonthPickerInput
            value={valor}
            placeholder="Mes"
            onChange={setValor}
            styles={{
              input: {
                padding: "0.6rem",
                paddingLeft: "2.6rem",
                borderRadius: "8px",
              },
            }}
          />
          <div className="absolute top-0 pointer-events-none bg-inputIcon text-white h-full rounded-tl-lg rounded-bl-lg flex items-center justify-center w-8 text-xl">
            <FaCalendarAlt />
          </div>
        </div>
      </DatesProvider>
    </div>
  );
}

export default InputMes;
