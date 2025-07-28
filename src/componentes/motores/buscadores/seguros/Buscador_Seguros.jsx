import { useState } from "react";
import Input_Select from "../../../inputs/Selector";
import Input_dateRange from "../../../inputs/DateRange";
import Input_selectNum from "../../../inputs/SelectorNums";
import { FaGlobe } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaPerson } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import Movil from "./Movil";
import Escritorio from "./Escritorio";
import Buscador from "../Buscador";
function Buscador_Destinos() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const maxPasajeros = 10;
  const destinos = [
    {
      id: 0,
      texto: "España",
    },
    {
      id: 1,
      texto: "Portugal",
    },
    {
      id: 2,
      texto: "Europa y paises ribereños del mediterráneo",
    },
    {
      id: 3,
      texto: "Europa + Europa",
    },
    {
      id: 4,
      texto: "Resto del mundo",
    },
  ];
  const residentes = [
    {
      id: 0,
      texto: "España",
    },
    {
      id: 1,
      texto: "Portugal",
    },
    {
      id: 2,
      texto: "No residente",
    },
  ];
  const seguros = [
    {
      id: 0,
      texto: "Anulación (Vuelos, alojamientos,entradas,etc)",
    },
    {
      id: 1,
      texto: "Anulación Estancias",
    },
    {
      id: 2,
      texto: "Asitencia",
    },
    {
      id: 3,
      texto: "Asistencia + Anulación",
    },
    {
      id: 4,
      texto: "Asistencia + Anulación ampliada",
    },
    {
      id: 5,
      texto: "Asistencia + Anulación cruceros",
    },
    {
      id: 6,
      texto: "Asistencia + Anulación PREEXISENCIS",
    },
  ];
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    navigate("/seguro", {
      state: { data },
    });
  };

  return (
    <Buscador
      submit={handleSubmit(onSubmit)}
      titulo={"Buscador de seguros"}
      contenidoEscritorio={
        <Escritorio
          destinos={destinos}
          errors={errors}
          seguros={seguros}
          register={register}
          control={control}
          residentes={residentes}
          maxPasajeros={maxPasajeros}
        />
      }
      contenidoMovil={
        <Movil
          destinos={destinos}
          errors={errors}
          seguros={seguros}
          register={register}
          control={control}
          residentes={residentes}
          maxPasajeros={maxPasajeros}
        />
      }
    />
  );
}

export default Buscador_Destinos;
