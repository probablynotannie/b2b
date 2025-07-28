import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import datos_destinos from "./destinos.json";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GoArrowSwitch } from "react-icons/go";
import Movil from "./Movil";
import Escritorio from "./Escritorio";
import Buscador from "../Buscador";
function Buscador_Destinos({ listado }) {
  const navigate = useNavigate();
  const [viaje, setViaje] = useState("ida");
  let fecha;
  const handleviajeChange = (type) => {
    if (type === "ida") {
      setValue("tipo", 0);
    } else {
      setValue("tipo", 1);
    }
    setViaje(type);
  };
  const onSubmit = (data) => {
    navigate("/listadoFerris", {
      state: { datosForm: data },
    });
  };
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tipo: 0,
      fecha: 0,
      vehiculos: 0,
      tipoVehiculo: 0,
      remolque: 0,
      longitud: 0,
      altura: 0,
      longitudRemolque: 0,
      alturaRemolque: 0,
    },
  });

  return (
    <Buscador
      submit={handleSubmit(onSubmit)}
      titulo={"Buscador de Ferris"}
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
          listado={listado}
          control={control}
          setValue={setValue}
          fecha={fecha}
          errors={errors}
          viaje={viaje}
          origenes={datos_destinos}
          destinos={datos_destinos}
        />
      }
      contenidoMovil={
        <Movil
          handleviajeChange={handleviajeChange}
          control={control}
          setValue={setValue}
          fecha={fecha}
          errors={errors}
          viaje={viaje}
          origenes={datos_destinos}
          destinos={datos_destinos}
        />
      }
    />
  );
}

export default Buscador_Destinos;
