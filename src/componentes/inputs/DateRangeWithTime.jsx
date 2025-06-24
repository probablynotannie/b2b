import { useState } from "react";
import { DateTimePicker } from "@mantine/dates";
import { FaCalendarAlt } from "react-icons/fa";
import { useController } from "react-hook-form";
import cesta from "../estructura/cesta/Zustand";
import parseFecha from "../../helpers/parseFechas";
const DateWithTime = ({ control, nameFecha, nameHora, placeholder }) => {
  const productos = cesta((state) => state.productos);
  const diasAntes = cesta((state) => state.diasAntes);
  const diasDespues = cesta((state) => state.diasDespues);
  const disabledDates = (date) => {
    const normalize = (d) =>
      new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const today = normalize(new Date());

    if (productos[0]?.fecha) {
      const fechaInicio = parseFecha(productos[0].fecha);
      const fechaFin = productos[0].fechaVuelta
        ? parseFecha(productos[0].fechaVuelta)
        : parseFecha(productos[0].fecha);
      const minDate = new Date(fechaInicio);
      minDate.setDate(fechaInicio.getDate() - diasAntes);
      const maxDate = new Date(fechaFin);
      maxDate.setDate(fechaFin.getDate() + diasDespues);
      const normalizedDate = normalize(date);
      return (
        normalizedDate < normalize(minDate) ||
        normalizedDate > normalize(maxDate)
      );
    } else {
      return normalize(date) < today;
    }
  };

  const { field: fieldFecha } = useController({
    name: nameFecha,
    control,
    defaultValue: new Date(),
  });

  const { field: fieldHora } = useController({
    name: nameHora,
    control,
    defaultValue: new Date().toLocaleTimeString("en-GB"),
  });

  const [arrivalDateTime, setArrivalDateTime] = useState(new Date());

  const handleDateTimeChange = (newDateTime) => {
    setArrivalDateTime(newDateTime);
    fieldFecha.onChange(newDateTime);
    fieldHora.onChange(getArrivalTime(newDateTime));
  };

  const getArrivalTime = (dateTime) => {
    return dateTime.toLocaleTimeString("en-GB");
  };
  return (
    <div className="tw-space-y-3 lg:tw-space-y-0 lg:tw-flex tw-gap-2">
      <div className="tw-relative tw-w-full">
        <DateTimePicker
          {...fieldFecha}
          excludeDate={disabledDates}
          onChange={handleDateTimeChange}
          value={arrivalDateTime}
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
              "tw-border tw-bg-white dark:tw-border-y-2 dark:tw-border-slate-700 dark:tw-bg-slate-700 dark:tw-text-slate-300 tw-text-xs 2xl:tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer",
          }}
        />
        <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-700 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
          <FaCalendarAlt />
        </div>
      </div>
    </div>
  );
};

export default DateWithTime;
