import { useState } from "react";
import { FaCity } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Buscador from "../Buscador";
import Movil from "./Movil";
import Escritorio from "./Escritorio";
function Buscador_Coches({ listado }) {
  const navigate = useNavigate();
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
          <Movil
            control={control}
            lugarEntrega={lugarEntrega}
            setLugarEntrega={setLugarEntrega}
            destinos={destinos}
            setValue={setValue}
          />
        }
        contenidoEscritorio={
          <Escritorio
            lugarEntrega={lugarEntrega}
            control={control}
            setValue={setValue}
            destinos={destinos}
            listado={listado}
          />
        }
      />
    </>
  );
}

export default Buscador_Coches;
