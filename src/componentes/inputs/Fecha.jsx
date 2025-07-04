import { useEffect, useMemo } from "react";
import { DatePickerInput } from "@mantine/dates";
import { FaCalendarAlt } from "react-icons/fa";
import { DatesProvider } from "@mantine/dates";
import { Controller } from "react-hook-form";
import "dayjs/locale/es";
import InfiniteScrollCalendarSingle from "./movil/InfiniteScrollCalendarSingle";
import parseFecha from "../../helpers/parseFechas";
import cesta from "../estructura/cesta/Zustand";

function Fecha({
  fecha,
  name,
  setValue,
  edadSelector,
  control,
  required,
  deshabilitable,
}) {
  const productos = cesta((state) => state.productos);
  const diasAntes = cesta((state) => state.diasAntes);
  const diasDespues = cesta((state) => state.diasDespues);

  const normalize = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

  const disabledDates = (date) => {
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

  const firstAvailableDate = useMemo(() => {
    if (!deshabilitable) return null;
    for (let i = 0; i < 365; i++) {
      const candidate = new Date();
      candidate.setDate(candidate.getDate() + i);
      if (!disabledDates(candidate)) return candidate;
    }
    return null;
  }, [productos, diasAntes, diasDespues, deshabilitable]);

  useEffect(() => {
    if (!fecha && firstAvailableDate && deshabilitable) {
      setValue(name, firstAvailableDate, {
        shouldValidate: true,
        shouldTouch: true,
      });
    }
  }, [fecha, name, setValue, firstAvailableDate, deshabilitable]);

  const handleDateChange = (date) => {
    setValue(name, date ?? null, {
      shouldValidate: true,
      shouldTouch: true,
    });
  };

  return (
    <div>
      <div
        className={`${edadSelector === true ? "tw-hidden" : "md:tw-hidden"}`}
      >
        <InfiniteScrollCalendarSingle
          deshabilitable={deshabilitable}
          name={name}
          setValue={setValue}
        />
      </div>
      <div className={`${edadSelector !== true && "tw-hidden md:tw-block"}`}>
        <DatesProvider settings={{ locale: "es" }}>
          <Controller
            name={name}
            control={control}
            rules={required ? { required: "La fecha es obligatoria" } : {}}
            render={({ fieldState: { error } }) => (
              <>
                <div className="tw-relative">
                  <DatePickerInput
                    defaultDate={
                      deshabilitable && firstAvailableDate
                        ? firstAvailableDate
                        : undefined
                    }
                    excludeDate={deshabilitable === true ? disabledDates : null}
                    placeholder="Selecciona fecha"
                    value={fecha}
                    onChange={handleDateChange}
                    required={required === true}
                    classNames={{
                      input:
                        "tw-border tw-bg-white dark:tw-bg-slate-700 dark:tw-border-slate-600 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 dark:tw-text-slate-300 tw-text-sm tw-rounded-lg tw-h-[40px] tw-pl-10 tw-w-full tw-cursor-pointer",
                    }}
                    styles={(theme) => ({
                      input: {
                        padding: "0.62rem",
                        paddingLeft: "2.6rem",
                        borderRadius: theme.radius.md,
                      },
                    })}
                  />
                  <div className="tw-absolute tw-top-0 tw-pointer-events-none tw-bg-inputIcon dark:tw-bg-slate-800 dark:tw-border-slate-600 dark:tw-border-y-2 dark:tw-border-l-2 tw-text-white tw-h-[40px] tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
                    <FaCalendarAlt />
                  </div>
                </div>
                {error && (
                  <p className="tw-text-danger tw-text-sm">{error.message}</p>
                )}
              </>
            )}
          />
        </DatesProvider>
      </div>
    </div>
  );
}

export default Fecha;
