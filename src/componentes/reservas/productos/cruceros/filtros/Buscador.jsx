import { useState } from "react";
import Input_Destinos from "../../../../inputs/Destinos";
import Input_Puertos from "../../../../inputs/Puertos";
import Input_Navieras from "../../../../inputs/Navieras";
import Input_Mes from "../../../../inputs/Mes";
import Input_Dias from "../../../../inputs/SelectorDias";
import { FaSearch } from "react-icons/fa";
import datos_destinos from "../../../../motores/buscadores/cruceros/destinos.json";
import datos_puertos from "../../../../motores/buscadores/cruceros/puertos.json";
import datos_navieras from "../../../../motores/buscadores/cruceros/navieras.json";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function Buscador() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/listadocruceros", {
      state: { datosForm: data },
    });
  };
  const { handleSubmit, control } = useForm({
    defaultValues: {
      idZona: 0,
      idPuerto: 0,
      idNav: 0,
      fechSal: 0,
      duracion: 0,
    },
  });
  return (
    <>
      <button
        onClick={toggleModal}
        className="tw-relative tw-border-2 tw-shadow-xl dark:tw-border-slate-700 tw-bg-white lg:tw-hidden dark:tw-bg-slate-800 dark:tw-placeholder-slate-400 dark:tw-text-white dark:tw-focus:ring-slate-600 dark:tw-focus:border-slate-600 tw-border-slate-300 tw-text-slate-500 tw-text-sm tw-rounded-lg tw-p-3 tw-pl-10 tw-w-full tw-cursor-pointer"
      >
        Cambiar busqueda
        <span className="tw-absolute dark:tw-bg-slate-800 dark:tw-border-slate-800 dark:tw-border-y-2 dark:tw-border-l-2 tw-top-0 tw-left-0 tw-pointer-events-none tw-bg-inputIcon tw-text-white tw-h-full tw-rounded-tl-lg tw-rounded-bl-lg tw-flex tw-items-center tw-justify-center tw-w-8 tw-text-xl">
          <FaSearch />
        </span>
      </button>
      <div
        className={`tw-fixed tw-inset-0 tw-z-50 tw-flex tw-items-center tw-justify-center tw-bg-black tw-bg-opacity-50 tw-transition-opacity tw-duration-300 ${
          isModalOpen
            ? "tw-z-50 tw-opacity-100"
            : "tw-opacity-0 tw-pointer-events-none"
        }`}
      >
        <div
          className="tw-bg-white tw-w-full tw-h-full tw-md:w-full tw-md:h-full tw-rounded-none tw-md:rounded-xl dark:tw-bg-slate-800"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="tw-w-full tw-h-full tw-mx-auto tw-relative">
              <div className="tw-flex tw-justify-between tw-items-center tw-mb-4 tw-bg-primary dark:tw-bg-slate-900 tw-p-5">
                <h2 className="tw-text-xl tw-font-bold tw-text-white">
                  Buscador
                </h2>
                <button
                  onClick={toggleModal}
                  className="tw-text-xl tw-text-white"
                >
                  &times;
                </button>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="tw-grid tw-grid-cols-12 tw-gap-3 tw-p-5"
          >
            <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4">
              <Input_Destinos
                datos={datos_destinos}
                name="idZona"
                control={control}
                placeholder="Selecciona un destino"
              />
            </div>
            <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4">
              <Input_Puertos
                datos={datos_puertos}
                name="idPuerto"
                control={control}
                placeholder="Selecciona un puerto"
              />
            </div>
            <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4">
              <Input_Navieras
                datos={datos_navieras}
                name="idNav"
                control={control}
                placeholder="Selecciona una naviera"
              />
            </div>
            <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4">
              <Input_Mes control={control} name="fechSal" />
            </div>
            <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4">
              <Input_Dias control={control} name="duracion" />
            </div>

            <div className="tw-flex lg:tw-justify-center tw-justify-end lg:tw-col-span-1 tw-col-span-12 tw-md:col-span-6">
              <button className="tw-bg-primary dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow">
                <FaSearch className="tw-text-white tw-text-xl" />
              </button>
            </div>
          </form>
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-col-span-12">
            <button
              className="tw-text-2xl tw-rounded-full tw-w-[50px] tw-h-[50px] tw-border-2 tw-mt-10 tw-text-slate-300 tw-border-slate-300 dark:tw-border-slate-600"
              onClick={toggleModal}
            >
              X
            </button>
            <span className="tw-text-slate-400">Cerrar</span>
          </div>
        </div>
      </div>

      <div className="tw-hidden lg:tw-block tw-border-2 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-inner tw-min-h-28 tw-p-5 tw-bg-white dark:tw-bg-slate-800">
        <h2 className="tw-mb-4 tw-font-bold tw-text-xl dark:tw-text-secondary">
          Buscador
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="tw-grid tw-grid-cols-12 tw-gap-3"
        >
          <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4 xl:tw-col-span-2">
            <Input_Destinos
              required={true}
              datos={datos_destinos}
              name="idZona"
              control={control}
              placeholder="Selecciona un destino"
            />
          </div>
          <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4 xl:tw-col-span-2">
            <Input_Puertos
              datos={datos_puertos}
              name="idPuerto"
              control={control}
              placeholder="Selecciona un puerto"
            />
          </div>
          <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4 xl:tw-col-span-2">
            <Input_Navieras
              datos={datos_navieras}
              name="idNav"
              control={control}
              placeholder="Selecciona una naviera"
            />
          </div>
          <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4 xl:tw-col-span-2">
            <Input_Mes control={control} name="fechSal" />
          </div>
          <div className="tw-col-span-12 tw-md:col-span-6 lg:tw-col-span-4 xl:tw-col-span-2">
            <Input_Dias control={control} name="duracion" />
          </div>
          <div className="tw-flex lg:tw-justify-end tw-justify-end lg:tw-col-span-12 xl:tw-col-span-2 tw-2xl:col-span-1 tw-col-span-12 tw-md:col-span-6">
            <button className="tw-bg-primary dark:tw-bg-slate-900 tw-flex tw-justify-center tw-items-center tw-h-full tw-p-3 tw-px-10 tw-rounded-lg tw-shadow">
              <FaSearch className="tw-text-white tw-text-xl" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Buscador;
