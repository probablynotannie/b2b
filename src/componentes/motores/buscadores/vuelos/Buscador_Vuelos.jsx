import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GoArrowSwitch } from "react-icons/go";
import Buscador from "../Buscador";
import Escritorio from "./Escritorio";
import Movil from "./Movil";
function Buscador_Cruceros({ listado }) {
  const navigate = useNavigate();
  const [fecha, setFecha] = useState();

  const [viaje, setViaje] = useState("ida");
  const handleviajeChange = (type) => {
    setViaje(type);
  };
  const destinos = [
    { id: 0, type: 2, name: "Aeródromo Balmaceda", destino: "Balmaceda" },
    { id: 1, type: 2, name: "El Prat", destino: "Barcelona" },
    { id: 2, type: 2, name: "BARCELONA", destino: "Madrid" },
    { id: 3, type: 2, name: "SEVILLA", destino: "Sevilla" },
    { id: 6, type: 2, name: "Hotel Madrid", destino: "Madrid" },
    { id: 7, type: 2, name: "Hotel Sevilla", destino: "Sevilla" },
  ];

  const {
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      adulto: 2,
    },
  });

  const onSubmit = (data) => {
    navigate("/listadovuelos", {
      state: { data },
    });
  };
  return (
    <Buscador
      submit={handleSubmit(onSubmit)}
      titulo={"Buscador de Vuelos"}
      listado={listado}
      secundario={
        <div className="tw-flex tw-gap-2">
          <div
            onClick={() => handleviajeChange("ida")}
            className={`tw-select-none tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all
                ${
                  viaje === "ida"
                    ? "tw-bg-pink-100 dark:tw-bg-pink-900  tw-border-pink-500 tw-text-pink-700 dark:tw-text-pink-300"
                    : "tw-bg-slate-100 dark:tw-bg-slate-900 tw-border-slate-300 dark:tw-border-slate-600 tw-text-slate-500 dark:tw-text-slate-400"
                }`}
          >
            <FaArrowRight className="tw-text-pink-700 dark:tw-text-pink-500" />
            Solo ida
          </div>
          <div
            onClick={() => handleviajeChange("ida_vuelta")}
            className={`tw-select-none tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all
                ${
                  viaje === "ida_vuelta"
                    ? "tw-bg-blue-100 dark:tw-bg-blue-900 tw-border-blue-500 tw-text-blue-700 dark:tw-text-blue-300"
                    : "tw-bg-slate-100 dark:tw-bg-slate-900 tw-border-slate-300 dark:tw-border-slate-600 tw-text-slate-500 dark:tw-text-slate-400"
                }`}
          >
            <GoArrowSwitch className="tw-text-blue-700 dark:tw-text-blue-500" />
            Ida y vuelta
          </div>
        </div>
      }
      contenidoEscritorio={
        <Escritorio
          control={control}
          setValue={setValue}
          destinos={destinos}
          fecha={fecha}
          viaje={viaje}
          listado={listado}
        />
      }
      contenidoMovil={
        <>
          <Movil
            control={control}
            setValue={setValue}
            destinos={destinos}
            fecha={fecha}
            viaje={viaje}
          />
        </>
      }
    />
  );
}

export default Buscador_Cruceros;
