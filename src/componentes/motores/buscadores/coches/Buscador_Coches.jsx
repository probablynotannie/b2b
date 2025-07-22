import { useState } from "react";
import { FaCity, FaSearch } from "react-icons/fa";
import Input_Destinos from "../../../inputs/Buscador";
import Input_DateRange from "../../../inputs/DateRangeWithTime";
import Input_Edad from "../../../inputs/Edad";
import Input_DateRangeMobile from "../../../inputs/DateRange";
import Input_Hora from "../../../inputs/Hora";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Buscador from "../Buscados";
function Buscador_Coches({ listado }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lugarEntrega, setLugarEntrega] = useState(true);
  const destinos = [
    { id: 0, type: "Destino", name: "MADRID Centro", destino: "Madrid" },
    { id: 1, type: "Destino", name: "MADRID Afueras", destino: "Madrid" },
    { id: 2, type: "Destino", name: "BARCELONA", destino: "Madrid" },
    { id: 3, type: "Destino", name: "SEVILLA", destino: "Sevilla" },
    {
      id: 4,
      type: "Destino",
      name: "MADRID - CAPE GIRARDEAU",
      destino: "Madrid",
    },
    { id: 5, type: "Hotel", name: "Hotel Barcelona", destino: "Barcelona" },
    { id: 6, type: "Hotel", name: "Hotel Madrid", destino: "Madrid" },
    { id: 7, type: "Hotel", name: "Hotel Sevilla", destino: "Sevilla" },
  ];
  const { setValue, control, handleSubmit } = useForm({
    defaultValues: {
      edadConductor: 2,
      horaRecogida: "12:00",
      horaDevolucion: "12:00",
      origen: 0,
      destino: 0,
      startDate: 0,
      endDate: 0,
    },
  });
  const onSubmit = (data) => {
    navigate("/listadoCoches", {
      state: { data },
    });
  };
  return (
    <>
      <Buscador
        listado={listado}
        titulo={"Buscador de coche"}
        submit={handleSubmit(onSubmit)}
        secundario={
          <div className="tw-flex tw-items-center tw-gap-2 tw-mt-3">
            <input
              id="ciudadEntrega"
              type="checkbox"
              checked={lugarEntrega}
              onChange={(e) => setLugarEntrega(e.target.checked)}
              className="tw-hidden peer"
            />
            <label
              htmlFor="ciudadEntrega"
              className={`tw-select-none tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all ${
                lugarEntrega === true
                  ? "tw-bg-pink-100 dark:tw-bg-pink-900  tw-border-pink-500 tw-text-pink-700 dark:tw-text-pink-300"
                  : "tw-bg-slate-200 dark:tw-bg-slate-800 tw-border-slate-300 dark:tw-border-slate-600 tw-text-slate-500"
              }`}
            >
              <FaCity />
              Entrega en la misma ciudad
            </label>
          </div>
        }
        contenidoMovil={
          <>
            <div className="tw-flex tw-items-center tw-col-span-1 tw-gap-2">
              <input
                id="ciudadEntrega"
                type="checkbox"
                checked={lugarEntrega}
                onChange={(e) => setLugarEntrega(e.target.checked)}
                className="tw-hidden peer"
              />
              <label
                htmlFor="ciudadEntrega"
                className={`tw-select-none tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all ${
                  lugarEntrega === true
                    ? "tw-bg-pink-100 dark:tw-bg-pink-900  tw-border-pink-500 tw-text-pink-700 dark:tw-text-pink-300"
                    : "tw-bg-slate-200 dark:tw-bg-slate-800 tw-border-slate-300 dark:tw-border-slate-600 tw-text-slate-500"
                }`}
              >
                <FaCity />
                Entrega en la misma ciudad
              </label>
            </div>
            <Input_Destinos
              required={true}
              control={control}
              name={"origen"}
              setValue={setValue}
              placeholder={"Origen"}
              destinos={destinos}
            />

            {lugarEntrega === false && (
              <Input_Destinos
                required={true}
                control={control}
                name={"destino"}
                setValue={setValue}
                placeholder={"Destino"}
                destinos={destinos}
              />
            )}
            <Input_DateRangeMobile
              control={control}
              nameStartDate="startDate"
              nameEndDate="endDate"
              placeholder="Selecciona un rango de fechas"
            />
            <Input_Hora
              control={control}
              setValue={setValue}
              name={"horaRecogida"}
              defaultValue="12:00"
            />
            <Input_Hora
              control={control}
              setValue={setValue}
              name={"horaDevolucion"}
              defaultValue="12:00"
            />
            <Input_Edad
              control={control}
              name="edadConductor"
              edadMinima={18}
              edadMaxima={100}
            />
          </>
        }
        contenidoEscritorio={
          <>
            <div
              className={
                lugarEntrega === true && listado === true
                  ? "tw-col-span-12 lg:tw-col-span-12 xl:tw-col-span-3 2xl:tw-col-span-4"
                  : lugarEntrega === false
                  ? "tw-col-span-6 lg:tw-col-span-6 xl:tw-col-span-3 2xl:tw-col-span-3"
                  : "tw-col-span-12 lg:tw-col-span-12 xl:tw-col-span-4 2xl:tw-col-span-4"
              }
            >
              <Input_Destinos
                required={true}
                control={control}
                name={"origen"}
                setValue={setValue}
                placeholder={"Origen"}
                destinos={destinos}
              />
            </div>
            {lugarEntrega === false && (
              <div
                className={`${
                  lugarEntrega === false
                    ? "tw-col-span-6 xl:tw-col-span-2 2xl:tw-col-span-3"
                    : "tw-col-span-2"
                }`}
              >
                <Input_Destinos
                  required={true}
                  control={control}
                  name={"destino"}
                  setValue={setValue}
                  placeholder={"Destino"}
                  destinos={destinos}
                />
              </div>
            )}
            <div
              className={`tw-col-span-4 ${
                lugarEntrega === false ? "xl:tw-col-span-2" : "xl:tw-col-span-3"
              } `}
            >
              <Input_DateRange
                control={control}
                nameFecha="startDate"
                nameHora="horaRecogida"
                placeholder="Selecciona una fecha y hora"
              />
            </div>
            <div
              className={`tw-col-span-4 ${
                lugarEntrega === false ? "xl:tw-col-span-2" : "xl:tw-col-span-3"
              } `}
            >
              <Input_DateRange
                control={control}
                nameFecha="endDate"
                nameHora="horaDevolucion"
                placeholder="Selecciona una fecha y hora"
              />
            </div>
            <div
              className={`${
                listado === true
                  ? "tw-col-span-3 lg:tw-col-span-2 xl:tw-col-span-2 2xl:tw-col-span-1"
                  : "tw-col-span-4 xl:tw-col-span-2"
              }`}
            >
              <Input_Edad
                control={control}
                name="edadConductor"
                edadMinima={18}
                edadMaxima={100}
              />
            </div>
          </>
        }
      />
    </>
  );
}

export default Buscador_Coches;
