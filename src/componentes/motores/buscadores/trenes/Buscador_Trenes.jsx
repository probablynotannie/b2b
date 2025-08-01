import { useState } from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import Input_Select from "../../../inputs/Select";
import Input_Fecha from "../../../inputs/Fecha";
import Input_DateRange from "../../../inputs/DateRange";
import Input_Bonificacion from "../../../inputs/Pasajeros_Descuentos";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { GoArrowSwitch } from "react-icons/go";
import Movil from "./Movil";
import Escritorio from "./Escritorio";
import Buscador from "../Buscador";
function Buscador_Destinos({ listado }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viaje, setViaje] = useState("ida");
  const [fecha, setFecha] = useState();
  const handleviajeChange = (type) => {
    setViaje(type);
  };
  const onSubmit = (data) => {
    navigate("/listadoTrenes", {
      state: { datosForm: data },
    });
  };
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      adultos: 2,
      ninios: 0,
      ninioAges: [],
      descuentos: false,
      discapacidad: false,
      selectedDiscapacidad: { adultos: [], ninios: [] },
      selectedDescuentos: { adultos: [], ninios: [] },
    },
  });
  return (
    <Buscador
      submit={handleSubmit(onSubmit)}
      titulo={"Buscador de Trenes"}
      listado={listado}
      secundario={
        <div className="tw-grid tw-grid-cols-2 tw-gap-2 tw-mb-2">
          <div
            onClick={() => handleviajeChange("ida")}
            className={`tw-select-none  tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-rounded-lg tw-border tw-cursor-pointer tw-transition-all
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
          handleviajeChange={handleviajeChange}
          viaje={viaje}
          fecha={fecha}
          setValue={setValue}
          control={control}
          register={register}
          watch={watch}
        />
      }
      contenidoMovil={
        <Movil
          handleviajeChange={handleviajeChange}
          viaje={viaje}
          fecha={fecha}
          setValue={setValue}
          control={control}
          register={register}
          watch={watch}
        />
      }
    />
  );
}

export default Buscador_Destinos;
